class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        // two pointers - if less than target, move left
        // if greater then move right
        // push index + 1
        // time = 
        // space = 
        let result = [];
        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            let sum = numbers[left] + numbers[right]

            if (sum < target) left++;
            if (sum > target) right--;
            if (sum === target) {
                result.push(left + 1, right + 1)
                return result
            }
        }


        return result;
    }
}
