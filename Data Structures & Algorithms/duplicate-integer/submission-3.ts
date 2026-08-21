class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // time = O(n)
        // space = O(1)
        let set = new Set(nums)

        if (set.size === nums.length) return false;
        return true;
    }
}
