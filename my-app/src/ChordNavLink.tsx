import React, { ReactText } from 'react';
import Nav from 'react-bootstrap/Nav';

interface ChordListProgressions {
  [key: string]: string[];
}

const chords : ChordListProgressions = {
  "C"      : ['C', 'F', 'G', 'C'],
  "CSharp" : ['C#', 'F#', 'G#', 'C#'],
  "D"      : ['D', 'G', 'A', 'D'],
  "DSharp" : ['D#', 'G#', 'Bb', 'D#'],
  "Eb"     : ['Eb', 'Ab', 'Bb', 'Eb'],
  "E"      : ['E', 'A', 'B', 'E'],
  "F"      : ['F', 'C', 'Bb', 'F'],
  "FSharp" : ['F#', 'C#', 'B', 'F#'],
  "Gb"     : ['Gb', 'B', 'Db', 'Gb'],
  "G"      : ['G', 'C', 'D', 'G'],
  "GSharp" : ['G#', 'C#', 'D#', 'G#'],
  "Ab"     : ['Ab', 'Db', 'Eb', 'Ab'],
  "A"      : ['A', 'D', 'E', 'A'],
  "ASharp" : ['A#', 'D#', 'F', 'A#'],
  "Bb"     : ['Bb', 'Eb', 'F', 'Bb'],
  "B"      : ['B', 'E', 'F#', 'B'],
}

const ChordNavLink = ({ href, setChords, children } : { href: string, setChords: Function, children: ReactText }) =>
  <Nav.Link href={"#" + href} onClick={(e: any) => { setChords(chords[href]) }}>{children}</Nav.Link>

export default ChordNavLink;
