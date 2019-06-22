class PlaylistSongSerializer < ActiveModel::Serializer
  attributes :id, :song_id, :playlist_id
end
