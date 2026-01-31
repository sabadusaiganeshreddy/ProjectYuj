---
slug: complete-string-guide
title: Complete String Problems & Resources Guide
authors: []
tags: [strings, two-pointers, sliding-window, pattern-matching, kmp, tries, interview-prep, competitive-programming]
---

Hey everyone! Strings are arguably the most frequently tested topic in technical interviews and competitive programming. I've spent years mastering string algorithms, and I want to share a complete roadmap that covers everything from basic manipulation to advanced pattern matching algorithms.

String problems aren't just about manipulating characters. They require understanding hashing, pattern matching, dynamic programming, sliding windows, two pointers, and even advanced algorithms like KMP, Z-algorithm, and suffix arrays. Master strings, and you'll have a massive advantage in any coding challenge.

<!--truncate-->

---

##  Understanding Strings

**What makes Strings challenging?** Strings combine multiple algorithmic paradigms. A single problem might require two pointers, hash maps, DP, and greedy thinking simultaneously. The variety of techniques needed makes strings both challenging and rewarding to master.

**For Tech Interviews:** You need to master core patterns: two pointers, sliding window, string hashing, palindromes, anagrams, and basic string DP. About 90-110 well-understood problems is ideal. Most interview problems are medium difficulty with focus on optimization and edge case handling.

**For Competitive Programming:** You need deep understanding of advanced algorithms: KMP, Z-algorithm, suffix arrays, Aho-Corasick, Manacher's algorithm, and combining strings with other data structures. This requires 180-220+ problems and strong pattern recognition skills.

---

##  Best Learning Resources

### Video Resources for Interview Prep

**[NeetCode - Strings](https://www.youtube.com/playlist?list=PLot-Xpze53leNZQd0iINpD-MAhMOMzWvO)** - Outstanding for learning interview string patterns. Clear explanations with Python implementations. Covers all essential techniques systematically.

**[take U forward (Striver) - Strings Series](https://www.youtube.com/playlist?list=PLgUwDviBIf0pMFMWuuvDNMAkoQFi-h0ZF)** - Extremely comprehensive coverage with detailed explanations. 35+ hours covering basics through advanced string algorithms. Excellent for deep understanding.

**[Back To Back SWE - String Problems](https://www.youtube.com/playlist?list=PLiQ766zSC5jM9OKVr8sooOuGgZkvnOCTI)** - Great breakdown of thought process and optimization. Excellent for understanding problem-solving approach.

**[Abdul Bari - String Matching Algorithms](https://www.youtube.com/watch?v=V5-7GzOfADQ)** - Best for understanding KMP, Rabin-Karp, and pattern matching theory with crystal clear explanations.

**[William Fiset - String Algorithms](https://www.youtube.com/playlist?list=PLDV1Zeh2NRsCQ_Educ7GCNs3mvzpXhHW5)** - Comprehensive coverage of advanced string algorithms with excellent visualizations.

### Video Resources for Competitive Programming

**[Errichto - String Algorithms](https://www.youtube.com/c/Errichto)** - Advanced string techniques for CP. Covers hashing, Z-algorithm, suffix structures, and contest problem walkthroughs.

**[SecondThread - String Techniques](https://www.youtube.com/c/SecondThread)** - Shows how to combine string algorithms with other techniques. Great for advanced optimization.

**[CodeNCode - Advanced Strings](https://www.youtube.com/c/CodeNCode)** - Covers suffix arrays, Aho-Corasick, and advanced pattern matching with competitive programming focus.

**[Algorithms Live! - String Algorithms](https://www.youtube.com/channel/UCBLr7ISa_YDy5qeATupf26w)** - Deep dives into advanced algorithms with mathematical rigor.

### Written Resources

**For Interviews:**
- [LeetCode String Explore Card](https://leetcode.com/explore/learn/card/array-and-string/)
- [Tech Interview Handbook - Strings](https://www.techinterviewhandbook.org/algorithms/string/)
- [GeeksforGeeks String Algorithms](https://www.geeksforgeeks.org/string-data-structure/)
- [InterviewBit - Strings](https://www.interviewbit.com/courses/programming/topics/strings/)

**For Competitive Programming:**
- [CP-Algorithms - String Processing](https://cp-algorithms.com/string/string-hashing.html)
- [Codeforces String Algorithms Catalog](https://codeforces.com/blog/entry/13861)
- [USACO Guide - Strings](https://usaco.guide/gold/string-search)
- [TopCoder String Algorithms Tutorial](https://www.topcoder.com/thrive/articles/Introduction%20to%20String%20Searching%20Algorithms)
- [E-Maxx String Algorithms](http://e-maxx.ru/algo/)

### Books Worth Reading

**Cracking the Coding Interview** - Excellent string problems with focus on interview patterns.

**Elements of Programming Interviews** - Great string problems with detailed optimization discussions.

**Competitive Programming 4** - Comprehensive coverage of string algorithms for CP.

**Introduction to Algorithms (CLRS)** - Rigorous treatment of string matching algorithms (KMP, Rabin-Karp).

**Algorithms on Strings, Trees, and Sequences** by Dan Gusfield - The bible for advanced string algorithms.

**String Processing and Information Retrieval** - Advanced topics including suffix trees and arrays.

---

##  Interview Problems (110 Total)

### Phase 1: String Basics & Manipulation (15 problems)

Master fundamental operations. Essential foundation for everything else.

1. [Valid Anagram](https://leetcode.com/problems/valid-anagram/)
2. [Reverse String](https://leetcode.com/problems/reverse-string/)
3. [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/)
4. [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)
5. [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
6. [Implement strStr()](https://leetcode.com/problems/implement-strstr/)
7. [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)
8. [Add Strings](https://leetcode.com/problems/add-strings/)
9. [Add Binary](https://leetcode.com/problems/add-binary/)
10. [Length of Last Word](https://leetcode.com/problems/length-of-last-word/)
11. [Excel Sheet Column Title](https://leetcode.com/problems/excel-sheet-column-title/)
12. [Excel Sheet Column Number](https://leetcode.com/problems/excel-sheet-column-number/)
13. [Roman to Integer](https://leetcode.com/problems/roman-to-integer/)
14. [Integer to Roman](https://leetcode.com/problems/integer-to-roman/)
15. [Count and Say](https://leetcode.com/problems/count-and-say/)

### Phase 2: Two Pointers & String Processing (15 problems)

Essential pattern for optimization. Learn to reduce O(n²) to O(n).

16. [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)
17. [Reverse Vowels of a String](https://leetcode.com/problems/reverse-vowels-of-a-string/)
18. [Is Subsequence](https://leetcode.com/problems/is-subsequence/)
19. [Long Pressed Name](https://leetcode.com/problems/long-pressed-name/)
20. [Backspace String Compare](https://leetcode.com/problems/backspace-string-compare/)
21. [Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)
22. [Remove All Adjacent Duplicates in String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/)
23. [String Compression](https://leetcode.com/problems/string-compression/)
24. [Valid Palindrome III](https://leetcode.com/problems/valid-palindrome-iii/)
25. [Compare Version Numbers](https://leetcode.com/problems/compare-version-numbers/)
26. [Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/)
27. [Reorganize String](https://leetcode.com/problems/reorganize-string/)
28. [Custom Sort String](https://leetcode.com/problems/custom-sort-string/)
29. [Minimum Window Subsequence](https://leetcode.com/problems/minimum-window-subsequence/)
30. [Longest Word in Dictionary through Deleting](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/)

### Phase 3: Sliding Window for Strings (15 problems)

THE most important pattern for substring problems. Absolutely critical.

31. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
32. [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
33. [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
34. [Permutation in String](https://leetcode.com/problems/permutation-in-string/)
35. [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
36. [Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)
37. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
38. [Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets/)
39. [Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/)
40. [Longest Substring with At Most Two Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/)
41. [Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)
42. [Get Equal Substrings Within Budget](https://leetcode.com/problems/get-equal-substrings-within-budget/)
43. [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)
44. [Frequency of the Most Frequent Element](https://leetcode.com/problems/frequency-of-the-most-frequent-element/)
45. [Longest Nice Substring](https://leetcode.com/problems/longest-nice-substring/)

### Phase 4: Hash Maps & Anagrams (15 problems)

Powerful technique for frequency counting and pattern matching.

46. [Group Anagrams](https://leetcode.com/problems/group-anagrams/)
47. [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
48. [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
49. [Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/)
50. [Word Pattern](https://leetcode.com/problems/word-pattern/)
51. [Ransom Note](https://leetcode.com/problems/ransom-note/)
52. [Find the Difference](https://leetcode.com/problems/find-the-difference/)
53. [Longest Palindrome](https://leetcode.com/problems/longest-palindrome/)
54. [Subdomain Visit Count](https://leetcode.com/problems/subdomain-visit-count/)
55. [Most Common Word](https://leetcode.com/problems/most-common-word/)
56. [Uncommon Words from Two Sentences](https://leetcode.com/problems/uncommon-words-from-two-sentences/)
57. [Unique Email Addresses](https://leetcode.com/problems/unique-email-addresses/)
58. [Verifying an Alien Dictionary](https://leetcode.com/problems/verifying-an-alien-dictionary/)
59. [Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary/)
60. [Buddy Strings](https://leetcode.com/problems/buddy-strings/)

### Phase 5: Palindromes (10 problems)

Classic pattern appearing constantly. Master all variations.

61. [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
62. [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)
63. [Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)
64. [Valid Palindrome III](https://leetcode.com/problems/valid-palindrome-iii/)
65. [Shortest Palindrome](https://leetcode.com/problems/shortest-palindrome/)
66. [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
67. [Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)
68. [Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)
69. [Construct K Palindrome Strings](https://leetcode.com/problems/construct-k-palindrome-strings/)
70. [Break a Palindrome](https://leetcode.com/problems/break-a-palindrome/)

### Phase 6: String Dynamic Programming (15 problems)

Complex DP patterns on strings. Critical for advanced problems.

71. [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
72. [Edit Distance](https://leetcode.com/problems/edit-distance/)
73. [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)
74. [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
75. [Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/)
76. [Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/)
77. [Interleaving String](https://leetcode.com/problems/interleaving-string/)
78. [Scramble String](https://leetcode.com/problems/scramble-string/)
79. [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
80. [Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)
81. [Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)
82. [Decode Ways](https://leetcode.com/problems/decode-ways/)
83. [Decode Ways II](https://leetcode.com/problems/decode-ways-ii/)
84. [Count Different Palindromic Subsequences](https://leetcode.com/problems/count-different-palindromic-subsequences/)
85. [Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/)

### Phase 7: Pattern Matching & Tries (10 problems)

Advanced pattern matching with efficient data structures.

86. [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)
87. [Add and Search Word - Data structure design](https://leetcode.com/problems/design-add-and-search-words-data-structure/)
88. [Word Search II](https://leetcode.com/problems/word-search-ii/)
89. [Replace Words](https://leetcode.com/problems/replace-words/)
90. [Prefix and Suffix Search](https://leetcode.com/problems/prefix-and-suffix-search/)
91. [Concatenated Words](https://leetcode.com/problems/concatenated-words/)
92. [Maximum XOR of Two Numbers in an Array](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/)
93. [Word Break](https://leetcode.com/problems/word-break/)
94. [Word Break II](https://leetcode.com/problems/word-break-ii/)
95. [Stream of Characters](https://leetcode.com/problems/stream-of-characters/)

### Phase 8: Advanced String Techniques (15 problems)

Combining multiple patterns and advanced optimization.

96. [Text Justification](https://leetcode.com/problems/text-justification/)
97. [Multiply Strings](https://leetcode.com/problems/multiply-strings/)
98. [Basic Calculator](https://leetcode.com/problems/basic-calculator/)
99. [Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii/)
100. [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)
101. [Simplify Path](https://leetcode.com/problems/simplify-path/)
102. [Valid Number](https://leetcode.com/problems/valid-number/)
103. [Decode String](https://leetcode.com/problems/decode-string/)
104. [Encode and Decode Strings](https://leetcode.com/problems/encode-and-decode-strings/)
105. [One Edit Distance](https://leetcode.com/problems/one-edit-distance/)
106. [Longest Absolute File Path](https://leetcode.com/problems/longest-absolute-file-path/)
107. [Remove Invalid Parentheses](https://leetcode.com/problems/remove-invalid-parentheses/)
108. [Different Ways to Add Parentheses](https://leetcode.com/problems/different-ways-to-add-parentheses/)
109. [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)
110. [Encoded String Iterator](https://leetcode.com/problems/design-compressed-string-iterator/)

---

##  Competitive Programming Problems

### AtCoder String Problems (25 problems)

1. [ABC 076 C - Dubious Document](https://atcoder.jp/contests/abc076/tasks/abc076_c)
2. [ABC 091 C - 2D Plane 2N Points](https://atcoder.jp/contests/abc091/tasks/arc092_a)
3. [ABC 104 C - All Green](https://atcoder.jp/contests/abc104/tasks/abc104_c)
4. [ABC 110 C - String Transformation](https://atcoder.jp/contests/abc110/tasks/abc110_c)
5. [ABC 137 D - Summer Vacation](https://atcoder.jp/contests/abc137/tasks/abc137_d)
6. [ABC 141 E - Who Says a Pun?](https://atcoder.jp/contests/abc141/tasks/abc141_e)
7. [ABC 152 E - Flatten](https://atcoder.jp/contests/abc152/tasks/abc152_e)
8. [ABC 158 D - String Formation](https://atcoder.jp/contests/abc158/tasks/abc158_d)
9. [ABC 171 D - Replacing](https://atcoder.jp/contests/abc171/tasks/abc171_d)
10. [ABC 177 E - Coprime](https://atcoder.jp/contests/abc177/tasks/abc177_e)
11. [ABC 191 D - Circle Lattice Points](https://atcoder.jp/contests/abc191/tasks/abc191_d)
12. [ABC 206 D - KAIBUNsyo](https://atcoder.jp/contests/abc206/tasks/abc206_d)
13. [ABC 213 D - Takahashi Tour](https://atcoder.jp/contests/abc213/tasks/abc213_d)
14. [ABC 227 D - Project Planning](https://atcoder.jp/contests/abc227/tasks/abc227_d)
15. [ABC 236 D - Dance](https://atcoder.jp/contests/abc236/tasks/abc236_d)
16. [ABC 243 E - Edge Deletion](https://atcoder.jp/contests/abc243/tasks/abc243_e)
17. [ABC 259 D - Circumferences](https://atcoder.jp/contests/abc259/tasks/abc259_d)
18. [ABC 268 E - Chinese Restaurant (Guest)](https://atcoder.jp/contests/abc268/tasks/abc268_e)
19. [ABC 272 D - Root M Leaper](https://atcoder.jp/contests/abc272/tasks/abc272_d)
20. [ABC 284 E - Count Simple Paths](https://atcoder.jp/contests/abc284/tasks/abc284_e)
21. [ARC 061 D - Snuke's Coloring](https://atcoder.jp/contests/arc061/tasks/arc061_b)
22. [ARC 081 D - Flip and Rectangles](https://atcoder.jp/contests/arc081/tasks/arc081_b)
23. [ABC 298 E - Unfair Sugoroku](https://atcoder.jp/contests/abc298/tasks/abc298_e)
24. [ABC 310 D - Peaceful Teams](https://atcoder.jp/contests/abc310/tasks/abc310_d)
25. [ABC 318 E - Sandwiches](https://atcoder.jp/contests/abc318/tasks/abc318_e)

### CSES String Problems (15 problems)

1. [Word Combinations](https://cses.fi/problemset/task/1731)
2. [String Matching](https://cses.fi/problemset/task/1753)
3. [Finding Borders](https://cses.fi/problemset/task/1732)
4. [Finding Periods](https://cses.fi/problemset/task/1733)
5. [Minimal Rotation](https://cses.fi/problemset/task/1110)
6. [Longest Palindrome](https://cses.fi/problemset/task/1111)
7. [Required Substring](https://cses.fi/problemset/task/1112)
8. [Palindrome Queries](https://cses.fi/problemset/task/2420)
9. [Finding Patterns](https://cses.fi/problemset/task/2102)
10. [Counting Patterns](https://cses.fi/problemset/task/2103)
11. [Pattern Positions](https://cses.fi/problemset/task/2104)
12. [Distinct Substrings](https://cses.fi/problemset/task/2105)
13. [Repeating Substring](https://cses.fi/problemset/task/2106)
14. [String Functions](https://cses.fi/problemset/task/2107)
15. [Substring Order I](https://cses.fi/problemset/task/2108)

### Codeforces String Problems by Rating

**Rating 800-1000 (Beginner):**

1. [Round 479 Div3 - B - Trace](https://codeforces.com/problemset/problem/977/B)
2. [Round 486 Div3 - B - Substrings Sort](https://codeforces.com/problemset/problem/988/B)
3. [Round 535 Div3 - B - Diverse Strings](https://codeforces.com/problemset/problem/1108/B)
4. [Round 661 Div3 - B - Gifts Fixing](https://codeforces.com/problemset/problem/1399/B)
5. [Round 693 Div3 - B - Fair Division](https://codeforces.com/problemset/problem/1472/B)

**Rating 1000-1200 (Easy):**

6. [Round 344 Div2 - B - Print Check](https://codeforces.com/problemset/problem/631/B)
7. [Round 363 Div2 - B - One Bomb](https://codeforces.com/problemset/problem/699/B)
8. [Round 380 Div2 - B - Spotlights](https://codeforces.com/problemset/problem/738/B)
9. [Round 486 Div3 - C - Equal Sums](https://codeforces.com/problemset/problem/988/C)
10. [Round 535 Div3 - C - Edgy Trees](https://codeforces.com/problemset/problem/1108/C)

**Rating 1200-1400 (Medium):**

11. [Round 256 Div2 - B - Suffix Structures](https://codeforces.com/problemset/problem/448/B)
12. [Round 283 Div2 - B - Bakery](https://codeforces.com/problemset/problem/496/B)
13. [Round 290 Div2 - B - Fox And Two Dots](https://codeforces.com/problemset/problem/510/B)
14. [Round 325 Div2 - B - Laurenty and Shop](https://codeforces.com/problemset/problem/586/B)
15. [Round 348 Div2 - B - Little Robber Girl's Zoo](https://codeforces.com/problemset/problem/641/B)

**Rating 1400-1600 (Advanced):**

16. [Round 243 Div2 - C - Sereja and Swaps](https://codeforces.com/problemset/problem/425/C)
17. [Round 268 Div2 - C - The Sports Festival](https://codeforces.com/problemset/problem/468/C)
18. [Round 285 Div2 - B - Misha and Changing Handles](https://codeforces.com/problemset/problem/501/B)
19. [Round 321 Div2 - B - Kefa and Company](https://codeforces.com/problemset/problem/580/B)
20. [Round 340 Div2 - C - Watering Flowers](https://codeforces.com/problemset/problem/617/C)

**Rating 1600-1800 (Expert):**

21. [Round 233 Div2 - D - Sereja and Squares](https://codeforces.com/problemset/problem/399/D)
22. [Round 256 Div2 - C - Painting Fence](https://codeforces.com/problemset/problem/448/C)
23. [Round 290 Div2 - D - Fox And Jumping](https://codeforces.com/problemset/problem/510/D)
24. [Round 325 Div2 - D - River Locks](https://codeforces.com/problemset/problem/587/D)
25. [Round 363 Div2 - D - Fix a Tree](https://codeforces.com/problemset/problem/698/D)

**Rating 1800-2000 (Candidate Master):**

26. [Round 211 Div2 - D - Sereja and Cinema](https://codeforces.com/problemset/problem/363/D)
27. [Round 243 Div2 - D - Sereja and Squares](https://codeforces.com/problemset/problem/425/D)
28. [Round 268 Div2 - D - Two Sets](https://codeforces.com/problemset/problem/468/D)
29. [Round 285 Div2 - D - Misha and Permutations Summation](https://codeforces.com/problemset/problem/501/D)
30. [Round 321 Div2 - D - Kefa and Dishes](https://codeforces.com/problemset/problem/580/D)

### Advanced CP Topics

**String Hashing:**

1. [CF - Good Substrings](https://codeforces.com/problemset/problem/271/D)
2. [CF - Prefixes and Suffixes](https://codeforces.com/problemset/problem/432/D)
3. [SPOJ - NHAY](https://www.spoj.com/problems/NHAY/)
4. [CF - Password](https://codeforces.com/problemset/problem/126/B)
5. [AtCoder - Similar String](https://atcoder.jp/contests/abc141/tasks/abc141_e)

**KMP Algorithm:**

1. [SPOJ - PATTERN FIND](https://www.spoj.com/problems/NAJPF/)
2. [CF - Anthem of Berland](https://codeforces.com/problemset/problem/808/G)
3. [CSES - Finding Borders](https://cses.fi/problemset/task/1732)
4. [CF - Password](https://codeforces.com/problemset/problem/126/B)
5. [AtCoder - Many Replacement](https://atcoder.jp/contests/abc284/tasks/abc284_f)

**Z-Algorithm:**

1. [CF - Prefixes and Suffixes](https://codeforces.com/problemset/problem/432/D)
2. [SPOJ - PERIOD](https://www.spoj.com/problems/PERIOD/)
3. [CSES - Finding Periods](https://cses.fi/problemset/task/1733)
4. [CF - Second Largest Query](https://codeforces.com/problemset/problem/1628/D2)
5. [AtCoder - String Cards](https://atcoder.jp/contests/abc284/tasks/abc284_e)

**Suffix Arrays & LCP:**

1. [SPOJ - SUBST1](https://www.spoj.com/problems/SUBST1/)
2. [CF - Cyclic String](https://codeforces.com/problemset/problem/956/D)
3. [CSES - Distinct Substrings](https://cses.fi/problemset/task/2105)
4. [SPOJ - LCS](https://www.spoj.com/problems/LCS/)
5. [CF - Forbidden Indices](https://codeforces.com/problemset/problem/873/F)

**Aho-Corasick:**

1. [CF - DNA Alignment](https://codeforces.com/problemset/problem/710/F)
2. [SPOJ - WPUZZLES](https://www.spoj.com/problems/WPUZZLES/)
3. [CF - Sonya and Matrix Beauty](https://codeforces.com/problemset/problem/1080/E)
4. [AtCoder - Many Moves](https://atcoder.jp/contests/abc268/tasks/abc268_f)
5. [CSES - Finding Patterns](https://cses.fi/problemset/task/2102)

**Manacher's Algorithm (Palindromes):**

1. [SPOJ - MSUBSTR](https://www.spoj.com/problems/MSUBSTR/)
2. [CF - Palindrome Partition](https://codeforces.com/problemset/problem/932/F)
3. [CSES - Longest Palindrome](https://cses.fi/problemset/task/1111)
4. [CF - Prefix-Suffix Palindrome](https://codeforces.com/problemset/problem/1326/D2)
5. [AtCoder - Palindromic Path](https://atcoder.jp/contests/abc251/tasks/abc251_f)

---

##  Learning Timeline

### For Interview Preparation (6-7 weeks)

**Week 1: String Fundamentals**
Solve all 15 problems from Phase 1. Master basic string operations: traversal, manipulation, conversion, validation. Understand immutability in different languages. Practice explaining your approach clearly.

**Week 2: Two Pointers & String Processing**
Complete all 15 problems from Phase 2. Learn to use two pointers for string problems. Understand when to use two pointers vs other techniques. This pattern appears constantly in interviews.

**Week 3: Sliding Window Mastery**
Solve all 15 problems from Phase 3. THE most critical pattern for substring problems. Master both fixed-size and variable-size windows. Understand the expand/shrink mechanism with frequency maps.

**Week 4: Hash Maps & Anagrams**
Complete Phase 4 (15 problems). Master frequency counting and anagram detection. Learn to use hash maps effectively for optimization. Understand the pattern of tracking character frequencies.

**Week 5: Palindromes & String DP**
Solve Phase 5 (10 problems) and start Phase 6 (15 problems). Master palindrome detection and expansion. Begin learning string DP patterns. These are classic interview topics.

**Week 6: Advanced Patterns**
Complete Phase 6 and start Phase 7. Master string DP completely. Learn Trie data structure and pattern matching. Understand when to use each technique.

**Week 7: Final Polish & Review**
Complete Phase 7 and Phase 8. Practice mixed problems. Do mock interviews focusing on string problems. Review weak areas. Practice explaining your thought process clearly.

### For Competitive Programming (5-6 months)

**Month 1: Strong Foundation**
Complete all CSES string problems 1-10. Solve AtCoder problems 1-15. Practice Codeforces 800-1200 rated problems. Master basic string manipulation and sliding window. Target 60-70 problems.

**Month 2: Hashing & Pattern Matching**
Learn polynomial string hashing deeply. Implement KMP algorithm. Solve 1200-1500 rated problems focused on pattern matching. Complete remaining CSES problems. Target 50-60 problems.

**Month 3: Advanced Algorithms**
Master Z-algorithm. Learn suffix arrays and LCP arrays. Start with Aho-Corasick for multiple pattern matching. Solve 1500-1700 rated problems. Target 40-50 problems.

**Month 4: Palindromes & Optimization**
Implement Manacher's algorithm. Master palindrome-related problems. Learn advanced hashing techniques. Solve 1600-1800 rated problems. Target 35-45 problems.

**Month 5: Advanced Structures**
Deep dive into suffix trees and suffix automata. Learn advanced string DP. Combine strings with other data structures. Solve 1700-1900 rated problems. Target 30-40 problems.

**Month 6: Mastery & Speed**
Participate in virtual contests. Focus on recognizing patterns quickly. Practice implementation speed. Solve 1900+ rated problems. Combine multiple string algorithms. Target 25-30 problems.

---

##  Final Thoughts

Strings are the most versatile topic in programming interviews and competitive programming. They combine multiple algorithmic paradigms and require both pattern recognition and implementation skills.

**For interviews**, focus on the six main patterns: two pointers, sliding window, hash maps, palindromes, string DP, and Tries. Solve 90-110 problems across all patterns and you'll be extremely well-prepared. The key is recognizing which pattern applies and implementing it cleanly.

**For competitive programming**, you need to master advanced algorithms: KMP, Z-algorithm, suffix arrays, Aho-Corasick, and Manacher's. Practice combining these with other techniques and building efficient implementations.

Remember: Strings test your ability to think about problems from multiple angles. Master the fundamentals first, then progressively tackle more complex problems. With consistent practice, you'll develop the pattern recognition skills needed to excel in any string problem.

Happy coding! 🚀
