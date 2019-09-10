export class Person {
  constructor(age) {
    this.age = age;
    this.mercury = this.mercAge();
    this.venus = this.venusAge();
    this.mars = this.marsAge();
    this.jupiter = this.jupAge();
    this.lifeExpectancy = 79;
    this.mercDeath = this.mercDeathAge();
    this.venusDeath = this.venusDeathAge();
    this.marsDeath = this.marsDeathAge();
    this.jupDeath = this.jupDeathAge();

  }

  checkDigits() {
    let age = parseInt('');
    return this.age;
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

  mercDeathAge() {
    const mercury = .24;
    let mercurian = parseInt((this.lifeExpectancy - this.age) / mercury);
    if (mercurian <= 329) {
      return "You should be dead by now"
    }
    return mercurian;
  }

  venusDeathAge() {
    const venus = .62;
    let venusian = parseInt((this.lifeExpectancy - this.age) / venus);
    if (venusian <= 127) {
      return "You should be dead by now"
    }
    return venusian;
  }

  marsDeathAge() {
    const mars = 1.88;
    let martian = parseInt((this.lifeExpectancy - this.age) / mars);
    if (martian <= 42) {
      return "You should be dead by now"
    }
    return martian;
  }

  jupDeathAge() {
    const jupiter = 11.86;
    let jovian = parseInt((this.lifeExpectancy - this.age) / jupiter);
    if (jovian <= 6) {
      return "You should be dead by now"
    }
    return jovian;
  }
}
