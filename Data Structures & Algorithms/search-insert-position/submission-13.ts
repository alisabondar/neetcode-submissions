class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums: number[], target: number): number {
        // binary search
        let left = 0;
        let right = nums.length - 1

        while (left <= right) {
            let mid = Math.round(left + ((right - left) / 2))

            if (nums[mid] === target) return mid
            else if (nums[mid] > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } 
        return left;
    }
}
