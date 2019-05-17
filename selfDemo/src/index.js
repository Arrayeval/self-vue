import SelfVue from "evel-vue"
// var ele = document.querySelector('#name');
var selfVue = new SelfVue({
  el: "#app",
  data: {
    title: 'hello world',
    name: ''
  }
});

window.setTimeout(function () {
  selfVue.title = 'test';
}, 2000);

window.setTimeout(function () {
  selfVue.name = 'canfoo';
}, 2500);