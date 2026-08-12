class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // counting pattern but could convert to set and check size instead
        // Time - O(1)
        // Space - O(1)

        let set = new Set(nums) 
        if (set.size === nums.length) return false;
        return true;
    }
}
