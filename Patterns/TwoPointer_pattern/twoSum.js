//Input: [1, 2, 3, 4, 6], target=6 array is sorted
//Output: [1, 3]
//Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

const pair_with_targetsum = function (arr, target_sum) {
  // TODO: Write your code here
  let ptr1 = 0,
    ptr2 = arr.length - 1;
  while (ptr1 != ptr2) {
    const sum = arr[ptr1] + arr[ptr2];
    if (sum === target_sum) return [ptr1, ptr2];
    else if (sum < target_sum) ptr1++;
    else ptr2--;
  }
  return [-1, -1];
};

console.log(pair_with_targetsum([1, 2, 3, 4, 6], 6));
console.log(pair_with_targetsum([2, 5, 9, 11], 11));
