// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PART 0
// Write a function called squareDance() that squares each number in an array.

// TODO: Put your function here

// console.assert(squareDance([1, 2])[1] === 4)
// console.assert(squareDance([5, 10, 15])[2] === 225)
// console.assert(squareDance([3, 6, 9, 3])[0] === 9)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PART 1
// Write a function called nicer(). It should clean up the language in its input sentence.

// TODO: put your function here
function nicer (str) {
  var strArr = str.split(" ")
  var badWords = ['heck', 'crappy', 'darn', 'dang', 'damn', 'crap', 'awful', 'dumb']
  for (var i = 0; i < strArr.length; i++) {
    for (var j = 0; j < badWords.length; j++) {
      if (strArr[i] === badWords[j]) {
        strArr.splice([i], 1)
      }
    }
  }
  return strArr.join(" ")
}
// console.log(nicer('mom get the heck in here and bring me a darn sandwich.'))
// console.log(nicer('here son, your crappy sandwich is on the dang plate.'))

console.assert(nicer('mom get the heck in here and bring me a darn sandwich.') === 'mom get the in here and bring me a sandwich.')
console.assert(nicer('here son, your crappy sandwich is on the dang plate.') === 'here son, your sandwich is on the plate.')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PART 2
// Write a function called capitalizeAll(). It should take as input a sentence
// and capitalize the first letter of every word in the sentence.

// TODO: put your function here

console.assert(capitalizeAll('every day is like sunday.') === 'Every Day Is Like Sunday.')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PART 3
// Write a function called properSentences(). It should take as input a string
// and capitalize the first letter of every sentence in that string.
// (For our purposes, all sentences will end with periods. Write one that works
// with ? and ! and receive a gratifying high five, right on the hand!)

var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'

// TODO: put your function here

console.assert(properSentences(paragraph) === 'It was a fine morning. The wine was good. Light slanted in through the cafe window.')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PART 4
// Write a function called iPutTheFunIn(). It should take a string as input.
// The output should be a copy of the original string with the word 'fun' inserted into the center of the string.

console.assert(iPutTheFunIn('funerary') === 'funefunrary')
console.assert(iPutTheFunIn('reds') === 'refunds')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// PART 5
// Write a function called pipeline(). it should take three inputs: (1) a starting value,
// (2) a function, and (3) another function. it should use functions (2) and (3) on the
// starting value, one after the other, and return a new value that has been processed
// by both function (2) and function (3).

// TODO: put your function here

// THE FOLLOWING THREE TESTS ALL CORRESPOND TO THE `pipeline()` FUNCTION

// test 1
var paragraph = 'mom bring your crappy self in here. i want a dang sandwich.'

console.assert(pipeline(paragraph, nicer, properSentences) === 'Mom bring your self in here. I want a sandwich.')

// test 2
function squareNum (n) {
  return n * n
}

function addOne (n) {
  return n + 1
}

console.assert(pipeline(7, squareNum, addOne) === 50)

// test 3
function exclaimAll (arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + '!')
  }
  return newArr
}

var result = pipeline([10, 20, 30], squareDance, exclaimAll)
console.assert(result[1] === '400!')
console.assert(result[2] === '900!')
