class Location < ActiveRecord::Base
  validates :name, {uniqueness: true, presence: true}
  validates :position, presence: true
  validates :deck, presence: true
  validates :rack, presence: true
  validates :store_type, presence: true


  has_many :locations
end
