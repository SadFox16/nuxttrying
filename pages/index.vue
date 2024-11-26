<!-- <template> -->
    <!-- <div class="main"> -->
        <!-- <Alert/>
        <ProfileHeaderAvatar/> -->
        <!-- <Profile/> -->
        <!-- Main page(pages)
        <IconsBell/>
        <ContentDoc/> -->
        <!-- <img src="../assets/1.webp" alt="image1"/>
        <img src="../assets/2.jpg" alt="image2"/>
        <img src="@/assets/1.webp" alt="image1"/>
        <img src="@/assets/2.jpg" alt="image2"/>
        <img src="/1.webp" alt="image1"/>
        <img src="/2.jpg" alt="image2"/> -->
    <!-- </div> -->
<!-- </template> -->

<!-- <script setup>
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
</script> -->

<template>
  <div>
    <div id="main">
        Counter: {{ counter }}
        <button @click="counter++">
        +
        </button>
        <button @click="counter--">
        -
        </button>
    </div>
    <Counter id="counter"/>
  </div>
</template>

<script setup lang="ts">
    const counter = useCounter()
    const respone = await $fetch('/api/hello')
    console.log('Response from api/hello', respone)
</script>