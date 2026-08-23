class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        // fix i, loop through l & r
        // account for i and l duplicates
        // time
        // space
        let result = [];
        nums.sort((a, b) => a - b)

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) return result;
            if (nums[i] === nums[i - 1]) continue;

            let l = i + 1
            let r = nums.length - 1

            while (l < r) {
                let sum = nums[i] + nums[l] + nums[r]
                if (sum < 0) {
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    console.log(sum)
                    result.push([nums[i], nums[l], nums[r]])
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) l++;
                }
            }
        }
        return result;
    }
}
