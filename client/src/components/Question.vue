<template>
    <div>
        <hr>
        <div class="flex">
            <div class="w-1/12 text-center m-4">
                <div>
                    <h2 class="text-xl">{{ question.upvote.length - question.downvote.length }}</h2>
                    <p 
                        v-if="question.upvote.length - question.downvote.length < 2" 
                        class="text-xs">
                        vote</p>
                    <p v-else class="text-xs">votes</p>
                </div>
                <div>
                    <h2 class="text-xl">{{ question.answer.length }}</h2>
                    <p 
                        v-if="question.answer.length < 2" 
                        class="text-xs">
                        answer</p>
                    <p v-else class="text-xs">answers</p>
                </div>
                <div class="mt-1">
                    <p class="text-xs">298 views</p>
                </div>
            </div>
            <div class="w-11/12 m-4">
                <h2 class="text-blue-700 mb-3">
                    <a 
                        @click.prevent="getQuestionDetail(question._id)"
                        class="hover:text-blue-400"
                        href="#">
                        {{ question.title }}
                    </a>
                </h2>
                <p
                    v-html="question.description"
                    class="text-sm mb-3 overflow-hidden h-32 w-full"></p>
                <div class="flex">
                    <div v-for="(tag, index) in question.tags" :key="index">
                        <tag 
                            :tag="{ tag, index}"
                            class="mr-2"/>
                    </div>
                </div>
                <div class="flex">
                    <p class="ml-auto font-hairline text-xs	">asked by: {{ question.userId.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import tag from '@/components/Tag.vue'

export default {
    name: 'question',
    props: ['question'],
    components: {
        tag
    },
    methods: {
        getQuestionDetail(id) {
            this.$router.push(`/questions/${id}`)
        }
    }
}
</script>

<style>

</style>