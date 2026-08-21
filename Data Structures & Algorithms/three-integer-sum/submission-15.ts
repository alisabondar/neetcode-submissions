class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        // fix i + two pointer; sort nums
        // account for duplicates
        // edge: if i > 0 return because sum will always be above 0
        // time
        // space
        let result = [];
        nums.sort((a, b) => a - b)

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right]

                if (sum < 0) {
                    left++;
                } else if (sum > 0) {
                    right--;
                } else {
                    result.push([nums[i], nums[left], nums[right]])
                    left++;
                    right--;

                    while (left < right && (nums[left] === nums[left - 1])) {
                        left++;
                    }
                }
            }
        }
        return result;
    }
}
