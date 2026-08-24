class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        // binary search to find minimum
        let l = 0;
        let r = nums.length - 1;
        let min = 10000

        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            min = Math.min(min, nums[mid])

            if (nums[r] < nums[mid]) {
                l = mid + 1
            } else r = mid - 1
        }
        return min
    }
}
