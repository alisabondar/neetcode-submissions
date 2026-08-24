class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        // midpoint + 2 pointers

        let left = 0;
        let right = nums.length - 1

        while (left <= right) {
            let mid = right - left / 2

            if (nums[mid] === target) return mid;
            else if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return -1
    }
}
