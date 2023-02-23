class FavoritesController < ApplicationController
    before_action :authorized
    skip_before_action :authorized, only: [:show]

    def show
        favorite = Favorite.where(user_id: params[:id])
        render json: favorite
    end

    #POST /favorites/:id
    def create
        favorite = favorite.create!(favorite_params)
        render json: favorite, status: :created
    end

    #DELETE /favorites/:id
    def destroy
        favorite = find_pet
        find_pet.destroy
        head :no_content
    end
end

private 

def find_pet
    Pet.find_by(id: params[:id])
end

def favorite_params
    params.permit(:pet_id, :user_id)
end

def authorized
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
end