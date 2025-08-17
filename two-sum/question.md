Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:

Input:
nums = [3,4,5,6], target = 7

Output: [0,1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

You should aim for a solution with O(n) time and O(n) space, where n is the size of the input array.

Hints:

Given, We need to find indices i and j such that i != j and nums[i] + nums[j] == target. Can you rearrange the equation and try to fix any index to iterate on?

we can iterate through nums with index i. Let difference = target - nums[i] and check if difference exists in the hash map as we iterate through the array, else store the current element in the hashmap with its index and continue. We use a hashmap for O(1) lookups.
