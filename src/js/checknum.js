export default function checkNum(value) {
  try {
    if (
      value === "" ||
      value instanceof Number ||
      (typeof value !== "number" && isNaN(value))
    ) {
      throw new Error();
    }
    return typeof Number(value);
  } catch (err) {
    return;
  }
}
// let a = isNaN();
// console.log(a);
// console.log(checkNum(0));
//  console.log(checkNum());
//  console.log(checkNum(""));
//  console.log(checkNum("привет"));
//  console.log(checkNum(0xff));
//  console.log(checkNum("1"));
//  console.log(checkNum("a"));
//  console.log(checkNum(Number(1)));
//  console.log(checkNum(null));

// //export default checkNum;
