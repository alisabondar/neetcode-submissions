class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        // find highest count?
        let max = 0
        let result = 0;
        let count = new Map();

        for (const n of nums) {
            count.set(n, (count.get(n) || 0) + 1)

            if (count.get(n) > max) {
                max = count.get(n)
                result = n;
            }
        }

        return result
    }
}
