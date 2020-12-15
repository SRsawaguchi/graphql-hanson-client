import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo'
import { newApolloClient } from './graphql/Client'

Vue.config.productionTip = false
Vue.use(VueApollo)

const apolloClient = newApolloClient('http://localhost:3020/query')
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  render: h => h(App),
  apolloProvider,
}).$mount('#app')
