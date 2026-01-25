---
slug: stack-queue-linkedlist-problems
title: 25 Stack, Queue, LinkedList Problems To Revise Before Interviews
authors: [saiganesh]
tags: [stack, queue, linked-list, interview-prep, leetcode]
---

I've curated 25 **Stack**, **Queue**, **LinkedList** problems that teach you all major patterns. These aren't random problems, they're specifically chosen to build your intuition for technical interviews.

<!--truncate-->

---

## 🎯 The Essential Problems

### Stack Problems

**1. Valid Parentheses** - [LeetCode 20](https://leetcode.com/problems/valid-parentheses/)
- **Pattern:** Basic stack for matching
- **Why:** Foundation for all parsing problems
- **Companies:** Amazon, Microsoft, Meta, Bloomberg, Apple

**2. Min Stack** - [LeetCode 155](https://leetcode.com/problems/min-stack/)
- **Pattern:** Auxiliary stack for O(1) operations
- **Why:** Tests understanding of trade-offs (space vs time)
- **Companies:** Amazon, Bloomberg, Microsoft

**3. Implement Queue using Stacks** - [LeetCode 232](https://leetcode.com/problems/implement-queue-using-stacks/)
- **Pattern:** Two stacks technique
- **Why:** Tests understanding of both data structures
- **Companies:** Microsoft, Bloomberg, Amazon

**4. Daily Temperatures** - [LeetCode 739](https://leetcode.com/problems/daily-temperatures/)
- **Pattern:** Monotonic stack
- **Why:** Most important stack pattern for interviews
- **Companies:** Amazon, Google, Meta, Bloomberg

**5. Largest Rectangle in Histogram** - [LeetCode 84](https://leetcode.com/problems/largest-rectangle-in-histogram/)
- **Pattern:** Monotonic stack for area calculation
- **Why:** Hard problem that becomes medium with stack
- **Companies:** Amazon, Google, Meta, Microsoft

**6. Basic Calculator II** - [LeetCode 227](https://leetcode.com/problems/basic-calculator-ii/)
- **Pattern:** Stack for expression evaluation
- **Why:** Shows real-world stack application
- **Companies:** Meta, Amazon, Google

---

### Queue Problems

**7. Implement Stack using Queues** - [LeetCode 225](https://leetcode.com/problems/implement-stack-using-queues/)
- **Pattern:** Queue rotation technique
- **Why:** Tests queue manipulation understanding
- **Companies:** Bloomberg, Microsoft

**8. Design Circular Queue** - [LeetCode 622](https://leetcode.com/problems/design-circular-queue/)
- **Pattern:** Array-based queue with wraparound
- **Why:** Tests boundary handling and modular arithmetic
- **Companies:** Amazon, Microsoft, Meta

**9. Moving Average from Data Stream** - [LeetCode 346](https://leetcode.com/problems/moving-average-from-data-stream/)
- **Pattern:** Queue for sliding window
- **Why:** Shows queue in streaming context
- **Companies:** Amazon, Google, Meta

---

### Linked List Problems

**10. Reverse Linked List** - [LeetCode 206](https://leetcode.com/problems/reverse-linked-list/)
- **Pattern:** Iterative and recursive reversal
- **Why:** Most important linked list operation
- **Companies:** Everyone

**11. Merge Two Sorted Lists** - [LeetCode 21](https://leetcode.com/problems/merge-two-sorted-lists/)
- **Pattern:** Two pointer merge
- **Why:** Foundation for merge sort, merge operations
- **Companies:** Amazon, Microsoft, Meta, Apple

**12. Remove Nth Node From End of List** - [LeetCode 19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
- **Pattern:** Two pointer (fast/slow)
- **Why:** Classic two-pointer technique
- **Companies:** Amazon, Meta, Bloomberg

**13. Linked List Cycle** - [LeetCode 141](https://leetcode.com/problems/linked-list-cycle/)
- **Pattern:** Floyd's cycle detection (fast/slow pointers)
- **Why:** Fundamental algorithm, shows up in many forms
- **Companies:** Amazon, Microsoft, Meta, Apple

**14. Linked List Cycle II** - [LeetCode 142](https://leetcode.com/problems/linked-list-cycle-ii/)
- **Pattern:** Finding cycle start with math
- **Why:** Advanced pointer manipulation
- **Companies:** Amazon, Microsoft, Meta

**15. Intersection of Two Linked Lists** - [LeetCode 160](https://leetcode.com/problems/intersection-of-two-linked-lists/)
- **Pattern:** Length difference or two-pointer technique
- **Why:** Tests pointer manipulation cleverness
- **Companies:** Amazon, Microsoft, Bloomberg

**16. Palindrome Linked List** - [LeetCode 234](https://leetcode.com/problems/palindrome-linked-list/)
- **Pattern:** Find middle + reverse + compare
- **Why:** Combines multiple linked list patterns
- **Companies:** Amazon, Meta, Microsoft

**17. Remove Duplicates from Sorted List** - [LeetCode 83](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)
- **Pattern:** Single pass deletion
- **Why:** Basic pointer manipulation
- **Companies:** Amazon, Microsoft

---

### Advanced Problems

**18. LRU Cache** - [LeetCode 146](https://leetcode.com/problems/lru-cache/)
- **Pattern:** Hash map + doubly linked list
- **Why:** System design favorite, tests multiple skills
- **Companies:** Amazon, Meta, Microsoft, Google, Apple

**19. Add Two Numbers** - [LeetCode 2](https://leetcode.com/problems/add-two-numbers/)
- **Pattern:** Linked list arithmetic with carry
- **Why:** Tests edge case handling
- **Companies:** Amazon, Microsoft, Meta, Bloomberg

**20. Reverse Nodes in k-Group** - [LeetCode 25](https://leetcode.com/problems/reverse-nodes-in-k-group/)
- **Pattern:** Segmented reversal
- **Why:** Hard problem, builds on reverse linked list
- **Companies:** Meta, Amazon, Microsoft

**21. Copy List with Random Pointer** - [LeetCode 138](https://leetcode.com/problems/copy-list-with-random-pointer/)
- **Pattern:** HashMap or interweaving technique
- **Why:** Tests deep copy understanding
- **Companies:** Amazon, Microsoft, Meta

**22. Sort List** - [LeetCode 148](https://leetcode.com/problems/sort-list/)
- **Pattern:** Merge sort on linked list
- **Why:** Combines sorting with linked list operations
- **Companies:** Amazon, Meta, Microsoft

**23. Reorder List** - [LeetCode 143](https://leetcode.com/problems/reorder-list/)
- **Pattern:** Find middle + reverse + merge
- **Why:** Combines three core operations
- **Companies:** Amazon, Meta, Microsoft

**24. Flatten a Multilevel Doubly Linked List** - [LeetCode 430](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/)
- **Pattern:** Stack or recursion for nested structures
- **Why:** Tests handling of complex pointer structures
- **Companies:** Amazon, Microsoft

**25. Design Browser History** - [LeetCode 1472](https://leetcode.com/problems/design-browser-history/)
- **Pattern:** Doubly linked list or array
- **Why:** Real-world application of linked list
- **Companies:** Amazon, Google

---

## 📚 Study Strategy

**Week 1-2:** Master basic operations (problems 1-9, 10-12)
**Week 3-4:** Two-pointer techniques and cycle detection (problems 13-17)
**Week 5-6:** Advanced patterns and combinations (problems 18-25)

Practice these problems multiple times until you can code them without looking at solutions. Understanding the patterns is more important than memorizing solutions.
