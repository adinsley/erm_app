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
    food_id "1"
    location_id "1"

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

