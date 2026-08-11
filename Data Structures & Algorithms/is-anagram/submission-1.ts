class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // two counters
        if (s.length !== t.length) return false

        let sdict = new Map();
        let tdict = new Map();

        for (let i = 0; i < s.length; i++) {
            if (sdict[s[i]] !== undefined) {
                sdict[s[i]]++;
            }
            else sdict[s[i]] = 1;
        }

        for (let j = 0; j < t.length; j++) {
            if (tdict[t[j]] !== undefined) tdict[t[j]] += 1;
            else tdict[t[j]] = 1;
        }

        // another loop???
        for (let i = 0; i < s.length; i++) {
            if (sdict[s[i]] !== tdict[s[i]]) return false;
        }
        return true;
    }
}
