<template>
    <div class="p-6">
        <div class="flex pb-12">
            <h1 class="text-2xl font-semibold">Top Questions</h1>
            <button 
                @click.prevent="askQuestion"
                class="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                Ask Question
            </button>
        </div>
        <topquestion />
        <topquestion />
        <topquestion />
        <topquestion />
    </div>
</template>

<script>
import topquestion from '@/components/TopQuestion.vue'

export default {
    name: 'home',
    components: {
        topquestion
    },
    methods: {
        askQuestion() {
            this.$router.push('/ask')
        }
    }
}
</script>

<style>

</style>