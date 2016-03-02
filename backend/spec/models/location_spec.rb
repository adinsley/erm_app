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
end