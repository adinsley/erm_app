class AddOffloadWeekToItems < ActiveRecord::Migration
  def change
    add_column :items, :offload_week, :string
  end
end
