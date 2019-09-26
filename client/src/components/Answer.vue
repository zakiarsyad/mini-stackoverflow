<template>
    <div>
        <hr>
        <div class="flex">
            <div class="w-1/12 text-center m-4 text-gray-500">
                <button 
                    @click.prevent="upVote"
                    class="focus:outline-none hover:text-gray-700">
                    <i class="fas fa-caret-up fa-3x"></i>
                </button>
                <h2 class="text-xl">{{ answer.upvote.length - answer.downvote.length }}</h2>
                <button 
                    @click.prevent="downVote"
                    class="focus:outline-none hover:text-gray-700">
                    <i class="fas fa-caret-down fa-3x"></i>
                </button>
            </div>
            <div class="w-11/12 m-4">
                <p 
                    v-html="answer.description"
                    class="text-sm mb-3"></p>
                <div class="flex mt-4">
                    <a 
                        href="#"
                        class="text-xs pr-4 hover:text-gray-900 text-gray-500">share</a>
                    <a 
                        @click.prevent="goToEditAnswer"
                        href="#"
                        v-if="$store.state.question.userId._id === $store.state.user.userId"
                        class="text-xs pr-4 hover:text-gray-900 text-gray-500">edit</a>
                    <a  
                        @click.prevent="deleteAnswer"
                        href="#"
                        v-if="$store.state.question.userId._id === $store.state.user.userId"
                        class="text-xs pr-4 hover:text-gray-900 text-gray-500">delete</a>
                    <a 
                        href="#"
                        v-if="$store.state.question.userId._id === $store.state.user.userId"
                        class="text-xs pr-4 hover:text-gray-900 text-gray-500">flag</a>
                </div>
                <div class="flex">
                    <p class="ml-auto font-hairline text-xs	">answered by: {{ answer.userId.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['answer'],
    data() {
        return {
            userId: this.$store.state.user.userId || localStorage.getItem('userId')
        }
    },
    methods: {
        upVote() {
            // console.log(this.answer._id);
            this.$store.dispatch('upVoteAnswer', this.answer._id)
        },
        downVote() {
            // console.log(this.answer._id);
            this.$store.dispatch('downVoteAnswer', this.answer._id)
        },
        deleteAnswer() {
            // console.log(this.answer._id);

            this.$dialog
                .confirm('Please confirm to continue')
                .then(dialog => {
                    // console.log('Clicked on proceed')
                    this.$store.dispatch('deleteAnswer', this.answer._id)
                })
        },
        goToEditAnswer() {
            // console.log(this.answer._id);
            this.$router.push(`/answers/${this.answer._id}/edit`)
        }
    }
}
</script>

<style>

</style>