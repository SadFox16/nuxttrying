<template>
    <div class="main">
        <!-- <Alert/>
        <ProfileHeaderAvatar/> -->
        <!-- <Profile/> -->
        Main page(pages)
        <IconsBell/>
        <!-- <img src="../assets/1.webp" alt="image1"/>
        <img src="../assets/2.jpg" alt="image2"/>
        <img src="@/assets/1.webp" alt="image1"/>
        <img src="@/assets/2.jpg" alt="image2"/>
        <img src="/1.webp" alt="image1"/>
        <img src="/2.jpg" alt="image2"/> -->
    </div>
</template>

<script setup>
    // const sayHello = () => console.log('Hello')
    // sayHello()
    const { sayHello } = useUtils() //from composables
    const { $sayHello } = useNuxtApp() //from plugins
    definePageMeta({
        middleware: 'auth'
    }) //local middleware
    sayHello() //from composables
    console.log('useNuxtApp: ', useNuxtApp()) //from plugins
    $sayHello('John') //from plugins
</script>