class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        // create map again
        let count = {};

        for (const l of s) {
            count[l] = (count[l] ?? 0) + 1
        }

        for (const l of t) {
            if (count[l] === 0 || count[l] === undefined) return false
            count[l] -= 1
        }
        
        return true
    }
}
