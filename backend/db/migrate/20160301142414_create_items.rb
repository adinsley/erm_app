class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.references :food, index: true, foreign_key: true
      t.references :location, index: true, foreign_key: true
      t.date :best_before
      t.date :onload_date
      t.string :onload_by
      t.date :offload_date
      t.string :offload_by

      t.timestamps null: false
    end
  end
end
