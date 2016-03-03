require 'spec_helper'

describe LocationsController do
  
  describe "GET #index" do
    before(:each) do
       @foods = FactoryGirl.create_list(:location, 10) 
        get :index, format: :json
    end
    it "returns the lists of items" do
        locations_response = JSON.parse(response.body, symbolize_names: true)
        expect(locations_response.length).to eql(10) 
    end

    it "returns the correct json item" do
        locations_response = JSON.parse(response.body, symbolize_names: true)
        expect(locations_response[3][:store_type]).to eql("Fresh") 
    end
    it { should respond_with 200 }
  end
end