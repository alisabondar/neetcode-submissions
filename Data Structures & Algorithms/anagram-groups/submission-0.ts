class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // use the SORT as key and then push the value
        let result = [];

        let matches = new Map();

        for (const str of strs) {
            let anagram = str.split("").sort().join();
            if (!matches[anagram]) matches[anagram] = [str]
            else matches[anagram].push(str)
        }

        return Object.values(matches);
    }
}
