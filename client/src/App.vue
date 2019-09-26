<template>
    <div class="">
        <loading 
            :active.sync="$store.state.isLoading" 
            :is-full-page="true">
        </loading>
        <navbar class="fixed w-full shadow"/>
        <div class="h-12"></div>
        <div id="content" class="flex w-full">
            <!-- <sidebar 
                v-if="$router.currentRoute.path !== '/ask' || $router.currentRoute.path !== '/signin'"
                class="w-2/12"/> -->
            <!-- <div class="w-2/12 fixed"></div> -->
            <!-- <router-view 
                v-if="$router.currentRoute.path === '/ask'"
                class="w-10/12" /> -->
            <router-view 
                v-if="$router.currentRoute.path.includes('auth')"/>
            <router-view 
                v-else
                class="w-10/12" />
            <div 
                v-if="!$router.currentRoute.path.includes('auth')"
                class="w-2/12"></div>
        </div>
    </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import sidebar from '@/components/Sidebar.vue'
import loading from 'vue-loading-overlay';

export default {
    components: {
        navbar,
        sidebar,
        loading
    },
    data() {
        return {

        }
    },
    methods: {
        tokenValidation() {
            this.$store.dispatch('tokenValidation')
        }
    },
    created: function () {
        if (localStorage.getItem('token')) this.tokenValidation()
        else this.$router.push('/auth/signin')
    }
}
</script>

<style>
* {
    background-color: #fcfcfc;
    font-family: Arial;
    color: #565656;
}

#content {
    padding: 0 5%;
}

</style>
