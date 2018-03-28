import { Problem } from './models/problem.model'

export const PROBLEMS: Problem[] = [
    {
      "id": 1,
      "name": "Two Sum",
      "desc": "Given an array of integers, return indices of the two numbers such that they add up to a specific target. \n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
      "difficulty": "easy"
    },
    {
      "id": 2,
      "name": "Add Two Numbers",
      "desc": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list. \n\nYou may assume the two numbers do not contain any leading zero, except the number 0 itself.",
      "difficulty": "medium"
    },
    {
      "id": 3,
      "name": "Longest Substring Without Repeating Characters",
      "desc": "Given a string, find the length of the longest substring without repeating characters. \n\nExamples \n\nGiven 'abcabcbb', the answer is 'abc', which the length is 3. \n\nGiven 'bbbbb', the answer is 'b', with the length of 1. \n\nGiven 'pwwkew', the answer is 'wke', with the length of 3. Note that the answer must be a substring, 'pwke' is a subsequence and not a substring.",
      "difficulty": "medium"
    },
    {
      "id": 4,
      "name": "Median of Two Sorted Arrays",
      "desc": "There are two sorted arrays nums1 and nums2 of size m and n respectively. \n\nFind the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
      "difficulty": "hard"
    },
    {
      "id": 5,
      "name": "Longest Palindromic Substring",
      "desc": "Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.",
      "difficulty": "super"
    }
  ]
