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
        let max = 0;
        const seen = new Set<string>();

        for (let right = 0; right < s.length; right++) {
            while (seen.has(s[right])) {
                seen.delete(s[left])
                left++;
            }

            seen.add(s[right])

            max = Math.max(max, seen.size)
        }

        return max;
    }
}
