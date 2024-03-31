deleteMiddle(); {
    if(!this.head) {
        console.log("list is empty");
        return
    }
    let slow = this.head
    let fast = this.head
    let prev = null
    while(fast && fast.next) {
        fast = fast.next.next
        prev = slow
        slow = slow.next
    }
    if(prev) {
        prev.next = slow.next
    } else {
        this.head = slow.next
    }
}