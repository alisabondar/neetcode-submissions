class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        // sliding window!
        // while a dup exists, remove it and left++
        // always calculate max
        let max = 0;
        let left = 0;
        let set = new Set(s[left]);

        for (let r = 1; r < s.length; r++) {
            while (set.has(s[r])) {
                set.delete(s[left])
                left++;
            }
            set.add(s[r])
            max = Math.max(max, set.size)
        }

        return Math.max(max, set.size)
    }
}
