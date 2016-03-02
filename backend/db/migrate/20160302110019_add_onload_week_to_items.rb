class AddOnloadWeekToItems < ActiveRecord::Migration
  def change
    add_column :items, :onload_week, :string
  end
end
