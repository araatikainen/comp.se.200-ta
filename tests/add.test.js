// test file for add.js

import add from '../src/add.js';

describe('add', () => {
    test('adds two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
});

// create five different test cases for add.js

describe('add', () => {
    test('adds two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
    test('adds two negative numbers', () => {
        expect(add(-1, -2)).toBe(-3);
    });
    test('adds two floating point numbers', () => {
        expect(add(1.1, 2.2)).toBeCloseTo(3.3);
    });
    test('adds two very large numbers', () => {
        expect(add(100000 + 200000)).toBe(300000);
    });
    test('adds two very small numbers', () => {
        expect(add(0.0001 + 0.0002)).toBeCloseTo(0.0003);
    });
});
