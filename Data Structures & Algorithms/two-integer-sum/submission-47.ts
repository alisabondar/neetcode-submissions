class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let seen = new Map();

        for (let i = 0; i < nums.length; i++) {
            let answer = seen.get(target - nums[i]);
            if (answer !== undefined && answer !== i) {
                return [answer, i];
            }
            
            seen.set(nums[i], i);
        }
    }
}
