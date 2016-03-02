require 'spec_helper'

describe ItemsController do
  
  describe "GET #show" do
    
      before(:each) do
           @item = FactoryGirl.create :item
           get :show, id: @item.id, format: :json
         end

         it "returns the information about a single item" do
               item_response = JSON.parse(response.body, symbolize_names: true)
               expect(item_response[:onload_day]).to eql @item.onload_day
             end

             it { should respond_with 200 }

  describe "POST #create" do

          before(:each) do
          @item_attributes = FactoryGirl.attributes_for :item
          post :create, { item: @item_attributes }, format: :json
        end

          it "renders the json representation for the user record just created" do
          item_response = JSON.parse(response.body, symbolize_names: true)
          expect(item_response[:onload_week]).to eql @item_attributes[:onload_week]

        end

          it { should respond_with 201 }
        end


    context "when is not created" do

        before(:each) do
          #notice I'm not including the location_id
          @invalid_item_attributes = {
            best_before: "2016-07-20",
            onload_by: "Andrew Insley",
            onload_year: "2016",
            onload_week: "1",
            onload_day: "Sunday",
            food_id: 1
            
                                        }
          post :create, { item: @invalid_item_attributes  }, format: :json
        end

        it "renders an errors json" do
          item_response = JSON.parse(response.body, symbolize_names: true)
          expect(item_response).to have_key(:message)
        end

        it "renders the json errors on why the user could not be created" do
          user_response = JSON.parse(response.body, symbolize_names: true)
          expect(user_response[:message][:location]).to include "can't be blank"
        end

        it { should respond_with 404 }
    end
   end
          
      describe "PUT/PATCH #update" do

          context "when is successfully updated" do
            before(:each) do
              @item = FactoryGirl.create :item
              patch :update, { id: @item.id,
                               item: { onload_day: "Monday" } }, format: :json
            end

            it "renders the json representation for the updated user" do
              item_response = JSON.parse(response.body, symbolize_names: true)
              expect(item_response[:onload_day]).to eql "Monday"
            end

            it { should respond_with 201 }
          end

          context "when is not created" do
            before(:each) do
              @item = FactoryGirl.create :item
              patch :update, { id: @item.id,
                               item: { onload_day: nil } }, format: :json
            end

            it "renders an errors json" do
              item_response = JSON.parse(response.body, symbolize_names: true)
              expect(item_response).to have_key(:message)
            end

            it "renders the json errors on why the user could not be created" do
              item_response = JSON.parse(response.body, symbolize_names: true)
              expect(item_response[:message][:onload_day]).to include "can't be blank"
            end

            it { should respond_with 404 }
          end
      end
end