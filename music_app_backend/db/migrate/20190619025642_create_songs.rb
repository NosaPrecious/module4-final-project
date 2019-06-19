class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :song_name
      t.string :artist
      t.string :genre
      t.string :album_art_name
      t.string :description
      t.string :likes

      t.timestamps
    end
  end
end
