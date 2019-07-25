import React, {Fragment} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import LoginPage from './container/loginPage.js';
import Playlist from './container/playlist.js'
import About from './container/about.js'
import Profile from './container/userProfile.js'
// import Search from './components/search.js'
// import SongDetail from './container/songDetail.js'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'

class App extends React.Component{

  constructor(){
    super()
    this.state={
      musicArr: [],
      userPlaylist: [],
      searchTerm: ""
    }
  }

  componentDidMount = () => {
    //fetch all the songs from server
    fetch("http://localhost:3001/songs")
    .then(resp => resp.json())
    .then(musicData => {
        this.setState({
          musicArr: musicData
        })
    })

    //fetch all the user playlists
    fetch("http://localhost:3001/playlists")
    .then(resp => resp.json())
    .then(musicData => {
        const{id, songs}= musicData[0]
        let newSongArr= [id, songs]
        this.setState({
          userPlaylist: newSongArr
        }, () => console.log(this.state.userPlaylist))
    })
  }

  handleChangeText= (event) => {
    let textValue= event.target.value

    this.setState({
      searchTerm: textValue
    })
  }

  handleUserSelect= (songObj, playlistId) => {
    let songs = [...this.state.userPlaylist[1]]
    let foundSong= songs.find(
      song => song.id === songObj.id)
    if(foundSong === undefined){
      songs.push(songObj)
      this.setState({
        userPlaylist : songs
      }, () => console.log(this.state.userPlaylist))

      //update backend with music added to the user profile using fetch
      fetch("http://localhost:3001/playlist_songs",{
            method : "POST",
            headers:{
              "Content-Type" : "application/json",
              "Accept" : "application/json"
            },
            body:JSON.stringify({
              song_id : songObj.id,
              playlistId: playlistId
            })
    })
      .then(resp => resp.json())
      .then(responseText => {
        debugger
        console.log(responseText)
      })

  }else{
      console.log("Sorry, you can't have the same music more than once!!!", this.state.userPlaylist)
  }
}

//
// handleFetchUserPlaylist= () => {
//
// }


  render(){
    return (
      <Fragment>
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                  <Nav defaultActiveKey="/login" as="ul">
                    <Nav.Item as="li">
                      <Nav.Link href="/login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="/playlists">Playlist</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                    <Nav.Link href="http://google.com">Song Detail</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                    <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Form inline className="sBar">
                       <FormControl
                       type="text"
                       placeholder="Search"
                       className="myForm"
                       onChange={this.handleChangeText}
                       />
                    </Form>
                  </Nav>
          </Container>
          </Navbar>
          <Switch>
              <Route
                  path = '/playlists'
                  render={() => <Playlist
                    songList={this.state.musicArr}
                    searchTerm={this.state.searchTerm}
                    handleUserSelect={this.handleUserSelect}
                    />}
              />
              <Route
                path="/profile"
                render={() => <Profile
                      mySongs={this.state.userPlaylist}
                  />}
              />
              <Route path="/about" render={() => <About />}/>
              <Route
                  path = '/'
                  render={() => <LoginPage />
                  }
              />
          </Switch>
      </Fragment>
    );
  }
}

export default App;
