import Vue from 'vue';
import VueLazyload from 'vue-lazyload';


Vue.use(VueLazyload, {
  lazyComponent: true,
  loading: "/loading-3.gif",
});
