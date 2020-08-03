import { Scale } from './store';

enum chords {
  C,
  D,
  E,
  F,
  G,
  A,
  B
};

class ChordFactory {
  constructor(){

  }

  get(chord) : Scale {
    return new chord();
  }
}

const factory = new ChordFactory();

export { factory };
