class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // sliding window!
        // left = buy so when right cheaper -> left = right
        // always keep track of max right

        let buy = 0;
        let maxProf = 0;

        for (let sell = 1; sell < prices.length; sell++) {
            if (prices[sell] < prices[buy]) {
                buy = sell;
            }

            maxProf = Math.max(maxProf, prices[sell] - prices[buy])
        }

        return maxProf
    }
}
