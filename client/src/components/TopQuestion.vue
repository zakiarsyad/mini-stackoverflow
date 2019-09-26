<template>
    <div>
        <hr>
        <div class="flex">
            <div class="w-3/12 text-center m-4 flex items-center">
                <div class="w-4/12">
                    <h2 class="text-xl">{{ question.upvote.length - question.downvote.length }}</h2>
                    <p 
                        v-if="question.upvote.length - question.downvote.length < 2" 
                        class="text-xs">
                        vote</p>
                    <p v-else class="text-xs">votes</p>
                </div>
                <div class="w-4/12">
                    <h2 class="text-xl">{{ question.answer.length }}</h2>
                    <p 
                        v-if="question.answer.length < 2" 
                        class="text-xs">
                        answer</p>
                    <p v-else class="text-xs">answers</p>
                </div>
                <div class="w-4/12">
                    <h2 class="text-xl">12</h2>
                    <p class="text-xs">views</p>
                </div>
            </div>
            <div class="w-9/12 m-4">
                <h2 class="text-blue-700 mb-3">
                    <a 
                        @click.prevent="getQuestionDetail(question._id)"
                        class="hover:text-blue-400"
                        href="#">
                        {{ question.title }}
                    </a>
                </h2>
                <div class="flex">
                    <div v-for="(tag, index) in question.tags" :key="index">
                        <tag 
                            :tag="{ tag, index}"
                            class="mr-2"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import tag from '@/components/Tag.vue'

export default {
    name: 'topquestion',
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