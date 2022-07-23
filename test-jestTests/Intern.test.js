const Intern = require('../lib-classes/Intern');

test('Can set school from the contstructor', () => {
    const testValue = 'UVA';
    const e = new Intern('Foo', 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test('getRole() should return \"Intern\"', () => {
    const testValue = 'Intern';
    const e = new Intern('Foo', 1, "test@test.com", 'Intern');
    expect(e.getRole()).toBe(testValue);
});

test('Can get school from getSchool()', () => {
    const testValue = 'UVA';
    const e = new Intern('Foo', 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});

