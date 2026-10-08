class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        // count object
        let counts = {};
        let max = 0;
        let result = 0;

        for (const n of nums) {
            counts[n] = (counts[n] ?? 0) + 1

            if (counts[n] > max) {
                result = n
                max = counts[n]
            }
        }

        return result;
    }
}
