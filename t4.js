console.log("7" > 7) //will output false.

// In this comparison, "7" is a string and 7 is a number
// The string "7" is converted to the number 7.
// The number 7 is compared to the number 7.
// The comparison 7 > 7 evaluates to false.
// Therefore, the output will be false


console.log("2" > "21") //will output true.

// In this comparison, both operands are strings. 
// The first characters being compared are '2' and '2'.
// Since they are equal, the next characters are compared.
// The second character of the first string is '2', while the second character of the second string is '1'.
// The Unicode value of '2' (U+0032) is greater than the Unicode value of '1' (U+0031).
// Therefore, the comparison "2" > "21" evaluates to true.
// The output will be true.




console.log("KL" > "S") //will output false.

// Comparing the first characters, "K" and "S", the character code of "K" is less than the character code of "S".
// Since the first characters are different, the comparison ends and the result is determined based on the comparison of the first characters.
// Therefore, the output of console.log("KL" > "S") will be false.