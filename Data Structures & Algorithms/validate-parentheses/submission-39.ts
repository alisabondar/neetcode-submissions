class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // stack problem
        // create object   
        let parens = {
            "}" : "{",
            ")" : "(",
            "]" : "["
        }

        let stack = [];

        if (s.length === 1) return false;
        for (const char of s) {
            if (!parens[char]) {
                stack.push(char)
            } else if (stack[stack.length - 1] === parens[char]) {
                stack.pop()

                // if (stack.length === 0 && char === s[s.length - 1]) return true;
            } else return false;
        }
        return stack.length === 0 ? true : false
    }
}