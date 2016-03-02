json.array!(@foods) do |food|
  json.extract! food, :id, :name, :store, :quantity, :quantity_type, :end_level, :price
  json.url food_url(food, format: :json)
end
