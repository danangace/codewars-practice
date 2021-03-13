const printError = (s: string) : string => {
  const dict = ["a", "b", 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
  let error: number = 0
  let arrayString = s.split('')
  arrayString.forEach(item => {
    if (dict.indexOf(item) < 0) {
      error++
    }
  })
  return `${error}/${s.length}`
}

console.log(printError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))
console.log(printError("kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))
console.log(printError("kkkwwwaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyzuuuuu"))