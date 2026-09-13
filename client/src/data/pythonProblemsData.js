export const PYTHON_PROBLEMS = [
  // --- 20 EASY PROBLEMS ---
  {
    id: "py-e-1",
    title: "1. Hello Shadow Sovereign (Print Function)",
    difficulty: "Easy",
    category: "Basics",
    xp: 20,
    desc: "Print 'Awaken, Python Hunter!' to stdout using Python's built-in print() function.",
    sampleInput: "No Input",
    sampleOutput: "Awaken, Python Hunter!",
    solution: `# Basic Console Output
print("Awaken, Python Hunter!")`,
  },
  {
    id: "py-e-2",
    title: "2. Formatted String Literals (f-Strings)",
    difficulty: "Easy",
    category: "Basics",
    xp: 20,
    desc: "Display a hunter's name and rank using modern Python f-strings.",
    sampleInput: "name = 'Jinwoo', rank = 'S'",
    sampleOutput: "Hunter Jinwoo has attained S-Rank!",
    solution: `name = "Jinwoo"
rank = "S"
print(f"Hunter {name} has attained {rank}-Rank!")`,
  },
  {
    id: "py-e-3",
    title: "3. Even or Odd Filter",
    difficulty: "Easy",
    category: "Conditionals",
    xp: 20,
    desc: "Check if a given number is Even or Odd using conditional logic.",
    sampleInput: "n = 17",
    sampleOutput: "Odd",
    solution: `def check_even_odd(n):
    return "Even" if n % 2 == 0 else "Odd"

print(check_even_odd(17))`,
  },
  {
    id: "py-e-4",
    title: "4. Reverse a String using Slicing",
    difficulty: "Easy",
    category: "Strings",
    xp: 20,
    desc: "Reverse any given string in Python using the step slice [::-1].",
    sampleInput: '"ARCANUM"',
    sampleOutput: '"MUNACRA"',
    solution: `s = "ARCANUM"
reversed_s = s[::-1]
print(reversed_s)`,
  },
  {
    id: "py-e-5",
    title: "5. List Comprehension Basics",
    difficulty: "Easy",
    category: "Lists",
    xp: 25,
    desc: "Generate squares of even numbers from 1 to 10 in a single line.",
    sampleInput: "Range 1 to 10",
    sampleOutput: "[4, 16, 36, 64, 100]",
    solution: `even_squares = [x**2 for x in range(1, 11) if x % 2 == 0]
print(even_squares)`,
  },
  {
    id: "py-e-6",
    title: "6. Dictionary Key-Value Inspection",
    difficulty: "Easy",
    category: "Dictionaries",
    xp: 20,
    desc: "Iterate through player attributes dictionary using .items() unpacking.",
    sampleInput: "{'strength': 85, 'agility': 92}",
    sampleOutput: "strength: 85\\nagility: 92",
    solution: `stats = {"strength": 85, "agility": 92}
for stat, val in stats.items():
    print(f"{stat}: {val}")`,
  },
  {
    id: "py-e-7",
    title: "7. Check Palindrome String",
    difficulty: "Easy",
    category: "Strings",
    xp: 20,
    desc: "Verify if a string reads the same forwards and backwards ignoring casing.",
    sampleInput: '"Racecar"',
    sampleOutput: "True",
    solution: `def is_palindrome(text: str) -> bool:
    clean = text.lower()
    return clean == clean[::-1]

print(is_palindrome("Racecar"))`,
  },
  {
    id: "py-e-8",
    title: "8. Sum of Elements using sum()",
    difficulty: "Easy",
    category: "Built-ins",
    xp: 15,
    desc: "Find the sum of all elements in a list using the built-in sum() helper.",
    sampleInput: "[10, 20, 30, 40]",
    sampleOutput: "100",
    solution: `gold_bounties = [10, 20, 30, 40]
total = sum(gold_bounties)
print(f"Total Gold: {total}")`,
  },
  {
    id: "py-e-9",
    title: "9. Lambda Square & Map",
    difficulty: "Easy",
    category: "Functional",
    xp: 25,
    desc: "Use map() and a lambda function to double every value in a collection.",
    sampleInput: "[1, 2, 3, 4]",
    sampleOutput: "[2, 4, 6, 8]",
    solution: `nums = [1, 2, 3, 4]
doubled = list(map(lambda x: x * 2, nums))
print(doubled)`,
  },
  {
    id: "py-e-10",
    title: "10. Set Operations (Union & Intersection)",
    difficulty: "Easy",
    category: "Sets",
    xp: 20,
    desc: "Find unique common skills between two hunter skill trees using set intersection (&).",
    sampleInput: "A = {'Slash', 'Dash'}, B = {'Dash', 'Heal'}",
    sampleOutput: "{'Dash'}",
    solution: `tree_a = {"Slash", "Dash"}
tree_b = {"Dash", "Heal"}
common = tree_a & tree_b
print(common)`,
  },
  {
    id: "py-e-11",
    title: "11. Word Count in a Sentence",
    difficulty: "Easy",
    category: "Strings",
    xp: 20,
    desc: "Split a sentence into words and count how many words exist using len(s.split()).",
    sampleInput: '"Enter the shadow portal today"',
    sampleOutput: "5 words",
    solution: `sentence = "Enter the shadow portal today"
count = len(sentence.split())
print(f"{count} words")`,
  },
  {
    id: "py-e-12",
    title: "12. Tuple Packing and Unpacking",
    difficulty: "Easy",
    category: "Tuples",
    xp: 20,
    desc: "Pack 3 coordinates into a tuple and unpack them directly into x, y, z variables.",
    sampleInput: "(15, 30, 45)",
    sampleOutput: "X: 15, Y: 30, Z: 45",
    solution: `coords = (15, 30, 45)
x, y, z = coords
print(f"X: {x}, Y: {y}, Z: {z}")`,
  },
  {
    id: "py-e-13",
    title: "13. Find Largest Element using max()",
    difficulty: "Easy",
    category: "Built-ins",
    xp: 15,
    desc: "Locate the highest boss HP in a list using the max() keyword with key selector.",
    sampleInput: "[1200, 4500, 3200]",
    sampleOutput: "4500",
    solution: `hp_list = [1200, 4500, 3200]
highest = max(hp_list)
print(f"Highest HP: {highest}")`,
  },
  {
    id: "py-e-14",
    title: "14. Check Anagram with sorted()",
    difficulty: "Easy",
    category: "Strings",
    xp: 25,
    desc: "Determine if two strings are anagrams of each other using sorted().",
    sampleInput: '"silent", "listen"',
    sampleOutput: "True",
    solution: `def is_anagram(w1, w2):
    return sorted(w1.lower()) == sorted(w2.lower())

print(is_anagram("silent", "listen"))`,
  },
  {
    id: "py-e-15",
    title: "15. Enumerate Loop Tracking",
    difficulty: "Easy",
    category: "Loops",
    xp: 20,
    desc: "Print list items alongside their 1-based index using enumerate(iterable, 1).",
    sampleInput: "['Sword', 'Shield', 'Potion']",
    sampleOutput: "1. Sword\\n2. Shield\\n3. Potion",
    solution: `items = ["Sword", "Shield", "Potion"]
for idx, item in enumerate(items, 1):
    print(f"{idx}. {item}")`,
  },
  {
    id: "py-e-16",
    title: "16. Count Vowels in String",
    difficulty: "Easy",
    category: "Strings",
    xp: 20,
    desc: "Count total vowels present in an input string using sum() and generator expression.",
    sampleInput: '"Shadow Sanctuary"',
    sampleOutput: "5",
    solution: `text = "Shadow Sanctuary"
vowels = sum(1 for c in text.lower() if c in 'aeiou')
print(f"Vowels: {vowels}")`,
  },
  {
    id: "py-e-17",
    title: "17. Remove Duplicates Preserving Order",
    difficulty: "Easy",
    category: "Lists",
    xp: 25,
    desc: "Eliminate duplicate list values while maintaining original order using dict.fromkeys().",
    sampleInput: "[1, 3, 2, 1, 4, 3]",
    sampleOutput: "[1, 3, 2, 4]",
    solution: `items = [1, 3, 2, 1, 4, 3]
unique_ordered = list(dict.fromkeys(items))
print(unique_ordered)`,
  },
  {
    id: "py-e-18",
    title: "18. Simple Class with __repr__",
    difficulty: "Easy",
    category: "OOP Basics",
    xp: 25,
    desc: "Define a Quest class with title, xp and customize its string representation.",
    sampleInput: '"Defeat Goblin", 150',
    sampleOutput: "Quest(title='Defeat Goblin', xp=150)",
    solution: `class Quest:
    def __init__(self, title, xp):
        self.title = title
        self.xp = xp
    def __repr__(self):
        return f"Quest(title='{self.title}', xp={self.xp})"

q = Quest("Defeat Goblin", 150)
print(q)`,
  },
  {
    id: "py-e-19",
    title: "19. Safe Dictionary Access with .get()",
    difficulty: "Easy",
    category: "Dictionaries",
    xp: 20,
    desc: "Access a missing dictionary key with a default fallback to avoid KeyError.",
    sampleInput: "key = 'mana', default = 100",
    sampleOutput: "Mana: 100",
    solution: `profile = {"hp": 250}
mana = profile.get("mana", 100)
print(f"Mana: {mana}")`,
  },
  {
    id: "py-e-20",
    title: "20. Any and All Validation",
    difficulty: "Easy",
    category: "Built-ins",
    xp: 20,
    desc: "Check if all hunter health points are positive using all().",
    sampleInput: "[100, 85, 40]",
    sampleOutput: "All Alive: True",
    solution: `party_hp = [100, 85, 40]
all_alive = all(hp > 0 for hp in party_hp)
print(f"All Alive: {all_alive}")`,
  },

  // --- 20 MEDIUM PROBLEMS ---
  {
    id: "py-m-1",
    title: "21. Frequency Counter using collections.Counter",
    difficulty: "Medium",
    category: "Collections",
    xp: 45,
    desc: "Find the 2 most common elements in an array using collections.Counter.most_common().",
    sampleInput: "[1, 2, 2, 3, 3, 3, 4]",
    sampleOutput: "[(3, 3), (2, 2)]",
    solution: `from collections import Counter

loot = [1, 2, 2, 3, 3, 3, 4]
counts = Counter(loot)
print(counts.most_common(2))`,
  },
  {
    id: "py-m-2",
    title: "22. Grouping Anagrams (Defaultdict)",
    difficulty: "Medium",
    category: "Hashing",
    xp: 50,
    desc: "Group strings that are anagrams of each other using collections.defaultdict(list).",
    sampleInput: "['eat', 'tea', 'tan', 'ate', 'nat', 'bat']",
    sampleOutput: "[['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]",
    solution: `from collections import defaultdict

def group_anagrams(words):
    anagram_map = defaultdict(list)
    for w in words:
        anagram_map[tuple(sorted(w))].append(w)
    return list(anagram_map.values())

print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))`,
  },
  {
    id: "py-m-3",
    title: "23. Custom Timing Function Decorator",
    difficulty: "Medium",
    category: "Decorators",
    xp: 55,
    desc: "Build a @time_it decorator that measures and logs execution time using time.perf_counter.",
    sampleInput: "Function sleeping for 0.1s",
    sampleOutput: "Executed in ~0.10s",
    solution: `import time
from functools import wraps

def time_it(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        duration = time.perf_counter() - start
        print(f"{func.__name__} executed in {duration:.4f}s")
        return result
    return wrapper

@time_it
def raid():
    time.sleep(0.05)

raid()`,
  },
  {
    id: "py-m-4",
    title: "24. Infinite Sequence Generator (yield)",
    difficulty: "Medium",
    category: "Generators",
    xp: 45,
    desc: "Write a generator function that yields an infinite sequence of Fibonacci numbers.",
    sampleInput: "First 7 numbers",
    sampleOutput: "0, 1, 1, 2, 3, 5, 8",
    solution: `def fib_gen():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

gen = fib_gen()
seq = [next(gen) for _ in range(7)]
print(seq)`,
  },
  {
    id: "py-m-5",
    title: "25. Two Sum with Hash Map (O(N))",
    difficulty: "Medium",
    category: "Arrays & Dictionaries",
    xp: 45,
    desc: "Find indices of two numbers that equal target sum in a single O(N) traversal.",
    sampleInput: "nums = [2, 7, 11, 15], target = 9",
    sampleOutput: "[0, 1]",
    solution: `def two_sum(nums, target):
    seen = {}
    for i, n in enumerate(nums):
        diff = target - n
        if diff in seen:
            return [seen[diff], i]
        seen[n] = i
    return []

print(two_sum([2, 7, 11, 15], 9))`,
  },
  {
    id: "py-m-6",
    title: "26. Custom Context Manager (__enter__ & __exit__)",
    difficulty: "Medium",
    category: "Context Managers",
    xp: 50,
    desc: "Create a DungeonSession context manager that auto-saves progress on exit.",
    sampleInput: "with DungeonSession('C-Rank'):",
    sampleOutput: "Entered C-Rank -> Raid in progress -> Exited & Saved",
    solution: `class DungeonSession:
    def __init__(self, rank):
        self.rank = rank
    def __enter__(self):
        print(f"Entered {self.rank} dungeon")
        return self
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Dungeon cleared & progress saved")

with DungeonSession("C-Rank"):
    print("Battling monsters...")`,
  },
  {
    id: "py-m-7",
    title: "27. Merge Intervals",
    difficulty: "Medium",
    category: "Intervals",
    xp: 50,
    desc: "Given an array of intervals, merge all overlapping intervals into one continuous list.",
    sampleInput: "[[1,3],[2,6],[8,10],[15,18]]",
    sampleOutput: "[[1,6],[8,10],[15,18]]",
    solution: `def merge_intervals(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    for interval in intervals:
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            merged[-1][1] = max(merged[-1][1], interval[1])
    return merged

print(merge_intervals([[1,3],[2,6],[8,10],[15,18]]))`,
  },
  {
    id: "py-m-8",
    title: "28. Binary Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Binary Search",
    xp: 55,
    desc: "Search for a target value in a rotated sorted array in O(log N) runtime.",
    sampleInput: "nums = [4,5,6,7,0,1,2], target = 0",
    sampleOutput: "Index: 4",
    solution: `def search_rotated(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target:
            return mid
        if nums[l] <= nums[mid]:
            if nums[l] <= target < nums[mid]:
                r = mid - 1
            else:
                l = mid + 1
        else:
            if nums[mid] < target <= nums[r]:
                l = mid + 1
            else:
                r = mid - 1
    return -1

print(search_rotated([4,5,6,7,0,1,2], 0))`,
  },
  {
    id: "py-m-9",
    title: "29. Min-Heap via heapq",
    difficulty: "Medium",
    category: "Heap",
    xp: 45,
    desc: "Maintain a running stream of elements and find the Kth largest element using heapq.",
    sampleInput: "nums = [3,2,1,5,6,4], k = 2",
    sampleOutput: "5",
    solution: `import heapq

def find_kth_largest(nums, k):
    return heapq.nlargest(k, nums)[-1]

print(find_kth_largest([3,2,1,5,6,4], 2))`,
  },
  {
    id: "py-m-10",
    title: "30. Top-Down Memoization (@lru_cache)",
    difficulty: "Medium",
    category: "Dynamic Programming",
    xp: 50,
    desc: "Optimize recursive Fibonacci calculation to O(N) using functools.lru_cache.",
    sampleInput: "fib(50)",
    sampleOutput: "12586269025 in milliseconds",
    solution: `from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print(fib(50))`,
  },
  {
    id: "py-m-11",
    title: "31. Linked List Cycle Detection (Floyd's Tortoise & Hare)",
    difficulty: "Medium",
    category: "Linked Lists",
    xp: 50,
    desc: "Detect whether a linked list contains a cycle using two pointer runners.",
    sampleInput: "1 -> 2 -> 3 -> 2 (Cycle)",
    sampleOutput: "Cycle Detected: True",
    solution: `class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

def has_cycle(head):
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

n1, n2, n3 = Node(1), Node(2), Node(3)
n1.next = n2; n2.next = n3; n3.next = n2
print(has_cycle(n1))`,
  },
  {
    id: "py-m-12",
    title: "32. Longest Palindromic Substring",
    difficulty: "Medium",
    category: "Strings & DP",
    xp: 55,
    desc: "Find the longest substring within S that is a palindrome using expand-around-center.",
    sampleInput: '"babad"',
    sampleOutput: '"bab"',
    solution: `def longest_palindrome(s):
    res = ""
    for i in range(len(s)):
        # Odd length
        l, r = i, i
        while l >= 0 and r < len(s) and s[l] == s[r]:
            if (r - l + 1) > len(res): res = s[l:r+1]
            l -= 1; r += 1
        # Even length
        l, r = i, i + 1
        while l >= 0 and r < len(s) and s[l] == s[r]:
            if (r - l + 1) > len(res): res = s[l:r+1]
            l -= 1; r += 1
    return res

print(longest_palindrome("babad"))`,
  },
  {
    id: "py-m-13",
    title: "33. Deep vs Shallow Copy (copy module)",
    difficulty: "Medium",
    category: "Memory",
    xp: 40,
    desc: "Demonstrate why modifying nested list elements in shallow copies impacts original objects.",
    sampleInput: "Nested list [[1, 2], [3, 4]]",
    sampleOutput: "Independent deepcopy verified",
    solution: `import copy

orig = [[1, 2], [3, 4]]
deep = copy.deepcopy(orig)
deep[0][0] = 999
print(f"Orig: {orig[0][0]} | DeepCopy: {deep[0][0]}")`,
  },
  {
    id: "py-m-14",
    title: "34. Dataclasses for Clean Entity Modeling",
    difficulty: "Medium",
    category: "Modern Python",
    xp: 45,
    desc: "Use @dataclass to define an immutable, comparable HunterProfile entity.",
    sampleInput: "HunterProfile('Sung', 100, 15000)",
    sampleOutput: "Auto-generated __init__, __repr__, and __eq__",
    solution: `from dataclasses import dataclass

@dataclass(frozen=True)
class HunterProfile:
    name: str
    level: int
    gold: int

h = HunterProfile("Sung", 100, 15000)
print(h)`,
  },
  {
    id: "py-m-15",
    title: "35. Custom Iterator Protocol (__iter__ & __next__)",
    difficulty: "Medium",
    category: "Iterators",
    xp: 50,
    desc: "Build an iterator class that counts down from N to 1 before raising StopIteration.",
    sampleInput: "Countdown(3)",
    sampleOutput: "3, 2, 1, Done!",
    solution: `class Countdown:
    def __init__(self, start):
        self.curr = start
    def __iter__(self):
        return self
    def __next__(self):
        if self.curr <= 0:
            raise StopIteration
        val = self.curr
        self.curr -= 1
        return val

print(list(Countdown(3)))`,
  },
  {
    id: "py-m-16",
    title: "36. Subarray Sum Equals K (Prefix Hash Map)",
    difficulty: "Medium",
    category: "Prefix Sum",
    xp: 55,
    desc: "Calculate total continuous subarrays whose sum equals K using running prefix frequencies.",
    sampleInput: "nums = [1, 2, 3], k = 3",
    sampleOutput: "2 ([1,2] and [3])",
    solution: `def subarray_sum(nums, k):
    count, curr_sum = 0, 0
    prefix_counts = {0: 1}
    for n in nums:
        curr_sum += n
        count += prefix_counts.get(curr_sum - k, 0)
        prefix_counts[curr_sum] = prefix_counts.get(curr_sum, 0) + 1
    return count

print(subarray_sum([1, 2, 3], 3))`,
  },
  {
    id: "py-m-17",
    title: "37. Python Pathlib for Robust File Operations",
    difficulty: "Medium",
    category: "File I/O",
    xp: 45,
    desc: "Use modern pathlib.Path to read, write, and safely inspect file metadata.",
    sampleInput: '"quest_log.txt"',
    sampleOutput: "File written and read via Path.read_text()",
    solution: `from pathlib import Path

path = Path("quest_log.txt")
path.write_text("Quest: Inscribe Python Relic Completed")
content = path.read_text()
print(content)
if path.exists(): path.unlink()`,
  },
  {
    id: "py-m-18",
    title: "38. Number of Islands (2D Grid DFS)",
    difficulty: "Medium",
    category: "Graph & Matrix",
    xp: 55,
    desc: "Count distinct landmass islands ('1') surrounded by water ('0') using DFS grid traversal.",
    sampleInput: "grid = [['1','1','0'],['1','0','0'],['0','0','1']]",
    sampleOutput: "2 Islands",
    solution: `def num_islands(grid):
    if not grid: return 0
    rows, cols = len(grid), len(grid[0])
    count = 0

    def dfs(r, c):
        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] != '1':
            return
        grid[r][c] = '0'
        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                dfs(r, c)
                count += 1
    return count

g = [['1','1','0'],['1','0','0'],['0','0','1']]
print(f"Islands: {num_islands(g)}")`,
  },
  {
    id: "py-m-19",
    title: "39. Asynchronous Fetch with asyncio",
    difficulty: "Medium",
    category: "AsyncIO",
    xp: 60,
    desc: "Simulate non-blocking parallel dungeon raids using async def and asyncio.gather().",
    sampleInput: "3 parallel async tasks",
    sampleOutput: "All 3 raids completed in parallel",
    solution: `import asyncio

async def clear_gate(gate_id, delay):
    await asyncio.sleep(delay)
    return f"Gate {gate_id} cleared"

async def main():
    results = await asyncio.gather(
        clear_gate(1, 0.05),
        clear_gate(2, 0.05)
    )
    print(results)

asyncio.run(main())`,
  },
  {
    id: "py-m-20",
    title: "40. Metaclass Validator Basics",
    difficulty: "Medium",
    category: "Advanced OOP",
    xp: 60,
    desc: "Enforce required class attributes across all hunter subclasses using a custom metaclass.",
    sampleInput: "Class lacking required 'rank' attr",
    sampleOutput: "TypeError caught during class creation",
    solution: `class HunterMeta(type):
    def __new__(cls, name, bases, dct):
        if "rank" not in dct and name != "BaseHunter":
            raise TypeError(f"Class {name} must define a 'rank' attribute!")
        return super().__new__(cls, name, bases, dct)

class BaseHunter(metaclass=HunterMeta): pass
class Monarch(BaseHunter): rank = "Shadow"

print(f"Monarch initialized with rank: {Monarch.rank}")`,
  },

  // --- 10 HARD PROBLEMS ---
  {
    id: "py-h-1",
    title: "41. Trapping Rain Water (Two Pointers O(1) Space)",
    difficulty: "Hard",
    category: "Two Pointers",
    xp: 90,
    desc: "Calculate units of trapped rainwater between bars using optimal two pointers in O(N).",
    sampleInput: "[0,1,0,2,1,0,1,3,2,1,2,1]",
    sampleOutput: "6 units",
    solution: `def trap(height):
    l, r = 0, len(height) - 1
    l_max, r_max = 0, 0
    water = 0
    while l < r:
        if height[l] < height[r]:
            if height[l] >= l_max: l_max = height[l]
            else: water += l_max - height[l]
            l += 1
        else:
            if height[r] >= r_max: r_max = height[r]
            else: water += r_max - height[r]
            r -= 1
    return water

print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))`,
  },
  {
    id: "py-h-2",
    title: "42. LRU Cache with collections.OrderedDict",
    difficulty: "Hard",
    category: "System Design",
    xp: 95,
    desc: "Build an O(1) Least Recently Used cache using OrderedDict with get() and put() eviction.",
    sampleInput: "Capacity = 2, put(1,1), put(2,2), get(1), put(3,3)",
    sampleOutput: "Key 2 evicted; Key 1 and 3 present",
    solution: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.cache: return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)

lru = LRUCache(2)
lru.put(1, 1); lru.put(2, 2)
print(lru.get(1))
lru.put(3, 3)
print(lru.get(2)) # Returns -1 (evicted)`,
  },
  {
    id: "py-h-3",
    title: "43. Word Ladder (Shortest Transformation - BFS)",
    difficulty: "Hard",
    category: "Graphs",
    xp: 95,
    desc: "Find length of shortest transformation path from beginWord to endWord changing 1 character.",
    sampleInput:
      "begin = 'hit', end = 'cog', wordList = ['hot','dot','dog','lot','log','cog']",
    sampleOutput: "5",
    solution: `from collections import deque

def ladder_length(beginWord, endWord, wordList):
    word_set = set(wordList)
    if endWord not in word_set: return 0
    q = deque([(beginWord, 1)])

    while q:
        word, dist = q.popleft()
        if word == endWord: return dist
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                nxt = word[:i] + c + word[i+1:]
                if nxt in word_set:
                    word_set.remove(nxt)
                    q.append((nxt, dist + 1))
    return 0

words = ["hot","dot","dog","lot","log","cog"]
print(ladder_length("hit", "cog", words))`,
  },
  {
    id: "py-h-4",
    title: "44. N-Queens Solver (Backtracking)",
    difficulty: "Hard",
    category: "Backtracking",
    xp: 100,
    desc: "Find all distinct chessboard layouts of N non-attacking queens using backtracking.",
    sampleInput: "N = 4",
    sampleOutput: "2 Valid Configurations",
    solution: `def solve_n_queens(n):
    cols, pos_diag, neg_diag = set(), set(), set()
    res = []
    board = [["."] * n for _ in range(n)]

    def backtrack(r):
        if r == n:
            res.append(["".join(row) for row in board])
            return
        for c in range(n):
            if c in cols or (r + c) in pos_diag or (r - c) in neg_diag:
                continue
            cols.add(c); pos_diag.add(r + c); neg_diag.add(r - c)
            board[r][c] = "Q"
            backtrack(r + 1)
            cols.remove(c); pos_diag.remove(r + c); neg_diag.remove(r - c)
            board[r][c] = "."

    backtrack(0)
    return res

solutions = solve_n_queens(4)
print(f"Total Solutions: {len(solutions)}")`,
  },
  {
    id: "py-h-5",
    title: "45. Serialize and Deserialize Binary Tree",
    difficulty: "Hard",
    category: "Trees & Serialization",
    xp: 100,
    desc: "Convert a binary tree to a compact comma-separated string and rebuild it back to tree nodes.",
    sampleInput: "TreeNode(1, left=2, right=3)",
    sampleOutput: "Serialized: '1,2,None,None,3,None,None'",
    solution: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

class Codec:
    def serialize(self, root):
        res = []
        def dfs(node):
            if not node:
                res.append("N"); return
            res.append(str(node.val))
            dfs(node.left); dfs(node.right)
        dfs(root)
        return ",".join(res)

    def deserialize(self, data):
        vals = iter(data.split(","))
        def dfs():
            val = next(vals)
            if val == "N": return None
            node = TreeNode(int(val))
            node.left = dfs(); node.right = dfs()
            return node
        return dfs()

c = Codec()
root = TreeNode(1, TreeNode(2), TreeNode(3))
data = c.serialize(root)
print(f"Serialized: {data}")`,
  },
  {
    id: "py-h-6",
    title: "46. Longest Increasing Subsequence (O(N log N))",
    difficulty: "Hard",
    category: "Binary Search & DP",
    xp: 95,
    desc: "Determine length of longest increasing subsequence using bisect binary search.",
    sampleInput: "[10, 9, 2, 5, 3, 7, 101, 18]",
    sampleOutput: "4 ([2, 3, 7, 101])",
    solution: `import bisect

def length_of_lis(nums):
    tails = []
    for x in nums:
        idx = bisect.bisect_left(tails, x)
        if idx == len(tails):
            tails.append(x)
        else:
            tails[idx] = x
    return len(tails)

print(length_of_lis([10, 9, 2, 5, 3, 7, 101, 18]))`,
  },
  {
    id: "py-h-7",
    title: "47. Custom Thread-Safe Singleton Pattern",
    difficulty: "Hard",
    category: "Design Patterns",
    xp: 95,
    desc: "Implement a thread-safe Singleton using double-checked locking with threading.Lock().",
    sampleInput: "Multiple concurrent thread instantiation calls",
    sampleOutput: "Identical instance memory address verified",
    solution: `import threading

class SanctuaryDatabase:
    _instance = None
    _lock = threading.Lock()

    def __new__(cls):
        if not cls._instance:
            with cls._lock:
                if not cls._instance:
                    cls._instance = super().__new__(cls)
                    cls._instance.initialized = True
        return cls._instance

db1 = SanctuaryDatabase()
db2 = SanctuaryDatabase()
print(f"Same Instance: {db1 is db2}")`,
  },
  {
    id: "py-h-8",
    title: "48. Edit Distance (Levenshtein Distance - DP)",
    difficulty: "Hard",
    category: "Dynamic Programming",
    xp: 95,
    desc: "Calculate minimum insertions, deletions, or substitutions to transform word1 to word2.",
    sampleInput: "word1 = 'horse', word2 = 'ros'",
    sampleOutput: "3",
    solution: `def min_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1): dp[i][0] = i
    for j in range(n + 1): dp[0][j] = j

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    return dp[m][n]

print(min_distance("horse", "ros"))`,
  },
  {
    id: "py-h-9",
    title: "49. Custom Memory Profiler with sys.settrace",
    difficulty: "Hard",
    category: "Internals & Metaprogramming",
    xp: 100,
    desc: "Inspect call frames and monitor local variable creation using Python's tracing hooks.",
    sampleInput: "Traced function execution",
    sampleOutput: "Function calls and returns monitored in real-time",
    solution: `import sys

def audit_tracer(frame, event, arg):
    if event == 'call':
        print(f"Executing: {frame.f_code.co_name}")
    return audit_tracer

def compute():
    return sum(x for x in range(5))

sys.settrace(audit_tracer)
compute()
sys.settrace(None)`,
  },
  {
    id: "py-h-10",
    title: "50. Coroutine Pipeline Generator (Send & Yield)",
    difficulty: "Hard",
    category: "Advanced Concurrency",
    xp: 100,
    desc: "Build a bidirectional data-streaming pipeline using coroutine yield expressions and .send().",
    sampleInput: "Pipeline filtering numbers >= 50",
    sampleOutput: "Streamed values filtered in real-time",
    solution: `def filter_threshold(limit, target):
    print(f"Filter pipeline active (limit: {limit})")
    while True:
        val = yield
        if val >= limit:
            target.send(val)

def printer():
    while True:
        item = yield
        print(f"Passed Filter: {item}")

p = printer(); next(p)
f = filter_threshold(50, p); next(f)
f.send(20)
f.send(85)`,
  },
];
