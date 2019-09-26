<template>
    <button class="text-xs text-blue-800 bg-blue-200 rounded px-2 hover:bg-blue-300 focus:outline-none">
        {{ tag.tag }}
        <i  
            v-if="$router.currentRoute.path === '/ask'"
            @click.prevent="removeTag"
            class="fas fa-times pl-2"></i>
    </button>
</template>

<script>
export default {
    name: 'tag',
    props: ['tag'],
    methods: {
        removeTag() {
            this.$emit('removeTag', this.tag.index)
        }
    }
}
</script>

<style>

</style>