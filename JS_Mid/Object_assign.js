const User = {
  name: 'John',
  age: 48
};

const copyuser = Object.assign({}, User);

console.log(copyuser);

const copyuser1 = Object.assign({ gender: 'male' }, User);

console.log(copyuser1);


