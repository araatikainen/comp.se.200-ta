import get from '../src/get.js';


describe('get', () => {

    const object = { 'a': [{ 'b': { 'c': 3 } }] };

    test('gets value of property', () => {
        expect(get(object, 'a[0].b.c')).toBe(3);
    });

    test('gets value of property with default value', () => {
        expect(get(object, 'a.b.c', 'default')).toBe('default');
    });

    test('get values of property with array path', () => {
        expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
    });
    
    test('gets undefined value of property without default value', () => {
        expect(get(object, 'a.b.c')).toBe(undefined);
    });
    
});