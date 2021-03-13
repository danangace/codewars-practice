export const makeNegative = (num: number): number => {
  if (num > 0) {
    return -num
  } else if (num === 0) {
    return 0
  }
  return num
};

console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));

// npx ts-node fileName.ts