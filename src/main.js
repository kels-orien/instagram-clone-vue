// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import {
  SubscriptionClient,
  addGraphQLSubscriptions
} from "subscriptions-transport-ws";
import Vue from "vue";
import VueApollo from "vue-apollo";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: "https://api.graph.cool/simple/v1/cjjq4d00e1ee40189opoksh4r"
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

// 5
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: "loading"
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  // 7
  provide: apolloProvider.provide(),
  router,
  created() {
        this.$router.push('/login')
  },
  render: h => h(App)
});
