class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        // binary search, check each half
        // check again since unsorted
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = Math.round(left + ((right - left) / 2))
            console.log(mid, nums[mid])

            if (nums[mid] === target) return mid
            else if (nums[mid] > nums[left]) {
                // left side
                if (nums[left] <= target && target < nums[mid]) {
                    // move right
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                // right side
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1
                } else right = mid - 1
            }
        }

        return -1
    }
}
