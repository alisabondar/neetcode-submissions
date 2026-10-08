class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        // set non 0
        // set 0
        let left = 0;

        for (let r = 1; r < nums.length; r++) {
            if (nums[left] !== 0) {
                left++;
                continue;
            }
            if (nums[r] !== 0) {
                nums[left] = nums[r]
                nums[r] = 0
                left++;
            }
        }
        console.log(left)
        while (left < nums.length - 1) {
            nums[left] = 0
            left++;
        }
    }
}
