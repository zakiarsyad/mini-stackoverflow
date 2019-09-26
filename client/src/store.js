import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        isLoading: false,
        server: 'http://18.191.104.241',
        // server: 'http://localhost:3000',
        questions: [],
        question: {},
        answer: {}
    },
    mutations: {
        START_LOADING(state, payload) {
            state.isLoading = true
        },
        STOP_LOADING(state, payload) {
            state.isLoading = false
        },
        SET_USER(state, payload) {
            state.user = payload
        },
        GET_QUESTIONS(state, payload) {
            state.questions = payload
        },
        GET_QUESTION(state, payload) {
            state.question = payload
        },
        GET_ANSWER(state, payload) {
            state.answer = payload
        },
        LOGOUT(state, payload) {
            state.user = {}
            state.questions = []
            state.question = {}
            Vue.$toast.open(`bye. . .`)
        }
    },
    actions: {
        signup({ commit, state }, payload) {
            commit('START_LOADING')

            axios({
                method: `post`,
                url: `${state.server}/users/register`,
                data: payload
            })
                .then(({ data }) => {
                    localStorage.setItem('token', data.token)
                    Vue.$toast.open(`Hi, ${data.user.name}`)
                    router.push('/')
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
        signin({ commit, state }, payload) {
            commit('START_LOADING')

            axios({
                method: `post`,
                url: `${state.server}/users/login`,
                data: payload
            })
                .then(({ data }) => {
                    console.log(data);
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('name', data.user.name)
                    localStorage.setItem('userId', data.user.userId)
                    Vue.$toast.open(`Hi, ${data.user.name}`)
                    commit('SET_USER', data.user)
                    router.push('/')
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
        askQuestion({ commit, state }, payload) {
            commit('START_LOADING')

            axios({
                method: `post`,
                url: `${state.server}/questions`,
                data: payload,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
                .then(({ data }) => {
                    Vue.$toast.open(`success ask a question`)
                    router.push('/questions')
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
        fetchQuestion({ commit, state }, payload) {
            commit('START_LOADING')

            axios({
                method: `get`,
                url: `${state.server}/questions`,
            })
                .then(({ data }) => {
                    commit('GET_QUESTIONS', data)
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
        getQuestion({ commit, state }, payload) {
            commit('START_LOADING')

            axios({
                method: `get`,
                url: `${state.server}/questions/${payload}`,
            })
                .then(({ data }) => {
                    // console.log(data);
                    commit('GET_QUESTION', data)
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
        postNewAnswer({ commit, state, dispatch }, payload) {
            commit('START_LOADING')

            axios({
                method: `post`,
                url: `${state.server}/answers`,
                headers: {
                    token: localStorage.getItem('token')
                },
                data: payload
            })
                .then(({ data }) => {
                    console.log(data);
                    Vue.$toast.open(`success ask an answer`)
                    dispatch('getQuestion', payload.questionId)
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
        upVoteQuestion({ commit, state, dispatch }, payload) {
            commit('START_LOADING')

            axios({
                method: `patch`,
                url: `${state.server}/questions/${payload}/upvote`,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
                .then(({ data }) => {
                    console.log(data);
                    dispatch('getQuestion', payload)
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
        downVoteQuestion({ commit, state, dispatch }, payload) {
            commit('START_LOADING')

            axios({
                method: `patch`,
                url: `${state.server}/questions/${payload}/downvote`,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
                .then(({ data }) => {
                    console.log(data);
                    dispatch('getQuestion', payload)
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
        saveQuestion({ commit, state, dispatch }, payload) {
            commit('START_LOADING')

            axios({
                method: `patch`,
                url: `${state.server}/questions/${payload._id}`,
                headers: {
                    token: localStorage.getItem('token')
                },
                data: payload
            })
                .then(({ data }) => {
                    console.log(data);
                    router.push(`/questions/${payload._id}`)
                    dispatch('getQuestion', router.currentRoute.params.id)
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
        deleteQuestion({ commit, state, dispatch }, payload) {
            commit('START_LOADING')

            axios({
                method: `delete`,
                url: `${state.server}/questions/${payload}`,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
                .then(({ data }) => {
                    console.log(data);
                    Vue.$toast.open('success delete a question')
                    router.push('/')
                    // dispatch('getQuestion', router.currentRoute.params.id)
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
        getAnswer({ commit, state }, payload) {
            commit('START_LOADING')

            axios({
                method: `get`,
                url: `${state.server}/answers/${payload}`,
            })
                .then(({ data }) => {
                    // console.log(data);
                    commit('GET_ANSWER', data)
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
        upVoteAnswer({ commit, state, dispatch }, payload) {
            commit('START_LOADING')

            axios({
                method: `patch`,
                url: `${state.server}/answers/${payload}/upvote`,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
                .then(({ data }) => {
                    console.log(data);
                    dispatch('getQuestion', router.currentRoute.params.id)
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
        downVoteAnswer({ commit, state, dispatch }, payload) {
            commit('START_LOADING')

            axios({
                method: `patch`,
                url: `${state.server}/answers/${payload}/downvote`,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
                .then(({ data }) => {
                    console.log(data);
                    dispatch('getQuestion', router.currentRoute.params.id)
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
        saveAnswer({ commit, state, dispatch }, payload) {
            commit('START_LOADING')

            axios({
                method: `patch`,
                url: `${state.server}/answers/${payload._id}`,
                headers: {
                    token: localStorage.getItem('token')
                },
                data: payload
            })
                .then(({ data }) => {
                    // console.log(data);
                    Vue.$toast.open('success update an answer')
                    router.push(`/questions/${state.question._id}`)
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
        deleteAnswer({ commit, state, dispatch }, payload) {
            commit('START_LOADING')

            axios({
                method: `delete`,
                url: `${state.server}/answers/${payload}`,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
                .then(({ data }) => {
                    console.log(data);
                    Vue.$toast.open('success delete an answer')
                    dispatch('getQuestion', router.currentRoute.params.id)
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
        tokenValidation({ commit, state, dispatch }, payload) {
            commit('START_LOADING')

            axios({
                method: `post`,
                url: `${state.server}/users/checkToken`,
                headers: {
                    token: localStorage.getItem('token')
                }
            })
                .then(({ data }) => {
                    commit('SET_USER', data)
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
        searchByTag({ commit, state, dispatch }, payload) {
            commit('START_LOADING')

            axios({
                method: `get`,
                url: `${state.server}/questions/search/${payload}`
            })
                .then(({ data }) => {
                    commit('GET_QUESTIONS', data)
                })
                .catch(err => {
                    console.log(err.response.data.errors);
                    err.response.data.errors.forEach(error => {
                        Vue.$toast.warning(error)
                    })
                })
                .finally(() => {
                    commit('STOP_LOADING')
                })
        },
    }
})
