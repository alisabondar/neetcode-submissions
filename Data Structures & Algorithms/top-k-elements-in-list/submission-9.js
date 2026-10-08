class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // make a dict of counts
        // sort and return x
        let counts = {};

        for (const n of nums) {
            counts[n] = (counts[n] ?? 0) + 1;
        }

        let result = Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .map((a) => a[0]);
        console.log(result);

        return result.slice(0, k);
    }
}
