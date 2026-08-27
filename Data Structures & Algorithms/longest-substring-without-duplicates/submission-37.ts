class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        // sliding window
        // while dup exists, remove it from set
        // time, space
        let left = 0;
        let result = new Set(s[left]);
        let max = 0;

        for (let r = 1; r < s.length; r++) {
            while (result.has(s[r])) {
                result.delete(s[left])
                left++;
            }
            result.add(s[r])
            max = Math.max(max, result.size)
        }

        return Math.max(max, result.size);
    }
}
