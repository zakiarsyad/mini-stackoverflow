<template>
    <div class="w-1/4">
        <form class="bg-white shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-black text-sm font-bold mb-2">
                    Display name
                </label>
                <input 
                    v-model="user.name"
                    class="appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" 
                    type="text">
            </div>
            <div class="mb-6">
                <label class="block text-black text-sm font-bold mb-2">
                    Email
                </label>
                <input 
                    v-model="user.email"
                    class="appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" 
                    type="text">
            </div>
            <div class="mb-6">
                <div class="text-black text-sm font-bold mb-2">
                    Password
                </div>
                <input 
                    v-model="user.password"
                    class="appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" 
                    type="password">
            </div>
            <div class="flex items-center justify-between">
                <button 
                    @click.prevent="signup"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" 
                    type="button">
                    Sign Up
                </button>
            </div>
        </form>
        <p 
            class="text-center text-black mt-12">
            Already have an acoount?
            <a 
                @click.prevent="goToSignin" 
                href="#"
                class="text-blue-700 hover:text-blue-400">
                Sign In
            </a>
        </p>
    </div>
</template>

<script>
export default {
    name: 'signup',
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        goToSignin() {
            this.$router.push('/auth/signin')
        },
        signup() {
            this.$store.dispatch('signup', this.user)
        }
    }
}
</script>

<style>

</style>