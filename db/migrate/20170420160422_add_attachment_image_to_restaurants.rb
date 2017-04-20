class AddAttachmentImageToRestaurants < ActiveRecord::Migration
  def self.up
    change_table :restaurants do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :restaurants, :image
  end
end
