class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums: number[]): number[] {
        // take the square and then sort?
        // follow left and right and build based on the result?

        let left = 0
        let right = nums.length - 1
        let result = []
        // 16 vs 100
        // 1 vs 9
        // 0

        while (left <= right) {
            let num1 = nums[left] * nums[left]
            let num2 = nums[right] * nums[right]

            if (left === right) {
                result.unshift(num1)
                return result;
            }
            if (num2 > num1) {
                result.unshift(num2)
                right--;
            } else {
                result.unshift(num1)
                left++;
            }
        }
        return result;
    }
}
