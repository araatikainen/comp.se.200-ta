// test for divide.js

import divide from '../src/divide.js';

describe('divide', () => {
    test('divides two numbers', () => {
        expect(divide(1, 2)).toBe(0.5);
    });
    test('divides two negative numbers', () => {
        expect(divide(-1, -2)).toBe(0.5);
    });
    test('divides two floating point numbers', () => {
        expect(divide(1.1, 2.2)).toBeCloseTo(0.5);
    });
    test('divides two very large numbers', () => {
        expect(divide(100000, 200000)).toBe(0.5);
    });
    test('divides two very small numbers', () => {
        expect(divide(0.0001, 0.0002)).toBeCloseTo(0.5);
    });
    test('divides by zero', () => {
        expect(divide(1, 0)).toBe(Infinity);
    });
});