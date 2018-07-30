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
import { ApolloLink } from "apollo-link";
import { GC_USER_ID, GC_AUTH_TOKEN } from "./constants/settings";

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: "https://api.graph.cool/simple/v1/cjjq4d00e1ee40189opoksh4r"
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = localStorage.getItem(GC_AUTH_TOKEN);
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  });

  return forward(operation);
});

const apolloClient = new ApolloClient({
  // 2
  link: authMiddleware.concat(httpLink),
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
  render: h => h(App)
});
