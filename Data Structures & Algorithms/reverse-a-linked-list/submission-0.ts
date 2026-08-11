/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        // find tail and traverse in reverse?
        // find tail where node.next = null
        // set that to the previous element until we reach head
        // set head.next = null
        // TWO. POINTERS

        let current = head
        let previous = null
        
        while (current !== null) {
            let next = current.next
            current.next = previous
            previous = current
            current = next
        }

        return previous;

    }
}
