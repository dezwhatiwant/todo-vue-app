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
      newTask: {
        text: "",
      }
    };
  },
  created: function() {},
  methods: {
    addTask: function() {
      var newTaskInfo = {
        text: this.newTask.text,
        completed: false
      };
      
      if (this.newTask.text) {
        this.tasks.push(newTaskInfo);
        this.newTask.text = '';
      }
    },
    markComplete: function(inputTask) {
      var indexOfTask = this.tasks.indexOf(inputTask);
      this.tasks.splice(indexOfTask, 1);
    }
  },
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