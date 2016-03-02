class AddOffloadYearToItems < ActiveRecord::Migration
  def change
    add_column :items, :offload_year, :string
  end
end
