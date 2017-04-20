class Api::RestaurantsController < ApplicationController
  def index
    # if params.query
      # @searched = Restaurant.where("name LIKE ?", "%$?{params[:query]}%")
      # Restaurant.where(name.include?(params[:query]))
    # else
    debugger
      @restaurants = Restaurant.all
    # end
    # @searched = Restaurant.where("name.downcase LIKE %?%", params[:query])

    render :index
  end

  def create
    @restaurant = Restaurant.create(restaurant_params)
    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors, status: 422
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render :show
  end

  def update
    @restaurant = Restaurant.find(params[:id])

    if @restaurant.update(restaurant_params)
      render :show
    else
      render json: @restaurant.errors, status: 422
    end
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(
      :name, :address, :city, :state, :zip,
      :lat, :lng, :phone_number, :description,
    )
  end
end
