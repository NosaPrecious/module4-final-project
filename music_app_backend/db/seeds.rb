# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Song.destroy_all
Playlist.destroy_all
PlaylistSong.destroy_all

user1= User.find_or_create_by(firstname: 'Nosa', lastname: 'Okundaye', email: 'nok@example.com')
user2= User.find_or_create_by(firstname: 'Ben', lastname: 'Philiphs', email: 'whatever@example.com')
user3= User.find_or_create_by(firstname: 'Jude', lastname: 'Nike', email: 'Juddy@example.com')
user4= User.find_or_create_by(firstname: 'Sam', lastname: 'Epps', email: 'sammy@example.com')

song1= Song.find_or_create_by(song_name: "old town road",
                              artist: "Lil Nas X",
                              genre: "country",
                              play_time: "2",
                              album_art_name: "lil-nas-x",
                              description: "All about fun",
                              likes: "50")

song2= Song.find_or_create_by(song_name: "Bad Guy",
                              artist: "Billie Eilish",
                              genre: "Pop",
                              play_time: "3",
                              album_art_name: "billie-eilish",
                              description: "Loving this song",
                              likes: "20")



playlist1= Playlist.find_or_create_by(name: 'Old Skool Jamz',user_id: user1.id )

myplaylist1= PlaylistSong.find_or_create_by(song_id: song1.id,playlist_id: playlist1.id)

myplaylist2= PlaylistSong.find_or_create_by(song_id: song2.id,playlist_id: playlist1.id)
