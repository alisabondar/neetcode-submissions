class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // two pointer
        // left should equal right
        // if not then return false
        // time = 
        // space = 
        let characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789"

        let left = 0;
        s = s.replaceAll(" ", "").replaceAll(",","").replaceAll("'", "").replaceAll(":", "").toLowerCase()

        for (let i = s.length - 1; i > 0; i--) {
            if (!characters.includes(s[i])) {
                continue;
            }
            if (!characters.includes(s[left])) {
                left++;
                continue;
            }
            console.log(s[i], s[left])
            if (s[i] !== s[left]) return false
            left++
        }
        return true;
    }
}
