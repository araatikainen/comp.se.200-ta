import filter from '../src/filter.js';

/*
 * given test cases in filter.js
 *  const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * filter(users, ({ active }) => active)
 * // => objects for ['barney']
 */

describe('filter', () => {

    test('filters active users', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }
        ]
        expect(filter(users, ({ active }) => active)).toStrictEqual([{ 'user': 'barney', 'active': true }]);
    });

    test('filters inactive users', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }
        ]
        expect(filter(users, ({ active }) => !active)).toStrictEqual([{ 'user': 'fred',   'active': false }]);
    });

    test('filters users with user name longer than 5 characters', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false },
            { 'user': 'barn',   'active': true }
        ]
        expect(filter(users, ({ user }) => user.length > 5)).toStrictEqual([{ 'user': 'barney', 'active': true }]);
    });

    test('filter users with name barney', () => {
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': false},
            {'user': 'barn', 'active': true}
        ]
        expect(filter(users, ({user}) => user === 'barney')).toStrictEqual([{'user': 'barney', 'active': true}]);
    });

    test('filter users with name which is not found', () => {
        const users = [
            {'user': 'barney', 'active': true},
            {'user': 'fred', 'active': false},
            {'user': 'barn', 'active': true}
        ]
        expect(filter(users, ({user}) => user === 'bar')).toStrictEqual([[]]);
    });
});
