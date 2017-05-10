(function() {
  function Task($firebaseArray) {
    var ref = firebase.database().ref();
    var tasks = $firebaseArray(ref);

    return {
      addTask: function(newTask) {
        tasks.$add({name: newTask});
      },
      all: tasks
    };
  }

angular
  .module('demoApp')
  .factory('Task', ['$firebaseArray', Task])
})();
