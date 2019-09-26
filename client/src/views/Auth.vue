<template>
    <div 
        class="w-full flex justify-center h-screen items-center"
        id="auth">
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'auth',
}
</script>

<style>
#auth {
    max-height: calc(100vh - 50px);
}
</style>