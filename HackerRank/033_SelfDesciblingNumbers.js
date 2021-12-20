const SelfDesciblingNumbers = lines => {
  
  // convert the input parameter into string, and then split into array, so we can iterate it
  lines = lines.toString().split("");
  // console.log(typeof(lines))
  
  // temp array to hold how much time that element in lines array occurs
  let arr = Array(lines.length).fill(0);
  
  // console.log(arr)
  
  // for loop the lines array
  for(var i=0; i<lines.length; i++) {
    // increase our arr index by lines's occurance
    arr[lines[i]] += 1;
    // console.log(lines[i]);
  }
  
  
  // console.log(arr.join(""));
  // console.log(lines.join(""));
  
  // we now have two array (lines, and arr). we want to join them together as a number/string, for comparing
  // if those two are match, then we return 1
  if(arr.join("") == lines.join("")) {
    console.log(1);
  } else {
    // else return 0
    console.log(0);
  }
}

SelfDesciblingNumbers(2020);
SelfDesciblingNumbers(22);