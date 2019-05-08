/* conditionalSum: Given an array and a condition,
add up only the values which match that condition.
If no values match the condition, return 0.
*/
var conditionalSum = function(values, condition) {
  var newArray = [];
  if (values.length == 0) // first test to see if the array is empty and exit if true
    return console.log(0);
  if (condition == "even"){ // if even then put even numbers into newArray.
    for (i=0; i < values.length; i++){
      console.log("Condition is even.")
      if (values[i] % 2 == 0) {
        newArray.push(values[i]);
      }
    }
  } else if (condition == "odd"){ // if odd put odd numbers into newArray
    console.log("Condition is odd.")
    for (i=0; i < values.length; i++){
    if (values[i] % 2 != 0){
      newArray.push(values[i]);
    };
  }
}
    var sum = newArray.reduce((partial_sum, a) => partial_sum + a); // add the numbers in newArray
    console.log(sum);
};

conditionalSum([1, 2, 3, 4, 5], "even");
conditionalSum([1, 2, 3, 4, 5], "odd");
conditionalSum([], "odd");
