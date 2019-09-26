<template>
    <div 
        class="border-b z-40">
        <div 
            id="line"
            class="h-1">
        </div>
        <div 
            id="navbar" 
            class="flex h-12">
            <div 
                class="flex items-center w-10/12">
                <div 
                    @click.prevent="goToHome"
                    class="flex cursor-pointer">
                    <i class="fab fa-stack-overflow fa-2x ml-12" id="icon"></i>
                    <span class="ml-3 font-thin text-2xl">v</span>
                    <span class="font-extrabold text-2xl">overflow</span>
                </div>
                <button
                    class="rounded-full hover:bg-gray-300 px-4 py-1 hover:text-black my-1 ml-4 text-xs focus:outline-none">
                    Products
                </button>
                <div class="h-full py-2 w-full">
                    <input 
                    class="border rounded h-full w-full px-3"
                    type="text">
                </div>
                <div class="flex items-center">
                    <p class="w-32 ml-4" >Hi, {{ $store.state.user.name }}</p>
                    <button 
                        @click.prevent="signout"
                        class="rounded-full hover:bg-gray-300 px-4 py-1 hover:text-black my-1 ml-4 text-xs focus:outline-none">
                        signout
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'navbar',
    methods: {
        goToHome() {
            this.$router.push('/')
        },
        signout() {
            localStorage.removeItem('token')
            localStorage.removeItem('name')
            localStorage.removeItem('userId')
            this.name = ''
            this.$store.commit('LOGOUT')
            this.$router.push('/auth/signin')
        },

    }
}
</script>

<style scoped>
* {
    background-color: #fafafb;
    border-color: #a8a8a8;
}

#navbar {
    /* width: 90%; */
    /* left: 5%; */
    padding: 0 5%;
}

#line {
    background-color: #f38024;
}

#icon {
    color: #f38024;
}
</style>