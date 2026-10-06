class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1: number[], nums2: number[]): number[] {
        let result: Set<number> = new Set();
        let set1 = new Set(nums1);
        let set2 = new Set(nums2);

        if (nums1.length > nums2.length) {
            for (const n of nums1) {
                if (set2.has(n)) result.add(n);
            }
        } else {
            for (const n of nums2) {
                if (set1.has(n)) result.add(n);
            }
        }

        return [...result];
    }
}
