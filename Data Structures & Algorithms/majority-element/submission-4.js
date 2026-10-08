class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // use map
        let map = {}

        for (const n of nums) {
            map[n] = (map[n] ?? 0) + 1
        }

        let result = Object.entries(map).sort((a, b) => b[1] - a[1])
        return result[0][0]
    }
}
