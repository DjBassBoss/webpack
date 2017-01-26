{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import directives from './directives/directives'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{#vuex}}
import Store from './store/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}
{{#vueresource}}
import Resource from 'vue-resource'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(Resource){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vueresource}}
{{#vuerouter}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuerouter}}

Vue.use(directives)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#vuex}}Store,{{/vuex}}
  {{#vuerouter}}router,{{/vuerouter}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
