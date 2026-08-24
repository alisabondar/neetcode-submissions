class MinStack {
    private stack: number[];
    private minStack: number[]

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
        if (val <= this.minStack[0]) {
            this.minStack.unshift(val)
        } else this.minStack.push(val)
    }

    /**
     * @return {void}
     */
    pop(): void {
        let val = this.stack.pop()
        if (val === this.minStack[0]) {
            console.log(this.minStack)
            this.minStack.shift()
        } else this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[0]
    }
}
