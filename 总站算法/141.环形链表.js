/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let p1 = head,
        p2 = head
    if(head == null){
        return false
    }
    if(head.next == null){
        return false
    }
    while(p2!=null){
        p1=p1.next;
        p2 = ( p2.next==null ? null : p2.next.next)
        if(p1 == p2){
            return true
        }
    }
    return false
};