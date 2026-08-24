/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n: number): number {
        // binary search
        let left = 0;
        let right = n;

        while (left <= right) {
            let pick = left + Math.floor((right - left) / 2);
            let result = guess(pick);

            if (result === 0) return pick;
            else if (result === -1) {
                right = pick
            } else left = pick + 1
        }
    }
}
