<template>
    <div class="h-screen border-r pt-8 pl-8">
        <div 
            @click.prevent="toHome" 
            class="hover:bg-gray-300 hover:text-black py-1 px-2 cursor-pointer">
            <a 
                href="#" 
                class="py-1 bg-transparent text-sm">Home</a>
        </div>
        <h3 class="py-1 px-2 text-sm">PUBLIC</h3>
        <div 
            @click.prevent="toQuestion"
            class="hover:bg-gray-300 hover:text-black py-1 px-2 cursor-pointer">
            <a 
                href="#"
                class="py-1 bg-transparent text-sm">
                <i class="fas fa-globe-americas mr-3"></i>
                Stack Overflow
            </a>
        </div>
        <div 
            @click.prevent="toTag" 
            class="hover:bg-gray-300 hover:text-black py-1 px-2 cursor-pointer">
            <a 
                href="#"
                class="py-1 ml-8 bg-transparent text-sm">Tags</a>
        </div>
        <div 
            @click.prevent="toUser" 
            class="hover:bg-gray-300 hover:text-black py-1 px-2 cursor-pointer">
            <a 
                href="#"
                class="py-1 ml-8 bg-transparent text-sm">User</a>
        </div>
        <div 
            @click.prevent="toJobs" 
            class="hover:bg-gray-300 hover:text-black py-1 px-2 cursor-pointer">
            <a 
                href="#"
                class="py-1 ml-8 bg-transparent text-sm">Jobs</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sidebar',
    methods: {
        toHome() {
            this.$router.push('/')
        },
        toQuestion() {
            this.$router.push('/questions')
        },
        toTag() {
            this.$router.push('/tag')
        },
        toUser() {
            this.$router.push('/user')
        },
        toJobs() {
            this.$router.push('/jobs')
        }
    }
}
</script>

<style scoped>

* {
    background-color: #fafafb;
    border-color: #a8a8a8;
}

</style>