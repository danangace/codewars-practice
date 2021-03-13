export const reverseWords = (str: string) : string => {
  return str.split(' ').reverse().join(' ')
}

console.log(reverseWords("The greatest victory is that which requires no battle"));
// should return "battle no requires which that is victory greatest The"