class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // create map of s and compare to t
        let count = new Map();

        if (s.length !== t.length) return false;

        for (const letter of s) {
            let exists = count.get(letter) ?? 0;
            count.set(letter, exists + 1);
        }

        for (const l of t) {
            if (count.get(l) === 0 || count.get(l) === undefined) return false;
            count.set(l, count.get(l) - 1);
        }

        return true;
    }
}
