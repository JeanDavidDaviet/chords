import { Progression } from "../progressions/Progression";
import { CProgression } from "../progressions/C";
import { DProgression } from "../progressions/D";
import { EProgression } from "../progressions/E";
import { FProgression } from "../progressions/F";
import { GProgression } from "../progressions/G";
import { AProgression } from "../progressions/A";
import { BProgression } from "../progressions/B";
import { AFlatProgression } from "../progressions/AFlat";
import { EFlatProgression } from "../progressions/EFlat";
import { BFlatProgression } from "../progressions/BFlat";
import { CSharpProgression } from "../progressions/CSharp";
import { FSharpProgression } from "../progressions/FSharp";

const chordText = document.querySelector('h1') as HTMLHeadingElement;
const pauseButton = document.querySelector('button') as HTMLButtonElement;
let lastChord = '';
let intervalID = 0;
let state = true;
const queryParams = new URLSearchParams(window.location.search);
const tempo = parseInt(queryParams.get('t'), 10) || 25;

const getRandomChord = (progression: Progression) : string => {
  const random = Math.ceil(Math.random() * 7);
  return progression.get(random);
}

const getProgressionFromURL = (progression: string) : Progression => {
  switch (progression) {
    case 'D':
      return new DProgression();
    case 'E':
      return new EProgression();
    case 'F':
      return new FProgression();
    case 'G':
      return new GProgression();
    case 'A':
      return new AProgression();
    case 'B':
      return new BProgression();
    case 'Bb':
      return new BFlatProgression();
    case 'Eb':
      return new EFlatProgression();
    case 'Ab':
      return new AFlatProgression();
    case 'CSharp':
      return new CSharpProgression();
    case 'FSharp':
      return new FSharpProgression();
    case 'C': default:
      return new CProgression();
  }
}

const changeChords = () => {
  const progression = getProgressionFromURL(queryParams.get('progression') || 'C');
  let newChord = getRandomChord(progression);
  while(lastChord === newChord) {
    newChord = getRandomChord(progression);
  }
  lastChord = newChord;
  chordText.innerHTML = newChord;
}

const play = () => {
  intervalID = setInterval(changeChords, 1000 / (tempo / 60));
}

const pause = () => {
  clearInterval(intervalID); 
}

pauseButton.addEventListener('click', (e: MouseEvent) => {
  if(state){
    pause();
    pauseButton.innerHTML = 'Play';
  }else{
    play();
    pauseButton.innerHTML = 'Pause';
  }
  state = !state;
  e.preventDefault();
});

changeChords();
play();

export { Progression };
