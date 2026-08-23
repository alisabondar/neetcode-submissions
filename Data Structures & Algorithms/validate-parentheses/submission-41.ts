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

        for (const char of s) {
            if (!parens[char]) {
                stack.push(char)
            } else if (stack[stack.length - 1] === parens[char]) {
                stack.pop()
            } else return false;
        }
        return stack.length === 0
    }
}