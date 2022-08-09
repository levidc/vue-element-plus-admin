type Person = {
  id: 123,
  str?: string
}
let p: Person = {
  id: 123,
  str: '123'
}
let { id: key } = p
console.log(key);
