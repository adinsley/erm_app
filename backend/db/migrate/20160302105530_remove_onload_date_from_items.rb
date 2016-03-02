class RemoveOnloadDateFromItems < ActiveRecord::Migration
  def change
    remove_column :items, :onload_date, :date
  end
end
