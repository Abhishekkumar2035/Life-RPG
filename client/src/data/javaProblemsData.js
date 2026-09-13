export const JAVA_PROBLEMS = [
  // --- 20 EASY PROBLEMS ---
  {
    id: "java-e-1",
    title: "1. Hello Grandmaster (Main Entry)",
    difficulty: "Easy",
    category: "Basics",
    xp: 20,
    desc: "Print 'Awaken, Java Hunter!' to standard console output using System.out.println.",
    sampleInput: "No Input",
    sampleOutput: "Awaken, Java Hunter!",
    solution: `public class Main {
    public static void main(String[] args) {
        System.out.println("Awaken, Java Hunter!");
    }
}`,
  },
  {
    id: "java-e-2",
    title: "2. Scanner Console Input",
    difficulty: "Easy",
    category: "I/O",
    xp: 20,
    desc: "Read two integers using java.util.Scanner and print their total sum.",
    sampleInput: "15 25",
    sampleOutput: "Sum: 40",
    solution: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        System.out.println("Sum: " + (a + b));
        sc.close();
    }
}`,
  },
  {
    id: "java-e-3",
    title: "3. Even or Odd Checker",
    difficulty: "Easy",
    category: "Conditionals",
    xp: 20,
    desc: "Determine if an integer is even or odd using ternary operator.",
    sampleInput: "42",
    sampleOutput: "Even",
    solution: `public class Main {
    public static void main(String[] args) {
        int n = 42;
        String res = (n % 2 == 0) ? "Even" : "Odd";
        System.out.println(res);
    }
}`,
  },
  {
    id: "java-e-4",
    title: "4. String Reversal with StringBuilder",
    difficulty: "Easy",
    category: "Strings",
    xp: 20,
    desc: "Reverse a string efficiently using Java's built-in StringBuilder.reverse().",
    sampleInput: '"EXCALIBUR"',
    sampleOutput: '"RUBILACXE"',
    solution: `public class Main {
    public static void main(String[] args) {
        String str = "EXCALIBUR";
        String rev = new StringBuilder(str).reverse().toString();
        System.out.println(rev);
    }
}`,
  },
  {
    id: "java-e-5",
    title: "5. ArrayList Basics & For-Each Loop",
    difficulty: "Easy",
    category: "Collections",
    xp: 25,
    desc: "Create an ArrayList of player weapons and print them via enhanced for-loop.",
    sampleInput: "No Input",
    sampleOutput: "Dagger\\nBow\\nStaff",
    solution: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> weapons = new ArrayList<>();
        weapons.add("Dagger");
        weapons.add("Bow");
        weapons.add("Staff");

        for(String w : weapons) {
            System.out.println(w);
        }
    }
}`,
  },
  {
    id: "java-e-6",
    title: "6. Static vs Instance Methods",
    difficulty: "Easy",
    category: "OOP Basics",
    xp: 25,
    desc: "Demonstrate calling a static utility method without creating a class instance.",
    sampleInput: "calculateXp(5, 100)",
    sampleOutput: "Total: 500 XP",
    solution: `public class Main {
    public static int calculateXp(int quests, int xpPerQuest) {
        return quests * xpPerQuest;
    }

    public static void main(String[] args) {
        System.out.println("Total: " + calculateXp(5, 100) + " XP");
    }
}`,
  },
  {
    id: "java-e-7",
    title: "7. Sorting with Collections.sort()",
    difficulty: "Easy",
    category: "Collections",
    xp: 20,
    desc: "Sort a list of player levels in natural ascending order.",
    sampleInput: "[85, 12, 45, 99]",
    sampleOutput: "[12, 45, 85, 99]",
    solution: `import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> levels = Arrays.asList(85, 12, 45, 99);
        Collections.sort(levels);
        System.out.println(levels);
    }
}`,
  },
  {
    id: "java-e-8",
    title: "8. Check Palindrome String",
    difficulty: "Easy",
    category: "Strings",
    xp: 20,
    desc: "Check if string equals its reversed counterpart using .equalsIgnoreCase().",
    sampleInput: '"Radar"',
    sampleOutput: "Palindrome: true",
    solution: `public class Main {
    public static void main(String[] args) {
        String s = "Radar";
        String rev = new StringBuilder(s).reverse().toString();
        System.out.println("Palindrome: " + s.equalsIgnoreCase(rev));
    }
}`,
  },
  {
    id: "java-e-9",
    title: "9. Array Min & Max Calculation",
    difficulty: "Easy",
    category: "Arrays",
    xp: 20,
    desc: "Iterate over an integer array to find minimum and maximum values.",
    sampleInput: "[14, 5, 89, 2]",
    sampleOutput: "Min: 2, Max: 89",
    solution: `public class Main {
    public static void main(String[] args) {
        int[] arr = {14, 5, 89, 2};
        int min = arr[0], max = arr[0];
        for(int x : arr) {
            if(x < min) min = x;
            if(x > max) max = x;
        }
        System.out.println("Min: " + min + ", Max: " + max);
    }
}`,
  },
  {
    id: "java-e-10",
    title: "10. HashSet for Removing Duplicates",
    difficulty: "Easy",
    category: "Collections",
    xp: 20,
    desc: "Eliminate duplicate elements from an array by inserting into a HashSet.",
    sampleInput: "[1, 2, 2, 3, 4, 4]",
    sampleOutput: "[1, 2, 3, 4]",
    solution: `import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 4, 4};
        HashSet<Integer> set = new HashSet<>();
        for(int x : arr) set.add(x);
        System.out.println(set);
    }
}`,
  },
  {
    id: "java-e-11",
    title: "11. Counting Characters in String",
    difficulty: "Easy",
    category: "Strings",
    xp: 20,
    desc: "Count occurrences of character 'a' in a string using toCharArray().",
    sampleInput: '"Sanctuary Arena"',
    sampleOutput: "Count: 4",
    solution: `public class Main {
    public static void main(String[] args) {
        String str = "Sanctuary Arena".toLowerCase();
        int count = 0;
        for(char c : str.toCharArray()) {
            if(c == 'a') count++;
        }
        System.out.println("Count: " + count);
    }
}`,
  },
  {
    id: "java-e-12",
    title: "12. Encapsulation (Getters & Setters)",
    difficulty: "Easy",
    category: "OOP Basics",
    xp: 25,
    desc: "Protect player health field with private visibility and setter validation.",
    sampleInput: "setHp(-50)",
    sampleOutput: "HP clamped to 0",
    solution: `class Hunter {
    private int hp;
    public void setHp(int hp) {
        this.hp = Math.max(0, hp);
    }
    public int getHp() { return this.hp; }
}

public class Main {
    public static void main(String[] args) {
        Hunter h = new Hunter();
        h.setHp(-50);
        System.out.println("HP: " + h.getHp());
    }
}`,
  },
  {
    id: "java-e-13",
    title: "13. Simple Exception Handling (try-catch)",
    difficulty: "Easy",
    category: "Error Handling",
    xp: 20,
    desc: "Handle ArithmeticException gracefully when dividing by zero.",
    sampleInput: "10 / 0",
    sampleOutput: "Caught: / by zero",
    solution: `public class Main {
    public static void main(String[] args) {
        try {
            int res = 10 / 0;
        } catch(ArithmeticException e) {
            System.out.println("Caught: " + e.getMessage());
        }
    }
}`,
  },
  {
    id: "java-e-14",
    title: "14. Factorial using Recursion",
    difficulty: "Easy",
    category: "Recursion",
    xp: 25,
    desc: "Compute N! recursively with a base case check for 0 and 1.",
    sampleInput: "N = 5",
    sampleOutput: "120",
    solution: `public class Main {
    public static long fact(int n) {
        return (n <= 1) ? 1 : n * fact(n - 1);
    }
    public static void main(String[] args) {
        System.out.println(fact(5));
    }
}`,
  },
  {
    id: "java-e-15",
    title: "15. Find Second Largest Number in Array",
    difficulty: "Easy",
    category: "Arrays",
    xp: 25,
    desc: "Scan array in a single loop to find second highest value without sorting.",
    sampleInput: "[12, 35, 1, 10, 34, 1]",
    sampleOutput: "Second: 34",
    solution: `public class Main {
    public static void main(String[] args) {
        int[] a = {12, 35, 1, 10, 34, 1};
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for(int x : a) {
            if(x > first) {
                second = first;
                first = x;
            } else if(x > second && x != first) {
                second = x;
            }
        }
        System.out.println("Second: " + second);
    }
}`,
  },
  {
    id: "java-e-16",
    title: "16. HashMap Put and Get",
    difficulty: "Easy",
    category: "Collections",
    xp: 25,
    desc: "Store hunter player titles and gold values in a HashMap.",
    sampleInput: "hunterMap.get('Shadow')",
    sampleOutput: "Gold: 5000",
    solution: `import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> vaults = new HashMap<>();
        vaults.put("Shadow", 5000);
        vaults.put("Vanguard", 3200);
        System.out.println("Gold: " + vaults.get("Shadow"));
    }
}`,
  },
  {
    id: "java-e-17",
    title: "17. Enum Constants Definition",
    difficulty: "Easy",
    category: "Language",
    xp: 20,
    desc: "Define HunterRank enum with E, D, C, B, A, S tiers and loop values.",
    sampleInput: "HunterRank.values()",
    sampleOutput: "E D C B A S",
    solution: `enum HunterRank { E, D, C, B, A, S }

public class Main {
    public static void main(String[] args) {
        for(HunterRank r : HunterRank.values()) {
            System.out.print(r + " ");
        }
    }
}`,
  },
  {
    id: "java-e-18",
    title: "18. String Immutability Demo",
    difficulty: "Easy",
    category: "Strings",
    xp: 20,
    desc: "Show that string concatenation creates a new string object in heap/pool.",
    sampleInput: "s1 = 'Rank', s1.concat(' S')",
    sampleOutput: "Original: Rank | New: Rank S",
    solution: `public class Main {
    public static void main(String[] args) {
        String s = "Rank";
        String s2 = s.concat(" S");
        System.out.println("Original: " + s + " | New: " + s2);
    }
}`,
  },
  {
    id: "java-e-19",
    title: "19. Interface Implementation",
    difficulty: "Easy",
    category: "OOP Basics",
    xp: 25,
    desc: "Define a Skill interface with cast() and implement in ShadowStep class.",
    sampleInput: "s.cast()",
    sampleOutput: "Casting: Shadow Step!",
    solution: `interface Skill {
    void cast();
}

class ShadowStep implements Skill {
    public void cast() {
        System.out.println("Casting: Shadow Step!");
    }
}

public class Main {
    public static void main(String[] args) {
        Skill s = new ShadowStep();
        s.cast();
    }
}`,
  },
  {
    id: "java-e-20",
    title: "20. Math Utility Functions",
    difficulty: "Easy",
    category: "Built-ins",
    xp: 15,
    desc: "Calculate hypotenuse and power using Math.sqrt and Math.pow.",
    sampleInput: "base = 3, height = 4",
    sampleOutput: "Hypotenuse: 5.0",
    solution: `public class Main {
    public static void main(String[] args) {
        double base = 3, height = 4;
        double hyp = Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
        System.out.println("Hypotenuse: " + hyp);
    }
}`,
  },

  // --- 20 MEDIUM PROBLEMS ---
  {
    id: "java-m-1",
    title: "21. Streams API Filter & Map",
    difficulty: "Medium",
    category: "Java 8 Streams",
    xp: 50,
    desc: "Filter even numbers and collect their squares into a List using Streams.",
    sampleInput: "[1, 2, 3, 4, 5, 6]",
    sampleOutput: "[4, 16, 36]",
    solution: `import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6);
        List<Integer> squares = list.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * n)
            .collect(Collectors.toList());
        System.out.println(squares);
    }
}`,
  },
  {
    id: "java-m-2",
    title: "22. Two Sum using HashMap (O(N))",
    difficulty: "Medium",
    category: "Arrays & Maps",
    xp: 45,
    desc: "Find indices of two numbers that add to target using a HashMap lookup.",
    sampleInput: "nums = [2, 7, 11, 15], target = 9",
    sampleOutput: "[0, 1]",
    solution: `import java.util.HashMap;

public class Main {
    public static int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++) {
            int diff = target - nums[i];
            if(map.containsKey(diff)) {
                return new int[]{map.get(diff), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        int[] res = twoSum(new int[]{2, 7, 11, 15}, 9);
        System.out.println("[" + res[0] + ", " + res[1] + "]");
    }
}`,
  },
  {
    id: "java-m-3",
    title: "23. Custom Comparator Sorting",
    difficulty: "Medium",
    category: "Collections",
    xp: 45,
    desc: "Sort Hunter objects primarily by level descending, then by name.",
    sampleInput: "[('Sung', 100), ('Cha', 90), ('Baek', 90)]",
    sampleOutput: "Sung(100), Baek(90), Cha(90)",
    solution: `import java.util.*;

class Hunter {
    String name; int level;
    Hunter(String n, int l) { name = n; level = l; }
}

public class Main {
    public static void main(String[] args) {
        List<Hunter> party = Arrays.asList(
            new Hunter("Sung", 100), new Hunter("Cha", 90), new Hunter("Baek", 90)
        );
        party.sort((a, b) -> (a.level != b.level) ? b.level - a.level : a.name.compareTo(b.name));
        for(Hunter h : party) System.out.print(h.name + "(" + h.level + ") ");
    }
}`,
  },
  {
    id: "java-m-4",
    title: "24. Thread Creation with Runnable & Lambda",
    difficulty: "Medium",
    category: "Multithreading",
    xp: 50,
    desc: "Spawn worker background threads using Runnable lambdas and thread.join().",
    sampleInput: "Worker Task Run",
    sampleOutput: "Thread Active -> Task Finished",
    solution: `public class Main {
    public static void main(String[] args) throws InterruptedException {
        Thread t = new Thread(() -> {
            System.out.println("Background worker active: " + Thread.currentThread().getName());
        });
        t.start();
        t.join();
        System.out.println("Completed!");
    }
}`,
  },
  {
    id: "java-m-5",
    title: "25. PriorityQueue (Min-Heap & Max-Heap)",
    difficulty: "Medium",
    category: "Collections",
    xp: 50,
    desc: "Find top 2 highest damage values using Collections.reverseOrder PriorityQueue.",
    sampleInput: "[120, 550, 90, 800, 300]",
    sampleOutput: "800, 550",
    solution: `import java.util.Collections;
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        for(int x : new int[]{120, 550, 90, 800, 300}) pq.offer(x);
        System.out.println(pq.poll() + ", " + pq.poll());
    }
}`,
  },
  {
    id: "java-m-6",
    title: "26. Valid Parentheses with ArrayDeque",
    difficulty: "Medium",
    category: "Data Structures",
    xp: 45,
    desc: "Verify bracket matching balance using ArrayDeque as a high-speed stack.",
    sampleInput: '"{[()]}"',
    sampleOutput: "Valid: true",
    solution: `import java.util.ArrayDeque;
import java.util.Deque;

public class Main {
    public static boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        for(char c : s.toCharArray()) {
            if(c == '(' || c == '{' || c == '[') stack.push(c);
            else {
                if(stack.isEmpty()) return false;
                char top = stack.pop();
                if(c == ')' && top != '(') return false;
                if(c == '}' && top != '{') return false;
                if(c == ']' && top != '[') return false;
            }
        }
        return stack.isEmpty();
    }
    public static void main(String[] args) {
        System.out.println("Valid: " + isValid("{[()]}"));
    }
}`,
  },
  {
    id: "java-m-7",
    title: "27. Optional Usage (Preventing NullPointerException)",
    difficulty: "Medium",
    category: "Java 8 Modern",
    xp: 45,
    desc: "Safely wrap nullable hunter guild titles with Optional.ofNullable and orElse.",
    sampleInput: "null title",
    sampleOutput: "Shadow Novice (Default)",
    solution: `import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        String rawTitle = null;
        String safeTitle = Optional.ofNullable(rawTitle).orElse("Shadow Novice");
        System.out.println("Title: " + safeTitle);
    }
}`,
  },
  {
    id: "java-m-8",
    title: "28. Custom Generic Box Class",
    difficulty: "Medium",
    category: "Generics",
    xp: 50,
    desc: "Create a generic class Vault<T> with item packaging and retrieval methods.",
    sampleInput: "Vault<Integer> and Vault<String>",
    sampleOutput: "Stored: 9999 and Stored: Relic",
    solution: `class Vault<T> {
    private T item;
    public void store(T item) { this.item = item; }
    public T retrieve() { return item; }
}

public class Main {
    public static void main(String[] args) {
        Vault<String> v = new Vault<>();
        v.store("Relic");
        System.out.println("Stored: " + v.retrieve());
    }
}`,
  },
  {
    id: "java-m-9",
    title: "29. Grouping Elements with Collectors.groupingBy",
    difficulty: "Medium",
    category: "Java 8 Streams",
    xp: 55,
    desc: "Group list of strings by their string lengths into a Map<Integer, List<String>>.",
    sampleInput: '["Solo", "Leveling", "Monarch", "Raid"]',
    sampleOutput: "{4=[Solo, Raid], 7=[Monarch], 8=[Leveling]}",
    solution: `import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> words = Arrays.asList("Solo", "Leveling", "Monarch", "Raid");
        Map<Integer, List<String>> map = words.stream()
            .collect(Collectors.groupingBy(String::length));
        System.out.println(map);
    }
}`,
  },
  {
    id: "java-m-10",
    title: "30. Synchronized Counter Block",
    difficulty: "Medium",
    category: "Concurrency",
    xp: 55,
    desc: "Prevent race conditions across concurrent threads using synchronized method locks.",
    sampleInput: "2 Threads counting 1000 each",
    sampleOutput: "2000",
    solution: `class Counter {
    private int count = 0;
    public synchronized void increment() { count++; }
    public int get() { return count; }
}

public class Main {
    public static void main(String[] args) throws Exception {
        Counter c = new Counter();
        Thread t1 = new Thread(() -> { for(int i=0; i<1000; i++) c.increment(); });
        Thread t2 = new Thread(() -> { for(int i=0; i<1000; i++) c.increment(); });
        t1.start(); t2.start();
        t1.join(); t2.join();
        System.out.println("Total: " + c.get());
    }
}`,
  },
  {
    id: "java-m-11",
    title: "31. Reverse Singly Linked List",
    difficulty: "Medium",
    category: "Linked Lists",
    xp: 50,
    desc: "Reverse a singly linked list in-place using iterative three pointer traversal.",
    sampleInput: "1 -> 2 -> 3 -> null",
    sampleOutput: "3 -> 2 -> 1 -> null",
    solution: `class ListNode {
    int val; ListNode next;
    ListNode(int v) { val = v; }
}

public class Main {
    public static ListNode reverse(ListNode head) {
        ListNode prev = null, curr = head;
        while(curr != null) {
            ListNode nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }
        return prev;
    }

    public static void main(String[] args) {
        ListNode h = new ListNode(1);
        h.next = new ListNode(2);
        h = reverse(h);
        System.out.println("New Head: " + h.val);
    }
}`,
  },
  {
    id: "java-m-12",
    title: "32. Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "Sliding Window",
    xp: 55,
    desc: "Find length of longest unique character substring using sliding window and HashSet.",
    sampleInput: '"abcabcbb"',
    sampleOutput: '3 ("abc")',
    solution: `import java.util.HashSet;

public class Main {
    public static int lengthOfLongestSubstring(String s) {
        HashSet<Character> set = new HashSet<>();
        int l = 0, max = 0;
        for(int r = 0; r < s.length(); r++) {
            while(set.contains(s.charAt(r))) {
                set.remove(s.charAt(l++));
            }
            set.add(s.charAt(r));
            max = Math.max(max, r - l + 1);
        }
        return max;
    }
    public static void main(String[] args) {
        System.out.println("Length: " + lengthOfLongestSubstring("abcabcbb"));
    }
}`,
  },
  {
    id: "java-m-13",
    title: "33. Binary Search Tree (BST) Validation",
    difficulty: "Medium",
    category: "Trees",
    xp: 55,
    desc: "Verify whether a binary tree fulfills all BST node value ordering constraints.",
    sampleInput: "Valid BST Root = 2, Left = 1, Right = 3",
    sampleOutput: "Is BST: true",
    solution: `class TreeNode {
    int val; TreeNode left, right;
    TreeNode(int v) { val = v; }
}

public class Main {
    public static boolean isValid(TreeNode root, Long min, Long max) {
        if(root == null) return true;
        if(root.val <= min || root.val >= max) return false;
        return isValid(root.left, min, (long)root.val) && isValid(root.right, (long)root.val, max);
    }
    public static void main(String[] args) {
        TreeNode r = new TreeNode(2);
        r.left = new TreeNode(1);
        r.right = new TreeNode(3);
        System.out.println("Is BST: " + isValid(r, Long.MIN_VALUE, Long.MAX_VALUE));
    }
}`,
  },
  {
    id: "java-m-14",
    title: "34. Immutable Classes with Final Fields",
    difficulty: "Medium",
    category: "OOP Architecture",
    xp: 50,
    desc: "Design a deeply immutable HunterArtifact class without setters and with defensive copies.",
    sampleInput: "Artifact('Orb of Vitality', 1500)",
    sampleOutput: "Immutable instance verified",
    solution: `public final class HunterArtifact {
    private final String name;
    private final int value;
    public HunterArtifact(String name, int value) {
        this.name = name;
        this.value = value;
    }
    public String getName() { return name; }
    public int getValue() { return value; }
}

public class Main {
    public static void main(String[] args) {
        HunterArtifact a = new HunterArtifact("Orb", 1500);
        System.out.println(a.getName() + ": " + a.getValue());
    }
}`,
  },
  {
    id: "java-m-15",
    title: "35. Java NIO Files Reading & Writing",
    difficulty: "Medium",
    category: "File I/O",
    xp: 50,
    desc: "Read and write strings to a file in a single step using java.nio.file.Files.",
    sampleInput: "writeString to 'dungeon.log'",
    sampleOutput: "Read back: 'Raid Completed'",
    solution: `import java.nio.file.Files;
import java.nio.file.Path;

public class Main {
    public static void main(String[] args) throws Exception {
        Path p = Path.of("dungeon.log");
        Files.writeString(p, "Raid Completed");
        System.out.println(Files.readString(p));
        Files.deleteIfExists(p);
    }
}`,
  },
  {
    id: "java-m-16",
    title: "36. Subarray Sum Equals K (Prefix Map)",
    difficulty: "Medium",
    category: "Prefix Sums",
    xp: 55,
    desc: "Find total continuous subarrays summing to K in O(N) using running prefix frequency map.",
    sampleInput: "nums = [1, 1, 1], k = 2",
    sampleOutput: "Total: 2",
    solution: `import java.util.HashMap;

public class Main {
    public static int subarraySum(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        int sum = 0, count = 0;
        for(int x : nums) {
            sum += x;
            count += map.getOrDefault(sum - k, 0);
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        return count;
    }
    public static void main(String[] args) {
        System.out.println("Total: " + subarraySum(new int[]{1, 1, 1}, 2));
    }
}`,
  },
  {
    id: "java-m-17",
    title: "37. Modern Record Classes (Java 14+)",
    difficulty: "Medium",
    category: "Modern Java",
    xp: 45,
    desc: "Define a concise immutable data carrier record PlayerRank with auto constructor & getters.",
    sampleInput: "new PlayerRank('Jinwoo', 100)",
    sampleOutput: "PlayerRank[name=Jinwoo, level=100]",
    solution: `record PlayerRank(String name, int level) {}

public class Main {
    public static void main(String[] args) {
        PlayerRank p = new PlayerRank("Jinwoo", 100);
        System.out.println(p);
    }
}`,
  },
  {
    id: "java-m-18",
    title: "38. CompletableFuture Async Pipeline",
    difficulty: "Medium",
    category: "Async & Futures",
    xp: 60,
    desc: "Chain asynchronous non-blocking computation pipelines with supplyAsync and thenApply.",
    sampleInput: "Async compute bonus -> add base",
    sampleOutput: "Calculated: 250 XP",
    solution: `import java.util.concurrent.CompletableFuture;

public class Main {
    public static void main(String[] args) throws Exception {
        CompletableFuture<Integer> future = CompletableFuture.supplyAsync(() -> 100)
            .thenApply(base -> base + 150);
        System.out.println("Calculated: " + future.get() + " XP");
    }
}`,
  },
  {
    id: "java-m-19",
    title: "39. Deep Clone via Serialization / Copy Constructor",
    difficulty: "Medium",
    category: "Memory",
    xp: 50,
    desc: "Build a copy constructor ensuring nested object references are fully duplicated.",
    sampleInput: "Player with nested Skill object",
    sampleOutput: "Independent nested clone verified",
    solution: `class Stats { int str; Stats(int s) { str = s; } }
class Hunter {
    Stats stats;
    Hunter(Hunter other) { this.stats = new Stats(other.stats.str); }
    Hunter(int s) { this.stats = new Stats(s); }
}

public class Main {
    public static void main(String[] args) {
        Hunter h1 = new Hunter(50);
        Hunter h2 = new Hunter(h1);
        h2.stats.str = 99;
        System.out.println("H1: " + h1.stats.str + " | H2: " + h2.stats.str);
    }
}`,
  },
  {
    id: "java-m-20",
    title: "40. Custom Runtime Annotation & Reflection",
    difficulty: "Medium",
    category: "Reflection",
    xp: 60,
    desc: "Create a @RaidBoss annotation and inspect marked methods via Java Reflection.",
    sampleInput: "Method marked with @RaidBoss(tier='S')",
    sampleOutput: "Tier detected: S",
    solution: `import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@interface RaidBoss { String tier() default "A"; }

class BossDungeon {
    @RaidBoss(tier = "S")
    public void spawn() {}
}

public class Main {
    public static void main(String[] args) throws Exception {
        RaidBoss rb = BossDungeon.class.getMethod("spawn").getAnnotation(RaidBoss.class);
        System.out.println("Tier detected: " + rb.tier());
    }
}`,
  },

  // --- 10 HARD PROBLEMS ---
  {
    id: "java-h-1",
    title: "41. Trapping Rain Water (Two Pointers O(N))",
    difficulty: "Hard",
    category: "Two Pointers",
    xp: 90,
    desc: "Calculate total trapped rainwater between bars using two pointer runners in O(N).",
    sampleInput: "[0,1,0,2,1,0,1,3,2,1,2,1]",
    sampleOutput: "6 units",
    solution: `public class Main {
    public static int trap(int[] height) {
        int l = 0, r = height.length - 1, lMax = 0, rMax = 0, total = 0;
        while(l < r) {
            if(height[l] < height[r]) {
                if(height[l] >= lMax) lMax = height[l];
                else total += lMax - height[l];
                l++;
            } else {
                if(height[r] >= rMax) rMax = height[r];
                else total += rMax - height[r];
                r--;
            }
        }
        return total;
    }
    public static void main(String[] args) {
        System.out.println("Trapped: " + trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1}));
    }
}`,
  },
  {
    id: "java-h-2",
    title: "42. Custom LRU Cache using LinkedHashMap",
    difficulty: "Hard",
    category: "System Design",
    xp: 95,
    desc: "Implement an O(1) LRU cache by extending LinkedHashMap and overriding removeEldestEntry.",
    sampleInput: "Capacity = 2, put(1,10), put(2,20), get(1), put(3,30)",
    sampleOutput: "Key 2 evicted; Key 1 and 3 present",
    solution: `import java.util.LinkedHashMap;
import java.util.Map;

class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private final int capacity;
    public LRUCache(int cap) {
        super(cap, 0.75f, true);
        this.capacity = cap;
    }
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > capacity;
    }
}

public class Main {
    public static void main(String[] args) {
        LRUCache<Integer, Integer> lru = new LRUCache<>(2);
        lru.put(1, 10); lru.put(2, 20);
        lru.get(1);
        lru.put(3, 30);
        System.out.println("Contains Key 2: " + lru.containsKey(2));
    }
}`,
  },
  {
    id: "java-h-3",
    title: "43. Word Ladder (Shortest Transformation - BFS)",
    difficulty: "Hard",
    category: "Graph BFS",
    xp: 95,
    desc: "Find shortest mutation path length from beginWord to endWord changing one letter at a time.",
    sampleInput:
      "begin = 'hit', end = 'cog', dict = ['hot','dot','dog','lot','log','cog']",
    sampleOutput: "Shortest: 5",
    solution: `import java.util.*;

public class Main {
    public static int ladderLength(String begin, String end, List<String> list) {
        Set<String> set = new HashSet<>(list);
        if(!set.contains(end)) return 0;
        Queue<String> q = new LinkedList<>();
        q.offer(begin);
        int steps = 1;

        while(!q.isEmpty()) {
            int size = q.size();
            for(int i = 0; i < size; i++) {
                char[] cur = q.poll().toCharArray();
                for(int j = 0; j < cur.length; j++) {
                    char orig = cur[j];
                    for(char c = 'a'; c <= 'z'; c++) {
                        cur[j] = c;
                        String next = new String(cur);
                        if(next.equals(end)) return steps + 1;
                        if(set.remove(next)) q.offer(next);
                    }
                    cur[j] = orig;
                }
            }
            steps++;
        }
        return 0;
    }
    public static void main(String[] args) {
        System.out.println("Shortest: " + ladderLength("hit", "cog", Arrays.asList("hot","dot","dog","lot","log","cog")));
    }
}`,
  },
  {
    id: "java-h-4",
    title: "44. N-Queens Backtracking Problem",
    difficulty: "Hard",
    category: "Backtracking",
    xp: 100,
    desc: "Find total distinct configurations to position N non-attacking queens on N x N grid.",
    sampleInput: "N = 4",
    sampleOutput: "Solutions: 2",
    solution: `public class Main {
    static int count = 0;
    public static int totalNQueens(int n) {
        count = 0;
        backtrack(0, new boolean[n], new boolean[2 * n], new boolean[2 * n], n);
        return count;
    }
    private static void backtrack(int r, boolean[] cols, boolean[] d1, boolean[] d2, int n) {
        if(r == n) { count++; return; }
        for(int c = 0; c < n; c++) {
            int id1 = r - c + n, id2 = r + c;
            if(!cols[c] && !d1[id1] && !d2[id2]) {
                cols[c] = d1[id1] = d2[id2] = true;
                backtrack(r + 1, cols, d1, d2, n);
                cols[c] = d1[id1] = d2[id2] = false;
            }
        }
    }
    public static void main(String[] args) {
        System.out.println("Solutions: " + totalNQueens(4));
    }
}`,
  },
  {
    id: "java-h-5",
    title: "45. Trie (Prefix Tree) Implementation",
    difficulty: "Hard",
    category: "Advanced Trees",
    xp: 90,
    desc: "Build Trie with insert(), search(), and startsWith() methods using node array pointers.",
    sampleInput: "insert('shadow'), startsWith('shad')",
    sampleOutput: "Prefix Exists: true",
    solution: `class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEnd = false;
}

class Trie {
    private TrieNode root = new TrieNode();
    public void insert(String word) {
        TrieNode p = root;
        for(char c : word.toCharArray()) {
            if(p.children[c - 'a'] == null) p.children[c - 'a'] = new TrieNode();
            p = p.children[c - 'a'];
        }
        p.isEnd = true;
    }
    public boolean startsWith(String prefix) {
        TrieNode p = root;
        for(char c : prefix.toCharArray()) {
            if(p.children[c - 'a'] == null) return false;
            p = p.children[c - 'a'];
        }
        return true;
    }
}

public class Main {
    public static void main(String[] args) {
        Trie t = new Trie();
        t.insert("shadow");
        System.out.println("Prefix Exists: " + t.startsWith("shad"));
    }
}`,
  },
  {
    id: "java-h-6",
    title: "46. Longest Increasing Subsequence (Binary Search O(N log N))",
    difficulty: "Hard",
    category: "Dynamic Programming & Greedy",
    xp: 95,
    desc: "Determine length of longest increasing subsequence using patience sort binary search.",
    sampleInput: "[10, 9, 2, 5, 3, 7, 101, 18]",
    sampleOutput: "LIS Length: 4",
    solution: `import java.util.Arrays;

public class Main {
    public static int lengthOfLIS(int[] nums) {
        int[] tails = new int[nums.length];
        int size = 0;
        for(int x : nums) {
            int i = 0, j = size;
            while(i != j) {
                int m = (i + j) / 2;
                if(tails[m] < x) i = m + 1;
                else j = m;
            }
            tails[i] = x;
            if(i == size) size++;
        }
        return size;
    }
    public static void main(String[] args) {
        System.out.println("LIS Length: " + lengthOfLIS(new int[]{10, 9, 2, 5, 3, 7, 101, 18}));
    }
}`,
  },
  {
    id: "java-h-7",
    title: "47. Double-Checked Locking Singleton (volatile)",
    difficulty: "Hard",
    category: "Concurrency Design",
    xp: 95,
    desc: "Implement thread-safe lazy initialized Singleton utilizing volatile memory visibility barriers.",
    sampleInput: "Concurrent calls across threads",
    sampleOutput: "Same instance hash code verified",
    solution: `class SanctuaryVault {
    private static volatile SanctuaryVault instance;
    private SanctuaryVault() {}
    public static SanctuaryVault getInstance() {
        if(instance == null) {
            synchronized(SanctuaryVault.class) {
                if(instance == null) {
                    instance = new SanctuaryVault();
                }
            }
        }
        return instance;
    }
}

public class Main {
    public static void main(String[] args) {
        SanctuaryVault v1 = SanctuaryVault.getInstance();
        SanctuaryVault v2 = SanctuaryVault.getInstance();
        System.out.println("Same Instance: " + (v1 == v2));
    }
}`,
  },
  {
    id: "java-h-8",
    title: "48. ReentrantLock & Condition Coordination",
    difficulty: "Hard",
    category: "Concurrency",
    xp: 100,
    desc: "Coordinate producer-consumer thread queues using explicit ReentrantLock and await/signal.",
    sampleInput: "Thread wait/signal signaling",
    sampleOutput: "Thread synchronization without deadlock",
    solution: `import java.util.concurrent.locks.*;

public class Main {
    private static final Lock lock = new ReentrantLock();
    private static final Condition cond = lock.newCondition();
    private static boolean ready = false;

    public static void main(String[] args) throws Exception {
        Thread worker = new Thread(() -> {
            lock.lock();
            try {
                while(!ready) cond.await();
                System.out.println("Worker released & active!");
            } catch(Exception e) {}
            finally { lock.unlock(); }
        });

        worker.start();
        Thread.sleep(100);
        lock.lock();
        try {
            ready = true;
            cond.signal();
        } finally { lock.unlock(); }
        worker.join();
    }
}`,
  },
  {
    id: "java-h-9",
    title: "49. Custom ClassLoader Implementation",
    difficulty: "Hard",
    category: "JVM Internals",
    xp: 100,
    desc: "Implement custom bytecode class loader overriding findClass method.",
    sampleInput: "Dynamic byte buffer class definition",
    sampleOutput: "Custom class loaded outside classpath",
    solution: `public class CustomLoader extends ClassLoader {
    public Class<?> loadFromBytes(String name, byte[] b) {
        return defineClass(name, b, 0, b.length);
    }
    public static void main(String[] args) {
        System.out.println("Custom ClassLoader Architecture Initialized");
    }
}`,
  },
  {
    id: "java-h-10",
    title: "50. Non-Blocking AtomicReference Stack (Treiber Stack)",
    difficulty: "Hard",
    category: "Lock-Free Systems",
    xp: 100,
    desc: "Build a lock-free thread-safe concurrent stack using AtomicReference and compareAndSet CAS loop.",
    sampleInput: "Push and Pop without synchronized keyword",
    sampleOutput: "Zero contention lock-free stack operations verified",
    solution: `import java.util.concurrent.atomic.AtomicReference;

class LockFreeStack<T> {
    static class Node<T> { T val; Node<T> next; Node(T v) { val = v; } }
    AtomicReference<Node<T>> top = new AtomicReference<>();

    public void push(T val) {
        Node<T> n = new Node<>(val);
        do { n.next = top.get(); }
        while(!top.compareAndSet(n.next, n));
    }

    public T pop() {
        Node<T> cur;
        do {
            cur = top.get();
            if(cur == null) return null;
        } while(!top.compareAndSet(cur, cur.next));
        return cur.val;
    }
}

public class Main {
    public static void main(String[] args) {
        LockFreeStack<String> st = new LockFreeStack<>();
        st.push("Relic A");
        System.out.println("Popped: " + st.pop());
    }
}`,
  },
];
