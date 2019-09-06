export class Person {
  constructor(age, mercury, spaceAge, lifeExpectancy) {
    this.age = age;
    this.mercury = this.mercAge();
    // this.venus = this.venusAge();
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
    let newAge = parseInt(this.age / mercury);
    return newAge;
  }
}
