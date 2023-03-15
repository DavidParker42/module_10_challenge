const Intern = require("../../lib/intern.js");

describe('internClass', () => {
  it('Can set school by constructor', () => {
    expect(new Intern(null, null, null, "school").school).toBe("school");
  });
});