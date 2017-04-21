class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where(review_id = params[:query])
    render :index
  end

  def show
    @review = Review.where(review_id = params[:id])
  end

  def create
    @review = Review.create(review_params)
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
    params.require(:review).permit(:rating, :review, :review_id, :author_id)
  end
end
