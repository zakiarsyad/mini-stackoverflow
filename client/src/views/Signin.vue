<template>
    <div class="w-1/4">
        <div class="flex cursor-pointer justify-center mb-12">
            <div class="flex justify-center items-center">
                <i class="fab fa-stack-overflow fa-2x" id="icon"></i>
                <span class="font-thin text-2xl ml-4">v</span>
                <span class="font-extrabold text-2xl">overflow</span>
            </div>
        </div>
        <form class="bg-white shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-black text-sm font-bold mb-2">
                    Email
                </label>
                <input 
                    v-model="user.email"
                    class="appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" 
                    type="text">
            </div>
                <div class="mb-6">
                <div class="flex items-center justify-center">
                    <div class="text-black text-sm font-bold mb-2">
                        Password
                    </div>
                    <div 
                        class="ml-auto inline-block align-baseline text-xs text-blue-700 hover:text-blue-400"
                        href="#">
                        Forgot Password?
                    </div>
                </div>
                <input 
                    v-model="user.password"
                    class="appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" 
                    type="password">
            </div>
            <div class="flex items-center justify-between">
                <button 
                    @click.prevent="signin"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" 
                    type="button">
                    Sign In
                </button>
            </div>
        </form>
        <p 
            class="text-center text-black mt-12">
            Don't have an acoount?
            <a 
                @click.prevent="goToSignup" 
                href="#"
                class="text-blue-700 hover:text-blue-400">
                Sign Up
            </a>
        </p>
    </div>
</template>

<script>
export default {
    name: 'signin',
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        goToSignup() {
            this.$router.push('/auth/signup')
        },
        signin() {
            this.$store.dispatch('signin', this.user)
        }
    }
}
</script>

<style>
#icon {
    color: #f38024;
}
</style>