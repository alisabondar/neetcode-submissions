class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        // two pointers - swap 0 with last
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            let letter = s[l]
            s[l] = s[r]
            s[r] = letter
            l++;
            r--;
        }
    }
}
