/* PART 0 *
Write a function that calculates the sum of all the numbers in an array */
function sumOfArray (arr) {
  var total = 0
  for (var i = 0; i < arr.length; i++) {
    total = total + arr[i]
  }
  return total
}
console.assert(sumOfArray([1, 2]) === 3)
console.assert(sumOfArray([]) === 0)
console.assert(sumOfArray([1, 2, 3]) === 6)
console.assert(sumOfArray([10, 9, 8]) === 27)

// PART 1
// Write a function maxOfArray() that takes an array of numbers as an argument and finds the highest number.
function maxOfArray (arr) {
  var maxNum = 0
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return NaN
    } else if (arr[i] > maxNum) {
      maxNum = arr[i]
    }
  }
  return maxNum
}

console.assert(maxOfArray([2, 4, 3]) === 4)
console.assert(maxOfArray([10, 9, 8, 100, 7, 6]) === 100)
console.assert(isNaN(maxOfArray([1, 2, 'bucklemyshoe'])))

/**
PART 2 *
Write a function isVowel() that takes a character (i.e. a string of length 1)
and returns true if it is a vowel, false otherwise. */

function isVowel (letter) {
  var arrVowel = ['a', 'e', 'i', 'o', 'u']
  if (typeof letter !== 'string') {
    return false
  }
  for (var i = 0; i < arrVowel.length; i++) {
    if (arrVowel[i] === letter.toLowerCase()) {
      return true
    }
  }
  return false
}

console.assert(isVowel(0) === false)
console.assert(isVowel('B') === false)
console.assert(isVowel('b') === false)
console.assert(isVowel('a') === true)
console.assert(isVowel('E') === true)

/**
Part 3 *
Define a function reverse() that computes
the reversal of a string. For example,
reverse("skoob") should return the
string "books". */

function reverse (str) {
  var reversed = ''
  for (var i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i]
  }
  return reversed
}

console.assert(reverse('books') === 'skoob')
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
Part 4 *
write a function the returns a FizzBuzz string for some number N (counting up from 1).
- for every number that isn't a multiple of 3 or 5, return a period "."
- for every number that is a multiple of 3 (but not 5), return "fizz"
- for every number that is a multiple of 5 (but not 3), return "buzz"
- for every number that is a multiple of 3 and 5, return "fizzbuzz" */

function fizzbuzz (num) {
  var result = ''
  for (var i = 1; i <= num; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      result = result + '.'
    } else if (i % 3 === 0 && i % 5 !== 0) {
      result = result + 'fizz'
    } else if (i % 3 !== 0 && i % 5 === 0) {
      result = result + 'buzz'
    } else if (i % 3 === 0 && i % 5 === 0) {
      result = result + 'fizzbuzz'
    }
  }
  return result
}

console.assert(fizzbuzz(1) === '.')
console.assert(fizzbuzz(2) === '..')
console.assert(fizzbuzz(3) === '..fizz')
console.assert(fizzbuzz(5) === '..fizz.buzz')
console.assert(fizzbuzz(10) === '..fizz.buzzfizz..fizzbuzz')

/**
Part 5 *
Write a function findLongestWord() that takes a string of words and returns the longest word.
i.e. findLongestWord("a book full of dogs") should return "book" */

function findLongestWord (str) {
  var arr = str.replace("'", ' ').split(' ')
  var word = ''
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > word.length) {
      word = arr[i]
    }
  }
  return word
}

console.assert(findLongestWord('a book full of dogs') === 'book')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')

/**
PART 6 *
write a function that returns the Greatest Common Denominator of two numbers
- if no GCD exists, return 1 */

function GCD (num1, num2) {
  var result
  for (var i = 1; i < num1; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i
    }
  }
  return result
}

console.assert(GCD(5, 1) === 1)
console.assert(GCD(15, 3) === 3)
console.assert(GCD(15, 5) === 5)
console.assert(GCD(50, 20) === 10)
