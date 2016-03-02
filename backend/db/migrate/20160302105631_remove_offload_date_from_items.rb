class RemoveOffloadDateFromItems < ActiveRecord::Migration
  def change
    remove_column :items, :offload_date, :date
  end
end
