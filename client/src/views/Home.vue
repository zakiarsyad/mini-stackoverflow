<template>
    <div class="flex">
        <sidebar class="w-2/12 fixed"/>
        <div class="w-3/12"></div>
        <div class="p-6 w-9/12">
            <div class="flex pb-12">
                <h1 class="text-2xl font-semibold">Top Questions</h1>
                <button 
                    @click.prevent="askQuestion"
                    class="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Ask Question
                </button>
            </div>
            <div v-for="question in $store.state.questions" :key="question._id">
                <topquestion :question="question"/>
            </div>
        </div>
    </div>
</template>

<script>
import topquestion from '@/components/TopQuestion.vue'
import sidebar from '@/components/Sidebar.vue'

export default {
    name: 'home',
    components: {
        topquestion,
        sidebar
    },
    methods: {
        askQuestion() {
            this.$router.push('/ask')
        },
        fetchQuestion() {
            this.$store.dispatch('fetchQuestion')
        }
    },
    created: function() {
        this.fetchQuestion()
    }
}
</script>

<style>

</style>