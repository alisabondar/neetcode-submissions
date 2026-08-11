class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // convert into set and compare length?
        let set = new Set(nums);
        if (nums.length === set.size) return false;
        return true;
    }
}
