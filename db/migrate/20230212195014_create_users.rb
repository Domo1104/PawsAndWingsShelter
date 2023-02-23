class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :phone
      t.string :address
      t.string :city_town
      t.string :state
      t.string :zipcode
      t.string :password_digest

      t.timestamps
    end
  end
end
