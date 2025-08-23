Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

Example 1:

Input: head = [0,1,2,3]

Output: [3,2,1,0]
Example 2:

Input: head = []

Output: []
Constraints:

0 <= The length of the list <= 1000.
-1000 <= Node.val <= 1000

You should aim for a solution with O(n) time and O(1) space, where n is the length of the given list.

Hints:

As you can see, the head of the linked list becomes the tail after we reverse it. Can you think of an approach to change the references of the node pointers? Perhaps reversing a simple two-node list might help clarify the process.

For example, consider a list [2, 3], where 2 is the head of the list and 3 is the tail. When we reverse it, 3 becomes the new head, and its next pointer will point to 2. Then, 2's next pointer will point to null. Can you figure out how to apply this approach to reverse a linked list of length n by iterating through it?

We can reverse the linked list in place by reversing the pointers between two nodes while keeping track of the next node's address. Before changing the next pointer of the current node, we must store the next node to ensure we don't lose the rest of the list during the reversal. This way, we can safely update the links between the previous and current nodes.
