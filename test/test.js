const { grid } = require('../src/pairing-test');


describe("grid class", () => {

	beforeAll(() => {
		gridClass = new grid(10, 10);
	});

	test('expect parameter one to be set', () => {
		expect(gridClass.rowCount).toBe(10);
	});

	test('expect parameter two to be set', () => {
		expect(gridClass.columnCount).toBe(10);
	});


	test('expect grid data rows be set', () => {
		expect(gridClass.data.length).toBe(10);
	});


	test('expect grid data column be set', () => {
		expect(gridClass.data[0].length).toBe(10);
	});


	describe("robot functions", () => {
		beforeAll(() => {
			gridClass.addRobot(9, 0);
		});


		test('expect robot coordinates are set', () => {
			expect(gridClass.robot[0]).toBe(9);
			expect(gridClass.robot[1]).toBe(0);
		});


		test('expect robot to move north without wall', () => {

			gridClass.move('N')

			expect(gridClass.robot[0]).toBe(8);
			expect(gridClass.robot[1]).toBe(0);
		});


	});


});


// describe("execute Function", () => {

// 	beforeAll(() => {

// 	});

// 	test('a passing test', () => {
// 		expect(executeFunction()).toBe(true);
// 	});

// });

