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
    <div>
        <!-- get all data  -->
        <p>Data: {{ data }}</p>
        <!-- get value of worker from data  -->
        <p>Worker {{ worker?.worker }}</p>
        <!-- get name of student(watch transform for useFetch in script) -->
        <p>Student: {{ student }}</p>
        <!-- get buildings -->
         <p>Buildings {{ pending ? 'Loading' : buildings }}</p>
        <!-- get productCount -->
        <p> {{ pending2 ? 'Loading' : productCount }}</p>
        <button @click="refresh">Refresh</button>
    </div>
  </div>
</template>

<script setup lang="ts">
    const counter = useCounter()
    const respone = await $fetch('/api/hello')
    console.log('Response from api/hello', respone)

    //using useFetch for fetching server/api/hello
    const { data: worker } = await useFetch('/api/hello')
    const { data } = await useFetch('/api/hello')
    console.log('data from useFetch from api/hello: ', worker)
    console.log('data from useFetch from api/hello (toRaw): ', toRaw(data))
    console.log('data.value from useFetch from api/hello: ', data.value)
    console.log('data.value from useFetch from api/hello (toRaw): ', toRaw(data.value))

    const { data: student } = await useFetch('/api/goodbye', {
        transform: (_student) => _student.student.name //marks which data we need to get and save to use or display
    })

    const { data: buildings, pending } = await useLazyFetch('/api/buildings', {
        // transform: (_buildings) => _buildings //marks which data we need to get and save to use or display
        server: false
    })

    const { data: productCount, pending2 } = await useAsyncData('products', () => $fetch('/api/products')) //using if we don't have async data
    // const { data: productCount, pending2 } = await useLazyAsyncData('products', () => $fetch('/api/products')) //using if we have async data
    const refresh = () => refreshNuxtData('products')

    //SEO for this page of app
    useHead({
        title: 'This is from useHead for this page',
        meta: [
            { name: 'description', content: 'useHead meta' }
        ],
        bodyAttrs: {
            class: 'main'
        },
        script: [ { innerHTML: 'console.log(\'useHead from index.vue\')' } ]
    })
</script>