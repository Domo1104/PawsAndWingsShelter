class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :pet_id, :user_id
end
