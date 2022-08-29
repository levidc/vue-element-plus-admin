export const response = <T = any>(code: string, data: any, message = ''): IResponse<T> => {
  return { code, message, data }
}

export const packingApiData = <F extends (...args: Parameters<F>) => Promise<IResponse<T>>, T>(
  api: F,
  reqCallback?: (...args: Parameters<F>) => Parameters<F> | any,
  resCallback?: (res: IResponse<T>) => IResponse<T> | any
) => {
  const reqCb: NonNullable<typeof reqCallback> = reqCallback || ((...args: Parameters<F>) => args)
  const resCb: NonNullable<typeof resCallback> = resCallback || ((res) => res)
  return (...args: Parameters<F>) => {
    return new Promise<IResponse<T>>((resolve, reject) => {
      api(...reqCb(...args))
        .then((res) => resolve(resCb(res)))
        .catch(reject)
    }) as ReturnType<F>
  }
}

export const apiParamArrFirst = <F extends (...args: Parameters<F>) => Promise<IResponse<T>>, T>(
  api: F,
  index = 0
) => {
  return packingApiData(api, (...args) => {
    if (index in args) {
      args[index] = args[index][0] || ''
    }
    return args
  })
}

export const apiParamArrToObj = <F extends (...args: Parameters<F>) => Promise<IResponse<T>>, T>(
  api: F,
  ...keys: string[]
) => {
  return packingApiData(api, (...args) => {
    return [
      (args as any[]).reduce((prev, v, i) => {
        prev[i in keys ? keys[i] : i] = v
        return prev
      }, {})
    ]
  })
}

export class ApiPacker<F extends (...args: Parameters<F>) => Promise<IResponse<T>>, T> {
  private ops: {
    fun: (api: F, ...args: any[]) => ReturnType<typeof packingApiData>
    args: any[]
  }[] = []

  static from(api: ConstructorParameters<typeof ApiPacker>[0]) {
    return new ApiPacker(api)
  }

  constructor(private api: F) {}

  public paramArrFirst(index = 0) {
    this.ops.unshift({ fun: apiParamArrFirst, args: [index] })
    return this
  }

  public paramArrToObj(...keys: string[]) {
    this.ops.unshift({ fun: apiParamArrToObj, args: keys })
    return this
  }

  public packingData(
    reqCallback?: Parameters<typeof packingApiData>[1],
    resCallback?: Parameters<typeof packingApiData>[2]
  ) {
    this.ops.unshift({ fun: packingApiData, args: [reqCallback, resCallback] })
    return this
  }

  public build() {
    return this.ops.reduce((papi, op) => {
      return op.fun(papi, ...op.args)
    }, this.api)
  }
}
