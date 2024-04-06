function mergeTwoLists(l1, l2) {
    // Base case: if either list is null, return the other list
    if (!l1) return l2;
    if (!l2) return l1;

    // Compare the values of the head nodes of l1 and l2
    if (l1.val < l2.val) {
        // If l1's value is smaller, set l1's next to the result of merging l1's next with l2
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        // If l2's value is smaller, set l2's next to the result of merging l1 with l2's next
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
