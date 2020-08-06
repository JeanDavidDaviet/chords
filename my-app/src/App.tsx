import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import './App.css';
import Chords from './Chords';
import ChordsNav from './ChordsNav';

function App() {

  const [chords, setChords] = useState(['C', 'D', 'E', 'F']);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 750,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    centerPadding: '0'
  };

  return (
    <>
      {chords}
      <Navbar bg="dark" variant="dark" className="mb-2">
        <Navbar.Brand href="#home">
          Chord Progressions
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <ChordsNav setChords={setChords}></ChordsNav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Slider {...settings}>
          {chords.map(c => 
              <Card style={{ width: '18rem' }} key={c}>
              <Card.Body>
                <Card.Title>{c}</Card.Title>
              </Card.Body>
            </Card>
          )}
        </Slider>
        <Button onClick={(e) => { setChords(['C', 'D', 'E', 'F', 'G']) } }>Add G</Button>
        <Chords></Chords>
      </Container>
    </>
  );
}

export default App;
