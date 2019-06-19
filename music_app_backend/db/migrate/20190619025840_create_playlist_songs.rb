class CreatePlaylistSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :playlist_songs do |t|
      t.integer :song_id
      t.string :playlist_id

      t.timestamps
    end
  end
end
