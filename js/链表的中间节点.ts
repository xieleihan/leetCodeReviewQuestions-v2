/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

function middleNode(head: ListNode | null): ListNode | null {
    let length = 0;
    let current = head;

    while (current) {
        length++;
        current = current.next;
    }

    let mid = Math.floor(length / 2);
    current = head;
    for (let i = 0; i < mid; i++) {
        current = current.next;
    }

    return current;
};