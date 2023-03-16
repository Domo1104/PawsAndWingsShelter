class PetsController < ApplicationController
    skip_before_action :authorized, only: [:index, :show]
    
    #GET /pets
    def index
        pets = Pet.all
        render json: pets
    end

    #GET /pets/:id
    def show
        pet = find_pet
        render json: pet
    end

    #POST /pets/:id
    def create
        pet = Pet.create!(pet_params)
        render json: pets, status: :created
    end

    #PATCH /pets/:id
    def update
        pet = find_pet
        pet.update(pet_params)
        render json: pet
    end

    #DELETE /pets/:id
    def destroy
        pet = find_pet
        pet.destroy
        head :no_content
    end

    private

    def find_pet
        Pet.find_by(id: params[:id])
    end

    def pet_params
        perams.permit(:name, :breed, :location, :age, :gender, :size, :color, :coat_length, :characteristics, :house_trained, :health, :comments)
    end
end
