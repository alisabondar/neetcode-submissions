class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        // shrink a copy array and find max?
        let copy = arr.slice(1);
        let result = [];

        for (let i = 0; i < arr.length; i++) {
            if (i === arr.length - 1) {
                result.push(-1)
                return result;
            }
            let max = Math.max(...copy)
            result.push(max)
            copy.shift()
        }
    }
}
