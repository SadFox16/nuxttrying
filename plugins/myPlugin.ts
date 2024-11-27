export default defineNuxtPlugin((nuxtApp) => {
    console.log('nuxtApp: ', nuxtApp)
    // return{
    //     provide:{
    //         sayHello: (msg:string) => {
    //             console.log(`Hello ${msg}`)
    //         }
    //     }
    // }
    nuxtApp.hook('app:created', () => {
        console.log('hello from plugin with hook (created)')
    })
})
