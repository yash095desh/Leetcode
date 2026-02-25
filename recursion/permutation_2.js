// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

 

// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// Example 2:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

// Constraints:

// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = [];
    let used = new Array(nums.length).fill(false);
    nums = nums.sort((a,b)=> a - b);

    function backtrack(comb){
        if(comb.length === nums.length){
            result.push([...comb])
            return;
        }

        for(let i = 0 ; i < nums.length; i++){
            if(used[i])continue;
            if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1])continue;

             // choose
            used[i] = true;
            comb.push(nums[i]);

            backtrack(comb);

            // unchoose
            comb.pop();
            used[i] = false;
        }
    }

    backtrack([])
    return result
};


console.log(permuteUnique([1,1,2]))