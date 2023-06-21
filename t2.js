const word = '00000111110101001111100001001';

let currentChainLength = 0;
let maxChainLength = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] === '1') {
    currentChainLength++;
    if (currentChainLength > maxChainLength) {
      maxChainLength = currentChainLength;
    }
  } else {
    currentChainLength = 0;
  }
}

console.log('Longest chain of letters:', maxChainLength);


// logic
/*

In this code, the variable currentChainLength keeps track of the current chain length of
 consecutive letters, while maxChainLength stores the maximum chain length encountered.
The loop iterates through each character of the word. If the character is '1',
 it increments currentChainLength and checks if it surpasses the current maxChainLength. 
 If it does, maxChainLength is updated.
If the character is not '1', indicating the chain is broken, 
currentChainLength is reset to 0.
After the loop completes, the code logs the longest 
chain of letters (maxChainLength) to the console.
When running this code with the provided word, the output will be 6,
 as the longest chain of consecutive letters is '111110'.

*/ 