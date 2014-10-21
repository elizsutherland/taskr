$(function() {
  var newTaskForm = $("form#new_task");

  var postTaskDataToServer = function() {
    var taskData = newTaskForm.serialize();
    var conversation = $.ajax({ url: "/tasks", type: "POST", data: taskData });
    conversation.done(addTaskToList);
    return false;
  };

  newTaskForm.submit(postTaskDataToServer);

  var addTaskToList = function(task) {
    var taskList = $("ul");
    taskList.prepend(task);
  };

});
