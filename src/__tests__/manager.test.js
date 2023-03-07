const Manager = require("../../lib/manager.js");

describe('employeeClass', () => {
  it('Can set name by constructor', () => {
    expect(new Manager('david').name).toBe("david");
  });
});