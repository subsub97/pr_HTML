const User = {
  name: 'John',
  age: 48
};

const copyuser = Object.assign({}, User);

console.log(copyuser);
//출력 { name: 'John', age: 48 }
const copyuser1 = Object.assign({ gender: 'male' }, User);

console.log(copyuser1);
//출력 { gender: 'male', name: 'John', age: 48 }

const User3 = {
  name: 'John'
};
const Age = {
  age: 28
};
const Gender = {
  gender: 'male'
};
const info = Object.assign(User3, Age, Gender);
