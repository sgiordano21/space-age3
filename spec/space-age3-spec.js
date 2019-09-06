import { Person } from './../src/scripts.js';

describe ('Person', function() {
 it('should only accept numerical input', function() {
   let exampleAge = new Person (5);
   expect(exampleAge.checkDigits()).toBe(5);
 });

});
