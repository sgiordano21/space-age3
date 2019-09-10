export class Person {
  constructor(age, mercury, venus, mars, jupiter, continent) {
    this.age = age;
    this.mercury = this.mercAge();
    this.venus = this.venusAge();
    this.mars = this.marsAge();
    this.jupiter = this.jupAge();
    this.continent = continent;
    this.lifeExpectancy = 79;
    this.mercDeathAge = this.mercDeathAge();
  }

  checkDigits() {
    let age = parseInt('');
    return this.age;
  }

  mercDeathAge() {
    const mercury = .24;
    let mercurian = parseInt((this.lifeExpectancy - this.age) / mercury);
    return mercurian;
  }

  mercAge() {
    const mercury = .24;
    let mercurian = parseInt(this.age / mercury);
    return mercurian;
  }

  venusAge() {
    const venus = .62;
    let venusian = parseInt(this.age / venus);
    return venusian;
  }

  marsAge() {
    const mars = 1.88;
    let martian = parseInt(this.age / mars);
    return martian;
  }

  jupAge() {
    const jupiter = 11.86;
    let jovian = parseInt(this.age / jupiter);
    return jovian;
  }


}
