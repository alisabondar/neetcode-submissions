class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums: number[], target: number): number {
        // binary search
        // mid = left + ((right - left) / 2)
        // return left

        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = Math.round(left + ((right - left) / 2))
            console.log(mid)

            if (nums[mid] === target) return mid
            else if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }


        return left;
    }
}
