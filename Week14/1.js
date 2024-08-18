const users = ["alice", "bob", "charlie", "david"];

let user_name1 = 'alice';
let user_name2 = 'Pushan';

function isUserPresent(user_name) {
  return users.includes(user_name);
}

console.log(isUserPresent(user_name1));
console.log(isUserPresent(user_name2));