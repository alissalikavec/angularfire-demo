(function() {
  function HomeCtrl(Task) {
    this.title = "AngularFire demo-app!"
    this.tasks = Task.all;

    this.createTask = function (value) {
      Task.addTask(value);
    }
 	}

  angular
    .module('demoApp')
    .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
