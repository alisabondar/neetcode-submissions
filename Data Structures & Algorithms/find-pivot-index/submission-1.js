class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        // calculate total!!!
        // initiate leftSum
        // iterate through right and check for match
        let total = 0;
        for (const n of nums) total += n

        let leftSum = 0

        for (let r = 0; r < nums.length; r++) {
            if (total - nums[r] - leftSum === leftSum) return r
            leftSum += nums[r]
        }

        return -1
    }
}
