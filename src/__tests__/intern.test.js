// school

const Intern = require("../../lib/intern.js");

describe('engineerClass', () => {
  it('Can set school by constructor', () => {
    expect(new Engineer(null, null, null, "school").school).toBe("school");
  });
});