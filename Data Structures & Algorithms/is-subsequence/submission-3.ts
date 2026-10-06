class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        // two pointer?
        let target = 0

        if (s.length === 0) return true;

        for (const letter of t) {
            if (s[target] === letter) target++;
            console.log(target, s.length)
            if (target === s.length) return true
        }

        return false;
    }
}
