---
slug: dynamic-programming-patterns
title: Master Dynamic Programming - Complete Pattern Guide
authors: []
tags: [dsa, dynamic-programming, leetcode, interview-prep]
---

Hey everyone! Many of us struggle with Dynamic Programming and often skip it during interview preparation. This might be because DP seems vast and overwhelming, and people tend to memorize solutions instead of understanding patterns. However, if you break down DP into clear patterns and master each one, it becomes much more manageable. So I've compiled a comprehensive list of patterns you should know for your interview preparation!

<!--truncate-->

---

##  DP vs Greedy: When to Use Which?

Before diving into patterns, let's understand the fundamental difference between DP and Greedy:


**Problem:** You're a robber with two streets to rob. Each house has some money. You can rob houses from both streets, but you **cannot rob two adjacent houses from the same street** (alarms will trigger). What's the maximum money you can steal?
```
Street A: [2, 7, 9, 3, 1]
Street B: [3, 2, 6, 8, 2]
```

**Greedy Robber:** "I'll always rob the house with most money available!"
- Rob B[0] = 3 (greedy)
- Rob A[1] = 7 
- Rob B[2] = 6
- Rob A[3] = 3
- Rob B[4] = 2 
- **Total: 21**

**DP Robber:** "Let me consider all valid combinations!"
- Option 1: A[0]=2, B[1]=2, A[2]=9, B[3]=8, A[4]=1 → Total = 22
- Option 2: B[0]=3, A[1]=7, B[2]=6, A[3]=3, B[4]=2 → Total = 21
- **Best: 22** 

**Why Greedy Failed:** By greedily picking B[0] first, it blocked access to the optimal combination that includes both 9 and 8 from different streets!

---
**When Greedy Works:** Problems with the "greedy choice property" where local optimal leads to global optimal (e.g., Activity Selection, Huffman Coding)
**When DP is Needed:** Problems requiring exploring multiple choices where greedy fails (e.g., most optimization problems, counting problems)

---

##  Pattern 1: Linear DP (1D)

**Why This Pattern Matters:**
This is the foundation of DP. If you can't solve Linear DP, you'll struggle with everything else. These problems teach you the core concept of breaking problems into subproblems and building solutions incrementally.

**Practice Problems:**
1. [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
2. [House Robber](https://leetcode.com/problems/house-robber/)
3. [Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)
4. [Word Break](https://leetcode.com/problems/word-break/)
5. [Decode Ways](https://leetcode.com/problems/decode-ways/)
6. [House Robber II](https://leetcode.com/problems/house-robber-ii/)

---

##  Pattern 2: Longest Increasing Subsequence (LIS) 

**Why This Pattern Matters:**
LIS is one of the most important DP patterns with applications in version control systems, patience sorting, box stacking problems, and more. The O(n log n) solution using binary search is a must-know optimization technique.

**Practice Problems:**
1. [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
2. [Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/)
3. [Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)
4. [Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/)
5. [Find the Longest Valid Obstacle Course at Each Position](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/)

---

##  Pattern 3: Knapsack (0/1, Unbounded, Bounded)

**Why This Pattern Matters:**
One of the most versatile DP patterns. Appears in resource allocation, optimization problems, and many interview questions. Understanding the difference between 0/1 and unbounded variants is crucial.

**0/1 Knapsack (Each item used once):**
1. [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
2. [Target Sum](https://leetcode.com/problems/target-sum/)
3. [Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/)
4. [Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/)
5. [Partition Array Into Two Arrays to Minimize Sum Difference](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/)

**Unbounded Knapsack (Items can be used multiple times):**
1. [Coin Change](https://leetcode.com/problems/coin-change/)
2. [Coin Change 2](https://leetcode.com/problems/coin-change-2/)
3. [Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)
4. [Perfect Squares](https://leetcode.com/problems/perfect-squares/)
5. [Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/)

---

##  Pattern 4: Grid DP

**Why This Pattern Matters:**
Extremely common in interviews, especially at FAANG. Tests your ability to think in 2D state space and handle multiple transition directions.


**Practice Problems:**
1. [Unique Paths](https://leetcode.com/problems/unique-paths/)
2. [Unique Paths II](https://leetcode.com/problems/unique-paths-ii/)
3. [Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)
4. [Maximal Square](https://leetcode.com/problems/maximal-square/)
5. [Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)
6. [Minimum Falling Path Sum](https://leetcode.com/problems/minimum-falling-path-sum/)
7. [Count Square Submatrices with All Ones](https://leetcode.com/problems/count-square-submatrices-with-all-ones/)
8. [Triangle](https://leetcode.com/problems/triangle/)

---

##  Pattern 5: String DP 

**Why This Pattern Matters:**
Text processing and string manipulation problems are ubiquitous. This pattern appears in bioinformatics, text editors, version control systems, and natural language processing.

**Practice Problems:**
1. [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
2. [Edit Distance](https://leetcode.com/problems/edit-distance/)
3. [Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/)
4. [Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/)
5. [Shortest Common Supersequence](https://leetcode.com/problems/shortest-common-supersequence/)
6. [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)
7. [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
8. [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)
9. [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
10. [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)

---

##  Pattern 6: Interval DP

**Why This Pattern Matters:**
Tests ability to think about problems in ranges/intervals. Common in scheduling, matrix chain multiplication type problems, and game theory.

**Practice Problems:**
1. [Burst Balloons](https://leetcode.com/problems/burst-balloons/)
2. [Minimum Score Triangulation of Polygon](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/)
3. [Minimum Cost Tree From Leaf Values](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/)
4. [Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/)
5. [Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii/)
6. [Minimum Cost to Merge Stones](https://leetcode.com/problems/minimum-cost-to-merge-stones/)
7. [Guess Number Higher or Lower II](https://leetcode.com/problems/guess-number-higher-or-lower-ii/)

---

##  Pattern 7: State Machine DP

**Why This Pattern Matters:**
Models problems where you transition between different states with specific rules. Critical for stock trading problems and any scenario with state transitions.


**Practice Problems:**
1. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
2. [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
3. [Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
4. [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)
5. [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
6. [Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

---

##  Pattern 8: Tree DP

**Why This Pattern Matters:**
Combines tree traversal with DP. Important for system design (like designing file systems) and optimization problems on hierarchical structures.


**Practice Problems:**
1. [House Robber III](https://leetcode.com/problems/house-robber-iii/)
2. [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
3. [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)
4. [Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/)
5. [Maximum Sum BST in Binary Tree](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/)
6. [Difference Between Maximum and Minimum Price Sum](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/)

---

##  Pattern 9: Digit DP

**Why This Pattern Matters:**
Specialized pattern for counting numbers with certain properties. Appears in competitive programming and some advanced interviews.

**Practice Problems:**
1. [Number of Digit One](https://leetcode.com/problems/number-of-digit-one/)
2. [Count Numbers with Unique Digits](https://leetcode.com/problems/count-numbers-with-unique-digits/)
3. [Numbers At Most N Given Digit Set](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/)
4. [Numbers With Repeated Digits](https://leetcode.com/problems/numbers-with-repeated-digits/)
5. [Count Special Integers](https://leetcode.com/problems/count-special-integers/)

---

##  Pattern 10: Game Theory DP (Minimax)

**Why This Pattern Matters:**
Models two-player games where both play optimally. Important for AI, game development, and adversarial scenarios.

**Practice Problems:**
1. [Predict the Winner](https://leetcode.com/problems/predict-the-winner/)
2. [Stone Game](https://leetcode.com/problems/stone-game/)
3. [Stone Game II](https://leetcode.com/problems/stone-game-ii/)
4. [Stone Game III](https://leetcode.com/problems/stone-game-iii/)
5. [Can I Win](https://leetcode.com/problems/can-i-win/)
6. [Stone Game IV](https://leetcode.com/problems/stone-game-iv/)

---

##  Pattern 11: Bitmask DP

**Why This Pattern Matters:**
Powerful technique for problems with small sets (≤20 elements) where you need to track subsets. Essential for Traveling Salesman Problem variants and NP-hard problem approximations.

**Practice Problems:**
1. [Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
2. [Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)
3. [Find the Shortest Superstring](https://leetcode.com/problems/find-the-shortest-superstring/)
4. [Smallest Sufficient Team](https://leetcode.com/problems/smallest-sufficient-team/)
5. [Number of Ways to Wear Different Hats to Each Other](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/)
6. [Minimum Number of Work Sessions to Finish the Tasks](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/)

---

##  Pattern 12: DP on Subsequences

**Why This Pattern Matters:**
Critical for array partitioning and subset generation problems. Teaches how to handle exponential search spaces efficiently.


**Practice Problems:**
1. [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)
2. [Distinct Subsequences II](https://leetcode.com/problems/distinct-subsequences-ii/)
3. [Arithmetic Slices II - Subsequence](https://leetcode.com/problems/arithmetic-slices-ii-subsequence/)
4. [Number of Unique Good Subsequences](https://leetcode.com/problems/number-of-unique-good-subsequences/)
5. [Constrained Subsequence Sum](https://leetcode.com/problems/constrained-subsequence-sum/)

---

##  Pattern 13: Probability DP

**Why This Pattern Matters:**
Models uncertain outcomes. Important for risk analysis, game development, and any scenario involving randomness or probability.

**Practice Problems:**
1. [Knight Probability in Chessboard](https://leetcode.com/problems/knight-probability-in-chessboard/)
2. [Soup Servings](https://leetcode.com/problems/soup-servings/)
3. [New 21 Game](https://leetcode.com/problems/new-21-game/)
4. [Toss Strange Coins](https://leetcode.com/problems/toss-strange-coins/)
5. [Probability of a Two Boxes Having The Same Number of Distinct Balls](https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/)
---



##  Best Resources to Master DP

1. **AtCoder DP Contest**- 26 curated problems  with perfect difficulty progression
2. **Striver's DP Series**- 50+ videos covering memoization, tabulation, and space optimization.
3. **Aditya Verma's DP Playlist**- Exceptional for Knapsack variants with shorter, focused videos (15-20 min).
4. **CSES Problem Set**- Intermediate to advanced practice. These problems test core concepts and build solving speed.

---

##  Final Thoughts

DP is about **recognizing patterns**, not memorizing solutions. Once you see the pattern, the solution becomes mechanical. Spend time understanding **why** each pattern works, not just **how** to code it.

 **Feel free to add some best problems in the comments**


**Good luck, and happy coding!**

*If this guide helped you, please upvote and share with others!*
