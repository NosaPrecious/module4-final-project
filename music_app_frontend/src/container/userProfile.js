import React, {Fragment} from 'react'


class Profile extends React.Component{

  render(){
    // console.log(this.props.mySongs)
    return(
      <Fragment>
        {this.props.mySongs}
      </Fragment>
    )
  }
}

export default Profile
