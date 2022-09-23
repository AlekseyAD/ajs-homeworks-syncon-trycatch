import checkNum from "../checknum";

test("Введено число", () => {
  const numberValue = checkNum("12");
  expect(numberValue).toBe("number");
});

test("Введено десятичное число", () => {
  const numberValue = checkNum("12.4");
  expect(numberValue).toBe("number");
});

test("Вы ввели не число", () => {
  const numberValue = checkNum();
  expect(numberValue).toBe(undefined);
});

test("Вы ввели не число", () => {
  const numberValue = checkNum("");
  expect(numberValue).toBe(undefined);
});

test("Вы ввели не число", () => {
  const numberValue = checkNum("привет");
  expect(numberValue).toBe(undefined);
});
