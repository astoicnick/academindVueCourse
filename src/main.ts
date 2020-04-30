import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/site.scss'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    changeName(updatedName: string) {
      this.$emit('nameChanged', updatedName)
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')