class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :review, null: false
      t.integer :author_id, null: false
      t.integer :restaurant_id, null: false
      t.timestamps
    end

    add_index :reviews, [:author_id, :restaurant_id]
  end
end
