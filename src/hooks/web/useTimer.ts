import { useIntervalFn, useTimeoutFn } from '@vueuse/core'
import { onActivated, onBeforeUnmount, onDeactivated, onMounted, Ref, ref } from 'vue'

type useTimerOption = {
  type?: 'interval' | 'timeout'
  immediate?: boolean
  immediateCallback?: boolean
}

export const useTimer = (callback: () => void, delay: number, option: useTimerOption = {}) => {
  const { type = 'interval', immediate = true, immediateCallback = false } = option
  let doPause: () => void
  let doResume: () => void
  const isActive = ref(immediate)
  const isCalling = ref(false)
  const callTimes = ref(0)
  let isRunning: Ref<boolean>

  const isInterval = () => type != 'timeout'

  let timeoutStart: Nullable<() => void> = null
  let timeoutStop: Nullable<() => void> = null

  const run = () => {
    if (isCalling.value) return
    isCalling.value = true
    if (!isInterval()) timeoutStop && timeoutStop()
    callTimes.value++
    callback && callback()
    if (!isInterval() && isActive.value) timeoutStart && timeoutStart()
    isCalling.value = false
  }

  if (isInterval()) {
    const {
      pause: _pause,
      resume: _resume,
      isActive: _isActive
    } = useIntervalFn(run, delay, {
      immediate,
      immediateCallback
    })
    isRunning = _isActive
    doPause = _pause
    doResume = _resume
  } else {
    const {
      start: _start,
      stop: _stop,
      isPending: _isPending
    } = useTimeoutFn(run, delay, { immediate: false })
    timeoutStart = _start
    timeoutStop = _stop
    isRunning = _isPending
    doPause = _stop
    doResume = () => {
      if (immediateCallback) run()
      _start()
    }
    if (immediate) doResume()
  }

  const _doResume = () => {
    if (isActive.value && !isRunning.value) doResume()
  }

  onMounted(_doResume)
  onActivated(_doResume)
  onDeactivated(doPause)
  onBeforeUnmount(doPause)

  const pause = () => {
    isActive.value = false
    doPause()
  }

  const resume = () => {
    isActive.value = true
    doResume()
  }

  return {
    pause,
    resume,
    isActive,
    isCalling,
    callTimes
  }
}
