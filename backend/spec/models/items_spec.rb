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
end