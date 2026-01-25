---
slug: recursion-backtracking-patterns
title: 11 Recursion and Backtracking Patterns for Interview Preparation
authors: []
tags: [recursion, backtracking, interview-prep, leetcode]
---

Recursion and backtracking are fundamental techniques that unlock solutions to some of the most elegant algorithmic problems. While they can seem daunting at first, mastering these patterns through deliberate practice will transform you into a more versatile problem solver. This guide organizes essential LeetCode problems by pattern, helping you build intuition progressively.

<!--truncate-->

---

## 🎯 Understanding the Foundation

Before diving into problems, let's clarify the concepts. **Recursion** is about breaking problems into smaller subproblems of the same type, while **backtracking** is a specific recursive technique where you explore all possible solutions by building candidates incrementally and abandoning them ("backtracking") when they fail to satisfy constraints.

---

## Pattern 1: Basic Recursion 

**Why This Pattern Matters:**
Start here to develop your recursive thinking. These problems help you understand the call stack, base cases, and recursive cases. If you can't visualize how recursion works on these simple problems, you'll struggle with complex backtracking scenarios.

**Practice Problems:**
1. [Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)
2. [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
3. [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
4. [Pow(x, n)](https://leetcode.com/problems/powx-n/)
5. [K-th Symbol in Grammar](https://leetcode.com/problems/k-th-symbol-in-grammar/)
6. [Sort an Array (Merge Sort)](https://leetcode.com/problems/sort-an-array/)

---

## Pattern 2: Combination Generation

**Why This Pattern Matters:**
These problems teach you to generate all possible combinations of elements, a fundamental backtracking pattern. Understanding the "include/exclude" decision tree is crucial for all advanced backtracking problems.

**Practice Problems:**
1. [Subsets](https://leetcode.com/problems/subsets/)
2. [Subsets II](https://leetcode.com/problems/subsets-ii/)
3. [Combinations](https://leetcode.com/problems/combinations/)
4. [Combination Sum](https://leetcode.com/problems/combination-sum/)
5. [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)
6. [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/)
7. [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

---

## Pattern 3: Permutation Generation

**Why This Pattern Matters:**
Permutation problems focus on arrangement order, requiring different backtracking strategies than combinations. You'll learn critical techniques like swap-based backtracking and using visited arrays.

**Practice Problems:**
1. [Permutations](https://leetcode.com/problems/permutations/)
2. [Permutations II](https://leetcode.com/problems/permutations-ii/)
3. [Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/)
4. [Next Permutation](https://leetcode.com/problems/next-permutation/)
5. [Permutation Sequence](https://leetcode.com/problems/permutation-sequence/)

---

## Pattern 4: String Backtracking & Partitioning

**Why This Pattern Matters:**
String problems often involve partitioning, pattern matching, or generation with constraints. These teach you how to use constraints to prune invalid branches early, making your solutions efficient.

**Practice Problems:**
1. [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)
2. [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
3. [Word Search](https://leetcode.com/problems/word-search/)
4. [Word Search II](https://leetcode.com/problems/word-search-ii/)
5. [Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/)
6. [Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/)
7. [Expression Add Operators](https://leetcode.com/problems/expression-add-operators/)

---

## Pattern 5: Sudoku & Constraint Satisfaction

**Why This Pattern Matters:**
The important backtracking problems. These combine multiple constraints and require sophisticated pruning strategies. Master these, and you'll be able to handle any backtracking problem.

**Practice Problems:**
1. [N-Queens](https://leetcode.com/problems/n-queens/)
2. [N-Queens II](https://leetcode.com/problems/n-queens-ii/)
3. [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)
4. [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)

---

## Pattern 6: Tree & Graph Recursion

**Why This Pattern Matters:**
Combines tree/graph traversal with recursive thinking. Essential for understanding how to pass state through recursive calls and combine results from subtrees or subgraphs.

**Practice Problems:**
1. [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
2. [Path Sum](https://leetcode.com/problems/path-sum/)
3. [Path Sum II](https://leetcode.com/problems/path-sum-ii/)
4. [Path Sum III](https://leetcode.com/problems/path-sum-iii/)
5. [Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/)
6. [Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)
7. [All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/)

---

## Pattern 7: Divide and Conquer Recursion

**Why This Pattern Matters:**
These problems split input into independent subproblems, solve recursively, and combine results. Critical for understanding merge sort, quick sort, and many tree problems.

**Practice Problems:**
1. [Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses/)
2. [Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii/)
3. [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
4. [Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)
5. [Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)
6. [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)

---

## Pattern 8: Matrix Backtracking

**Why This Pattern Matters:**
2D grid problems with backtracking are extremely common in interviews. You'll learn to track visited cells, explore multiple directions, and backtrack properly in 2D space.

**Practice Problems:**
1. [Word Search](https://leetcode.com/problems/word-search/)
2. [Word Search II](https://leetcode.com/problems/word-search-ii/)
3. [Unique Paths III](https://leetcode.com/problems/unique-paths-iii/)
4. [Number of Islands](https://leetcode.com/problems/number-of-islands/)
5. [Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)
6. [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)

---

## Pattern 9: Game Theory & Minimax

**Why This Pattern Matters:**
Models problems where you make optimal decisions considering an opponent's moves. Teaches you to think recursively about adversarial scenarios.

**Practice Problems:**
1. [Nim Game](https://leetcode.com/problems/nim-game/)
2. [Flip Game II](https://leetcode.com/problems/flip-game-ii/)
3. [Predict the Winner](https://leetcode.com/problems/predict-the-winner/)
4. [Can I Win](https://leetcode.com/problems/can-i-win/)

---

## Pattern 10: Subset Sum & Partition Problems

**Why This Pattern Matters:**
Bridges recursion with dynamic programming. Understanding the recursive solution first makes the DP optimization natural. These problems appear frequently in interviews.

**Practice Problems:**
1. [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
2. [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
3. [Target Sum](https://leetcode.com/problems/target-sum/)
4. [Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/)
5. [Fair Distribution of Cookies](https://leetcode.com/problems/fair-distribution-of-cookies/)

---

## Pattern 11: Advanced Backtracking

**Why This Pattern Matters:**
These are the most challenging backtracking problems, combining multiple patterns and requiring sophisticated optimization. Master these, and you'll be in the top tier of problem solvers.

**Practice Problems:**
1. [Optimal Account Balancing](https://leetcode.com/problems/optimal-account-balancing/)
2. [Beautiful Arrangement](https://leetcode.com/problems/beautiful-arrangement/)
3. [Verbal Arithmetic Puzzle](https://leetcode.com/problems/verbal-arithmetic-puzzle/)
4. [Maximum Number of Achievable Transfer Requests](https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/)
5. [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)

---

## 📚 Final Thoughts

Recursion and backtracking require practice to develop intuition. Start with basic recursion, move to combinations and permutations, then tackle the advanced patterns. Remember: every backtracking problem follows the same framework - make a choice, explore it recursively, and backtrack if it doesn't work.
