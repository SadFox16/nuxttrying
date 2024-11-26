export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Hello from global middleware!Your routes: ', 'to: ', to, ';', 'from: ', from)
    const isLoggedIn = false
    if (isLoggedIn){ 
        //redirect to page we want to go
        return navigateTo(to.fullPath)
    }
    //if not logged in - redirect to login page
})
