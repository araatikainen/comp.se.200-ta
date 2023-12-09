import castArray from '../src/castArray.js';

describe('castArray', () => {
    test('Casts a number to an array', () => {
        expect(castArray(1)).toStrictEqual([1]);
    });

    test('casts a string to an array', () => {
        expect(castArray('abc')).toStrictEqual(['abc']);
    });

    test('casts an object to an array', () => {
        expect(castArray({ 'a': 1 })).toStrictEqual([{ 'a': 1 }]);
    });

    test('casts null to an array', () => {
        expect(castArray(null)).toStrictEqual([null]);
    });

    test('casts undefined to an array', () => {
        expect(castArray(undefined)).toStrictEqual([undefined]);
    });

    test('casts an array to an array', () => {
        expect(castArray([1, 2, 3])).toStrictEqual([1, 2, 3]);
    });


});