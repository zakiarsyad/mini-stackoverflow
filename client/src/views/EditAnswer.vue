<template>
    <div class="flex">
        <sidebar class="w-2/12 fixed"/>
        <div class="w-3/12"></div>
        <div class="p-6 w-9/12">
            <div class="">
                <div class="p-4 ">
                    <div class="pb-6">
                        <h1 class="text-black font-bold mb-2">{{ $store.state.question.title }}</h1>
                        <p v-html="$store.state.question.description"></p>
                    </div>
                    <div class="pb-6">
                        <h2 class="font-semibold text-sm text-black">Body</h2>
                        <quill-editor v-model="answer.description" />
                    </div>
                    <div class=" py-2 border-dotted border-t border-b">
                        <p v-html="answer.description"></p>
                    </div>
                    <button 
                        @click.prevent="saveAnswer"
                        class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-xs mt-6">
                        Save Edits
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from '@/components/Sidebar.vue'

export default {
    name: 'editanswer',
    components: {
        sidebar
    },
    data() {
        return {
            answer: this.$store.state.answer
        }
    },
    methods: {
        getAnswer() {
            this.$store.dispatch('getAnswer', this.$router.currentRoute.params.id)
        },
        saveAnswer() {
            console.log(this.answer);
            this.$store.dispatch('saveAnswer', this.answer)
        }
    },
    created: function () {
        this.getAnswer()
    }
}
</script>

<style>

</style>