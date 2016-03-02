class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name
      t.string :deck
      t.string :position
      t.string :rack
      t.string :store_type

      t.timestamps null: false
    end
  end
end
