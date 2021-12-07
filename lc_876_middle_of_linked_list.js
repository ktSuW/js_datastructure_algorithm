'use Strict';
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Approach 1 : 
// Get the length middle
// odd 1 2 3 4 5 = 5/2 = 2.5 need to take ceiling
// even 1 2 3 4 5 6 = 6/2 = 3 ceiling
// Iterate through the linkedlist until the end of the linkedlist and divide it by 2
// Iterate the linkedlist from the beginning till the middle of the linkedlist from the function above
// Javascript method
// Math.ceil() - always rounds a number up to the next largest integer
var middleNode1 = function(head) {
    let midLength = Math.ceil(entireLength(head)/2);
    return midNodePosition(head, midLength);
};

// Find the entire of length of the linkedlist 
let entireLength = function(node){
    let len = 0;
    while(node.next){
        len +=1;
        node = node.next;
    }
    return len;
};

// Return the mid position regardless of either odd or even length
let midNodePosition = function( node, midLength){
    for(let i = 0; i < midLength; i++){
        node = node.next;
    }
    return node;
}

// Approach 2 : 
var middleNode2 = function(head) {
    let node = head;
    let count = 1;
    // Time O(n)
    // It has to be node.next
    while(node.next){
        node = node.next;
        count ++;
    }

    count = parseInt(count/2);
    // Time O(n/2)
    while(count > 0){
        head = head.next;
        count --;
    }
    return head;
};


// Approach 3 : Fast and slow pointers approach (Variation of pointers)
// https://emre.me/coding-patterns/fast-slow-pointers/
var middleNode3 = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = head.next;
        fast = fast.next.next;
    }
    return slow;
};

