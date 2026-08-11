class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length < 2) return false;
        let brack: Record<string, string> = {
            "{" : "}",
            "[" : "]",
            "(" : ")"
        }

        let result = s.split("");
        let stack = [];

        for (const r of result) {
            if (brack[r] !== undefined) {
                stack.push(brack[r])
                continue;
            }

            let last = stack.pop()
            console.log(r, last, r === last)
            if (r === last) {
                continue;
            }
            return false;
        }
        return stack.length === 0 ? true : false
    }
}
