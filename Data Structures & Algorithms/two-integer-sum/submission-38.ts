class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // use a map for value to index;
        // time = O(n)
        // space = O(n)
        let values = new Map()
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            let seen = values.has(target - nums[i])
            if (seen) {
                result.push(values.get(target - nums[i]))
                result.push(i)
                return result;
            }
            values.set(nums[i], i)
        }
        return result;
    }
}
