const sum = require('./suma');
test('Verifica que 2 + 2 es = 4', () => {

    expect(sum(2, 2)).toBe(4);
});