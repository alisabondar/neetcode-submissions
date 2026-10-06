class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s: string, t: string): number {
        // keeping track of missing characters
        let target = 0;

        for (const letter of s) {
            if (t[target] === letter) target++;
        }
        console.log(target)

        return t.length - target;
    }
}
