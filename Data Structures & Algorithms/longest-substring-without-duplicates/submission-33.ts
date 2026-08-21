class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        // sliding window + unique = set
        // if repeat character left++, keep track of max
        // else right ++
        // time = O(n)
        // space = O(n) because set grows with s length
        let left = 0;
        let result = 0;
        const seen = new Set();

        for (let right = 0; right < s.length; right++) {
            while (seen.has(s[right])) {
                seen.delete(s[left])
                left++;
            }
            seen.add(s[right])
            result = Math.max(result, seen.size);
        }
        return result;
    }
}
