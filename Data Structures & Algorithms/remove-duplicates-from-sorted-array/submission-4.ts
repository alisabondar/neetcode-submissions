class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        // if duplicate .splice()
        let seen = new Set();

        for (let i = nums.length - 1; i >= 0; i--) {
            if (seen.has(nums[i])) {
                let removed = nums.splice(i, 1)
                nums.push(...removed)
            }

            seen.add(nums[i])
        }

        return nums.slice(0, seen.size).length;
    }
}
