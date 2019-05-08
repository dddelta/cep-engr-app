repeatNumbers = function(data) {
  var i; //for the inner loop that builds the array of repeated numbers
  for (var j = 0; j < data.length; j++){ //outer loop; controls # of times to execute inner loop
    var newArray = []; // an array to store the repeated numbers
    var reps = data[j][1]; // the number of times to repeat the inner loop
    for (i = 0; i < reps; i++) {
      var firstNum = (data[j][0]); //You always want the 0th element of the data[j]
      newArray.push(firstNum); // push the first number to the array
    }
    console.log(newArray);
  };
};
//repeatNumbers([[1, 10]]);
//repeatNumbers([[1,2], [2, 3]]);
repeatNumbers([[10, 4], [34, 6], [92, 2]]);
