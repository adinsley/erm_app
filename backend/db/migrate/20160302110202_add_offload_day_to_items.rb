class AddOffloadDayToItems < ActiveRecord::Migration
  def change
    add_column :items, :offload_day, :string
  end
end
