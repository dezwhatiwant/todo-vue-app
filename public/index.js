/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      tasks: [
        { id: 1,
          text: "Make the bed",
          completed: false
        },

        { id: 2,
          text: "Mow the lawn",
          completed: false
        },

        { id: 3,
          text: "Feed the dog",
          completed: false
        }
      ],
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});