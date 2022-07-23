const Engineer = require('../lib-classes/Engineer');

test('Can set Github account from the contstructor', () => {
    const testValue = 'GithubUser';//double check speling for github that it matches the rest
    const e = new Engineer('Foo', 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test('getRole() should return \"Engineer\"', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Foo', 1, "test@test.com", 'GithubUser');
    expect(e.getRole()).toBe(testValue);
});

test('Can get Github username from getGithub()', () => {
    const testValue = 'GithubUser';
    const e = new Engineer('Foo', 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});

