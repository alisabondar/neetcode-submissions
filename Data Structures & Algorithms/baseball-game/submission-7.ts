class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let record = [];
        let sum = 0;
        // console.log(record)

        for (const op of operations) {
            if (op === "+") {
                let sum = 0
                for (const r of record.slice(-2)) {
                    sum += r
                }
                record.push(sum)
            } else if (op === "D") {
                record.push(record[record.length - 1] * 2)
            } else if (op === "C") {
                record.pop()
            } else record.push(Number(op))
        }

        record.forEach(r => sum += r)
        return sum
    }
}
