let obj1 = { "greeting": "hello" }; // Create an object and assign it to obj1
let obj2 = obj1; // Assign the reference of obj1 to obj2

obj1["greeting"] = "Bye"; // Modify the "greeting" property of obj1

console.log(obj1); // Output: { "greeting": "Bye" }
console.log(obj2); // Output: { "greeting": "Bye" }
