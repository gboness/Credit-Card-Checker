// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];



const validateCred = arr => {
  total = 0;
  newArray = [];
  doubledArray = [];
 
  //removing last number from card number and storing it as a variable
  checker = arr.pop();

  // looping through the array in reverse and updating new array
  for(i = arr.length - 1; i >= 0 ; i--) {
      newArray.push(arr[i]);
    }


  //looping through newArray and doubling numbers at odd indexes and adding them to doubledArray;
  for (i = 0; i < newArray.length; i++) {
    if(i % 2 != 1) {
      doubledArray.push(newArray[i] * 2);
    }
    else {
      doubledArray.push(newArray[i]);
    }
  }

  //looping throught doubledArray and subtracting 9 from numbers greater than 9
  for(i = 0; i < doubledArray.length; i++) {
    if (doubledArray[i] > 9) {
      doubledArray[i] = doubledArray[i] - 9;
    }
  }
  for(i = 0; i < doubledArray.length; i++) {
    total += doubledArray[i];
  }

  //Creating new total with checker
  newTotal = total += checker;

  //checking if card number is valid or not 
  if (newTotal % 10 === 0) {
    //if true card number is valid
    return true;
  }
  else {
    //if false card number invalid
    return false;
  }

  }

 

// new function to loop through nested array of card numbers and return only the invalid ones
const findInvalidCards = arrCheck => {
  invalidCardArray = [];
  testArray = [];
  results = []
  falseArrays = [];


// looping through array for the first time
  for(i = 0; i < arrCheck.length; i++) {
    //adding each individual arr to a new array
    invalidCardArray.push(arrCheck[i]);
  }


  //loop through new array and return each array
  for(j = 0; j < invalidCardArray.length; j++) {

    //pushing each array through the invalidCardArray function and saving invalid results to falseArrays list
    if (validateCred(invalidCardArray[j]) === false){
      falseArrays.push(invalidCardArray[j]);
    }
  }

  // displaying falseArrays
  for (x = 0; x < falseArrays.length; x++) {
     console.log(falseArrays[x]);
  }

  return falseArrays;
}



// function to find companies that issued the invalid cards
const idInvalidCardCompanies = arr => {
  cardCompanies = []

  for (i = 0; i < arr.length; i++) {
    if (arr[i][0] === 3) {
      if (cardCompanies.includes('Amex') === false){
        cardCompanies.push('Amex');
      }
    }
   else if (arr[i][0] === 4) {
    if (cardCompanies.includes('Visa') === false){
      cardCompanies.push('Visa');
   }
  }
   else if (arr[i][0] === 5) {
    if (cardCompanies.includes('Master Card') === false){
      cardCompanies.push('Master Card');
   }
  }
   else if (arr[i][0] === 6) {
    if (cardCompanies.includes('Discover') === false){
      cardCompanies.push('Discover');
   }
  }
   else {
    console.log('Card company not found');
   }


  }
  return cardCompanies;
}

console.log(findInvalidCards(batch));
console.log(idInvalidCardCompanies(falseArrays));



