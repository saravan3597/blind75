You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

The new list should be made up of nodes from list1 and list2

Example:
Input: list1 = [1,2,4], list2 = [1,3,5]
Output: [1,1,2,3,4,5]

You should aim for a solution with O(n + m) time and O(1) space, where n is the length of list1 and m is the length of list2.

Hints:

We create a dummy node to keep track of the head of the resulting linked list while iterating through the lists. Using l1 and l2 as iterators for list1 and list2, respectively, we traverse both lists node by node to build a final linked list that is also sorted. How do you implement this?

For example, consider list1 = [1, 2, 3] and list2 = [2, 3, 4]. While iterating through the lists, we move the pointers by comparing the node values from both lists. We link the next pointer of the iterator to the node with the smaller value. For instance, when l1 = 1 and l2 = 2, since l1 < l2, we point the iterator's next pointer to l1 and proceed.
