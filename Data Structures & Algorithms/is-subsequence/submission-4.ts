class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        let target = 0;

        for (const l of t) {
            if (s[target] === l) target++;
        }

        if (target === s.length) return true;
        return false;
    }
}
