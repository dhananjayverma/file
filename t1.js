var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

// Find duplicate values
var duplicateValues = fullWordList.filter((value, index, array) => {
  return array.indexOf(value) !== index;
});

console.log('Duplicate Values:', duplicateValues);

// Find same values
var sameValues = fullWordList.filter((value) => {
  return wordsToRemove.includes(value);
});

console.log('Same Values:', sameValues);



//logic ...

// In this code, filter() is used to iterate over the fullWordList array and 
// check for duplicate values and same values between the two arrays.

// The duplicateValues array is created by filtering the fullWordList array and 
// returning the values for which the index of the first occurrence of the value
//  is not equal to the current index. This filters out all the unique values, leaving only the duplicate values.

// The sameValues array is created by filtering the fullWordList array 
// and checking if each value is included in the wordsToRemove array.
//  This will give you an array of values that exist in both arrays.

// After running the code, the duplicate values and same values are 
// logged to the console. In this example, the duplicate values will be 
// ['1', '2', '3'] and the same values will also be ['1', '2', '3'].
