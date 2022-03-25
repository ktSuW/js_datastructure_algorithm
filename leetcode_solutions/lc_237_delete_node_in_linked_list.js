'use Strict';
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val){
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// Time O(1) Constant
// Space O(1)
// You cannot delete the node since the head node is not given.
// 4    5   1   9 - original array
// 1. Copy the next element into the given node
// 4    1   1   9 - after copy
// 2. Make the given node point to the next one
// 4    1   9   
 var deleteNode = function(node) {
    if(node.val !== undefined || node.next !== undefined){
        node.val = node.next.val;
        node.next = node.next.next;
    }
};