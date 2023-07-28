
function checkPalindrome(str, index=0) {
  if (index >= str.length/2) {
    return true;
  }
  if (str[index] !== str[str.length - 1 - index]) {
    return false;
  }
  return checkPalindrome(str, index+1);
}

// console.log(checkPalindrome('testset'));
// console.log(checkPalindrome('oyaoya'));
// console.log(checkPalindrome('arra'));
// console.log(checkPalindrome('arrearra'));
// console.log(checkPalindrome('bbbabbb'));
// console.log(checkPalindrome('cccdddccc'));
// console.log(checkPalindrome('cccadccc'));