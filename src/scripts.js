export class Person {
  constructor(age, mercury, spaceAge, lifeExpectancy) {
    this.age = age;
    this.mercury = this.mercAge();
    this.venus = this.venusAge();
    // this.mars = this.marsAge();
    // this.jupiter = this.jupAge();
    // this.spaceAge = this.calcAge();
    // this.lifeExpectancy = this.calcLife();
  }

  checkDigits() {
    let age = parseInt('');
    return this.age;
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
}
