class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.string :pet_id
      t.string :user_id

      t.timestamps
    end
  end
end
