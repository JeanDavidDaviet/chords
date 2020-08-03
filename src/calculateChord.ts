enum chords {
  C,
  D,
  E,
  F,
  G,
  A,
  B
};

const calculateChord = function(degree: number){
  return chords[0 + degree];
}
export { calculateChord };
