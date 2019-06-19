class AddPlaytimeToSong < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :play_time, :string
  end
end
