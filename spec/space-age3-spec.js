import { Person } from './../src/scripts.js';

describe ('Person', function() {
 it('should only accept numerical input', function() {
   let exampleAge = new Person (5);
   expect(exampleAge.checkDigits()).toBe(5);
 });
});


describe ('Person', function(){
  it('should return how old a person is in mercurian years', function(){
    let exampleAge = new Person ('26');
    expect (exampleAge.mercAge()).toBe(108);

  });
});

describe ('Person', function(){
  it('should return how old a person is in venusian years', function(){
    let exampleAge = new Person ('26');
    expect (exampleAge.venusAge()).toBe(41);

  });
});

describe ('Person', function(){
  it('should return how old a person is in martian years', function(){
    let exampleAge = new Person ('26');
    expect (exampleAge.marsAge()).toBe(13);

  });
});

describe ('Person', function(){
  it('should return how old a person is in jovian years', function(){
    let exampleAge = new Person ('26');
    expect (exampleAge.jupAge()).toBe(2);

  });
});

describe ('Person', function(){
  it('calc life expectancy is a person is from the americas', function(){
    let exampleAge = new Person ('80');
    expect (exampleAge.americasLife()).toBe("Yxou should already be dead");

  });
});
