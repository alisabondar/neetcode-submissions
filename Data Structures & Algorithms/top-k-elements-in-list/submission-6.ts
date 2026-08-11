class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let result = [];
        // sort by frequency and then return result.slice(0, k)
        let counts = new Map();

        for (const n of nums) {
            if (!counts[n]) counts[n] = 1
            else counts[n] += 1
        }

        let max = 0;

        for (const c of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
            console.log(c)
            if (c[1] > max) result.unshift(c[0])
            else result.push(c[0])
            max = c[1]
        }

        return result.slice(0, k)
    }
}
