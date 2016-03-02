class Item < ActiveRecord::Base
  validates :onload_year, presence: true
  validates :onload_week, presence: true
  validates :onload_day, presence: true
  validates :onload_by, presence: true
  validates :onload_by, presence: true
  validates :best_before, presence: true
  validates :food, presence: true
  validates :location, presence: true
  belongs_to :food
  belongs_to :location
end
