export default defineEventHandler((event) => {
  console.log('event: ', event)
  return{
    student: { name: 'Alex', age: 30, adress: 'New York'}
  }
})
