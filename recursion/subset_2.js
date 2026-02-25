// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

var subsetsWithDup = function(nums) {
  let result = [];
  nums = nums.sort((a,b)=> a - b);

  function backtrack(subset,idx){

    if(idx === nums.length){
        result.push([...subset])
        return;
    }

    subset.push(nums[idx]);
    backtrack(subset,idx + 1);
    subset.pop();

    let next = idx;
    while (next + 1 < nums.length && nums[next] === nums[next + 1]) {
      next++;
    }

    backtrack(subset, next + 1);

  }

  backtrack([],0)
  return result
};

console.log(subsetsWithDup([1,2,2]))