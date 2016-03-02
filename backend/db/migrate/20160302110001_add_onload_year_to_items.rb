class AddOnloadYearToItems < ActiveRecord::Migration
  def change
    add_column :items, :onload_year, :string
  end
end
