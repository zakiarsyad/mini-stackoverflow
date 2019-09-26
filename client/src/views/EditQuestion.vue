<template>
    <div class="flex">
        <sidebar class="w-2/12 fixed"/>
        <div class="w-3/12"></div>
        <div class="p-6 w-9/12">
            <div class="">
                <div class="p-4 ">
                    <div class="pb-6">
                        <h2 class="font-semibold text-sm text-black">Title</h2>
                        <input 
                            v-model="question.title"
                            class="border border-gray-600 rounded w-full px-2"
                            type="text">
                    </div>
                    <div class="pb-6">
                        <h2 class="font-semibold text-sm text-black">Body</h2>
                        <quill-editor v-model="question.description"/>
                    </div>
                    <div class=" py-2 border-dotted border-t border-b">
                        <p v-html="question.description"></p>
                    </div>
                    <div class="mt-4">
                        <h2 class="font-semibold text-sm text-black">Tags</h2>
                        <p class="text-xs pb-2">Add up to 5 tags to describe what your question is about</p>
                        <input 
                            class="border border-gray-600 rounded w-full px-2"
                            type="text">
                    </div>
                    <button 
                        @click.prevent="saveQuestion"
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
    name: 'editquestion',
    components: {
        sidebar
    },
    data() {
        return {
            question: this.$store.state.question
        }
    },
    methods: {
        getQuestion() {
            this.$store.dispatch('getQuestion', this.$router.currentRoute.params.id)
        },
        saveQuestion() {
            console.log(this.question);
            this.$store.dispatch('saveQuestion', this.question)
        }
    },
    created: function () {
        this.getQuestion()
    }
}
</script>

<style>

</style>