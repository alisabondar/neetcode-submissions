class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        // three pointers
        let last1 = m - 1;
        let last2 = n - 1;
        let input = m + n - 1;

        while (last2 >= 0) {
            if (nums1[last1] < nums2[last2] || last1 === -1) {
                nums1[input] = nums2[last2];
                last2--;
            } else {
                nums1[input] = nums1[last1];
                last1--;
            }
            input--;
        }
    }
}
