class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let result = [];
        let forward = [];
        let backward = [];

        forward[0] = 1;
        for (let i = 1; i < nums.length; i++) {
            forward[i] = forward[i - 1] * nums[i- 1]
        }
        backward[nums.length - 1] = 1;
        for (let j = nums.length - 2; j >= 0; j--) {
            console.log(j)
            backward[j] = backward[j + 1] * nums[j + 1]
        }
        console.log(forward, backward)
        for (let k = 0; k < forward.length; k++) {
            result.push(forward[k] * backward[k])
        }

        return result;
    }
}
