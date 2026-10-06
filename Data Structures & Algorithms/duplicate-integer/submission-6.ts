class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // convert to set and compare
        // O(n) O(1)
        let set = new Set(nums)

        if (set.size !== nums.length) return true
        return false
    }
}
