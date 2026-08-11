class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        strs.unshift(strs.length.toString())
        return strs.join("-")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        // if (str === "-") return []
        if (str === '0') return []
        let result = str.split("-")
        // console.log(Number(result[0]) > 9)
        // if (Number(result[0]) > 9) return result.slice(2)
        return result.slice(1)
    }
}
