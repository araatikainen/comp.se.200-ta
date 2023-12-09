
import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
    
    test('Capitalize first letter of lowercase string', () => {
        expect(capitalize('fred')).toBe('Fred');
    });

    test('Capitalize first letter of uppercase string', () => {
        expect(capitalize('FRED')).toBe('Fred');
    });

    test('Capitalize first letter of mixed case string', () => {
        expect(capitalize('fRED')).toBe('Fred');
    });

    test('Capitalize first letter of string with spaces', () => {
        expect(capitalize('f red')).toBe('F red');
    });

    test('Capitalize integer', () => {
        expect(capitalize(123)).toBe('123');
    });

    test('Capitalize empty string', () => {
        expect(capitalize('')).toBe('');
    });
});
