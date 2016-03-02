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
end