// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.



// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("createSentence", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", ()=> {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
      ]
      expect(createSentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
      
  })
})

// ReferenceError: createSentence is not defined

// b) Create the function that makes the test pass.

// Define a function called createSentence.
// Set parameter to peopleArray.
// Use .map to iterate over the array. 
//Use the .split method to separarte first and last name and set this to a variable called name.
// Create a first name variable called firstLetter set equal to name[0] then use the .slice method from 0,1 with .toUpperCase to capitalize the first letter of the first name.
//Create a firstName variable set equal to name[0].slice(1) to return the rest of the letters of the first name.
// Create a lastLetter variable equal to name[1] and repeat above step to capitalize the first letter of the last name.
//Create a lastName variable set equal to name[1].slice(1) to return the rest of the letters of the last name.
//Create a variable called occupation set equal to the occupation in the array.
//Return first name, last name is occupation using string interpolation.

const createSentence = (peopleArray) => {
  return peopleArray.map(person => {
   let name = person.name.split(" ")
   let firstLetter = name[0].slice(0, 1).toUpperCase()
   let firstName = name[0].slice(1)
   let lastLetter = name[1].slice(0, 1).toUpperCase()
   let lastName = name[1].slice(1)
   let occupation = person.occupation
   return `${firstLetter}${firstName} ${lastLetter}${lastName} is ${occupation}.`
  })
}

// PASS  ./code-challenges.test.js
// createSentence
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (5 ms)
// sumOfCubedNums
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed.

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.779 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 3.41s.



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("mixed", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", ()=> {
      const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
      // Expected output: [ 2, 0, -1, 0 ]
      const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
      // Expected output: [ 2, 1, -1 ]
      expect(mixed(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(mixed(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// ReferenceError: mixed is not defined

// b) Create the function that makes the test pass.

//Define a variable called mixed.
//Set parameter to hodgepodge to pass through the array.
// Set variable num equal to the:
  //Iterate over the array using .filter  with typeof to return only numbers.
// Then, map over the filtered array to do modulo 3 of the value of num to return the remainder.
// 

const mixed = (hodgepodge) => {
  return hodgepodge.filter(element => {
    return typeof element === 'number'
}).map(num => num % 3)
}

// mixed
// ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumOfCubedNums", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", ()=> {
      const cubeAndSum1 = [2, 3, 4]
      // Expected output: 99
      const cubeAndSum2 = [0, 5, 10]
      // Expected output: 1125
      expect(sumOfCubedNums(cubeAndSum1)).toEqual(99)
      expect(sumOfCubedNums(cubeAndSum2)).toEqual(1125)
  })
})

// ReferenceError: mixed is not defined

// b) Create the function that makes the test pass.

//Define a function called sumOfCubedNums.
//Set parameter to cubeAndSum to pass through the function.
// Create a let variable called cubed to iterate through the array using .map
// The value of .map is set to num since we are passing numbers from an array to be mapped over.
// Return the value of num cubed by num ** 3
// Then, outside the curly bracket and parenthesis of the map function, do another return.
// This time, return eval of cubed numbers joined together with the addition sign to get the sum of all the numbers cubed.

const sumOfCubedNums = (cubeAndSum) => {
  let cubed = cubeAndSum.map(num => {
    return num**3
  })
  return eval(cubed.join("+"))
}

// PASS  ./code-challenges.test.js
// sumOfCubedNums
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed. (4 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.622 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.97s.
