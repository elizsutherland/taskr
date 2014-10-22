class TasksController < ApplicationController
  before_action :require_login
  def index
    @incomplete_tasks = current_user.tasks.incomplete
    @complete_tasks = current_user.tasks.complete
    @task = Task.new
  end

  def create
    @task = current_user.tasks.new(task_params)
    if @task.save
      render @task
    else
      render partial: "error_messages",
        locals: { target: @task },
        status: 422
    end
  end

  def update
    task = current_user.tasks.find(params[:id])
    task.update(task_params)
    redirect_to tasks_path
  end

  def destroy
    task = current_user.tasks.find(params[:id])
    task.destroy
    render nothing: true
  end
  private

  def task_params
    params.require(:task).permit(:title, :description, :completed)
  end
end
