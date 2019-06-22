import React, {Fragment} from 'react'
import Song from '../components/song'
import CardGroup from 'react-bootstrap/CardGroup'


class Profile extends React.Component{

  render(){
    return(
      <Fragment>
      <CardGroup id="myCardGroup">
        {this.props.mySongs.length === 0? null : this.props.mySongs[1].map(song => <Song
            key= {song.id}
            songObj={song}
          />)}
        </CardGroup>
      </Fragment>
    )
  }
}

export default Profile
