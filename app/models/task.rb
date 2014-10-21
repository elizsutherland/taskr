class Task < ActiveRecord::Base
  belongs_to :user
  validates :title, presence: true
  validates :description, presence: true

  def self.incomplete
    where(completed: false)
  end
end
