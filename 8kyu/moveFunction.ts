export const moveFunction = (pos: number, roll: number): number => {
  return (pos + roll*2)
}

console.log(moveFunction(0,4)); // 8
console.log(moveFunction(3,6)); // 15
console.log(moveFunction(2,5)); // 12