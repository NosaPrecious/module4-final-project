import React from 'react'
import Card from 'react-bootstrap/Card'


function Song(props){

  let myEditedName= () => {
    return props.songObj.artist.split(" ").join("-").toLowerCase()
  }

  return(
    <div>
        <Card
        data-card-id={`${props.songObj.id}`}
        bg="secondary"
        border="success" text="white"
        style={{
          borderRadius: '2%',
          width: '200px',
          float: 'left',
          marginTop: '20px',
          marginLeft: '30px',
          boxShadow: '10px 10px 8px #888888'
        }}
        onDoubleClick={(_) => props.handleUserSelect(props.songObj)}
        >
        <Card.Header>--Song Detail--</Card.Header>
        <Card.Img variant="top"
            src={`./album_arts/${myEditedName()}.jpg`}
            style={{
              width: 'auto',
            maxWidth: '250px',
            height : 'auto',
            maxHeight : '250px'
          }}
            />
          <Card.Body>
            <Card.Title style={{fontFamily: 'Dosis', fontSize: '.7em'}}>{props.songObj.artist}</Card.Title>
            <Card.Text style={{fontFamily: 'Dosis', fontSize: '.7em'}}>
              {props.songObj.description}
            </Card.Text>
            <Card.Link href="#">Find more Detail...</Card.Link>
          </Card.Body>
          </Card>
    </div>
  )

}

export default Song
