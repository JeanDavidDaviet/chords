import React from 'react';
import ChordNavLink from './ChordNavLink';

interface ChordList {
  [key: string]: string;
}

function ChordsNav({ setChords } : { setChords : Function }) { 
  const chords : ChordList = {
    "C": "C",
    "C#": 'CSharp',
    "D": "D",
    "D#": 'DSharp',
    "Eb": 'Eb',
    "E": 'E',
    "F": 'F',
    "F#": 'FSharp',
    "Gb": 'Gb',
    "G": 'G',
    "G#": 'GSharp',
    "Ab": 'Ab',
    "A": 'A',
    "A#": 'ASharp',
    "Bb": 'Bb',
    "B": 'B',
  };
  
  return <>{Object.keys(chords).map(key => 
    <ChordNavLink key={key} href={chords[key]} setChords={setChords}>{key}</ChordNavLink>
  )}</>;
}

export default ChordsNav;
