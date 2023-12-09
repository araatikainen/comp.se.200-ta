import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {
    
        test('Empty array returns true', () => {
            expect(isEmpty([])).toBe(true);
        });
    
        test('Empty object returns true', () => {
            expect(isEmpty({})).toBe(true);
        });
    
        test('Empty string returns true', () => {
            expect(isEmpty('')).toBe(true);
        });
    
        test('Non-empty array returns false', () => {
            expect(isEmpty([1, 2, 3])).toBe(false);
        });
    
        test('Non-empty object returns false', () => {
            expect(isEmpty({ 'a': 1 })).toBe(false);
        });
    
        test('Non-empty string returns false', () => {
            expect(isEmpty('abc')).toBe(false);
        });

        test('Null returns true', () => {
            expect(isEmpty(null)).toBe(true);
        });
    
        test('Undefined returns true', () => {
            expect(isEmpty(undefined)).toBe(true);
        });
    
        test('Number returns true', () => {
            expect(isEmpty(1)).toBe(true);
        });
    
        test('Boolean returns true', () => {
            expect(isEmpty(true)).toBe(true);
        });

});