class CreateFoods < ActiveRecord::Migration
  def change
    create_table :foods do |t|
      t.string :name
      t.string :store
      t.float :quantity
      t.string :quantity_type
      t.float :end_level
      t.float :price

      t.timestamps null: false
    end
  end
end
