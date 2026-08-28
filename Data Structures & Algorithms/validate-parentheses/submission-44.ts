class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // stack problem
        if (s.length < 2) return false;

        let parens = {
            "}" : "{",
            ")" : "(",
            "]" : "["
        }

        let stack = [];

        for (const ch of s) {
            if (parens[ch] === undefined) {
                stack.push(ch)
            } else {
                if (parens[ch] === stack[stack.length - 1]) stack.pop();
                else return false;
            }
        }

        return stack.length === 0
    }
}
