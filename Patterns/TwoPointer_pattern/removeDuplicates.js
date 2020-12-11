//Given an array of sorted numbers, remove all duplicates from it.
//You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.
//Input: [2, 3, 3, 3, 6, 9, 9]
//Output: 4
//Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

const remove_duplicates = function (arr) {
  if (arr.length <= 0) return -1;
  if (arr.length == 1) return 1;
  let left = 0;
  right = 1;
  let count = 1;
  while (right < arr.length) {
    if (arr[left] != arr[right]) {
      count++;
      left = right;
      right++;
    } else right++;
  }

  return count;
};

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(remove_duplicates([2, 2, 2, 11]));
