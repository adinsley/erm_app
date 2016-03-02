require 'spec_helper'

describe Item do
  before { @location = FactoryGirl.build(:location) }

  subject { @location }

  it { should respond_to(:name) }
  it { should respond_to(:deck) }
  it { should respond_to(:position) }
  it { should respond_to(:rack) }
  it { should respond_to(:store_type) }
  it { should be_valid }

  describe "when name is not present" do
   
    before { @location.name = nil }
    it { should_not be_valid }
  end

  describe "when deck is not present" do
   
    before { @location.deck = nil }
    it { should_not be_valid }
  end

  describe "when position is not present" do
   
    before { @location.position = nil }
    it { should_not be_valid }
  end

  describe "when rack is not present" do
   
    before { @location.rack = nil }
    it { should_not be_valid }
  end

  describe "when store type is not present" do
   
    before { @location.store_type = nil }
    it { should_not be_valid }
  end

  describe "name needs to be unique" do
    before do
      location_with_same_name = @location.dup
      location_with_same_name.save
    end
    it {should_not be_valid}
  end
 

end