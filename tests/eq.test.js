import eq from '../src/eq.js';

describe('eq', () => {

    const object = { 'a': 1 }
    const other = { 'a': 1 }

    test('object is object', () => {
        expect(eq(object, object)).toBe(true);
    });

    test('object is not other', () => {
        expect(eq(object, other)).toBe(false);
    });

    test(" 'a' is 'a'", () => {
        expect(eq('a', 'a')).toBe(true);
    });

    test("'a' is not object('a')", () => {
        expect(eq('a', object['a'])).toBe(false);
    });

    test('NaN is NaN', () => {
        expect(eq(NaN, NaN)).toBe(true);
    });

    test('1 is 1', () => {
        expect(eq(1, 1)).toBe(true);
    });

    test("'1' is not int 1", () => {
        expect(eq("1", 1)).toBe(false);
    });

    test("1' is '1'", () => {
        expect(eq('1', '1')).toBe(true);
    });


});