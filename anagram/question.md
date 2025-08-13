Description
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false
Constraints:

s and t consist of lowercase English letters.

Hint:

We can just consider maintaining the frequency of each character. We can do this by having two separate hash maps for the two strings. Then, we can check whether the frequency of each character in string s is equal to that in string t and vice versa.
