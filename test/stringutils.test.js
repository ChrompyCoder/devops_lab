const { capitalize, reverse } = require('../stringutils');
   
   test('capitalize first letter', () => {
       expect(capitalize('hello')).toBe('Hello');
   });
   
   test('reverse string', () => {
       expect(reverse('hello')).toBe('olleh');
   });
