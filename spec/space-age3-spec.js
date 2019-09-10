import {
  Person
} from './../src/scripts.js';

describe('Person', function() {
  it('should only accept numerical input', function() {
    let exampleAge = new Person(5);
    expect(exampleAge.checkDigits()).toBe(5);
  });
});


describe('Person', function() {
  it('should return how old a person is in mercurian years', function() {
    let exampleAge = new Person('26');
    expect(exampleAge.mercAge()).toBe(108);

  });
});

describe('Person', function() {
  it('should return how old a person is in venusian years', function() {
    let exampleAge = new Person('26');
    expect(exampleAge.venusAge()).toBe(41);

  });
});

describe('Person', function() {
  it('should return how old a person is in martian years', function() {
    let exampleAge = new Person('26');
    expect(exampleAge.marsAge()).toBe(13);

  });
});

describe('Person', function() {
  it('should return how old a person is in jovian years', function() {
    let exampleAge = new Person('26');
    expect(exampleAge.jupAge()).toBe(2);

  });
});

describe('Person', function() {
  it('calc life expectancy on Mercury', function() {
    let lifeLeft = new Person('80');
    expect(lifeLeft.mercDeathAge()).toBe("You should be dead by now");
  });
});

describe('Person', function() {
  it('calc life expectancy on Venus', function() {
    let lifeLeft = new Person('80');
    expect(lifeLeft.venusDeathAge()).toBe("You should be dead by now");
  });
});

describe('Person', function() {
  it('calc life expectancy on Venus', function() {
    let lifeLeft = new Person('80');
    expect(lifeLeft.marsDeathAge()).toBe("You should be dead by now");
  });
});

describe('Person', function() {
  it('calc life expectancy on Jupiter', function() {
    let lifeLeft = new Person('80');
    expect(lifeLeft.jupDeathAge()).toBe("You should be dead by now");
  });
});
