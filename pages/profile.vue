<template>
  <div>
    <h1>Profile(pages)</h1>
  </div>
</template>

<script setup>
    // const sayHello = () => console.log('Goodbye')
    // sayHello()
    const { sayHello } = useUtils()
    sayHello()

    //SEO for this page of app
    useHead({
        title: 'This is from useHead for this page',
        meta: [
            { name: 'description', content: 'useHead meta for profile page' }
        ],
        bodyAttrs: {
            class: 'main'
        },
        script: [ { innerHTML: 'console.log(\'useHead from profile.vue\')' } ]
    })
</script>

<style>

</style>