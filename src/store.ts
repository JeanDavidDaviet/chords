abstract class Scale {  
  get(degrees: number, opts: object) : Scale {
    return new F();
  }
}

class C extends Scale {}
class F extends Scale {}

export { Scale, C, F };
