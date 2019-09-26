<template>
    <div>
        <div class="flex">
            <sidebar class="w-2/12 fixed"/>
            <div class="w-3/12"></div>
            <div class="p-6 w-9/12">
                <div class="flex pb-12">
                    <h1 class="text-2xl font-semibold">{{ $store.state.question.title }}</h1>
                    <button 
                        @click.prevent="askQuestion"
                        class="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs focus:outline-none">
                        Ask Question
                    </button>
                </div>
                <hr>
                <div class="flex">
                    <div class="w-1/12 text-center m-4 text-gray-500">
                        <button 
                            @click.prevent="upVote($store.state.question._id)"
                            class="focus:outline-none hover:text-gray-700">
                            <i class="fas fa-caret-up fa-3x"></i>
                        </button>
                        <h2 class="text-xl">{{ $store.state.question.upvote.length - $store.state.question.downvote.length }}</h2>
                        <button 
                            @click.prevent="downVote($store.state.question._id)"
                            class="focus:outline-none hover:text-gray-700">
                            <i class="fas fa-caret-down fa-3x"></i>
                        </button>
                    </div>
                    <div class="w-11/12 m-4">
                        <p  
                            v-html="$store.state.question.description"
                            class="text-sm mb-3"></p>
                        <div class="flex">
                            <div v-for="(tag, index) in $store.state.question.tags" :key="index">
                                <tag 
                                    :tag="{ tag, index}"
                                    class="mr-2"/>
                            </div>
                        </div>
                        <div class="flex mt-4">
                            <a 
                                href="#"
                                class="text-xs pr-4 hover:text-gray-900 text-gray-500">share</a>
                            <a  
                                @click.prevent="goToEditQuestion($store.state.question._id)"
                                href="#"
                                v-if="$store.state.question.userId._id === $store.state.user.userId"
                                class="text-xs pr-4 hover:text-gray-900 text-gray-500">edit</a>
                            <a  
                                @click.prevent="deleteQuestion($store.state.question._id)"
                                href="#"
                                v-if="$store.state.question.userId._id === $store.state.user.userId"
                                class="text-xs pr-4 hover:text-gray-900 text-gray-500">delete</a>
                            <a 
                                href="#"
                                v-if="$store.state.question.userId._id === $store.state.user.userId"
                                class="text-xs pr-4 hover:text-gray-900 text-gray-500">flag</a>
                        </div>
                    </div>
                </div>
                    <div class="flex">
                        <p class="ml-auto font-hairline text-xs	mr-4">asked by: {{ $store.state.question.userId.name }}</p>
                    </div>
                <div class="mt-8">
                    <h2 v-if="!$store.state.question.answer.length">
                        0 Answer</h2>
                    <h2 v-else-if="$store.state.question.answer.length === 1">
                        {{ $store.state.question.answer.length }} Answer</h2>
                    <h2 v-else>{{ $store.state.question.answer.length }} Answers</h2>
                </div>
                <div v-for="answer in $store.state.question.answer" :key="answer._id">
                    <answer :answer="answer" />
                </div>
                <div class="mt-8">
                    <h2>Your Answer</h2>
                </div>
                <hr>
                <quill-editor 
                    v-model="newAnswer"
                    class="mt-8 h-64 mb-20" />
                <div class="pt-4">
                    <button 
                        @click.prevent="postNewAnswer($store.state.question._id)"
                        class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded text-xs focus:outline-none">
                        Post Your Answer
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from '@/components/Sidebar.vue'
import tag from '@/components/Tag.vue'
import answer from '@/components/Answer.vue'

export default {
    components: {
        sidebar,
        tag,
        answer
    },
    data() {
        return {
            newAnswer: '',
            userId: this.$store.state.user.userId || localStorage.getItem('userId')
        }
    },
    methods: {
        getQuestion() {
            this.$store.dispatch('getQuestion', this.$router.currentRoute.params.id)
        },
        askQuestion() {
            this.$router.push('/ask')
        },
        postNewAnswer(questionId) {
            // console.log(questionId);
            this.$store.dispatch('postNewAnswer', {
                questionId,
                description: this.newAnswer
            })
            this.newAnswer = ''
        },
        upVote(questionId) {
            // console.log(questionId);
            this.$store.dispatch('upVoteQuestion', questionId)
        },
        downVote(questionId) {
            // console.log(questionId);
            this.$store.dispatch('downVoteQuestion', questionId)
        },
        goToEditQuestion(questionId) {
            // console.log(questionId);
            this.$router.push(`/questions/${questionId}/edit`)
        },
        deleteQuestion(questionId) {
            // console.log(questionId);

            this.$dialog
                .confirm('Please confirm to continue')
                .then(dialog => {
                    // console.log('Clicked on proceed')
                    this.$store.dispatch('deleteQuestion', questionId)
                })
        }
    },
    created: function () {
        this.getQuestion()
    }
}
</script>

<style>

</style>