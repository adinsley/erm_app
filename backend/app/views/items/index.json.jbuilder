json.array!(@items) do |item|
  json.extract! item, :id, :food_id, :location_id, :best_before, :onload_date, :onload_by, :offload_date, :offload_by
  json.url item_url(item, format: :json)
end
