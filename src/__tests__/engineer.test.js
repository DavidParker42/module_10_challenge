const Engineer = require("../../lib/engineer.js");

describe('engineerClass', () => {
  it('Can set github by constructor', () => {
    expect(new Engineer(null, null, null, "github").github).toBe("github");
  });
});