class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // frequency = map
        // count one and then subtract
        // if equal 0 then return false
        // time
        // space
        if (s.length !== t.length) return false;

        let map = new Map();

        for (const char of s) {
            if (map.get(char)) {
                map.set(char, map.get(char) + 1)
            } else map.set(char, 1)
        }

        for (const ch of t) {
            if (map.get(ch) === 0 || map.get(ch) === undefined) return false;
            map.set(ch, map.get(ch) - 1)
        }

        return true;
    }
}
