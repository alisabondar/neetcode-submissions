class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums: number[], target: number): number {
        // binary search but return left
        let l = 0
        let r = nums.length - 1

        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2)
            console.log(mid)

            if (nums[mid] === target) return mid
            else if (nums[mid] < target) {
                l = mid + 1
            } else r = mid - 1
        }

        return l;
    }
}
