class CreateOrganizations < ActiveRecord::Migration[7.0]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :location
      t.string :email
      t.integer :phone

      t.timestamps
    end
  end
end
