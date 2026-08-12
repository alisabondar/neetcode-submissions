class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // sort and place into map
        // time O(n) because map
        // space O(n) because array of arrays but only n size
        let map: Map<string, string[]> = new Map()
        // return  [...map.values()] ?

        for (const str of strs) {
            let sort = str.split("").sort().join("")
            map.set(sort, (map.get(sort) ? [...map.get(sort), str] : [str]))
        }

        return [...map.values()]
    }
}
