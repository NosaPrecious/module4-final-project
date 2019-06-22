class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :user
  has_many :songs, through: :playlist_songs
end
