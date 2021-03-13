/*
Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given.
*/


const convertBoolToString = (param: boolean) : string => {
  return String(param)
}

console.log(convertBoolToString(true), "-- true");  
console.log(convertBoolToString(false), "-- false");