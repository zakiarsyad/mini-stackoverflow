<template>
    <div class="p-12 h-screen mb-24">
        <h1 
            class="text-2xl w-full text-black mb-8">
            Ask a public question
        </h1>
        <div class="bg-white p-4 rounded shadow-2xl">
            <div class="pb-6">
                <h2 class="font-semibold text-sm text-black">Question title</h2>
                <p class="text-xs pb-2">Be specific and imagine you’re asking a question to another developer</p>
                <input 
                    v-model="question.title"
                    class="border border-gray-600 rounded w-full px-2"
                    type="text">
            </div>
            <div class="pb-6">
                <h2 class="font-semibold text-sm text-black">Question body</h2>
                <p class="text-xs pb-2">Include all the information someone would need to answer your question</p>
                <quill-editor 
                    v-model="question.description"
                    class="h-64 mb-20"/>
            </div>
            <div>
                <h2 class="font-semibold text-sm text-black flex">Tags</h2>
                <div class="flex flex-wrap">
                    <div   
                        v-for="(tag, index) in tags"
                        :key="index">
                        <tag 
                            :tag="{ tag, index }"
                            @removeTag="removeTag"
                            class="mr-2"></tag>
                    </div>
                </div>
                <div 
                    
                    class="flex">

                </div>
                <p class="text-xs pb-2">Add up to 5 tags to describe what your question is about</p>
                <input 
                    v-model="newTag"
                    v-on:keyup.enter="addTag"
                    class="border border-gray-600 rounded w-full px-2"
                    placeholder="type and hit enter to add a new tag"
                    type="text">
            </div>
        </div>
        <div class="pt-4">
            <button 
                @click.prevent="askQuestion"
                class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-xs">
                Post Your Question
            </button>
        </div>
    </div>
</template>

<script>
import tag from '@/components/Tag.vue'

export default {
    name: 'ask',
    components: {
        tag
    },
    data() {
        return {
            question: {
                title: '',
                description: '',
            },
            newTag: '',
            tags: []
        }
    },
    methods: {
        askQuestion() {
            let payload = {
                title: this.question.title,
                description: this.question.description,
                tags: this.tags
            }
            this.$store.dispatch('askQuestion', payload)
        },
        addTag() {
            // console.log(this.newTag);
            this.tags.push(this.newTag)
            this.newTag = ''
        },
        removeTag(index) {
            this.tags.splice(index, 1)
        }
    }
}
</script>

<style>

</style>