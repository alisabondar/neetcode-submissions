class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums: number[]): number[] {
        // compare to each other and use position var
        // time
        // space
        let left = 0;
        let result = new Array(nums.length)
        let pos = result.length - 1;
        let right = nums.length - 1;

        while (left <= right) {
            let lSq = nums[left] * nums[left]
            let rSq = nums[right] * nums[right]

            if (rSq > lSq) {
                result[pos] = rSq
                right--;
            } else {
                result[pos] = lSq
                left++;
            }
            pos--;
        }
        return result;
    }
}
