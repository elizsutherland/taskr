$(function() {
  var newTaskForm = $("form#new_task");

  var postTaskDataToServer = function() {
    var taskData = newTaskForm.serialize();
    var conversation = $.ajax({ url: "/tasks", type: "POST", data: taskData });
    conversation.done(addTaskToList);
    conversation.fail(onFailure);
    resetForm();
    return false;
  };

  var onFailure = function(ajaxObject){
    var htmlFromServer = ajaxObject.responseText;
    $("#errors").html(htmlFromServer);
  }

  var resetForm = function() {
    newTaskForm.find("#task_title, #task_description").val("");
    newTaskForm.find("task_title").focus();
  };

  newTaskForm.submit(postTaskDataToServer);

  var addTaskToList = function(task) {
    var taskList = $("#incomplete_task_list");
    taskList.prepend(task);
    $("#errors").html("")
  };
});
