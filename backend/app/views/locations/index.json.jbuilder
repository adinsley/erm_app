json.array!(@locations) do |location|
  json.extract! location, :id, :name, :deck, :position, :rack, :store_type
  json.url location_url(location, format: :json)
end
