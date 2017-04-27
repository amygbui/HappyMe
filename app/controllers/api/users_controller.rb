class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.includes(:reviews).find(params[:id])
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:name, :username, :password)
  end
end
