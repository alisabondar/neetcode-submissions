class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let resultInd = [];

        // best to avoid indexOf so use for i loop
        for (let i = 0; i < numbers.length; i++) {
            if (numbers.includes(target - numbers[i])) {
                resultInd.push(i + 1);
                resultInd.push(numbers.indexOf(target - numbers[i]) + 1)
                return resultInd;
            }
        }
        return resultInd;
    }
}
