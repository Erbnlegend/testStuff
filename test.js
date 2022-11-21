// Fibonacci Sequence

let array = []
function fibsRec (n1, n2, fibNum) {
  fibNum++
  if (fibNum >= 8) {
    return
  }
  if (n1 === 0 | n2 === 1) {
    array.push(n1)
  }
  let nextNum = n1 + n2
  array.push(nextNum)
  n1 = n2
  n2 = nextNum
  fibsRec(n1, n2, fibNum)
}

fibsRec(n1 = 0, n2 = 1, fibNum = 0)
console.log(array)