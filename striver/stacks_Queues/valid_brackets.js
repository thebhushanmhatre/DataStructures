
function isValidBrackets(str) {
  let bracketStack = [];
  let bracketHash = { '(': ')', '[': ']', '{': '}'};
  for (let i=0; i < str.length; i++) {
    if (bracketStack[bracketStack.length-1] === str[i]) {
      bracketStack.pop();
    } else if (bracketHash[str[i]]) {
      bracketStack.push(bracketHash[str[i]]);
    } else return false;
  }
  if (bracketStack.length === 0) return true;
  return false;
}

console.log(isValidBrackets('[{}](){}'));
console.log(isValidBrackets('{[()}]'));
console.log(isValidBrackets('{[(){}{}}]'));
console.log(isValidBrackets('[(])'));
console.log(isValidBrackets('[(])'));
