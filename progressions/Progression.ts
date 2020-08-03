class Progression {
  notes = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: ''
  }

  get(degree: number){
    if(degree === 4 || degree === 5){
      return this.notes[degree];
    }
    if(degree === 2 || degree === 3 || degree === 6){
      return this.notes[degree] + 'm' + ( Math.round(Math.random()) ? '7' : '' );
    }
    if(degree === 7){
      return this.notes[degree] + '°';
    }
    return this.notes[degree];
  }
}

export { Progression };
