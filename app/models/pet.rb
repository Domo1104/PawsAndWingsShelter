class Pet < ApplicationRecord
    belongs_to :organization
    has_many :favorites, through: :user
end
