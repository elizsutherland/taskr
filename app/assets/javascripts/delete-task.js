$(function() {

var deleteTask = $("form.button_to");
  var deleteTaskFromServer = function() {
    var taskData = $(this).serialize();
    var conversation = $.ajax({
      type: "DELETE",
      url: $(this).attr("action"),
      data: taskData
    });
    conversation.done(addTaskToList);
    conversation.fail(onFailure);
    resetForm();
    return false;
  };


  var onFailure = function(ajaxObject){
    var htmlFromServer = ajaxObject.responseText;
    $("#errors").html(htmlFromServer);
  }

deleteTask.submit(deleteTaskFromServer); });
