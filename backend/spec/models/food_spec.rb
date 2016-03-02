require 'spec_helper'

describe Item do
  before { @food = FactoryGirl.build(:food) }

  subject { @food }

  it { should respond_to(:name) }
  it { should respond_to(:store) }
  it { should respond_to(:quantity) }
  it { should respond_to(:quantity_type) }
  it { should respond_to(:end_level) }
  it { should respond_to(:price) }
  it { should be_valid }

  describe "when name is not present should not be valid" do
   
    before { @food.name = nil }
    it { should_not be_valid }
  end

  describe "when store is not present should not be valid" do
   
    before { @food.store = nil }
    it { should_not be_valid }
  end

  describe "when price is not present should not be valid" do
   
    before { @food.price = nil }
    it { should_not be_valid }
  end

  describe "when price is not a number should not be valid" do
   
    before { @food.price = "dog" }
    it { should_not be_valid }
  end

  describe "when quantity is not present should not be valid" do
   
    before { @food.quantity = nil }
    it { should_not be_valid }
  end

  describe "when quantity is not a number should not be valid" do
   
    before { @food.quantity = "dog" }
    it { should_not be_valid }
  end

  describe "when end_level is not present should not be valid" do
   
    before { @food.end_level = nil }
    it { should_not be_valid }
  end

  describe "when end_level is not a number should not be valid" do
   
    before { @food.end_level = "dog" }
    it { should_not be_valid }
  end

  describe " food name needs to be unique" do
    before do
      food_with_same_name = @food.dup
      food_with_same_name.save
    end
    it {should_not be_valid}
  end

end