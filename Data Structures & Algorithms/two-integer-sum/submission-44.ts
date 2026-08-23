class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // use a map?? if seen before then return index;
        let result = [];
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let answer = map.get(target - nums[i])
            // console.log(answer)
            if (answer !== undefined && answer !== i) {
                result.push(answer, i)
                return result;
            }
            map.set(nums[i], i)
        }
        return result;
    }
}
