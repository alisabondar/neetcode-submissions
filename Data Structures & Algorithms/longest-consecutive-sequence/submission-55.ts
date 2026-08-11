class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length < 1) return 0;
        let sorted = nums.sort((a, b) => a - b)
        // let set = new Set(sorted)
        console.log(sorted)
        let max = 0;
        let result = 1;

        for (let i = 0; i < sorted.length; i++) {
            if (sorted[i + 1] === sorted[i] + 1) result++;
            // ignore if same, reset if not
            else if (sorted[i + 1] === sorted[i]) continue;
            else {
                if (result > max) max = result;
                result = 1;
            }
        }

        return max;
    }
}
