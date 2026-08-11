class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // iterate through matrix
        // iterate 3 rows at a time 3 values at a time
        // ignore periods
        // how to validate row and column...
        let box1: string[] = [];
        let box2: string[] = [];
        let box3: string[] = [];
        // add each number with index?
        let rowCol: Map<string, string[]> = new Map();

        for (let i = 0; i < board.length; i++) {
            let set = new Set(board[i])
            let unique = board[i].filter(s => s !== ".")
            console.log(set, board[i].length)
            if (set.size !== unique.length + 1) return false;

            if (i === 3 || i === 6) {
                box1 = [];
                box2 = [];
                box3 = [];
            }
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === ".") continue;

                if (rowCol[j] !== undefined) {
                    let current = rowCol[j];
                    // console.log(current, current.includes(board[i][j]))
                    if (current.includes(board[i][j])) return false;
                    rowCol[j] = [...current, board[i][j]]
                } else rowCol[j] = [board[i][j]]
            
                if (j < 3) {
                    if (box1.includes(board[i][j])) return false;
                    box1.push(board[i][j])
                } else if (j < 6) {
                    if (box2.includes(board[i][j])) return false;
                    box2.push(board[i][j]);
                } else {
                    if (box3.includes(board[i][j])) return false;
                    box3.push(board[i][j]);
                }
            }
        }
        return true;
    }
}
