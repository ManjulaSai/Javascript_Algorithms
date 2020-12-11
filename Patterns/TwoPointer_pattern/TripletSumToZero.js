//Input: [-3, 0, 1, 2, -1, 1, -2]
//Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
//Explanation: There are four unique triplets whose sum is equal to zero.
//Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

const search_triplets = function (arr) {
  arr.sort((a, b) => a - b);
  //console.log(arr);
  triplets = [];
  for (let i = 0; i < arr.length - 2; i++) {
    const curr = arr[i];
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = curr + arr[left] + arr[right];
      if (sum === 0) {
        triplets.push([curr, arr[left], arr[right]]);
        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return triplets;
};

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));

console.log(search_triplets([-5, 2, -1, -2, 3]));
