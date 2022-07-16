let n = "name";
let a = "age";

const user = {
  [n]: "Mike",
  [a]: 28,
  [1 + 4]: 5,
  [4]: 6,
  [3]: 1
};

console.log(user);

// more practical code
function makeObj(key, val) {
  return {
    [key]: val
    // key의 이름을 바꿔주기위해서는 [ ]괄호로 감싸주어야 한다.
  };
}

const obj = makeObj('나이', 33);

console.log(obj);

const User = {
  name: "Tom",
  age: 38
};
const result = Object.entries(User);
console.log(result);