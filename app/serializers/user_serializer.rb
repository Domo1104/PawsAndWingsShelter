class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :email, :phone, :country, :address, :city_town, :zipcode, :password_digest
end
