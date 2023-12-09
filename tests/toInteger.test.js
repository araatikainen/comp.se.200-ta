import toInteger from '../src/toInteger.js';

describe('toInteger', () => {

    test('Converts float to integer', () => {
        expect(toInteger(3.2)).toBe(3);
    });

    test('Converts float string to integer', () => {
        expect(toInteger('3.2')).toBe(3);
    });

    test('Converts string to integer', () => {
        expect(toInteger('3')).toBe(3);
    });

    test('Converts Infinity to integer', () => {
        expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
    });

    test('Converts MIN_VALUE to integer', () => {
        expect(toInteger(Number.MIN_VALUE)).toBe(0);
    });

    test('Converts null to integer', () => {
        expect(toInteger(null)).toBe(0);
    });

    test('Convert array to integer', () => {
        expect(toInteger([1, 2, 3])).toBe(0);
    });

});