const { exampleClass, executeFunction } = require('../src/pairing-test');


describe("exampleClass", () => {

	beforeAll(() => {
		testClass = new exampleClass(true, false);
	});

	test('expect parameter one to be set', () => {
		expect(testClass.param1).toBe(true);
	});

	test('expect parameter two to be set', () => {
		expect(testClass.param2).toBe(false);
	});

});


describe("execute Function", () => {

	beforeAll(() => {

	});

	test('a passing test', () => {
		expect(executeFunction()).toBe(true);
	});

});

