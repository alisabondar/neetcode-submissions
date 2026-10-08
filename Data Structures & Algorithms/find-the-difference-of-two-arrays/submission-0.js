class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[][]}
     */
    findDifference(nums1, nums2) {
        // use sets
        let set1 = new Set(nums1)
        let set2 = new Set(nums2)

        let r1 = new Set()
        let r2 = new Set()

        for (const n of nums1) {
            if (!set2.has(n)) r1.add(n)
        }
        for (const n of nums2) {
            if (!set1.has(n)) r2.add(n)
        }

        return [[...r1], [...r2]]
    }
}
