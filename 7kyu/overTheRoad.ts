/*
Task
You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

Street
1|   |6
3|   |4
5|   |2
Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

Example
Given your house number address and length of street n, give the house number on the opposite side of the street.

overTheRoad(address, n)
overTheRoad(1, 3) = 6
overTheRoad(3, 3) = 4
overTheRoad(2, 3) = 5
overTheRoad(3, 5) = 8
Note about errors
If you are timing out, running out of memory, or get any kind of "error", read on. Both n and address could get upto 500 billion with over 200 random tests. If you try to store the addresses of 500 billion houses in a list then you will run out of memory and the tests will crash. This is not a kata problem so please don't post an issue. Similarly if the tests don't complete within 12 seconds then you also fail.

To solve this, you need to think of a way to do the kata without making massive lists or huge for loops. Read the discourse for some inspiration :)
*/

const overTheRoad = (address: number, n: number) : number => {
  // // check even line or odd line
  // const typeLine = address % 2 === 0 ? 'even' : 'odd'
  // const difference = 2
  // const maxEvenValue = 2 + (n-1) * difference

  // // find the current position of address, at what block
  // const findPosition = (address: number, type: string) : number => {
  //   if (type === 'odd') {
  //     return (address - 1) / difference + 1
  //   } else {
  //     return -1 * (address - maxEvenValue) / 2 + 1
  //   }
  // }
  
  // let currentPosition = findPosition(address, typeLine)

  // // find overTheRoad value
  // const overRoadValue = (pos: number, type: string) : number => {
  //   if (type === 'odd') {
  //     return maxEvenValue - (pos - 1) * difference
  //   } else {
  //     return 1 + (pos - 1) * difference 
  //   }
  // }

  // return overRoadValue(currentPosition, typeLine)
  
  return 2 * n - (address - 1)
}


console.log(overTheRoad(1, 3)) // 6
console.log(overTheRoad(4, 3)) // 3
console.log(overTheRoad(2, 3)) // 5
console.log(overTheRoad(3, 5)) // 8
