const Manager = require("../../lib/manager.js");

describe('employeeClass', () => {
  it('Can set name by constructor', () => {
    expect(new Employee('david').name).toBe("david");
  });
});