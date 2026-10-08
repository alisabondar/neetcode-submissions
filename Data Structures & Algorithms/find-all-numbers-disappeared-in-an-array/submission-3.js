class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        // iterate through nums
        // for each n find ints that are in the range but not in nums
        // sorted set?

        let set = new Set(nums.sort());
        let result = new Set();
        let max = nums.length;

        for (let n = 1; n <= nums.length; n++) {
            if (!set.has(n)) result.add(n);
        }

        return [...result];
    }
}
