class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        // TWO POINTER
        if (nums.length === 0) return 0;
        let l = 0;
        let r = 0;
        while (r < nums.length) {
            if (nums[r] !== val) {
                nums[l] = nums[r];
                l++;
            }
            r++;
        }
        return l;
    }
}
