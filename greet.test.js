const func = require("./greet.js");

describe("test greet", () => {
  test("case null", () => {
    expect(func.greet()).toBe("Hello there!");
  });

  test("case uppercases", () => {
    expect(func.greet("RAUL")).toBe("HELLO RAUL");
  });

  test("case normal", () => {
    expect(func.greet("Raul")).toBe("Hello, Raul");
  });

  test("case multiple names", () => {
    expect(func.greet(["Raul", "Pepe", "Martin"])).toBe(
      "Hello, Raul,Pepe,Martin"
    );
  });
});
