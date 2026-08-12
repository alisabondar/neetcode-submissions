class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        // while student !== sandwich, student.push(student.shift())
        // if student === sandwich, student.shift() sandwich.shift()
        // return sandwiches.length

        for (let i = 0; i < sandwiches.length; i++) {
            let first = students[0];
            if (!students.includes(sandwiches[i])) return students.length
            console.log(first, sandwiches[i])

            if (sandwiches[i] === first) {
                sandwiches.shift();
                students.shift();
            } else {
                students.push(students.shift())
            }
            i--;
        }

        return students.length;
    }
}
