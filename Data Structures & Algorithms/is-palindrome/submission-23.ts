class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // left represents first char
        // right represents last char

        let left = 0
        let right = s.length - 1

        while (left < right) {
            if (!/[a-z0-9]/i.test(s[left])) {
                left++;
                continue;
            }
            if (!/[a-z0-9]/i.test(s[right])) {
                right--;
                continue
            }
            console.log(s[left], s[right])
            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
            else {
                left++;
                right--;
            }
        }
        return true
    }
}
