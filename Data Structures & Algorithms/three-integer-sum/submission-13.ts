class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        // fix the i num and calculate l and r based on it
        // time O(n log n)? because for loop and sort func
        // space O(n)
        let result = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) continue;

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
                if (sum < 0) {
                    left++;
                } else if (sum > 0) {
                    right--;
                } else {
                    result.push([nums[i], nums[left], nums[right]]);

                    left++;
                    right--;

                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                }
            }
        }
        return result;
    }
}
