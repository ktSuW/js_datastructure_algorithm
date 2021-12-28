'use Strict';
function ListNode(val, next){
    this.val = (val === undefined? 0 : val);
    this.next = (next === undefined ? null : next);
}

//Approach 1 : Stack based approach
// Use two pointer and stack approach
// When fast is not null, move both pointers
// The linkedlist given can be either odd or even length 
// For even length,     0   1   1   0
//                      s   s
//                      f       f       f
// First half will be added to the stack
// For odd length,      0   1   2   1   0   
//                      s
//                      f
//                          s   
//                              f
//                              s   
//                                      f
//                                  s           f
// In this case, you don't want to push 2 into the stack, since it is a middle element
// Check fast.next === null, move slow pointer
// Once finish, pop item from stak and compare it with slow.val 
// if they are not the same, return false
// else return true


// Time O(n)
// Space O(n) - stack 
var isPalindrome_1 = function(head){
    let slow = head;
    let fast = head;
    let stack = [];
    // Push all the first half items of the linked list
    while(fast !== null){
        // Check for odd length
        if(fast.next === null){
            slow = slow.next;
            break;
        }
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    // Go through the rest of linkedlist except middle one and compare
    while(slow){
        if(slow.val !== stack.pop()){
            return false;
        }
        slow = slow.next;
    }
    return true;
};

// Approach - 2 - Constant space solution
// Step 1. Find the middle point of the llinkedlist
// Use two pointer approaches - slow and fast pointer
// while (fast && fast.next), move both pointers
// return the slow pointer
// This will get you the midpoint O(n/2) so, O(n)

// Step 2. reverse the linkedlist 
// prev curr next
// first save curr.next in the next node, so that we do not loose it
// prev = null
// curr = head;
// next = curr.next
// As long as there is current node
// next = curr.next;
// Make curr point back to prev -> curr.next = prev;
// Then move nodes location
// prev -> curr
// curr -> next 
// So the head now is prev and return prev

// Step 3. Compare two linkedlist and each value while going through
// while (originalList && reverseList), if two values are not the same, return false
// move nodes in both linkedlist 

var isPalindrome_2 = function (head){
    const midpoint = findMidpoint(head);
    const tail = reverse(head);
    return compare(head, tail);
};

const findMidpoint = (head)=>{
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

const reverse = (head)=>{
    let prev = null;
    let curr = head;
    while(curr){
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

const compare = (originalList, reversedList) =>{
    while(originalList && reversedList){
        if(originalList.val !== reversedList.val) return false;
        originalList = originalList.next;
        reversedList = reversedList.next;
    }
    return true;
};