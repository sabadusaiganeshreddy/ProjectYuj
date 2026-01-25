---
slug: binary-search-problems
title: 20 Binary Search Problems To Revise Before Interviews
authors: []
tags: [binary-search, interview-prep, leetcode]
---

I've curated **20 binary search problems that teach you all major patterns.** These aren't random problems, they're specifically chosen to build your intuition for spotting binary search problems.

<!--truncate-->

---

## 🎯 The 20 Essential Problems

### Pattern 1: Classic Binary Search

**1. Binary Search** - [LeetCode 704](https://leetcode.com/problems/binary-search/)
- **Pattern:** Basic binary search template
- **Why:** Foundation - must be able to code this in sleep
- **Companies:** Everyone asks this as warmup

**2. Search in Rotated Sorted Array** - [LeetCode 33](https://leetcode.com/problems/search-in-rotated-sorted-array/)
- **Pattern:** Binary search with modified condition
- **Why:** Tests ability to adapt binary search logic
- **Companies:** Amazon, Microsoft, Meta, Apple, Google

**3. Find Minimum in Rotated Sorted Array** - [LeetCode 153](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
- **Pattern:** Finding pivot point
- **Why:** Variation where you're not searching for target
- **Companies:** Amazon, Microsoft, Bloomberg

---

### Pattern 2: Binary Search on Answer Space

**4. Koko Eating Bananas** - [LeetCode 875](https://leetcode.com/problems/koko-eating-bananas/)
- **Pattern:** Binary search on answer space
- **Why:** Classic example of searching for minimum feasible value
- **Companies:** Google, Meta, Amazon

**5. Minimum Number of Days to Make m Bouquets** - [LeetCode 1482](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)
- **Pattern:** Binary search on days/time
- **Why:** Teaches feasibility checking pattern
- **Companies:** Amazon, Google

**6. Capacity To Ship Packages Within D Days** - [LeetCode 1011](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
- **Pattern:** Binary search on capacity/size
- **Why:** Shows binary search on continuous resource constraints
- **Companies:** Amazon, Google, Meta

**7. Split Array Largest Sum** - [LeetCode 410](https://leetcode.com/problems/split-array-largest-sum/)
- **Pattern:** Minimize maximum value
- **Why:** Hard problem that becomes easy with binary search mindset
- **Companies:** Google, Meta, ByteDance

**8. Minimum Limit of Balls in a Bag** - [LeetCode 1760](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/)
- **Pattern:** Minimize penalty with operations
- **Why:** Non-obvious binary search application
- **Companies:** Amazon, Google

**9. Magnetic Force Between Two Balls** - [LeetCode 1552](https://leetcode.com/problems/magnetic-force-between-two-balls/)
- **Pattern:** Maximize minimum distance
- **Why:** Teaches binary search on distance/spacing
- **Companies:** Google, Amazon

---

### Pattern 3: Binary Search on Value Range

**10. Kth Smallest Element in a Sorted Matrix** - [LeetCode 378](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
- **Pattern:** Binary search on value range
- **Why:** Shows counting elements ≤ mid approach
- **Companies:** Google, Amazon, Meta

---

### Pattern 4: Binary Search with Two Pointers

**11. Find K Closest Elements** - [LeetCode 658](https://leetcode.com/problems/find-k-closest-elements/)
- **Pattern:** Binary search for starting position
- **Why:** Combination of binary search and sliding window
- **Companies:** Meta, Amazon, Google

**12. 3Sum Closest** - [LeetCode 16](https://leetcode.com/problems/3sum-closest/)
- **Pattern:** Sort + fix one element + binary search/two pointers
- **Why:** Shows when to combine patterns
- **Companies:** Amazon, Microsoft, Bloomberg

---

### Pattern 5: Finding Boundaries

**13. Find First and Last Position of Element in Sorted Array** - [LeetCode 34](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
- **Pattern:** Finding boundaries with binary search
- **Why:** Must know how to find leftmost and rightmost occurrence
- **Companies:** Amazon, Meta, Microsoft, Apple

---

### Pattern 6: 2D Binary Search

**14. Search a 2D Matrix II** - [LeetCode 240](https://leetcode.com/problems/search-a-2d-matrix-ii/)
- **Pattern:** Binary search in 2D space
- **Why:** Shows search space reduction technique
- **Companies:** Amazon, Google, Meta, Apple

---

### Pattern 7: Binary Search on Unsorted Arrays

**15. Find Peak Element** - [LeetCode 162](https://leetcode.com/problems/find-peak-element/)
- **Pattern:** Binary search without full sorting
- **Why:** Shows binary search works even in unsorted arrays with properties
- **Companies:** Meta, Google, Microsoft, Bloomberg

**16. Single Element in a Sorted Array** - [LeetCode 540](https://leetcode.com/problems/single-element-in-a-sorted-array/)
- **Pattern:** Binary search with parity checking
- **Why:** Clever application of binary search on paired elements
- **Companies:** Amazon, Google

---

### Pattern 8: Advanced Binary Search

**17. Median of Two Sorted Arrays** - [LeetCode 4](https://leetcode.com/problems/median-of-two-sorted-arrays/)
- **Pattern:** Binary search for partition point
- **Why:** One of the hardest binary search problems, ultimate test
- **Companies:** Google, Amazon, Meta, Apple, Microsoft

**18. Find the Duplicate Number** - [LeetCode 287](https://leetcode.com/problems/find-the-duplicate-number/)
- **Pattern:** Binary search on value with counting
- **Why:** Non-obvious binary search application
- **Companies:** Amazon, Microsoft, Meta

---

### Pattern 9: Mathematical Binary Search

**19. Sqrt(x)** - [LeetCode 69](https://leetcode.com/problems/sqrtx/)
- **Pattern:** Binary search on result space
- **Why:** Simple but teaches searching for mathematical answer
- **Companies:** Amazon, Microsoft, Bloomberg

**20. Valid Perfect Square** - [LeetCode 367](https://leetcode.com/problems/valid-perfect-square/)
- **Pattern:** Binary search for exact match
- **Why:** Variation of sqrt problem
- **Companies:** Amazon, LinkedIn

---

## 💡 Key Insights

### When to Use Binary Search:
1. **Sorted array** - Classic binary search
2. **Search space is monotonic** - Answer gets better/worse in one direction
3. **"Minimum/Maximum" + "feasible/possible"** - Binary search on answer
4. **Finding boundaries** - First/last occurrence

### Common Templates:

**Template 1: Finding Exact Value**
```python
left, right = 0, len(arr) - 1
while left <= right:
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        left = mid + 1
    else:
        right = mid - 1
```

**Template 2: Finding Boundary**
```python
left, right = 0, len(arr)
while left < right:
    mid = (left + right) // 2
    if condition(mid):
        right = mid
    else:
        left = mid + 1
```

**Template 3: Binary Search on Answer**
```python
left, right = min_answer, max_answer
while left < right:
    mid = (left + right) // 2
    if is_feasible(mid):
        right = mid
    else:
        left = mid + 1
```

---

## 📚 Study Plan

**Day 1-3:** Master classic binary search (Problems 1-3)
**Day 4-7:** Binary search on answer space (Problems 4-9)
**Day 8-10:** Advanced patterns (Problems 10-16)
**Day 11-14:** Hard problems and edge cases (Problems 17-20)

Remember: The key to binary search is identifying when a problem has a **monotonic property** that can be exploited!
