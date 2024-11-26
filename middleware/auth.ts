export default defineNuxtRouteMiddleware((to, from) => {
    console.log('to: ', to, ';', 'from: ', from)
    console.log('Hello from local middleware')
})
