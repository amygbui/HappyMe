class CreateBusinesses < ActiveRecord::Migration[5.0]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip, null: false
      t.string :phone_number, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :description, null: false
      t.string :profile_pic_url, null: false
      t.timestamps
    end

    add_index :businesses, [:name, :address], unique: true
  end
end
