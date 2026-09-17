class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // create a map of sorted results
        // space =, time = 
        let map = new Map<string, string[]>();

        for (const s of strs) {
            let sorted = s.split("").sort().join("")
            let exists = map.get(sorted)

            if (exists) exists.push(s)
            else map.set(sorted, [s])
        }

        return [...map.values()]
    }
}
