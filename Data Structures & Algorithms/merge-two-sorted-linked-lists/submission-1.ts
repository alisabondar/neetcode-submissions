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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        // keep track of two lists 

        let current1 = list1
        let current2 = list2
        // or do we just manipulate 1 and reutrn 1?
        let newHead = new ListNode(0)
        let tail = newHead

        while (current1 && current2) {
            if (current1.val <= current2.val) {
                tail.next = current1;
                current1 = current1.next
            } else {
                tail.next = current2
                current2 = current2.next
            }
            tail = tail.next
        }
        tail.next = current1 || current2

        return newHead.next
    }
}
