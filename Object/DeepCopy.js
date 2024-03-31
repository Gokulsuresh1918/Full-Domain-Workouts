const originalObject = {
    name: "John",
    age: 30,
    address: {
       city: "New York",
       country: "USA"
    }
   };
   
   const deepCopyObject = JSON.parse(JSON.stringify(originalObject));
   
   // Modifying the deep copy
   deepCopyObject.address.city = "Los Angeles";
   
   console.log(originalObject); // Original object remains unchanged
   console.log(deepCopyObject); // Deep copy with modified address
   