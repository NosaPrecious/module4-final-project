# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'json'

User.destroy_all
Song.destroy_all
Playlist.destroy_all
PlaylistSong.destroy_all

music_data= "../db.json"

target= JSON.load(File.read(music_data))

user1= User.find_or_create_by(firstname: 'Nosa', lastname: 'Okundaye', email: 'nok@example.com')
user2= User.find_or_create_by(firstname: 'Ben', lastname: 'Philiphs', email: 'whatever@example.com')
user3= User.find_or_create_by(firstname: 'Jude', lastname: 'Nike', email: 'Juddy@example.com')
user4= User.find_or_create_by(firstname: 'Sam', lastname: 'Epps', email: 'sammy@example.com')

i=0
arrLen= target["songs"].length

while i < arrLen
  Song.find_or_create_by(
      song_name: target["songs"][i]["song_name"],
      artist: target["songs"][i]["artist"],
      genre: target["songs"][i]["genre"],
      play_time: target["songs"][i]["play_time"],
      album_art_name: target["songs"][i]["album_art_name"],
      description: target["songs"][i]["description"],
      likes: target["songs"][i]["likes"])
  i += 1
end

playlist1= Playlist.find_or_create_by(name: 'Old Skool Jamz',user_id: user1.id )

x=0

while x < 1
  PlaylistSong.find_or_create_by(song_id: Song.find(x+1).id,playlist_id: playlist1.id)
  x += 1
end
