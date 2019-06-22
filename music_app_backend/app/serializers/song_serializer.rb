class SongSerializer < ActiveModel::Serializer
  attributes :id, :song_name, :artist, :genre, :play_time, :album_art_name, :description, :likes

  has_many :playlists, through: :playlist_songs
end
