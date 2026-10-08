class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        // two pointers
        let left = 0;
        
        for (let r = 0; r < t.length; r++) {
            if (s[left] === t[r]) left++;
        }

        return left === s.length
    }
}
