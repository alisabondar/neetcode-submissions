class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums: number[]): number[] {
        // two pointer
        // time = O(n)
        // space = O(n) create array from scratch
        // BUILD ARRAY FROM THE BACK
        let result = new Array(nums.length)
        let left = 0;
        let right = nums.length - 1;
        let position = result.length - 1;

        while (left <= right) {
            let lSq = nums[left] * nums[left]
            let rSq = nums[right] * nums[right]

            if (rSq > lSq) {
                result[position] = rSq
                right--;
            } else {
                result[position] = lSq
                left++;

            }
            position--;
        }
        return result;
    }
}
