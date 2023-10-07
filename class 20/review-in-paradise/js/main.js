// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
//let favFood = 'Dominos'
//favFood = 'Pho'

//alert(favFood)


//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

//let str = 'hello, twitch'
//alert ( str.charAt(1) )


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
//function divideAndMult(n1, n2, n3){
  //let prod = (n1/n2) * n3
  //alert(prod)
//}
//divideAndMult(12,3,4)
function makePizza() {
    const pizzaToppings = ["Pepperoni", "Cheese"];
    return pizzaToppings;
  }
  
  const myPizza = makePizza();
  alert("It's pizza time");
  console.log("My pizza toppings:", myPizza);
  