import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Ask from './views/Ask.vue'
import Questions from './views/Questions.vue'
import Answers from './views/Answers.vue'
import Tag from './views/Tag.vue'
import User from './views/User.vue'
import Jobs from './views/Jobs.vue'
import Auth from './views/Auth.vue'
import Signin from './views/Signin.vue'
import Signup from './views/Signup.vue'
import EditQuestion from './views/EditQuestion.vue'
import EditAnswer from './views/EditAnswer.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/ask',
            name: 'ask',
            component: Ask
        },
        {
            path: '/questions',
            name: 'questions',
            component: Questions,
        },
        {
            path: '/questions/:id',
            name: 'answers',
            component: Answers
        },
        {
            path: '/questions/:id/edit',
            name: 'editquestion',
            component: EditQuestion
        },
        {
            path: '/answers/:id/edit',
            name: 'editanswer',
            component: EditAnswer
        },
        {
          path: '/tag',
          name: 'tag',
          component: Tag
        },
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: Jobs
        },
        {
            path: '/auth',
            name: 'auth',
            component: Auth,
            children: [{
                path: '/auth/signin',
                name: 'signin',
                component: Signin
            }, {
                path: '/auth/signup',
                name: 'signup',
                component: Signup
            }]
        },
    ]
})
