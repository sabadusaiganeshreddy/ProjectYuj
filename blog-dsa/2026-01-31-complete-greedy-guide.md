---
slug: complete-greedy-guide
title: Complete Greedy Problems & Resources Guide
authors: []
tags: [greedy, algorithms, interview-prep, competitive-programming, leetcode]
---

Hey everyone! Greedy algorithms are one of the most elegant and intuitive problem-solving paradigms in computer science. I've spent years mastering greedy techniques for both interviews and competitive programming, and I want to share a complete guide that will transform how you approach optimization problems.

The key insight: Greedy algorithms are about making locally optimal choices that lead to globally optimal solutions. The challenge isn't implementation—it's recognizing when greedy works and proving correctness. Once you develop this intuition, you'll solve complex problems with surprisingly simple code.

<!--truncate-->

---

##  Understanding Greedy Algorithms

**What makes Greedy challenging?** The algorithm itself is usually simple, but recognizing greedy opportunities and proving correctness requires deep problem understanding. Not all problems that seem greedy actually have greedy solutions, and distinguishing these cases is crucial.

**For Tech Interviews:** You need to master core patterns: activity selection, interval scheduling, fractional knapsack, huffman coding variants, and greedy with sorting. About 70-90 well-understood problems is ideal. The key is explaining WHY your greedy choice works.

**For Competitive Programming:** You need to recognize non-obvious greedy problems, prove correctness using exchange arguments, and combine greedy with other techniques like DP, graphs, and data structures. This requires 120-150+ problems and strong mathematical intuition.

---

##  Best Learning Resources

### Video Resources for Interview Prep

**[NeetCode - Greedy](https://www.youtube.com/playlist?list=PLot-Xpze53lf3YBoIXFYMIlOc-XlVjGd6)** - Excellent for learning interview greedy patterns. Clear explanations of when and why greedy works. Best resource for building intuition.

**[take U forward (Striver) - Greedy Algorithms](https://www.youtube.com/playlist?list=PLgUwDviBIf0rF1w2Koyh78zafB0cz7tea)** - Comprehensive coverage with detailed correctness proofs. 25+ hours of content covering all major patterns.

**[Back To Back SWE - Greedy Problems](https://www.youtube.com/playlist?list=PLiQ766zSC5jM2OKVr8sooOuGgZkvnOCTI)** - Excellent for understanding the thought process behind greedy solutions. Great for learning to explain your reasoning.

**[Abdul Bari - Greedy Method](https://www.youtube.com/watch?v=ARvQcqJ_-NY)** - Best for understanding theoretical foundations. Covers activity selection, fractional knapsack, and correctness proofs clearly.

**[MIT OCW - Greedy Algorithms](https://www.youtube.com/watch?v=2P-yW7LQr08)** - Academic perspective with rigorous proofs. Excellent for understanding when greedy works vs when it fails.

### Video Resources for Competitive Programming

**[Errichto - Greedy Techniques](https://www.youtube.com/c/Errichto)** - Advanced greedy for CP. Shows non-obvious greedy problems and exchange argument proofs. Contest problem walkthroughs.

**[SecondThread - Greedy + Data Structures](https://www.youtube.com/c/SecondThread)** - Combining greedy with priority queues, sets, and other structures. Advanced optimization techniques.

**[William Fiset - Greedy Algorithms](https://www.youtube.com/c/WilliamFiset-videos)** - Clear explanations of classic greedy algorithms with code implementations.

**[Colin Galen - Contest Greedy Problems](https://www.youtube.com/c/ColinGalen)** - Real contest problems showing how to recognize greedy opportunities quickly.

### Written Resources

**For Interviews:**
- [LeetCode Greedy Explore Card](https://leetcode.com/explore/learn/card/greedy/)
- [Tech Interview Handbook - Greedy](https://www.techinterviewhandbook.org/algorithms/greedy/)
- [GeeksforGeeks Greedy Algorithms](https://www.geeksforgeeks.org/greedy-algorithms/)
- [InterviewBit - Greedy](https://www.interviewbit.com/courses/programming/topics/greedy-algorithm/)

**For Competitive Programming:**
- [CP-Algorithms - Greedy](https://cp-algorithms.com/)
- [Codeforces Greedy Problems Catalog](https://codeforces.com/blog/entry/82103)
- [USACO Guide - Greedy with Sorting](https://usaco.guide/silver/greedy-sorting)
- [TopCoder Greedy Tutorial](https://www.topcoder.com/thrive/articles/Greedy%20is%20Good)
- [Brilliant.org - Greedy Algorithms](https://brilliant.org/wiki/greedy-algorithm/)

### Books Worth Reading

**Introduction to Algorithms (CLRS)** - Chapter on greedy algorithms with rigorous proofs of correctness. Essential reading.

**Algorithm Design Manual** by Skiena - Great greedy problems with war stories showing real-world applications.

**Algorithm Design** by Kleinberg & Tardos - Excellent coverage of greedy algorithms with detailed correctness proofs.

**Competitive Programming 4** - Comprehensive greedy techniques for contests with problem classifications.

**The Algorithm Design Manual** - Practical approach to greedy with implementation advice.

---

##  Interview Problems (90 Total)

### Phase 1: Basic Greedy - Sorting First (15 problems)

Foundation problems where sorting is the key insight.

1. [Assign Cookies](https://leetcode.com/problems/assign-cookies/)
2. [Maximize Sum Of Array After K Negations](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/)
3. [Largest Perimeter Triangle](https://leetcode.com/problems/largest-perimeter-triangle/)
4. [Maximum Units on a Truck](https://leetcode.com/problems/maximum-units-on-a-truck/)
5. [Minimum Subsequence in Non-Increasing Order](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/)
6. [Array Partition](https://leetcode.com/problems/array-partition/)
7. [Boats to Save People](https://leetcode.com/problems/boats-to-save-people/)
8. [Minimum Cost to Move Chips to The Same Position](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/)
9. [Broken Calculator](https://leetcode.com/problems/broken-calculator/)
10. [Minimum Additions to Make Valid String](https://leetcode.com/problems/minimum-additions-to-make-valid-string/)
11. [Can Place Flowers](https://leetcode.com/problems/can-place-flowers/)
12. [Lemonade Change](https://leetcode.com/problems/lemonade-change/)
13. [Walking Robot Simulation](https://leetcode.com/problems/walking-robot-simulation/)
14. [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
15. [Two City Scheduling](https://leetcode.com/problems/two-city-scheduling/)

### Phase 2: Interval Problems (15 problems)

Classic greedy pattern. Master activity selection and its variants.

16. [Meeting Rooms](https://leetcode.com/problems/meeting-rooms/)
17. [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)
18. [Merge Intervals](https://leetcode.com/problems/merge-intervals/)
19. [Insert Interval](https://leetcode.com/problems/insert-interval/)
20. [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
21. [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
22. [Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/)
23. [Employee Free Time](https://leetcode.com/problems/employee-free-time/)
24. [Remove Covered Intervals](https://leetcode.com/problems/remove-covered-intervals/)
25. [Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/)
26. [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)
27. [Divide Intervals Into Minimum Number of Groups](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/)
28. [Maximum Number of Events That Can Be Attended II](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/)
29. [Minimum Interval to Include Each Query](https://leetcode.com/problems/minimum-interval-to-include-each-query/)
30. [Car Pooling](https://leetcode.com/problems/car-pooling/)

### Phase 3: Greedy with Two Pointers (10 problems)

Combining greedy strategy with two-pointer technique.

31. [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
32. [Bag of Tokens](https://leetcode.com/problems/bag-of-tokens/)
33. [Boats to Save People](https://leetcode.com/problems/boats-to-save-people/)
34. [Valid Triangle Number](https://leetcode.com/problems/valid-triangle-number/)
35. [3Sum Smaller](https://leetcode.com/problems/3sum-smaller/)
36. [Minimize Maximum Pair Sum in Array](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/)
37. [Partition Array Into Three Parts With Equal Sum](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/)
38. [Minimum Number of Moves to Make Palindrome](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/)
39. [Longest Happy String](https://leetcode.com/problems/longest-happy-string/)
40. [Construct K Palindrome Strings](https://leetcode.com/problems/construct-k-palindrome-strings/)

### Phase 4: Greedy String Problems (10 problems)

String manipulation with greedy strategy.

41. [Remove K Digits](https://leetcode.com/problems/remove-k-digits/)
42. [Remove Duplicate Letters](https://leetcode.com/problems/remove-duplicate-letters/)
43. [Smallest Subsequence of Distinct Characters](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/)
44. [Partition Labels](https://leetcode.com/problems/partition-labels/)
45. [Split a String in Balanced Strings](https://leetcode.com/problems/split-a-string-in-balanced-strings/)
46. [Minimum Deletions to Make Character Frequencies Unique](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/)
47. [Longest Happy String](https://leetcode.com/problems/longest-happy-string/)
48. [Construct String from Binary Tree](https://leetcode.com/problems/construct-string-from-binary-tree/)
49. [Minimum Number of Swaps to Make the String Balanced](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/)
50. [Maximum Number of Removable Characters](https://leetcode.com/problems/maximum-number-of-removable-characters/)

### Phase 5: Greedy with Priority Queue/Heap (15 problems)

Essential pattern combining greedy with heap data structure.

51. [Last Stone Weight](https://leetcode.com/problems/last-stone-weight/)
52. [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)
53. [Task Scheduler](https://leetcode.com/problems/task-scheduler/)
54. [Reorganize String](https://leetcode.com/problems/reorganize-string/)
55. [Minimum Cost to Hire K Workers](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/)
56. [IPO](https://leetcode.com/problems/ipo/)
57. [Find K Pairs with Smallest Sums](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/)
58. [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
59. [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
60. [Maximum Performance of a Team](https://leetcode.com/problems/maximum-performance-of-a-team/)
61. [Minimum Cost to Connect Sticks](https://leetcode.com/problems/minimum-cost-to-connect-sticks/)
62. [Reduce Array Size to The Half](https://leetcode.com/problems/reduce-array-size-to-the-half/)
63. [Maximum Number of Events That Can Be Attended](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/)
64. [Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/)
65. [Seat Reservation Manager](https://leetcode.com/problems/seat-reservation-manager/)

### Phase 6: Jump Game & Reachability (8 problems)

Classic greedy pattern about reaching goals optimally.

66. [Jump Game](https://leetcode.com/problems/jump-game/)
67. [Jump Game II](https://leetcode.com/problems/jump-game-ii/)
68. [Jump Game III](https://leetcode.com/problems/jump-game-iii/)
69. [Jump Game IV](https://leetcode.com/problems/jump-game-iv/)
70. [Jump Game V](https://leetcode.com/problems/jump-game-v/)
71. [Jump Game VI](https://leetcode.com/problems/jump-game-vi/)
72. [Jump Game VII](https://leetcode.com/problems/jump-game-vii/)
73. [Minimum Number of Taps to Open to Water a Garden](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/)

### Phase 7: Stock Problems & State Transitions (7 problems)

Greedy approach to optimization with state changes.

74. [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
75. [Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
76. [Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)
77. [Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
78. [Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/)
79. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
80. [Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/)

### Phase 8: Advanced Greedy (10 problems)

Complex problems requiring creative greedy insights.

81. [Gas Station](https://leetcode.com/problems/gas-station/)
82. [Candy](https://leetcode.com/problems/candy/)
83. [Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/)
84. [Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/)
85. [Patching Array](https://leetcode.com/problems/patching-array/)
86. [Create Maximum Number](https://leetcode.com/problems/create-maximum-number/)
87. [Remove Boxes](https://leetcode.com/problems/remove-boxes/)
88. [Smallest Range Covering Elements from K Lists](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/)
89. [Advantage Shuffle](https://leetcode.com/problems/advantage-shuffle/)
90. [Hand of Straights](https://leetcode.com/problems/hand-of-straights/)

---

##  Competitive Programming Problems

### AtCoder Greedy Problems (25 problems)

1. [ABC 087 C - Candies](https://atcoder.jp/contests/abc087/tasks/arc090_a)
2. [ABC 088 C - Takahashi's Information](https://atcoder.jp/contests/abc088/tasks/arc091_a)
3. [ABC 093 C - Same Integers](https://atcoder.jp/contests/abc093/tasks/arc094_a)
4. [ABC 103 D - Islands War](https://atcoder.jp/contests/abc103/tasks/abc103_d)
5. [ABC 121 D - XOR World](https://atcoder.jp/contests/abc121/tasks/abc121_d)
6. [ABC 131 D - Megalomania](https://atcoder.jp/contests/abc131/tasks/abc131_d)
7. [ABC 142 D - Disjoint Set of Common Divisors](https://atcoder.jp/contests/abc142/tasks/abc142_d)
8. [ABC 149 D - Prediction and Restriction](https://atcoder.jp/contests/abc149/tasks/abc149_d)
9. [ABC 161 D - Lunlun Number](https://atcoder.jp/contests/abc161/tasks/abc161_d)
10. [ABC 169 D - Div Game](https://atcoder.jp/contests/abc169/tasks/abc169_d)
11. [ABC 184 D - increment of coins](https://atcoder.jp/contests/abc184/tasks/abc184_d)
12. [ABC 197 D - Opposite](https://atcoder.jp/contests/abc197/tasks/abc197_d)
13. [ABC 214 D - Sum of Maximum Weights](https://atcoder.jp/contests/abc214/tasks/abc214_d)
14. [ABC 229 D - Longest X](https://atcoder.jp/contests/abc229/tasks/abc229_d)
15. [ABC 246 D - 2-variable Function](https://atcoder.jp/contests/abc246/tasks/abc246_d)
16. [ABC 252 D - Distinct Trio](https://atcoder.jp/contests/abc252/tasks/abc252_d)
17. [ABC 267 D - Index × A(Not Continuous ver.)](https://atcoder.jp/contests/abc267/tasks/abc267_d)
18. [ABC 276 D - Divide by 2 or 3](https://atcoder.jp/contests/abc276/tasks/abc276_d)
19. [ABC 289 D - Step Up Robot](https://atcoder.jp/contests/abc289/tasks/abc289_d)
20. [ARC 067 D - Walk and Teleport](https://atcoder.jp/contests/arc067/tasks/arc067_b)
21. [ARC 091 D - Remainder Reminder](https://atcoder.jp/contests/arc091/tasks/arc091_b)
22. [ABC 303 D - Shift vs. CapsLock](https://atcoder.jp/contests/abc303/tasks/abc303_d)
23. [ABC 311 D - Grid Ice Floor](https://atcoder.jp/contests/abc311/tasks/abc311_d)
24. [ABC 317 D - President](https://atcoder.jp/contests/abc317/tasks/abc317_d)
25. [ABC 323 D - Merge Slimes](https://atcoder.jp/contests/abc323/tasks/abc323_d)

### CSES Greedy Problems (10 problems)

1. [Ferris Wheel](https://cses.fi/problemset/task/1090)
2. [Concert Tickets](https://cses.fi/problemset/task/1091)
3. [Restaurant Customers](https://cses.fi/problemset/task/1619)
4. [Movie Festival](https://cses.fi/problemset/task/1629)
5. [Movie Festival II](https://cses.fi/problemset/task/1632)
6. [Tasks and Deadlines](https://cses.fi/problemset/task/1630)
7. [Reading Books](https://cses.fi/problemset/task/1631)
8. [Sum of Three Values](https://cses.fi/problemset/task/1641)
9. [Stick Lengths](https://cses.fi/problemset/task/1074)
10. [Missing Coin Sum](https://cses.fi/problemset/task/2183)

### Codeforces Greedy Problems by Rating

**Rating 800-1000 (Beginner):**

1. [Round 479 Div3 - A - Wrong Subtraction](https://codeforces.com/problemset/problem/977/A)
2. [Round 486 Div3 - A - Diverse Team](https://codeforces.com/problemset/problem/988/A)
3. [Round 535 Div3 - A - Two Distinct Points](https://codeforces.com/problemset/problem/1108/A)
4. [Round 661 Div3 - A - Remove Smallest](https://codeforces.com/problemset/problem/1399/A)
5. [Round 693 Div3 - A - Zodiac Sign](https://codeforces.com/problemset/problem/1472/A)

**Rating 1000-1200 (Easy):**

6. [Round 344 Div2 - B - Print Check](https://codeforces.com/problemset/problem/631/B)
7. [Round 367 Div2 - B - Interesting drink](https://codeforces.com/problemset/problem/706/B)
8. [Round 380 Div2 - B - Spotlights](https://codeforces.com/problemset/problem/738/B)
9. [Round 479 Div3 - B - Trace](https://codeforces.com/problemset/problem/977/B)
10. [Round 535 Div3 - B - Diverse Strings](https://codeforces.com/problemset/problem/1108/B)

**Rating 1200-1400 (Medium):**

11. [Round 256 Div2 - B - Suffix Structures](https://codeforces.com/problemset/problem/448/B)
12. [Round 268 Div2 - B - Books](https://codeforces.com/problemset/problem/279/B)
13. [Round 290 Div2 - B - Fox And Two Dots](https://codeforces.com/problemset/problem/510/B)
14. [Round 321 Div2 - B - Kefa and Company](https://codeforces.com/problemset/problem/580/B)
15. [Round 348 Div2 - B - Little Robber Girl's Zoo](https://codeforces.com/problemset/problem/641/B)

**Rating 1400-1600 (Advanced):**

16. [Round 243 Div2 - C - Sereja and Swaps](https://codeforces.com/problemset/problem/425/C)
17. [Round 256 Div2 - C - Painting Fence](https://codeforces.com/problemset/problem/448/C)
18. [Round 283 Div2 - C - Removing Columns](https://codeforces.com/problemset/problem/496/C)
19. [Round 290 Div2 - C - Fox And Names](https://codeforces.com/problemset/problem/510/C)
20. [Round 325 Div2 - C - Gennady the Dentist](https://codeforces.com/problemset/problem/584/C)

**Rating 1600-1800 (Expert):**

21. [Round 211 Div2 - D - Sereja and Cinema](https://codeforces.com/problemset/problem/363/D)
22. [Round 233 Div2 - D - Sereja and Squares](https://codeforces.com/problemset/problem/399/D)
23. [Round 268 Div2 - C - The Sports Festival](https://codeforces.com/problemset/problem/468/C)
24. [Round 285 Div2 - C - Misha and Forest](https://codeforces.com/problemset/problem/501/C)
25. [Round 321 Div2 - C - Kefa and Park](https://codeforces.com/problemset/problem/580/C)

**Rating 1800-2000 (Candidate Master):**

26. [Round 196 Div2 - D - Hexagons](https://codeforces.com/problemset/problem/337/D)
27. [Round 243 Div2 - D - Sereja and Squares](https://codeforces.com/problemset/problem/425/D)
28. [Round 256 Div2 - D - Multiplication Table](https://codeforces.com/problemset/problem/448/D)
29. [Round 283 Div2 - D - Tennis Game](https://codeforces.com/problemset/problem/496/D)
30. [Round 290 Div2 - D - Fox And Jumping](https://codeforces.com/problemset/problem/510/D)

### Advanced CP Topics

**Greedy + DP (Optimization):**

1. [CF - Divisibility by Eight](https://codeforces.com/problemset/problem/550/C)
2. [CF - Exams](https://codeforces.com/problemset/problem/732/D)
3. [SPOJ - PIGBANK](https://www.spoj.com/problems/PIGBANK/)
4. [CF - Cut Ribbon](https://codeforces.com/problemset/problem/189/A)
5. [AtCoder - Knapsack 1](https://atcoder.jp/contests/dp/tasks/dp_d)

**Exchange Argument Problems:**

1. [CF - Sereja and Dima](https://codeforces.com/problemset/problem/381/A)
2. [CF - Magic Numbers](https://codeforces.com/problemset/problem/320/A)
3. [CSES - Tasks and Deadlines](https://cses.fi/problemset/task/1630)
4. [CF - Towers](https://codeforces.com/problemset/problem/37/A)
5. [AtCoder - Many Moves](https://atcoder.jp/contests/abc197/tasks/abc197_d)

**Greedy with Observations:**

1. [CF - Little Elephant and Bits](https://codeforces.com/problemset/problem/258/B)
2. [CF - Divisibility](https://codeforces.com/problemset/problem/597/B)
3. [AtCoder - Make Them Equal](https://atcoder.jp/contests/abc214/tasks/abc214_d)
4. [CF - Array Cancellation](https://codeforces.com/problemset/problem/1405/B)
5. [CSES - Missing Coin Sum](https://cses.fi/problemset/task/2183)

**Greedy with Priority Queue:**

1. [CF - Office Keys](https://codeforces.com/problemset/problem/830/A)
2. [CF - Sequence](https://codeforces.com/problemset/problem/340/D)
3. [SPOJ - ARRANGE](https://www.spoj.com/problems/ARRANGE/)
4. [CF - Maximum Subsequence](https://codeforces.com/problemset/problem/888/E)
5. [AtCoder - Intervals](https://atcoder.jp/contests/abc103/tasks/abc103_d)

**Greedy on Graphs:**

1. [CF - Dijkstra?](https://codeforces.com/problemset/problem/20/C)
2. [CSES - Shortest Routes I](https://cses.fi/problemset/task/1671)
3. [CF - Minimum spanning tree](https://codeforces.com/problemset/problem/1176/E)
4. [AtCoder - Lazy Segment Tree](https://atcoder.jp/contests/abc214/tasks/abc214_d)
5. [SPOJ - MST](https://www.spoj.com/problems/MST/)

---

##  Learning Timeline

### For Interview Preparation (5-6 weeks)

**Week 1: Greedy Foundations**
Solve all 15 problems from Phase 1. Understand the core principle: sort first, then make greedy choices. Learn to recognize when sorting helps. Master proving simple greedy solutions correct.

**Week 2: Interval Problems**
Complete all 15 problems from Phase 2. This is THE most important greedy pattern for interviews. Master activity selection and all its variants. Learn to prove correctness using exchange arguments.

**Week 3: Greedy with Data Structures**
Solve Phase 3 (10 problems) and Phase 4 (10 problems). Learn to combine greedy with two pointers and string manipulation. Understand when greedy works for string problems.

**Week 4: Priority Queue Mastery**
Complete Phase 5 (15 problems). Master combining greedy with heaps. This pattern appears constantly in advanced problems. Understand when a priority queue enables greedy solutions.

**Week 5: Jump Games & Stocks**
Solve Phase 6 (8 problems) and Phase 7 (7 problems). Master reachability problems and state transitions. These are classic greedy patterns that appear frequently.

**Week 6: Advanced Greedy & Review**
Complete Phase 8 (10 problems). Practice the hardest greedy problems. Do mock interviews. Focus on explaining WHY your greedy choice works. Review problems where you struggled to see the greedy insight.

### For Competitive Programming (4-5 months)

**Month 1: Strong Foundation**
Complete all CSES greedy problems. Solve AtCoder problems 1-15. Practice Codeforces 800-1200 rated problems. Master basic greedy patterns and sorting. Learn to write clean proofs. Target 50-60 problems.

**Month 2: Exchange Arguments**
Study exchange argument technique deeply. Solve 1200-1500 rated problems. Learn to recognize when greedy works vs when DP is needed. Practice proving correctness rigorously. Target 40-50 problems.

**Month 3: Advanced Patterns**
Master greedy with priority queues and sets. Learn interval scheduling variants. Study greedy on graphs (MST, shortest paths). Solve 1500-1700 rated problems. Target 35-45 problems.

**Month 4: Observation-Based Greedy**
Learn to find mathematical observations that enable greedy. Practice non-obvious greedy problems. Combine greedy with other techniques. Solve 1600-1800 rated problems. Target 30-40 problems.

**Month 5: Mastery & Speed**
Participate in virtual contests. Focus on recognizing greedy opportunities instantly. Practice writing correctness proofs quickly. Solve 1800+ rated problems. Target 25-30 problems.

---

##  Final Thoughts

Greedy algorithms are beautiful because they're simple yet powerful. The challenge isn't implementation—it's recognizing when greedy works and proving correctness.

**For interviews**, focus on understanding WHY greedy works for each problem. Master interval scheduling, priority queue patterns, and sorting-based greedy. Solve 70-90 problems and you'll be well-prepared. The key is explaining your greedy choice clearly.

**For competitive programming**, you need instant pattern recognition and the ability to construct exchange argument proofs quickly. Practice distinguishing greedy from DP problems. Master combining greedy with advanced data structures.

Remember: Greedy algorithms make locally optimal choices. The art is in proving these local choices lead to global optimality. Master this, and you've mastered one of the most elegant problem-solving paradigms in computer science.
