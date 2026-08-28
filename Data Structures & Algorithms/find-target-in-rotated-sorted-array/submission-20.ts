class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        // binary search
        // if mid > target => move left
        // else right
        // set new search?

        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = Math.round(left + ((right - left) / 2))
            console.log(mid)

            if (nums[mid] === target) return mid
            else if (nums[left] < nums[mid]) {
                if (nums[left] <= target && target <= nums[mid]) right = mid - 1
                else left = mid + 1
            } else {
                if (nums[mid] <= target && target <= nums[right]) left = mid + 1
                else right = mid - 1
            }
        }

        return -1;
    }
}
