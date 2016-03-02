class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :edit, :update, :destroy]

  # GET /items
  # GET /items.json
  def index
    @items = Item.all

    render :json => @items, :include =>[{:location =>{:except=>[:id, :created_at, :updated_at]}}, {:food =>{:except =>[:id, :created_at, :updated_at]}}], :except => [:created_at, :updated_at, :food_id, :location_id]
  end

  # GET /items/1
  # GET /items/1.json
  def show
   
    render :json => @item

  end

  

  # GET /items/1/edit
  def edit
  end

  # POST /items
  # POST /items.json
  def create
        Item.create(item_params)
        @items = Item.all
        render :json => @items, :include =>[{:location =>{:except=>[:id, :created_at, :updated_at]}}, {:food =>{:except =>[:id, :created_at, :updated_at]}}], :except => [:created_at, :updated_at, :food_id, :location_id]
    
    
  end

  # PATCH/PUT /items/1
  # PATCH/PUT /items/1.json
  def update
    @item.update(item_params)
   render :json => @item, :include =>[{:location =>{:except=>[:id, :created_at, :updated_at]}}, {:food =>{:except =>[:id, :created_at, :updated_at]}}], :except => [:created_at, :updated_at, :food_id, :location_id]

    
  end

  # DELETE /items/1
  # DELETE /items/1.json
  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    @items = Item.all
    render :json => @items, :include =>[{:location =>{:except=>[:id, :created_at, :updated_at]}}, {:food =>{:except =>[:id, :created_at, :updated_at]}}], :except => [:created_at, :updated_at, :food_id, :location_id]
    
    
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def item_params
      params.require(:item).permit(:food_id, :location_id, :best_before, :onload_date, :onload_by, :offload_date, :offload_by)
    end
end
