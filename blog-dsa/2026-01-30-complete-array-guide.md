---
slug: complete-array-guide
title: Complete Array Problems & Resources Guide
authors: []
tags: [arrays, two-pointers, sliding-window, prefix-sums, interview-prep, competitive-programming]
---

Hey everyone! Arrays are the foundation of data structures and algorithms. Every tech interview and competitive programming contest features array problems. I've spent years mastering array techniques, and I want to share a complete roadmap that will take you from basics to advanced patterns.

The key insight: Arrays aren't just about storing data sequentially. They're the building block for understanding space-time tradeoffs, prefix sums, sliding windows, two pointers, and countless optimization techniques. Master arrays, and you've mastered the foundation of algorithmic thinking.

<!--truncate-->

---

## 🎯 Understanding Arrays

**What makes Arrays fundamental?** Arrays are the most basic data structure, but the techniques built on top of them (two pointers, sliding window, prefix sums, Kadane's algorithm) are powerful problem-solving paradigms used everywhere in software engineering and competitive programming.

**For Tech Interviews:** You need to master core patterns: two pointers, sliding window, prefix sums, matrix traversal, and array manipulation. About 80-100 well-understood problems is ideal. Most interview problems are easy to medium difficulty, with a few hard problems testing optimization skills.

**For Competitive Programming:** You need deep understanding of advanced techniques like contribution to sum, range queries, coordinate compression, and combining arrays with other data structures. This requires 150-200+ problems and familiarity with mathematical insights.

---

## 📚 Best Learning Resources

### Video Resources for Interview Prep

**[NeetCode - Arrays & Hashing](https://www.youtube.com/playlist?list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf)** - The gold standard for learning array interview patterns. Clear explanations with Python implementations. Covers all essential techniques systematically.

**[take U forward (Striver) - Arrays Series](https://www.youtube.com/playlist?list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB)** - Extremely comprehensive with detailed explanations. 40+ hours covering basics through advanced patterns. Best for building deep understanding.

**[Back To Back SWE - Array Problems](https://www.youtube.com/playlist?list=PLiQ766zSC5jM2OKVr8sooOuGgZkvnOCTI)** - Excellent breakdown of thought process and optimization techniques. Great for understanding how to approach unfamiliar problems.

**[Kevin Naughton Jr. - Array & String Playlist](https://www.youtube.com/playlist?list=PLi9RQVmJD2fYV1RN6vQ0n1vMNfOaEz2Ei)** - Clear solutions to common interview problems. Good for quick reference and practice.

**[Abdul Bari - Arrays](https://www.youtube.com/watch?v=AT14lCXuMKI)** - Best for understanding the fundamental theory, time complexity analysis, and space tradeoffs.

### Video Resources for Competitive Programming

**[Errichto - Arrays & Prefix Sums](https://www.youtube.com/c/Errichto)** - Advanced array techniques for CP. Covers contribution to answer, prefix sums variations, and problem-solving strategies.

**[SecondThread - Array Techniques](https://www.youtube.com/c/SecondThread)** - Shows how to combine arrays with other techniques. Great for advanced optimization patterns.

**[William Fiset - Data Structures](https://www.youtube.com/c/WilliamFiset-videos)** - Clear explanations of advanced array-based structures like Fenwick trees and segment trees.

**[Colin Galen - Problem Solving](https://www.youtube.com/c/ColinGalen)** - Real contest problem walkthroughs showing array technique applications.

### Written Resources

**For Interviews:**
- [LeetCode Arrays 101 Explore Card](https://leetcode.com/explore/learn/card/fun-with-arrays/)
- [Tech Interview Handbook - Arrays](https://www.techinterviewhandbook.org/algorithms/array/)
- [GeeksforGeeks Arrays](https://www.geeksforgeeks.org/array-data-structure/)
- [InterviewBit - Arrays Problems](https://www.interviewbit.com/courses/programming/topics/arrays/)

**For Competitive Programming:**
- [Codeforces Array Techniques](https://codeforces.com/blog/entry/79108)
- [CP-Algorithms - Various Array Topics](https://cp-algorithms.com/)
- [USACO Guide - General Arrays](https://usaco.guide/bronze/intro-ds)
- [USACO Guide - Prefix Sums](https://usaco.guide/silver/prefix-sums)
- [Codeforces Educational Resources](https://codeforces.com/blog/entry/57282)

### Books Worth Reading

**Cracking the Coding Interview** - Excellent array problems with detailed solutions and patterns.

**Elements of Programming Interviews** - Great array problems with focus on optimization techniques.

**Competitive Programming 4** - Comprehensive coverage of array techniques with CP applications.

**Programming Pearls** - Classic book with elegant array problem solutions and insights.

**Algorithm Design Manual** - Strong focus on array manipulation and problem-solving strategies.

---

## 💻 Interview Problems (100 Total)

### Phase 1: Array Basics & Traversal (15 problems)

Master fundamental operations. If you struggle here, everything else will be harder.

1. [Running Sum of 1d Array](https://leetcode.com/problems/running-sum-of-1d-array/)
2. [Shuffle the Array](https://leetcode.com/problems/shuffle-the-array/)
3. [Kids With the Greatest Number of Candies](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)
4. [Number of Good Pairs](https://leetcode.com/problems/number-of-good-pairs/)
5. [How Many Numbers Are Smaller Than the Current Number](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/)
6. [Create Target Array in the Given Order](https://leetcode.com/problems/create-target-array-in-the-given-order/)
7. [Decompress Run-Length Encoded List](https://leetcode.com/problems/decompress-run-length-encoded-list/)
8. [Find Numbers with Even Number of Digits](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)
9. [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)
10. [Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/)
11. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
12. [Remove Element](https://leetcode.com/problems/remove-element/)
13. [Move Zeroes](https://leetcode.com/problems/move-zeroes/)
14. [Plus One](https://leetcode.com/problems/plus-one/)
15. [Third Maximum Number](https://leetcode.com/problems/third-maximum-number/)

### Phase 2: Two Pointers Technique (15 problems)

Essential pattern for optimization. Reduces O(n²) to O(n) in many cases.

16. [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
17. [Reverse String](https://leetcode.com/problems/reverse-string/)
18. [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
19. [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
20. [3Sum](https://leetcode.com/problems/3sum/)
21. [4Sum](https://leetcode.com/problems/4sum/)
22. [Sort Colors](https://leetcode.com/problems/sort-colors/)
23. [Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)
24. [Remove Duplicates from Sorted Array II](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/)
25. [Partition Labels](https://leetcode.com/problems/partition-labels/)
26. [Boats to Save People](https://leetcode.com/problems/boats-to-save-people/)
27. [Minimize Maximum Pair Sum in Array](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/)
28. [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
29. [Next Permutation](https://leetcode.com/problems/next-permutation/)
30. [Rotate Array](https://leetcode.com/problems/rotate-array/)

### Phase 3: Sliding Window (15 problems)

The most important optimization pattern. Essential for substring/subarray problems.

31. [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)
32. [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
33. [Permutation in String](https://leetcode.com/problems/permutation-in-string/)
34. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
35. [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
36. [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
37. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
38. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
39. [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)
40. [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)
41. [Grumpy Bookstore Owner](https://leetcode.com/problems/grumpy-bookstore-owner/)
42. [Frequency of the Most Frequent Element](https://leetcode.com/problems/frequency-of-the-most-frequent-element/)
43. [Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/)
44. [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)
45. [Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/)

### Phase 4: Prefix Sums & Hash Maps (15 problems)

Powerful technique for range queries and subarray problems.

46. [Two Sum](https://leetcode.com/problems/two-sum/)
47. [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
48. [Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/)
49. [Contiguous Array](https://leetcode.com/problems/contiguous-array/)
50. [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)
51. [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)
52. [Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)
53. [Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/)
54. [Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)
55. [Maximum Sum of Distinct Subarrays With Length K](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/)
56. [Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/)
57. [Make Sum Divisible by P](https://leetcode.com/problems/make-sum-divisible-by-p/)
58. [Count Nice Pairs in an Array](https://leetcode.com/problems/count-nice-pairs-in-an-array/)
59. [Find the Longest Substring Containing Vowels in Even Counts](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/)
60. [Maximum Points You Can Obtain from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/)

### Phase 5: Matrix & 2D Arrays (10 problems)

Essential for understanding multi-dimensional array manipulation.

61. [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)
62. [Spiral Matrix II](https://leetcode.com/problems/spiral-matrix-ii/)
63. [Rotate Image](https://leetcode.com/problems/rotate-image/)
64. [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)
65. [Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/)
66. [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)
67. [Game of Life](https://leetcode.com/problems/game-of-life/)
68. [Word Search](https://leetcode.com/problems/word-search/)
69. [Number of Islands](https://leetcode.com/problems/number-of-islands/)
70. [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)

### Phase 6: Kadane's Algorithm & Variants (10 problems)

Maximum subarray problems - classic DP pattern that's crucial to master.

71. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
72. [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)
73. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
74. [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
75. [Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
76. [Best Time to Buy and Sell Stock IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/)
77. [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/)
78. [Longest Turbulent Subarray](https://leetcode.com/problems/longest-turbulent-subarray/)
79. [Maximum Length of Subarray With Positive Product](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/)
80. [Flip String to Monotone Increasing](https://leetcode.com/problems/flip-string-to-monotone-increasing/)

### Phase 7: Advanced Array Techniques (10 problems)

Combining multiple patterns and advanced optimization.

81. [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)
82. [First Missing Positive](https://leetcode.com/problems/first-missing-positive/)
83. [Find All Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)
84. [Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)
85. [Jump Game](https://leetcode.com/problems/jump-game/)
86. [Jump Game II](https://leetcode.com/problems/jump-game-ii/)
87. [Gas Station](https://leetcode.com/problems/gas-station/)
88. [Candy](https://leetcode.com/problems/candy/)
89. [Task Scheduler](https://leetcode.com/problems/task-scheduler/)
90. [Insert Interval](https://leetcode.com/problems/insert-interval/)

### Phase 8: Sorting & Searching Variations (10 problems)

Array problems requiring sorting or custom search patterns.

91. [Merge Intervals](https://leetcode.com/problems/merge-intervals/)
92. [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
93. [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)
94. [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
95. [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
96. [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)
97. [Largest Number](https://leetcode.com/problems/largest-number/)
98. [H-Index](https://leetcode.com/problems/h-index/)
99. [Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)
100. [Maximum Gap](https://leetcode.com/problems/maximum-gap/)

---

## 🏆 Competitive Programming Problems

### AtCoder Array Problems (20 problems)

1. [ABC 086 C - Traveling](https://atcoder.jp/contests/abc086/tasks/arc089_a)
2. [ABC 122 C - GeT AC](https://atcoder.jp/contests/abc122/tasks/abc122_c)
3. [ABC 125 C - GCD on Blackboard](https://atcoder.jp/contests/abc125/tasks/abc125_c)
4. [ABC 129 C - Typical Stairs](https://atcoder.jp/contests/abc129/tasks/abc129_c)
5. [ABC 166 D - I hate Factorization](https://atcoder.jp/contests/abc166/tasks/abc166_d)
6. [ABC 179 D - Leaping Tak](https://atcoder.jp/contests/abc179/tasks/abc179_d)
7. [ABC 182 D - Wandering](https://atcoder.jp/contests/abc182/tasks/abc182_d)
8. [ABC 188 D - Snuke Prime](https://atcoder.jp/contests/abc188/tasks/abc188_d)
9. [ABC 207 C - Many Segments](https://atcoder.jp/contests/abc207/tasks/abc207_c)
10. [ABC 221 D - Online games](https://atcoder.jp/contests/abc221/tasks/abc221_d)
11. [ABC 233 D - Count Interval](https://atcoder.jp/contests/abc233/tasks/abc233_d)
12. [ABC 241 D - Sequence Query](https://atcoder.jp/contests/abc241/tasks/abc241_d)
13. [ABC 247 D - Cylinder](https://atcoder.jp/contests/abc247/tasks/abc247_d)
14. [ABC 281 D - Max Multiple](https://atcoder.jp/contests/abc281/tasks/abc281_d)
15. [ABC 295 D - Three Days Ago](https://atcoder.jp/contests/abc295/tasks/abc295_d)
16. [ARC 098 C - Attention](https://atcoder.jp/contests/arc098/tasks/arc098_a)
17. [ABC 304 D - A Piece of Cake](https://atcoder.jp/contests/abc304/tasks/abc304_d)
18. [ABC 315 D - Magical Cookies](https://atcoder.jp/contests/abc315/tasks/abc315_d)
19. [ABC 322 D - Polyomino](https://atcoder.jp/contests/abc322/tasks/abc322_d)
20. [ARC 073 D - Simple Knapsack](https://atcoder.jp/contests/arc073/tasks/arc073_b)

### CSES Array Problems (12 problems)

1. [Distinct Numbers](https://cses.fi/problemset/task/1621)
2. [Apartments](https://cses.fi/problemset/task/1084)
3. [Ferris Wheel](https://cses.fi/problemset/task/1090)
4. [Concert Tickets](https://cses.fi/problemset/task/1091)
5. [Restaurant Customers](https://cses.fi/problemset/task/1619)
6. [Movie Festival](https://cses.fi/problemset/task/1629)
7. [Sum of Two Values](https://cses.fi/problemset/task/1640)
8. [Maximum Subarray Sum](https://cses.fi/problemset/task/1643)
9. [Stick Lengths](https://cses.fi/problemset/task/1074)
10. [Playlist](https://cses.fi/problemset/task/1141)
11. [Towers](https://cses.fi/problemset/task/1073)
12. [Traffic Lights](https://cses.fi/problemset/task/1163)

### Codeforces Array Problems by Rating

**Rating 800-1000 (Beginner):**

1. [Round 479 Div3 - A - Wrong Subtraction](https://codeforces.com/problemset/problem/977/A)
2. [Round 486 Div3 - A - Diverse Team](https://codeforces.com/problemset/problem/988/A)
3. [Round 501 Div3 - A - Points in Segments](https://codeforces.com/problemset/problem/1015/A)
4. [Round 535 Div3 - A - Two Distinct Points](https://codeforces.com/problemset/problem/1108/A)
5. [Round 661 Div3 - A - Remove Smallest](https://codeforces.com/problemset/problem/1399/A)

**Rating 1000-1200 (Easy):**

6. [Round 367 Div2 - B - Interesting drink](https://codeforces.com/problemset/problem/706/B)
7. [Round 479 Div3 - C - Less or Equal](https://codeforces.com/problemset/problem/977/C)
8. [Round 486 Div3 - C - Equal Sums](https://codeforces.com/problemset/problem/988/C)
9. [Round 580 Div2 - B - Make Product Equal One](https://codeforces.com/problemset/problem/1206/B)
10. [Round 693 Div3 - C - Long Jumps](https://codeforces.com/problemset/problem/1472/C)

**Rating 1200-1400 (Medium):**

11. [Round 344 Div2 - C - Report](https://codeforces.com/problemset/problem/631/C)
12. [Round 380 Div2 - C - Road to Cinema](https://codeforces.com/problemset/problem/738/C)
13. [Round 479 Div3 - D - Divide by three, multiply by two](https://codeforces.com/problemset/problem/977/D)
14. [Round 535 Div3 - C - Edgy Trees](https://codeforces.com/problemset/problem/1108/C)
15. [Round 661 Div3 - D - Maximum Distributed Tree](https://codeforces.com/problemset/problem/1399/D)

**Rating 1400-1600 (Advanced):**

16. [Round 290 Div2 - C - Fox And Names](https://codeforces.com/problemset/problem/510/C)
17. [Round 363 Div2 - C - Vacations](https://codeforces.com/problemset/problem/698/C)
18. [Round 394 Div2 - C - Dasha and Password](https://codeforces.com/problemset/problem/761/C)
19. [Round 427 Div2 - C - Star sky](https://codeforces.com/problemset/problem/835/C)
20. [Round 486 Div3 - D - Points and Powers of Two](https://codeforces.com/problemset/problem/988/D)

**Rating 1600-1800 (Expert):**

21. [Round 256 Div2 - C - Painting Fence](https://codeforces.com/problemset/problem/448/C)
22. [Round 283 Div2 - C - Removing Columns](https://codeforces.com/problemset/problem/496/C)
23. [Round 325 Div2 - C - Gennady the Dentist](https://codeforces.com/problemset/problem/584/C)
24. [Round 340 Div2 - D - Something with XOR Queries](https://codeforces.com/problemset/problem/617/D)
25. [Round 392 Div2 - C - Planar Reflections](https://codeforces.com/problemset/problem/761/C)

**Rating 1800-2000 (Candidate Master):**

26. [Round 243 Div2 - D - Sereja and Squares](https://codeforces.com/problemset/problem/425/D)
27. [Round 268 Div2 - D - Two Sets](https://codeforces.com/problemset/problem/468/D)
28. [Round 285 Div2 - C - Misha and Forest](https://codeforces.com/problemset/problem/501/C)
29. [Round 321 Div2 - C - Kefa and Park](https://codeforces.com/problemset/problem/580/C)
30. [Round 348 Div2 - C - Little Artem and Random Variable](https://codeforces.com/problemset/problem/641/C)

### Advanced CP Topics

**Difference Arrays & Range Updates:**

1. [CF - Greg and Array](https://codeforces.com/problemset/problem/295/A)
2. [CF - Little Girl and Maximum XOR](https://codeforces.com/problemset/problem/276/D)
3. [SPOJ - UPDATEIT](https://www.spoj.com/problems/UPDATEIT/)
4. [CF - Pashmak and Parmida's problem](https://codeforces.com/problemset/problem/459/D)
5. [AtCoder - Increment of Matrix](https://atcoder.jp/contests/abc183/tasks/abc183_f)

**2D Prefix Sums:**

1. [CSES - Forest Queries](https://cses.fi/problemset/task/1652)
2. [CF - Greg and Graph](https://codeforces.com/problemset/problem/295/B)
3. [AtCoder - Flip Cells](https://atcoder.jp/contests/abc203/tasks/abc203_d)
4. [CF - Beautiful Sequence](https://codeforces.com/problemset/problem/1265/D)
5. [SPOJ - MATSUM](https://www.spoj.com/problems/MATSUM/)

**Contribution to Sum:**

1. [CF - Number of Subsequences](https://codeforces.com/problemset/problem/1288/C)
2. [CF - Pashmak and Buses](https://codeforces.com/problemset/problem/459/C)
3. [AtCoder - Intervals on Tree](https://atcoder.jp/contests/abc187/tasks/abc187_f)
4. [CF - Square Subsets](https://codeforces.com/problemset/problem/895/C)
5. [CF - Divisibility](https://codeforces.com/problemset/problem/1213/G)

**Sliding Window Maximum:**

1. [SPOJ - ARRAYSUB](https://www.spoj.com/problems/ARRAYSUB/)
2. [CF - Maximum White Subtree](https://codeforces.com/problemset/problem/1324/F)
3. [AtCoder - Subsequence Sum](https://atcoder.jp/contests/abc217/tasks/abc217_e)
4. [CF - Xenia and Tree](https://codeforces.com/problemset/problem/342/E)
5. [CSES - Sliding Window Median](https://cses.fi/problemset/task/1076)

**Coordinate Compression:**

1. [CF - Sereja and Brackets](https://codeforces.com/problemset/problem/380/C)
2. [AtCoder - Static Range Sum](https://atcoder.jp/contests/abc185/tasks/abc185_f)
3. [CF - Pashmak and Graph](https://codeforces.com/problemset/problem/459/E)
4. [SPOJ - KQUERY](https://www.spoj.com/problems/KQUERY/)
5. [CF -Vasya and Beautiful Arrays](https://codeforces.com/problemset/problem/354/D)

---

## 📅 Learning Timeline

### For Interview Preparation (5-6 weeks)

**Week 1: Array Fundamentals**
Solve all 15 problems from Phase 1. Master basic operations: traversal, insertion, deletion, searching. Understand time/space complexity of array operations. Practice explaining your code clearly.

**Week 2: Two Pointers Mastery**
Complete all 15 problems from Phase 2. This is a critical pattern that appears constantly. Learn to recognize when two pointers can reduce O(n²) to O(n). Practice both same-direction and opposite-direction pointer techniques.

**Week 3: Sliding Window Pattern**
Solve all 15 problems from Phase 3. THE most important optimization technique for substring/subarray problems. Master fixed-size and variable-size windows. Understand the expand/shrink pattern.

**Week 4: Prefix Sums & Hash Maps**
Complete Phase 4 (15 problems). Learn to transform problems using prefix sums. Master the hash map + prefix sum combination for O(n) subarray solutions. This pattern is extremely powerful.

**Week 5: Matrices & Kadane's Algorithm**
Solve Phase 5 (10 problems) and Phase 6 (10 problems). Learn 2D array manipulation and the maximum subarray pattern. These are classic interview topics.

**Week 6: Advanced Patterns & Review**
Complete Phase 7 and Phase 8. Practice mixed problems. Do mock interviews. Time yourself. Review weak areas. Focus on explaining your thought process clearly.

### For Competitive Programming (4-5 months)

**Month 1: Solid Foundation**
Complete all CSES array problems. Solve AtCoder problems 1-15. Practice Codeforces 800-1200 rated problems. Master prefix sums, difference arrays, and two pointers. Target 50-60 problems.

**Month 2: Intermediate Techniques**
Complete remaining AtCoder problems. Solve Codeforces 1200-1500 rated problems. Learn 2D prefix sums, coordinate compression, and sliding window maximum. Target 40-50 problems.

**Month 3: Advanced Patterns**
Master contribution to sum techniques. Learn to combine arrays with segment trees and fenwick trees. Practice 1500-1700 rated problems. Target 35-45 problems.

**Month 4: Expert Level**
Study advanced range query techniques. Master sparse tables and square root decomposition. Solve 1700-1900 rated problems. Target 30-40 problems.

**Month 5: Mastery & Speed**
Participate in virtual contests. Practice recognizing patterns quickly. Focus on implementation speed and bug-free code. Solve 1900+ rated problems. Target 25-30 problems.

---

## 🎯 Final Thoughts

Arrays are the foundation of algorithmic problem solving. Mastering array techniques is essential for both interviews and competitive programming.

**For interviews**, focus on the five main patterns: two pointers, sliding window, prefix sums, Kadane's algorithm, and hash maps. Solve 80-100 problems across all patterns and you'll be well-prepared. The key is recognizing which pattern applies and implementing it bug-free.

**For competitive programming**, you need to combine basic patterns with advanced techniques like segment trees, coordinate compression, and contribution to sum. Practice formulating solutions that optimize both time and space.

Remember: Arrays may seem simple, but the techniques built on them are the foundation of almost every advanced algorithm. Master arrays, and you've mastered the foundation.
