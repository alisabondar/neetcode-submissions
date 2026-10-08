class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        // when non zero encountered swap, w progresses
        let w = 0;

        for (let r = 1; r < nums.length; r++) {
            if (nums[r] !== 0 && nums[w] === 0) {
                nums[w] = nums[r]
                nums[r] = 0
                w++;
            }
            if (nums[w] !== 0) w++;
        }
    }
}
