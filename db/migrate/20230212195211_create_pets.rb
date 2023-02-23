class CreatePets < ActiveRecord::Migration[7.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :breed
      t.string :location
      t.integer :age
      t.string :gender
      t.string :size
      t.string :color
      t.string :coat_length
      t.string :characteristics
      t.boolean :house_trained
      t.string :health
      t.string :comments

      t.timestamps
    end
  end
end
