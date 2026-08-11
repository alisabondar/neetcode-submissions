class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        // writing two pointer
        let w = 0;

        for (const num of nums) {
            if (num !== val) {
                nums[w]= num;
                w++;
            }
        }
        return w;
    }
}
