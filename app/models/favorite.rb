class Favorite < ApplicationRecord
    belongs_to :pet
    belongs_to :user
end
