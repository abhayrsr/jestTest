const subtract = require('./subtract');

test('subtracting two values', () =>{
    expect(subtract(1,3)).toBe(-2);
})