require 'spec_helper'

describe Item do
  before { @item = FactoryGirl.build(:item) }

  subject { @item }

  it { should respond_to(:food_id) }
  it { should respond_to(:location_id) }
  it { should respond_to(:best_before) }
  it { should respond_to(:onload_by) }
  it { should respond_to(:onload_year) }
  it { should respond_to(:onload_week) }
  it { should respond_to(:onload_day) }
  it { should be_valid }

  describe "when onload_year is not present" do
   
    before { @item.onload_year = nil }
    it { should_not be_valid }
  end

  describe "when onload_week is not present" do
   
    before { @item.onload_week = nil }
    it { should_not be_valid }
  end

  describe "when onload_day is not present" do
   
    before { @item.onload_day = nil }
    it { should_not be_valid }
  end

  describe "when onload_by is not present" do
   
    before { @item.onload_by = nil }
    it { should_not be_valid }
  end

  describe "when best_before is not present" do
   
    before { @item.best_before = nil }
    it { should_not be_valid }
  end

  describe "when food object is not present" do
   
    before { @item.food = nil }
    it { should_not be_valid }
  end

  describe "when food object is not present" do
   
    before { @item.location = nil }
    it { should_not be_valid }
  end



end