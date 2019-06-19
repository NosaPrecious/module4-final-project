import React, {Fragment} from 'react'
import Song from '../components/song.js'
import CardGroup from 'react-bootstrap/CardGroup'

class Playlist extends React.Component{

  render(){
      let filteredPlaylist= this.props.songList.filter(song => song.song_name.includes(this.props.searchTerm))
    return(
      <Fragment>
        <div>
        <h2 style={{textAlign: "center", textDecoration: "underline"}}>View Playlist</h2>
        </div>
        <div>{filteredPlaylist.length !== 0?
        <CardGroup id="myCardGroup">
          {filteredPlaylist.map(s =>
            <Song
              key={s.id}
              songObj={s}
              handleUserSelect={this.props.handleUserSelect}
            />
          )}
        </CardGroup>
      : <p style={{textAlign: 'center'}}>--Sorry, no song like that in this playlist--</p>}
        </div>
      </Fragment>
    )
  }
}

export default Playlist
