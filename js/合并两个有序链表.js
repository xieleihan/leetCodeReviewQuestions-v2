/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 这道题我第一次见,但是是数据结构类型,涉及到了链表
    // 链表的特点: head,next=>head...
    var listNode = new ListNode;
    // 循环到有一个链表为null
    while(list1 != null && list2 != null){
        if(list1.val < list2.val){
            // 如果1的值小于2
            // 将next节点接在虚拟链表后面
            listNode.next = list1;
            list1 = list1.next;
        }else{
            // 反之
            listNode.next = list2;
            list2 = list2.next;
        }
        // 移动指针到虚拟链表后面
        listNode = listNode.next;
    }
    // 上面的情况并不能避免有一个链表还有的情况
    // 做个处理,将剩下的一个接到虚拟链表里
    if(list1 != null){
        listNode.next = list1;
    }else{
        listNode.next = list2;
    }

    // return lianbiao
    return listNode.next;
};