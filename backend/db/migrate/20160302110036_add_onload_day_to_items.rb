class AddOnloadDayToItems < ActiveRecord::Migration
  def change
    add_column :items, :onload_day, :string
  end
end
