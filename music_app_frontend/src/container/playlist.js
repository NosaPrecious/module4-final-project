import React, {Fragment} from 'react'
import Song from '../components/song.js'
import CardGroup from 'react-bootstrap/CardGroup'

class Playlist extends React.Component{


filteredPlaylist= ()=>{
  if(this.props.songList.length!== 0){
  let newFilteredArrSongs= this.props.songList.filter(song =>  song.song_name.includes(this.props.searchTerm))
  return newFilteredArrSongs;
}else{
    return []
  }
}

  render(){

      return(
        <Fragment>
          <div>
          <h2 style={{textAlign: "center", textDecoration: "underline"}}>View Playlist</h2>
          </div>
          <div>
          {
            (this.filteredPlaylist().length) !== 0?
            <CardGroup id="myCardGroup">
              {this.filteredPlaylist().map(s =>
                <Song
                  key={s.id}
                  songObj={s}
                  playlistId={this.props.songList[0].playlists.length !== 0? this.props.songList[0].playlists[0].id : null}
                  handleUserSelect={this.props.handleUserSelect}
                />
              )}
            </CardGroup>
          : <p style={{textAlign: 'center'}}>--Sorry, no song like that in this playlist--</p>
        }
          </div>
        </Fragment>
      )
  }
}

export default Playlist
