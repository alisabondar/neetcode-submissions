class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1: number[], nums2: number[]): number[] {
        // return duplicates
        let set = new Set();
        let result: Set<number> = new Set();

        if (nums1.length > nums2.length) {
            set = new Set([...nums1]);
            for (const n of nums2) {
                if (set.has(n)) result.add(n);
            }
        } else {
            set = new Set([...nums2]);
            for (const n of nums1) {
                if (set.has(n)) result.add(n);
            }
        }

        return [...result]
    }
}
