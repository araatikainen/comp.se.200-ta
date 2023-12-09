import toString from '../src/toString.js';


/**
 *  * toString(null)
 * // => ''
 *
 * toString(-0)
 * // => '-0'
 *
 * toString([1, 2, 3])
 * // => '1,2,3'
 */

describe('toString', () => {
    test('Converts null to empty string', () => {
        expect(toString(null)).toBe('');
    });

    test('Converts -0 to string', () => {
        expect(toString(-0)).toBe('-0');
    });

    test('Converts array to string', () => {
        expect(toString([1, 2, 3])).toBe('1,2,3');
    });

    test('Converts number to string', () => {
        expect(toString(3.2)).toBe('3.2');
    });

    test('Converts negative float to string', () => {
        expect(toString(-3.2)).toBe('-3.2');
    });

    test('Converts string to string', () => {
        expect(toString('3')).toBe('3');
    });

});