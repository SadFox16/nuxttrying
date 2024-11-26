export default defineEventHandler(async (event) => {
  console.log('event: ', event)
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => { 
      resolve('Building 123456789')
     }, 2000)
  })
  // return{
  //   buildings: { 
  //     1: {adress: 'Peter srt. 9', floors: 5},
  //     2: {adress: 'Nine srt. 189', floors: 50}
  // }
  // }
})
