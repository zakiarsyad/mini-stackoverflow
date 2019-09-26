<template>
    <div class="flex">
        <sidebar class="w-2/12 fixed"/>
        <div class="w-3/12"></div>
        <div class="p-6 w-9/12">
            <h1 class="text-2xl font-semibold">User</h1>
        </div>
    </div>
</template>

<script>
import sidebar from '@/components/Sidebar.vue'

export default {
    name:'user',
    components: {
        sidebar
    },
}
</script>

<style>

</style>