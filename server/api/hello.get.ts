export default defineEventHandler((event) => {
  console.log('event: ', event)
  return{
    api: 'works',
    worker: { name: 'John', age: 26, adress: 'New York'}
  }
})
