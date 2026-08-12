class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // sliding window
        // time O(n)
        // space O(1)
        // calc max profit
        let left = 0;
        let right = 1;
        let maxProfit = 0;

         while (right < prices.length) {
            if (prices[left] > prices[right]) {
                left = right;
            } else {
                if (prices[right] - prices[left] > maxProfit) maxProfit = prices[right] - prices[left]
            }

        right++
        }

        return maxProfit;
    }
}
