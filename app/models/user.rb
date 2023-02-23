class User < ApplicationRecord
    has_many :pets
    has_many :organizations, through: :pets

    validates :email, uniqueness: true
    validates :first_name, :last_name, :password, presence: true
    validates :password, confirmation: true

    has_secure_password
end
