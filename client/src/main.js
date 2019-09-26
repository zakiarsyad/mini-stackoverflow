import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueQuillEditor from 'vue-quill-editor'
import '@/assets/css/tw-output.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';
import 'vue-loading-overlay/dist/vue-loading.css';
import VuejsDialog from 'vuejs-dialog';
import VuejsDialogMixin from 'vuejs-dialog/dist/vuejs-dialog-mixin.min.js'
import 'vuejs-dialog/dist/vuejs-dialog.min.css';


Vue.config.productionTip = false

Vue.use(VuejsDialog);
Vue.use(VueToast);
Vue.use(VueQuillEditor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
