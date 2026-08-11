class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // search for needed number and return INDEX
        let result: number[] = [];
        
        for (let i = 0; i < nums.length; i++) {
            let goal = nums.indexOf(target - nums[i])
            if (goal !== -1 && goal !== i) {
                result.push(i, goal)
                return result.sort((a, b) => b - a);
            }
        }
    }
}
