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
        let result = new Array(nums.length)
        let position = nums.length - 1;

        while (left <= right) {
            let num1 = nums[left] * nums[left]
            let num2 = nums[right] * nums[right]

            if (left === right) {
                result[position] = num1
                return result;
            }
            if (num2 > num1) {
                result[position] = num2
                right--;
            } else {
                result[position] = num1
                left++;
            }
            position--;
        }
        return result;
    }
}
