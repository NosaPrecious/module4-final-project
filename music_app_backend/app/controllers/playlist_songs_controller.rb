class PlaylistSongsController < ApplicationController

  def index
    render json: PlaylistSong.all
  end

  def create
  PlaylistSong.find_or_create_by(song_id: params[:song_id], playlist_id: params[:playlistId])
  render json: {text: "Successful", status: 200}
  end

end
