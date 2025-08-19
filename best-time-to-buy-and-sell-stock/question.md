You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

Example 1:

Input: prices = [10,1,5,6,7,1]

Output: 6
Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

Example 2:

Input: prices = [10,8,7,5,2]

Output: 0
Explanation: No profitable transactions can be made, thus the max profit is 0.

You should aim for a solution with O(n) time and O(1) space, where n is the size of the input array.

SLIDING WINDOW PATTERN

Hints:

You should buy at a price and always sell at a higher price. Can you iterate through the array with index i, considering it as either the buying price or the selling price?

We can iterate through the array with index i, considering it as the selling value. But what value will it be optimal to consider as buying point on the left of index i?

We are trying to maximize profit = sell - buy. If the current i is the sell value, we want to choose the minimum buy value to the left of i to maximize the profit. The result will be the maximum profit among all. However, if all profits are negative, we can return 0 since we are allowed to skip doing transaction.
