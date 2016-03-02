FactoryGirl.define do
  factory :item do
  
    food 
      initialize_with {new(food: food)}
    location
      initialize_with {new(location: location)}
    best_before "2016-07-20"
    onload_by "Andrew Insley"
    onload_year "2016"
    onload_week "1"
    onload_day "Sunday"

  end

  factory :food do
    name "Banana"
    store "Fresh"
    quantity 1
    quantity_type "kg"
    end_level 1
    price 1.50
  end

  factory :location do
    name "Test"
    deck '1'
    position '1'
    rack '1'
    store_type "Fresh"
  end 

end

# "id": 3,
#     "food_id": 2,
#     "location_id": 2,
#     "best_before": "2016-07-20",
#     "onload_by": "Andrew Insley",
#     "offload_by": null,
#     "created_at": "2016-03-02T11:06:47.289Z",
#     "updated_at": "2016-03-02T11:06:47.289Z",
#     "onload_year": null,
#     "onload_week": null,
#     "onload_day": null,
#     "offload_year": null,
#     "offload_week": null,
#     "offload_day": null