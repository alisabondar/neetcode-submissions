class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // sort by frequency and then return result.slice(0, k)
        let counts = new Map();

        for (const n of nums) {
            if (!counts[n]) counts[n] = 1
            else counts[n] += 1
        }

        return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, k).map(([key]) => Number(key))

        // return result.slice(0, k)
    }
}
