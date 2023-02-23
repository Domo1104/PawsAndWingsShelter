class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :location, :age, :gender, :size, :color, :coat_length, :characteristics, :house_trained, :health, :comments
end
