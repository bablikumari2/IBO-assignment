// You have been given a list of products which is having property productName, quantity and description.


// PROBLEM STATEMENTS:

// 1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// {
//   "TV": 2,
//   "AC": 2,
//   "FAN": 1
// }



// 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

// Sample Output for the given listOfProducts will be :

// [{
//     productName: "TV",
//     quantity: 20,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 10,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//      description: "Ceiling Fan"
//   }
// ]

// */




// const listOfProducts = [{
//     productName: "TV",
//     quantity: 10,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 5,
//     description: "air conditioner"
//   },
//   {
//     productName: "TV",
//     quantity: 10,
//     description: "television"
//   },
//   {
//     productName: "AC",
//     quantity: 5,
//     description: "air conditioner"
//   },
//   {
//     productName: "FAN",
//     quantity: 10,
//     description: "Ceiling Fan"
//   }
// ];
const listOfProducts = [{
        productName: "TV",
        quantity: 10,
        description: "television"
      },
      {
        productName: "AC",
        quantity: 5,
        description: "air conditioner"
      },
      {
        productName: "TV",
        quantity: 10,
        description: "television"
      },
      {
        productName: "AC",
        quantity: 5,
        description: "air conditioner"
      },
      {
        productName: "FAN",
        quantity: 10,
        description: "Ceiling Fan"
      }
    ];


    

    // 1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.


      const getUniqueProductCount = (key) => {
        const obj = {};
      
        key.forEach((e) => {
          obj[e.productName] = (obj[e.productName] || 0) + 1;
        });
        return obj;
      };
      console.log(getUniqueProductCount(listOfProducts));

      // 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.
      
      const getUniquePrducts = (key) => {
        const obj = {};
        key.forEach((e) => {
          if (obj[e.productName] == undefined) {
            obj[e.productName] = e;
          } else {
            obj[e.productName].quantity += e.quantity;
          }
        });
      
        return Object.values(obj);
      };
      
      console.log(getUniquePrducts(listOfProducts));      