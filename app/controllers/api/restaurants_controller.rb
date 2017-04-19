class Api::RestaurantsController < ApplicationController
  def index
  end

  def create
  end

  def show
  end

  def update
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(
      :name, :address, :city, :state, :zip,
      :lat, :lng, :phone_number, :description,
    )
  end
end
