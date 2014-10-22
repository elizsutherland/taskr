$(function() {
  var newTaskForm = $("form#new_task");

  var postTaskDataToServer = function() {
    var taskData = newTaskForm.serialize();
    var conversation = $.ajax({ url: "/tasks", type: "POST", data: taskData });
    conversation.done(addTaskToList);
    return false;
  };

  var resetForm = function() {
    newTaskForm.find("#task_tutle, #task_description").val("");
    newTaskForm.find("task_title").focus();
  };

  newTaskForm.submit(postTaskDataToServer);

  var addTaskToList = function(task) {
    var taskList = $("#incomplete_task_list");
    taskList.prepend(task);
  };

});
