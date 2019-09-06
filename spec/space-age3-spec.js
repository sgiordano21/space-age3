import { Age } from './../src/scripts.js';

describe ('Age', function() {
 it('should only accept numerical input', function() {
   let exampleAge = new Haiku("twelve");
   expect(exampleAge.userAge()).toBe(12);
 });

});
