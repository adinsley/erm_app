require 'spec_helper'

describe FoodsController do
  
  describe "GET #index" do
    before(:each) do
       @foods = FactoryGirl.create_list(:food, 10) 
        get :index, format: :json
    end
    it "returns the lists of items" do
        foods_response = JSON.parse(response.body, symbolize_names: true)
        expect(foods_response.length).to eql(10) 
    end

    it "returns the correct json item" do
        foods_response = JSON.parse(response.body, symbolize_names: true)
        expect(foods_response[0][:store]).to eql("Fresh") 
    end
    it { should respond_with 200 }
  end
end