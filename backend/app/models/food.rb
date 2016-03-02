class Food < ActiveRecord::Base
  validates :name, {uniqueness: true, presence: true}
  validates :store, presence: true
  validates :price, presence: true, numericality: true
  validates :quantity, presence: true, numericality: true
  validates :end_level, presence: true, numericality: true
  has_many :Items
end
