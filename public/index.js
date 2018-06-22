/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      tasks: [],
      newTask: {
        text: "",
      }
    };
  },
  created: function() {
    axios
      .get('/api/tasks')
      .then(function(response) {
        this.tasks = response.data;
      }.bind(this));
  },
  methods: {
    addTask: function() {
      if (this.newTask.text) {
        var clientParams = {
          text: this.newTask.text,
          completed: false
        };

        axios
          .post('/api/tasks', clientParams)
          .then(function(response) {
            this.tasks.push(response.data);
            this.newTask.text = '';
          }.bind(this));
      
      }
    },
    deleteTask: function(inputTask) {
      var index = inputTask
      axios
        .delete('/api/tasks/' + inputTask.id );
    },
    toggleCompleted: function(inputTask) {
      // inputTask.completed = !inputTask.completed;
      this.$set(inputTask, "completed", !(inputTask.completed));
    },
    countIncomplete: function(inputTask) {
      var count = 0;
      this.tasks.forEach(function(task) {
        if (!task.completed) {
          count++;   
        }
      });     
      return count;
    },
    deleteCompleted: function() {
      var incompleTasks = [];
      this.tasks.forEach(function(task) {
        if (!task.completed) {
          incompleTasks.push(task);
        }
      });
      this.tasks = incompleTasks;
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