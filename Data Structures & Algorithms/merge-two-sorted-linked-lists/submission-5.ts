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
        let curr1 = list1;
        let curr2 = list2;

        //need to have a dummy node
        let dummy = new ListNode(0);
        let tail = dummy;

        while (curr1 && curr2) {
            if (curr1.val < curr2.val) {
                tail.next = curr1;
                curr1 = curr1.next
            } else {
                tail.next = curr2;
                curr2 = curr2.next;
            }

            tail = tail.next
        }

        // if there are leftover nodes
        tail.next = curr1 || curr2

        return dummy.next
    }
}
