class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // two pointer, do characters match
        let left = 0;
        let right = s.length - 1;

        while (right > left) {
            if (!/[a-zA-Z0-9]/.test(s[left])) {
                left++;
                continue;
            }
            else if (!/[a-zA-Z0-9]/.test(s[right])) {
                right--;
                continue;
            }
            else if (s[left].toLowerCase() === s[right].toLowerCase()) {
                left++;
                right--;
            }
            else return false;
        }
        return true;
    }
}
