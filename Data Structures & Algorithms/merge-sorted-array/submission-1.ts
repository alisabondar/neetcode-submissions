class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        // fill nums1 from the back
        // pointers comparing which number comes next
        let nums1Last = m - 1;
        let nums2Last = n - 1;
        let destination = m + n - 1;

        while (nums2Last >= 0) {
            if (nums2[nums2Last] > nums1[nums1Last] || nums1Last === -1) {
                nums1[destination] = nums2[nums2Last]
                nums2Last--;
            } else {
                nums1[destination] = nums1[nums1Last]
                nums1Last--;
            }
            destination--;
        }
    }
}
