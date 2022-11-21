let array = [16, 6, 5, 8, 10, 2, 14, 9, 3, 15, 11, 12, 4, 7, 13, 1]

function mergeSort (unsortedArray) {
  if (unsortedArray.length === 0) return 'This is already sorted!'
  if (unsortedArray.length === 1) return unsortedArray
  
  // Find the middle of the array
  const mid = Math.floor(unsortedArray.length / 2 )
  // Find the first (left) half
  const left = unsortedArray.slice(0, mid)
  // Find the second (right) half
  const right = unsortedArray.slice(mid, unsortedArray.length)
  // Recursively sort through both sides
  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  // New array for temp storage
  const tempArray = []

  // Index pointers
  leftIndex = 0
  rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    // If left side index value is smaller, push that value
    if (left[leftIndex] < right[rightIndex]) {
      tempArray.push(left[leftIndex])
      // Change index pointer
      leftIndex++
      // Otherwise if right index value is smaller, push that value
    } else {
      tempArray.push(right[rightIndex])
      // Change index pointer
      rightIndex++
    }
  }
  while (leftIndex < left.length) {
    tempArray.push(left[leftIndex])
    leftIndex++
  }
  while (rightIndex < right.length) {
    tempArray.push(right[rightIndex])
    rightIndex++
  }
  return tempArray
}

console.log(mergeSort(array))