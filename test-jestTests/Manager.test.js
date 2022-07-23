const Manager = require('../lib-classes/Manager');//add Manager file
const Employee = require('../lib-classes/Employee');//add employee file

test('can set offic number', () => {
    const testValue = 100;
    const e = new Manager('Foo', 1, 'test@test.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return \"Manager\"', () => {
    const testValue = 'Manager';
    const e = new Manager('Foo', 1, 'test@test.com', 100);
    expect(e.getRole()).toBe(testValue);
});

test('get office number via getOffice()', () => {
    const testValue = 100;
    const e = new Manager('Foo', 1, 'test@test.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

