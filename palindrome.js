let input_args = process.argv.slice(2)

var word = input_args[0]

function checkPalindrome(word){
  var reverse_word = ""

  var stack = []

  for (var i = 0; i < word.length; i++) {
    stack.push(word[i])
  }

  for (var i = word.length - 1; i >= 0; i--) {
    reverse_word += stack.pop()
  }

  if (word == reverse_word) {
    console.log(word, "is an Palindrome")
  }
  else
    console.log(word, "is NOT an Palindrome")
}

checkPalindrome(word)
// To Run this file on CLI
// node stacks "racecar"