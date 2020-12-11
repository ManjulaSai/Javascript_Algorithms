//Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.
//Input: [-2, -1, 0, 2, 3]
//Output: [0, 1, 4, 4, 9]

const make_squares = function (arr) {
  const squares = new Array(arr.length).fill(0);
  let place = arr.length - 1;
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const leftSum = arr[left] * arr[left];
    const rightSum = arr[right] * arr[right];
    if (leftSum > rightSum) {
      squares[place] = leftSum;
      left++;
      place--;
    } else {
      squares[place] = rightSum;
      place--;
      right--;
    }
  }
  // TODO: Write your code here
  return squares;
};

console.log(make_squares([-3, -1, 0, 1, 2]));
console.log(make_squares([-2, -1, 0, 2, 3]));
