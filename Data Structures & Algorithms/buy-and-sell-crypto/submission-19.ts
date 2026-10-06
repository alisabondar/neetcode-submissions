class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // sliding window
        // while left < r
        // if new buy then left == buy
        // always update profit

        let buy = 100000;
        let left = 0;
        let profit = 0;

        while (left < prices.length) {
            if (prices[left] < buy) {
                buy = prices[left]
            }

            profit = Math.max(profit, prices[left] - buy)
            left++;
        }

        return profit
    }
}
