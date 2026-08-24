class MinStack {
    private stack: number[];
    private minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        if (this.minStack.length > 0) {
            let lastMin = this.minStack[this.minStack.length - 1];
            if (val <= lastMin) {
                this.minStack.push(val);
            } else this.minStack.push(lastMin);
        } else this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
