class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        // if left is smaller than right - left++
        // always calculate area
        // time
        // space = O(1)
        let left = 0;
        let right = heights.length - 1
        let result = 0

        while (left < right) {
            let area = (Math.min(heights[left], heights[right])) * (right - left)
            result = Math.max(area, result)

            if (heights[left] < heights[right]) left++
            else right--;
        }
        return result;
    }
}
