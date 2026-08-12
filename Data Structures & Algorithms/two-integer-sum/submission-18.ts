class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // two pointer to reach target
        // time
        // space
        // let result: number[] = []
        // let left = 0
        // let right = nums.length - 1
        // nums.sort((a, b) => b - a)

        // while (left < right) {
        //     let sum = Math.abs(nums[left] + nums[right])

        //     if (sum === Math.abs(target)) {
        //         console.log(left, right)
        //         result.push(left)
        //         result.push(right)
        //         console.log(result)
        //         return result;
        //     }

        //     if (sum > Math.abs(target)) right--;
        //     if (sum < Math.abs(target)) left++;
        // }


        let result = [];
        for (let i = 0; i < nums.length; i++) {
            // return indices
            if (nums.includes(target - nums[i])) {
                result.push(i)

                let index = nums.indexOf(target - nums[i])
                if (i === index) {
                    result = []
                    continue;
                }
                else {
                    result.push(index)
                    return result;
                }
            }
        }
        return result;
    }
}
