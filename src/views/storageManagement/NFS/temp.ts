type Person = {
  id: 123
  str?: string
}
const p: Person = {
  id: 123,
  str: '123'
}
const { id: key } = p
console.log(key)
