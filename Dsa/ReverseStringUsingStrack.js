function reverseStringUsingStack(str) {
    // Step 1: Create a stack (using an array)
    let stack = [];
   
    // Step 2: Push each character of the string onto the stack
    for (let i = 0; i < str.length; i++) {
       stack.push(str[i]);
    }
   
    // Step 3: Pop characters from the stack and concatenate
    let reversedStr = '';
    while (stack.length > 0) {
       reversedStr += stack.pop();
    }
   
    return reversedStr;
   }
   
   // Example usage
   const originalString = "Hello, World!";
   const reversedString = reverseStringUsingStack(originalString);
   console.log(reversedString); // Output: "!dlroW ,olleH"
   