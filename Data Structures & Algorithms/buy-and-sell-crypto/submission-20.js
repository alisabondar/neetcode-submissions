class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // two pointers + max

        let buy = 10000;
        let max = 0;

        for (const n of prices) {
            if (n < buy) buy = n

            max = Math.max(max, n - buy)
        }

        return max;
    }
}
