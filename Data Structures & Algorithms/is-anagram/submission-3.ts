class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // counting pattern - need a map
        // time
        // space
        if (s.length !== t.length) return false

        let sMap: Map<string, number> = new Map()
        for (const char of s) {
            let current = sMap.get(char)
            if (current) {
                sMap.set(char, current + 1)
            } else sMap.set(char, 1)
        }

        for (const ch of t) {
            // subtract and if 0 is found then return false
            let current = sMap.get(ch)
            if (current === undefined || current === 0) return false;
            sMap.set(ch, current - 1)
        }

        return true;
    }
}
