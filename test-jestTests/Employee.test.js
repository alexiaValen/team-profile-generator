const Employee = require('../lib-classes/Employee')

test('initiate employee', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

test('set name', () => {
    const name = 'Alexia';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test('set id', () => {
    const testValue = 100;
    const e = new Employee('foo', testValue);
    expect(e.id).toBe(testValue);
});

test('set email', () => {
    const testValue = 'test@test.com';
    const e = new Employee('foo', 1, testValue);
    expect(e.email).toBe(testValue);
});

test('get name via getName()', () => {
    const testValue = 'Alexia';
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test('can get id via getId()', () => {
    const testValue = 100;
    const e = new Employee('foo', testValue);
    expect(e.getId()).toBe(testValue);
});

test('can get email via getEmail()', () => {
    const testValue = 'test@test.com';
    const e = new Employee('foo', 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test('getRole() shoould return \"Employee\"', () => {
    const testValue = 'Employee';
    const e = new Employee('Alexia', 1, testValue);
    expect(e.getRole()).toBe(testValue);
});

test('can get Github via getGitHub()', () => {
    const testValue = 'GitHubUser';
    const e = new Employee('foo', 1, 'test@test.com', testValue);
    expect(e.getGithub()).toBe(testValue);
});