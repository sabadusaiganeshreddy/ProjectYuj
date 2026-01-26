---
slug: complete-binary-search-guide
title: Complete Binary Search Problems & Resources Guide
authors: []
tags: [binary-search, interview-prep, competitive-programming, leetcode, codeforces]
---

Hey everyone! Binary Search is one of the most elegant and powerful techniques in DSA, yet it's often underestimated. I've spent considerable time mastering binary search for both tech interviews and competitive programming, and I wanted to share a complete guide that covers everything you need.

The key insight that changed everything for me: Binary Search isn't just about finding elements in sorted arrays. It's a problem-solving paradigm that applies whenever you can define a monotonic property (if something works for x, it works for all values greater/smaller than x). Once you understand this, you'll see binary search opportunities everywhere.

<!--truncate-->

---

##  Understanding Binary Search

**What makes Binary Search tricky?** The basic algorithm is simple, but recognizing when to apply it and implementing it bug-free (especially edge cases) is challenging. The real power comes from "binary search on answer", a technique that turns many optimization problems into search problems.

**For Tech Interviews:** You need to master the classic binary search template, handle edge cases flawlessly, and recognize binary search on answer patterns. About 50-60 well-understood problems is sufficient. Most interview problems are medium difficulty.

**For Competitive Programming:** You need deep understanding of searching on answer spaces, optimization techniques, binary search on floating point, and combining binary search with other algorithms. This requires 100-150+ problems.

---

##  Best Learning Resources

### Video Resources for Interview Prep

**[NeetCode - Binary Search Playlist](https://www.youtube.com/playlist?list=PLot-Xpze53leNZQd0iINpD-MAhMOMzWvO)** - The absolute best for learning interview binary search patterns. Clear explanations with Python implementations. Covers classic search, search on answer, and all important variations.

**[take U forward (Striver) - Binary Search Series](https://www.youtube.com/playlist?list=PLgUwDviBIf0pMFMWuuvDNMAkoQFi-h0ZF)** - Comprehensive coverage with detailed explanations. Extremely thorough with C++/Java code. Around 30+ hours of content covering basics to advanced.

**[Abdul Bari - Binary Search](https://www.youtube.com/watch?v=j5uXyPJ0Pew)** - Best for understanding the theory and analysis. Crystal clear explanation of how binary search achieves O(log n) complexity.

**[Back To Back SWE - Binary Search](https://www.youtube.com/watch?v=P3YID7liBug)** - Excellent breakdown of the thought process and common pitfalls. Great for understanding boundary conditions.

### Video Resources for Competitive Programming

**[Errichto - Binary Search Lectures](https://www.youtube.com/watch?v=GU7DpgHINWQ)** - Phenomenal coverage of binary search for CP. Covers binary search on answer, floating point binary search, and advanced applications.

**[SecondThread - Binary Search Techniques](https://www.youtube.com/c/SecondThread)** - Advanced binary search applications in competitive programming. Shows how to combine binary search with other techniques.

**[William Fiset - Binary Search Algorithms](https://www.youtube.com/watch?v=GU7DpgHINWQ)** - Clear visualizations and explanations of various binary search variants.

### Written Resources

**For Interviews:**
- [LeetCode Binary Search Explore Card](https://leetcode.com/explore/learn/card/binary-search/)
- [Tech Interview Handbook - Binary Search](https://www.techinterviewhandbook.org/algorithms/binary-search/)
- [GeeksforGeeks Binary Search](https://www.geeksforgeeks.org/binary-search/)

**For Competitive Programming:**
- [Codeforces Binary Search Catalog](https://codeforces.com/blog/entry/79974)
- [CP-Algorithms Binary Search](https://cp-algorithms.com/num_methods/binary_search.html)
- [USACO Guide - Binary Search](https://usaco.guide/silver/binary-search)
- [TopCoder Binary Search Tutorial](https://www.topcoder.com/thrive/articles/Binary%20Search)

### Books Worth Reading

**Cracking the Coding Interview** - Good introduction to binary search with interview problems.

**Competitive Programming 4** - Chapter on binary search with advanced applications and optimization techniques.

**Introduction to Algorithms (CLRS)** - Rigorous treatment of binary search with mathematical analysis.

**Elements of Programming Interviews** - Excellent binary search problems with detailed solutions.

---

##  Interview Problems (60 Total)

### Phase 1: Classic Binary Search 
Master the fundamental template. If you can't implement these bug-free, everything else will be difficult.

1. [Binary Search](https://leetcode.com/problems/binary-search/)
2. [Search Insert Position](https://leetcode.com/problems/search-insert-position/)
3. [First Bad Version](https://leetcode.com/problems/first-bad-version/)
4. [Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/)
5. [Arranging Coins](https://leetcode.com/problems/arranging-coins/)
6. [Sqrt(x)](https://leetcode.com/problems/sqrtx/)
7. [Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/)
8. [Find Smallest Letter Greater Than Target](https://leetcode.com/problems/find-smallest-letter-greater-than-target/)
9. [Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/)
10. [Count Negative Numbers in a Sorted Matrix](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/)

### Phase 2: Finding Boundaries 
Learn to find first/last occurrence and handle duplicates. This is crucial for many applications.

11. [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
12. [Find Peak Element](https://leetcode.com/problems/find-peak-element/)
13. [Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/)
14. [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
15. [Search in Rotated Sorted Array II](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/)
16. [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
17. [Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)
18. [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)
19. [Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/)
20. [Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/)

### Phase 3: Binary Search on Answer 
The most important pattern. Learning to search on the answer space rather than index space.

21. [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
22. [Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)
23. [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
24. [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
25. [Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/)
26. [Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/)
27. [Minimize Max Distance to Gas Station](https://leetcode.com/problems/minimize-max-distance-to-gas-station/)
28. [Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)
29. [Divide Chocolate](https://leetcode.com/problems/divide-chocolate/)
30. [Cutting Ribbons](https://leetcode.com/problems/cutting-ribbons/)

### Phase 4: 2D Binary Search & Matrix Problems 
Binary search in 2D spaces and matrix applications.

31. [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
32. [Search a 2D Matrix II](https://leetcode.com/problems/search-a-2d-matrix-ii/)
33. [Find a Peak Element II](https://leetcode.com/problems/find-a-peak-element-ii/)
34. [Kth Smallest Number in Multiplication Table](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/)
35. [K-th Smallest Prime Fraction](https://leetcode.com/problems/k-th-smallest-prime-fraction/)
36. [Find K-th Smallest Pair Distance](https://leetcode.com/problems/find-k-th-smallest-pair-distance/)
37. [Ugly Number III](https://leetcode.com/problems/ugly-number-iii/)
38. [Kth Smallest Product of Two Sorted Arrays](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/)

### Phase 5: Advanced Binary Search on Answer 
Complex applications requiring creative problem formulation.

39. [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)
40. [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
41. [Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)
42. [Maximum Number of Removable Characters](https://leetcode.com/problems/maximum-number-of-removable-characters/)
43. [Maximum Number of Tasks You Can Assign](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/)
44. [Minimize the Difference Between Target and Chosen Elements](https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/)
45. [Maximum Running Time of N Computers](https://leetcode.com/problems/maximum-running-time-of-n-computers/)
46. [Maximum Tastiness of Candy Basket](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/)
47. [Minimized Maximum of Products Distributed to Any Store](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/)
48. [Minimum Time to Complete Trips](https://leetcode.com/problems/minimum-time-to-complete-trips/)
49. [Maximum Number of Alloys](https://leetcode.com/problems/maximum-number-of-alloys/)
50. [Minimum Limit of Balls in a Bag](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/)

### Phase 6: Binary Search with Other Techniques

Combining binary search with greedy, DP, or other algorithms.

51. [Find Right Interval](https://leetcode.com/problems/find-right-interval/)
52. [Maximum Length of Repeated Subarray](https://leetcode.com/problems/maximum-length-of-repeated-subarray/)
53. [Longest Duplicate Substring](https://leetcode.com/problems/longest-duplicate-substring/)
54. [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
55. [Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)
56. [Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)
57. [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
58. [The K Weakest Rows in a Matrix](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/)
59. [Successful Pairs of Spells and Potions](https://leetcode.com/problems/successful-pairs-of-spells-and-potions/)
60. [Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/)

---

##  Competitive Programming Problems

### AtCoder Binary Search Problems 
1. [ABC 077 C - Snuke Festival](https://atcoder.jp/contests/abc077/tasks/arc084_a)
2. [ABC 143 D - Triangles](https://atcoder.jp/contests/abc143/tasks/abc143_d)
3. [ABC 155 D - Pairs](https://atcoder.jp/contests/abc155/tasks/abc155_d)
4. [ABC 172 D - Sum of Divisors](https://atcoder.jp/contests/abc172/tasks/abc172_d)
5. [ABC 192 D - Base n](https://atcoder.jp/contests/abc192/tasks/abc192_d)
6. [ABC 205 D - Kth Excluded](https://atcoder.jp/contests/abc205/tasks/abc205_d)
7. [ABC 231 D - Neighbors](https://atcoder.jp/contests/abc231/tasks/abc231_d)
8. [ABC 248 D - Range Count Query](https://atcoder.jp/contests/abc248/tasks/abc248_d)
9. [ABC 255 D - ±1 Operation 1](https://atcoder.jp/contests/abc255/tasks/abc255_d)
10. [ABC 268 D - Unique Username](https://atcoder.jp/contests/abc268/tasks/abc268_d)
11. [ABC 279 D - Freefall](https://atcoder.jp/contests/abc279/tasks/abc279_d)
12. [ABC 294 E - 2xN Grid](https://atcoder.jp/contests/abc294/tasks/abc294_e)
13. [ABC 302 D - Impartial Gift](https://atcoder.jp/contests/abc302/tasks/abc302_d)
14. [ABC 319 E - Bus Stops](https://atcoder.jp/contests/abc319/tasks/abc319_e)
15. [ARC 054 B - Moist](https://atcoder.jp/contests/arc054/tasks/arc054_b)

### CSES Binary Search Problems 
1. [Factory Machines](https://cses.fi/problemset/task/1620)
2. [Array Division](https://cses.fi/problemset/task/1085)
3. [Sum of Four Values](https://cses.fi/problemset/task/1642)
4. [Nearest Smaller Values](https://cses.fi/problemset/task/1645)
5. [Subarray Distinct Values](https://cses.fi/problemset/task/2428)
6. [Maximum Subarray Sum II](https://cses.fi/problemset/task/1644)
7. [Movie Festival II](https://cses.fi/problemset/task/1632)
8. [Reading Books](https://cses.fi/problemset/task/1631)

### Codeforces Binary Search Problems by Rating

**Rating 1200-1400:**

1. [Round 479 Div3 - D - Divide by three, multiply by two](https://codeforces.com/problemset/problem/977/D)
2. [Round 501 Div3 - D - Walking Between Houses](https://codeforces.com/problemset/problem/1015/D)
3. [Round 479 Div3 - E - Cyclic Components](https://codeforces.com/problemset/problem/977/E)
4. [Round 686 Div3 - D - Number into Sequence](https://codeforces.com/problemset/problem/1454/D)
5. [Round 784 Div4 - G - Fall Down](https://codeforces.com/problemset/problem/1669/G)

**Rating 1400-1600:**

6. [Round 380 Div2 - D - Sea Battle](https://codeforces.com/problemset/problem/738/D)
7. [Round 486 Div3 - E - Divisibility by 25](https://codeforces.com/problemset/problem/988/E)
8. [Round 535 Div3 - D - Diverse Garland](https://codeforces.com/problemset/problem/1108/D)
9. [Round 693 Div3 - E - Correct Placement](https://codeforces.com/problemset/problem/1472/E)
10. [Round 661 Div3 - E - Find the Car](https://codeforces.com/problemset/problem/1609/E)

**Rating 1600-1800:**

11. [Round 348 Div2 - D - Little Artem and Dance](https://codeforces.com/problemset/problem/641/D)
12. [Round 479 Div3 - F - Consecutive Subsequence](https://codeforces.com/problemset/problem/977/F)
13. [Round 290 Div2 - D - Fox And Jumping](https://codeforces.com/problemset/problem/510/D)
14. [Round 632 Div2 - D - Challenges in school №41](https://codeforces.com/problemset/problem/1330/D)
15. [Round 427 Div2 - D - Misha, Grisha and Underground](https://codeforces.com/problemset/problem/832/D)

**Rating 1800-2000:**

16. [Round 392 Div2 - D - Arpa's weak amphitheater and Mehrdad's valuable Hoses](https://codeforces.com/problemset/problem/741/D)
17. [Round 402 Div2 - D - String Game](https://codeforces.com/problemset/problem/778/D)
18. [Round 363 Div2 - D - Fix a Tree](https://codeforces.com/problemset/problem/698/D)
19. [Round 325 Div2 - D - River Locks](https://codeforces.com/problemset/problem/587/D)
20. [Round 394 Div2 - D - Dasha and Very Difficult Problem](https://codeforces.com/problemset/problem/761/D)

**Rating 2000-2200:**

21. [Round 283 Div2 - D - Tennis Game](https://codeforces.com/problemset/problem/496/D)
22. [Round 321 Div2 - D - Kefa and Dishes](https://codeforces.com/problemset/problem/580/D)
23. [Round 340 Div2 - E - XOR and Favorite Number](https://codeforces.com/problemset/problem/617/E)
24. [Round 256 Div2 - D - Multiplication Table](https://codeforces.com/problemset/problem/448/D)
25. [Round 285 Div2 - D - Misha and Permutations Summation](https://codeforces.com/problemset/problem/501/D)

### Advanced CP Topics

**Parallel Binary Search:**

1. [CF - Meteors](https://codeforces.com/problemset/problem/702/E)
2. [CF - String Game](https://codeforces.com/problemset/problem/778/D)
3. [SPOJ - MKTHNUM](https://www.spoj.com/problems/MKTHNUM/)
4. [CF - Level Generation](https://codeforces.com/problemset/problem/818/F)
5. [CF - Points, Lines and Ready-made Titles](https://codeforces.com/problemset/problem/871/D)

**Binary Search with Segment Trees:**

1. [CF - Xenia and Bit Operations](https://codeforces.com/problemset/problem/339/D)
2. [CF - Sereja and Brackets](https://codeforces.com/problemset/problem/380/C)
3. [CSES - Salary Queries](https://cses.fi/problemset/task/1144)
4. [CF - Beautiful Numbers](https://codeforces.com/problemset/problem/300/C)
5. [CF - Array Queries](https://codeforces.com/problemset/problem/797/E)

**Floating Point Binary Search:**

1. [SPOJ - AGGRCOW](https://www.spoj.com/problems/AGGRCOW/)
2. [CF - Weakness and Poorness](https://codeforces.com/problemset/problem/578/C)
3. [SPOJ - RACE](https://www.spoj.com/problems/RACE/)
4. [CF - Biathlon Track](https://codeforces.com/gym/100307/problem/B)
5. [AtCoder - Frog 3](https://atcoder.jp/contests/dp/tasks/dp_z)

**Binary Search + DP:**

1. [CF - Levels and Regions](https://codeforces.com/problemset/problem/673/D)
2. [CF - Ciel and Gondolas](https://codeforces.com/problemset/problem/321/E)
3. [SPOJ - BRKSTRNG](https://www.spoj.com/problems/BRKSTRNG/)
4. [CF - Kalila and Dimna in the Logging Industry](https://codeforces.com/problemset/problem/319/C)
5. [AtCoder - Slimes](https://atcoder.jp/contests/dp/tasks/dp_n)

---

##  Learning Timeline

### For Interview Preparation (4-5 weeks)

**Week 1: Classic Binary Search Foundation**
Solve all 10 problems from Phase 1. Master the basic template and understand how to avoid off-by-one errors. Practice both iterative and recursive implementations. By the end of this week, you should be able to implement binary search bug-free every time.

**Week 2: Finding Boundaries**
Solve 10 problems from Phase 2. Learn to find first/last occurrence and handle edge cases in rotated arrays. This is crucial for many real-world applications.

**Week 3: Binary Search on Answer - Core Pattern**
Solve all 10 problems from Phase 3. This is THE most important pattern for interviews. Learn to identify when you can binary search on the answer space. Understand the "check" function pattern.

**Week 4: 2D Search and Advanced Applications**
Solve 8 problems from Phase 4 and start Phase 5. Learn to apply binary search in 2D spaces and combine it with other techniques.

**Week 5: Review and Mixed Practice**
Complete remaining problems from Phase 5 and 6. Do mock interviews. Time yourself. Practice explaining your approach clearly. Review problems where you struggled.

### For Competitive Programming (3-4 months)

**Month 1: Strong Foundation**
Complete all CSES binary search problems. Solve AtCoder problems 1-10. Practice Codeforces 1200-1400 rated problems. Master both iterative and recursive templates. Target 40-50 problems this month.

**Month 2: Intermediate Patterns**
Complete remaining AtCoder problems. Solve Codeforces 1400-1700 rated problems. Learn binary search with prefix sums, sliding window, and greedy. Target 40-50 problems.

**Month 3: Advanced Applications**
Master parallel binary search. Learn binary search with segment trees. Practice floating point binary search. Solve 1700-1900 rated problems. Target 30-40 problems.

**Month 4: Mastery and Speed**
Combine binary search with DP and other advanced techniques. Practice on 1900+ rated problems. Participate in virtual contests. Focus on recognizing binary search opportunities quickly. Target 25-30 problems.

---

##  Common Binary Search Patterns

**1. Classic Binary Search** - Finding element in sorted array. Basic template.

**2. Finding Boundaries** - First/last occurrence, lower_bound/upper_bound. Use left/right bias.

**3. Binary Search on Answer** - Minimize maximum or maximize minimum. Define check function.

**4. Rotated Array Search** - Find pivot or search in rotated array. Compare with boundaries.

**5. 2D Binary Search** - Search in row-sorted or column-sorted matrices. Reduce dimensions.

**6. Parallel Binary Search** - Multiple queries with binary search. Optimize with offline processing.

**7. Floating Point Binary Search** - Continuous search space. Use precision-based loop.

**8. Binary Search + Greedy** - Check function uses greedy algorithm. Common in optimization.

**9. Binary Search + DP** - Optimize DP with binary search. Convex hull trick applications.

**10. Implicit Binary Search** - Search space not explicitly given. Derive from constraints.

---

##  Identifying Binary Search Problems

A problem likely uses binary search if:
- The array/list is sorted (or can be sorted)
- You're looking for a specific value or boundary
- You need to optimize something with monotonic property
- "Minimize maximum" or "Maximize minimum" appears
- Time limit suggests better than O(n²) is needed

**Keywords that often indicate binary search:**
- "Sorted array"
- "Find minimum/maximum satisfying"
- "At least/at most K"
- "Smallest/largest value such that"
- "Optimize" with monotonic constraints

**Not every sorted array problem needs binary search** - sometimes two pointers or sliding window is better.

---

##  Final Thoughts

Binary Search appears simple but mastering it requires understanding multiple patterns and handling edge cases flawlessly. The progression from basic search to binary search on answer is crucial.

**For interviews**, focus on the three main templates and practice recognizing when to apply each one. Solve 50-60 problems across all patterns and you'll be well-prepared. The key is being able to implement bug-free and explain your approach clearly.

**For competitive programming**, you need to recognize binary search opportunities in problems that don't explicitly mention it. Practice formulating check functions for novel problems. Master parallel binary search and combining binary search with other techniques.

Remember: Binary search is about reducing search space by half repeatedly. If you can define what you're searching for and the space has monotonic property, binary search is likely applicable.

The first 20 problems might feel challenging, but after 50 problems, you'll start recognizing patterns instantly. Binary search becomes one of your strongest tools.
