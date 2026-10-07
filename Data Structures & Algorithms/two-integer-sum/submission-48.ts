class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // create a map: n => i
        let dict = {}

        for (let i = 0; i < nums.length; i++) {
            let exists = dict[target - nums[i]]
            if (exists !== undefined) {
                return [exists, i]
            }

            dict[nums[i]] = i
        }
    }
}
