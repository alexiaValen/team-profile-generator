const Manager = require('../lib-classes');//add Manager file
const Employee = require('../lib-classes');//add employee file

test('can set offic number', () => {
    const testValue = 100;
    const e = new Manager('foo', 1, 'test@test.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return \"Manager\"', () => {
    const testValue = 'Manager';
    const e = new Manager('foo', 1, 'test@test.com', testValue);
    expect(e.getRole()).toBe(testValue);
});

test('get office number via getOffice()', () => {
    const testValue = 100;
    const e = new Manager('foo', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

