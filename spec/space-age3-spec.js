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
