class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // two pointer to reach target - HASH MAP LOOKUP
        // time O(n2) because of indexOf?
        // space = O(n) bc result array


        let result = [];
        for (let i = 0; i < nums.length; i++) {
            // return indices
            if (nums.includes(target - nums[i])) {
                result.push(i)

                let index = nums.indexOf(target - nums[i])
                if (i === index) {
                    result = []
                    continue;
                }
                else {
                    result.push(index)
                    return result;
                }
            }
        }
        return result;
    }
}
