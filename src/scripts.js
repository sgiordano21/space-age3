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

  americasLife() {
    const lifeExpectancy = 79;
    let mercLife = this.age - lifeExpectancy;
    let lifeLength = lifeExpectancy - lifeLength;

    return lifeLength;
  }

  // 
  // if (this.continent === americas) {
  //   lifeExpectancy = 79;
  // } else if (this.continent === asia) {
  //   lifeExpectancy = 76;
  // } else if (this.continent === africa) {
  //   lifeExpectancy = 61
  // } else if (this.continent === australia) {
  //   lifeExpectancy = 82


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
