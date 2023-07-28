var longestPalindrome = function(s) {
  if (s.length == 0) return 0;
  let longestStr = s[0];
  for (let i=0; i < s.length-1; i++) {
    for (let j=i; j < s.length; j++) {
      if (isPalindrome(s.slice(i, j+1))) {
        if (s.slice(i, j+1).length > longestStr.length) {
          longestStr = s.slice(i, j+1);
        }
      }
    }
  }
  return longestStr.length;
};

var isPalindrome = function (str) {
  let i = Math.floor(str.length*0.5) - 1;
  while (i >= 0) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
    i--;
  }
  return true;
}