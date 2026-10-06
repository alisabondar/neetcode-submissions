class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // convert to set and compare
        let set = new Set(nums)

        if (set.size !== nums.length) return true
        return false
    }
}
