export const reverseString = (str: string): string => {
  return str.split('').reverse().join('');
}

console.log(reverseString('world')); 
console.log(reverseString('hello')); 
console.log(reverseString(''));
console.log(reverseString('h'));