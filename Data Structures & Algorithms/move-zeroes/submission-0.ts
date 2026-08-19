class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        // two pointers
        // left represents 0 - move when not
        // right represents non 0 - always move and switch
        let left = 0;
        let right = 1;

        while (right < nums.length) {
            // if left === 0 - swap
            // else left++
            if (nums[left] !== 0) left++;
            else if (nums[left] === 0 && nums[right] !== 0) {
                nums[left] = nums[right]
                nums[right] = 0
                left++
            }
            right++;
        }
    }
}
