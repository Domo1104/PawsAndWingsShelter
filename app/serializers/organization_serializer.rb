class OrganizationSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :email, :phone
end
