'use Strict';

/**
 * Definition for singly-linked list.
 */
// Hoisting
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  };
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Approach 1 - Two pointers, one pass
// Time O(n)
// Space O(1)
// without Dummy node
var deleteMiddle = function(head){
    if(head.next === null) return null;
    let slow = head;
    let fast = head.next.next;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;
    return head;
};

// Approach 2 - Two pointers, one pass
// Time O(n)
// Space O(1)
// Dummy node
var deleteMiddle_1 = function(head){
    if(head.next === null) return null;
    // With this dummy node creation, I could use the same approach
    // I have used for middle of linkedlist.
    // ithout a dummy, the slow pointer will be exactly at the middle node at the time fast one reaches the end of the list, but to delete the middle node, we must link the node before the middle with the node after the middle, so the slow node must end up at the node before the middle, adding dummy node before the head solves it
    let slow = new ListNode(0, head);
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;
    return head;
};