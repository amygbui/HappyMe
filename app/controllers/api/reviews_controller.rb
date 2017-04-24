class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where("restaurant_id = ?", params[:restaurant_id])
    render :index
  end

  def show
    @review = Review.where(review_id = params[:id])
  end

  def create
    @review = Review.create(review_params)
    @review.author_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])

    if @review.update(review_params)
      render :show
    else
      render json: @review.errors, status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:rating, :review, :restaurant_id)
  end
end
