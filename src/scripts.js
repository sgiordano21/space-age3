export class Person {
  constructor(age, mercury, venus, mars, jupiter, continent) {
    this.age = age;
    this.mercury = this.mercAge();
    this.venus = this.venusAge();
    this.mars = this.marsAge();
    this.jupiter = this.jupAge();
    this.continent = continent;

  }

  checkDigits() {
    let age = parseInt('');
    return this.age;
  }

  calcMercLife() {
    // on earth if you are 26 years old, you will have 53 years left to live. on mercury you would be 108 years old and you would have 221 years left
    // life expectancy on mercury is 329 years
    // on earth its 79 years

 // *i feel like i'm on the right track with this calc idea but need a bit of help getting off the ground
this.age(mercAge())
  const mercCalc = .24
    let lifeLeft = 79 - this.age;
    if (lifeLeft < 0){
      return "You should already be dead";
    } else if

  }


  mercAge() {
    const mercury = '.24';
    let mercurian = parseInt(this.age / mercury);
    return mercurian;
  }

  venusAge() {
    const venus = '.62';
    let venusian = parseInt(this.age / venus);
    return venusian;
  }

  marsAge() {
    const mars = '1.88';
    let martian = parseInt(this.age / mars);
    return martian;
  }

  jupAge() {
    const jupiter = '11.86';
    let jovian = parseInt(this.age / jupiter);
    return jovian;
  }


}
