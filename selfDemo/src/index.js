// import SelfVue from "evel-vue"
import SelfVue from "./js/index.js"
new SelfVue({
  el: '#app',
  data: {
    title: 'hello world',
    name: 'canfoo'
  },
  methods: {
    clickMe: function () {
      this.title = 'hello worldrr';
    }
  },
  mounted: function () {
    window.setTimeout(() => {
      this.title = '你好';
    }, 1000);
  }
});