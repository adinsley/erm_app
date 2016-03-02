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
   
   render status: 200, :json => @item

  end

  def new
    @item = Item.new
    @foods = Food.all
    @locations = Location.all
  end

  

  # GET /items/1/edit
  def edit
  end

  # POST /items
  # POST /items.json
  def create
        @item = Item.new(item_params)
        if @item.save
        @items = Item.all
        render status: 201, :json => @item
       
        else
          render status: 404,  json: { message: @item.errors}.to_json
        end
    
    
  end

  # PATCH/PUT /items/1
  # PATCH/PUT /items/1.json
  def update
    if @item.update(item_params)
   render :json => @item, :include =>[{:location =>{:except=>[:id, :created_at, :updated_at]}}, {:food =>{:except =>[:id, :created_at, :updated_at]}}], :except => [:created_at, :updated_at, :food_id, :location_id]
    else
      render status: 404,  json: {message: "Data Invalid"}.to_json
    end

    
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
      params.require(:item).permit(:food_id, :location_id, :best_before, :onload_year, :onload_week, :onload_day, :onload_by, :offload_year, :offload_week, :offload_day, :offload_by)
    end
end
