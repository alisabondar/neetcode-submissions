class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        // sliding window
        // keep track of characters in window and remove duplicates
        // time
        // space
        let left = 0;
        let right = 1;
        let result = [s[left]];
        let max = 0

        if (s.length === 0) return 0
        while (right < s.length) {
            let index = result.indexOf(s[right])
            // console.log(result, index)

            if (index > -1) {
                max = Math.max(max, result.length);
                result = result.slice(index + 1)
                // console.log(result)
                left = right
            } 
            result.push(s[right])
            right++;
        }

        return Math.max(max, result.length);
    }
}
