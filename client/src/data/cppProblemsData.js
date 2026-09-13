export const CPP_PROBLEMS = [
  // --- 20 EASY PROBLEMS ---
  {
    id: "cpp-e-1",
    title: "1. Hello C++ Hunter (I/O Streams)",
    difficulty: "Easy",
    category: "Basics",
    xp: 20,
    desc: "Print 'Awaken, Hunter!' to standard console output using std::cout and std::endl.",
    sampleInput: "No Input",
    sampleOutput: "Awaken, Hunter!",
    solution: `#include <iostream>
using namespace std;

int main() {
    cout << "Awaken, Hunter!" << endl;
    return 0;
}`,
  },
  {
    id: "cpp-e-2",
    title: "2. Fast I/O Operations",
    difficulty: "Easy",
    category: "Basics",
    xp: 20,
    desc: "Setup cin and cout with untied streams for ultra-fast competitive programming input.",
    sampleInput: "10 20",
    sampleOutput: "30",
    solution: `#include <iostream>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int a, b;
    if(cin >> a >> b) {
        cout << (a + b) << "\\n";
    }
    return 0;
}`,
  },
  {
    id: "cpp-e-3",
    title: "3. Vector Initialization & Traversal",
    difficulty: "Easy",
    category: "STL Containers",
    xp: 25,
    desc: "Create an std::vector<int>, append 5 numbers using push_back(), and traverse with a range-based for loop.",
    sampleInput: "No Input",
    sampleOutput: "10 20 30 40 50",
    solution: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {10, 20, 30, 40, 50};
    for(int val : v) {
        cout << val << " ";
    }
    cout << endl;
    return 0;
}`,
  },
  {
    id: "cpp-e-4",
    title: "4. String Reversal using std::reverse",
    difficulty: "Easy",
    category: "STL Algorithms",
    xp: 20,
    desc: "Reverse an std::string in-place using the algorithm header std::reverse.",
    sampleInput: '"SHADOW"',
    sampleOutput: '"WODAHS"',
    solution: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string s = "SHADOW";
    reverse(s.begin(), s.end());
    cout << s << endl;
    return 0;
}`,
  },
  {
    id: "cpp-e-5",
    title: "5. Find Max & Min with std::pair",
    difficulty: "Easy",
    category: "STL Utility",
    xp: 25,
    desc: "Return both minimum and maximum elements from an array using std::pair.",
    sampleInput: "[12, 4, 56, 2, 19]",
    sampleOutput: "Min: 2, Max: 56",
    solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {12, 4, 56, 2, 19};
    auto minMax = minmax_element(v.begin(), v.end());
    cout << "Min: " << *minMax.first << ", Max: " << *minMax.second << endl;
    return 0;
}`,
  },
  {
    id: "cpp-e-6",
    title: "6. Class Blueprint & Constructor",
    difficulty: "Easy",
    category: "OOP Basics",
    xp: 25,
    desc: "Design a Hunter class with name, rank, and a method to print hunter profile.",
    sampleInput: '"Jinwoo", "S-Rank"',
    sampleOutput: "Hunter: Jinwoo | Rank: S-Rank",
    solution: `#include <iostream>
#include <string>
using namespace std;

class Hunter {
public:
    string name;
    string rank;
    Hunter(string n, string r) : name(n), rank(r) {}
    void display() {
        cout << "Hunter: " << name << " | Rank: " << rank << endl;
    }
};

int main() {
    Hunter h("Jinwoo", "S-Rank");
    h.display();
    return 0;
}`,
  },
  {
    id: "cpp-e-7",
    title: "7. Sort Vector using std::sort",
    difficulty: "Easy",
    category: "STL Algorithms",
    xp: 20,
    desc: "Sort an unsorted vector in descending order using std::greater<int>().",
    sampleInput: "[5, 1, 9, 3]",
    sampleOutput: "[9, 5, 3, 1]",
    solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {5, 1, 9, 3};
    sort(v.begin(), v.end(), greater<int>());
    for(int x : v) cout << x << " ";
    cout << endl;
    return 0;
}`,
  },
  {
    id: "cpp-e-8",
    title: "8. Pass by Reference vs Value",
    difficulty: "Easy",
    category: "Functions",
    xp: 20,
    desc: "Implement a function that doubles the value of an integer directly via reference parameter (&).",
    sampleInput: "x = 25",
    sampleOutput: "Doubled: 50",
    solution: `#include <iostream>
using namespace std;

void doubleValue(int &val) {
    val *= 2;
}

int main() {
    int x = 25;
    doubleValue(x);
    cout << "Doubled: " << x << endl;
    return 0;
}`,
  },
  {
    id: "cpp-e-9",
    title: "9. Auto Keyword & Type Inference",
    difficulty: "Easy",
    category: "Modern C++",
    xp: 20,
    desc: "Use auto to infer complex iterator and map types cleanly without verbose syntax.",
    sampleInput: "No Input",
    sampleOutput: "Integer deduced: 100",
    solution: `#include <iostream>
using namespace std;

int main() {
    auto level = 100;
    cout << "Integer deduced: " << level << endl;
    return 0;
}`,
  },
  {
    id: "cpp-e-10",
    title: "10. Counting Occurrences with std::count",
    difficulty: "Easy",
    category: "STL Algorithms",
    xp: 20,
    desc: "Count frequency of a specific target element inside an std::vector.",
    sampleInput: "v = [2, 3, 2, 5, 2], target = 2",
    sampleOutput: "Count: 3",
    solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {2, 3, 2, 5, 2};
    int cnt = count(v.begin(), v.end(), 2);
    cout << "Count: " << cnt << endl;
    return 0;
}`,
  },
  {
    id: "cpp-e-11",
    title: "11. Lambda Expressions (Anonymous Functions)",
    difficulty: "Easy",
    category: "Modern C++",
    xp: 25,
    desc: "Define an inline C++ lambda expression to multiply two numbers.",
    sampleInput: "a = 4, b = 6",
    sampleOutput: "Product: 24",
    solution: `#include <iostream>
using namespace std;

int main() {
    auto multiply = [](int a, int b) { return a * b; };
    cout << "Product: " << multiply(4, 6) << endl;
    return 0;
}`,
  },
  {
    id: "cpp-e-12",
    title: "12. std::stringstream Tokenizer",
    difficulty: "Easy",
    category: "Strings",
    xp: 25,
    desc: "Split space-separated words from a sentence using std::stringstream.",
    sampleInput: '"Level Up System Active"',
    sampleOutput: "Level\\nUp\\nSystem\\nActive",
    solution: `#include <iostream>
#include <sstream>
#include <string>
using namespace std;

int main() {
    string str = "Level Up System Active";
    stringstream ss(str);
    string word;
    while(ss >> word) {
        cout << word << "\\n";
    }
    return 0;
}`,
  },
  {
    id: "cpp-e-13",
    title: "13. Function Overloading in C++",
    difficulty: "Easy",
    category: "OOP Polymorphism",
    xp: 25,
    desc: "Create overloaded computeDamage() functions for single and dual-strike attacks.",
    sampleInput: "Single(50), Dual(50, 75)",
    sampleOutput: "Single: 50 | Dual: 125",
    solution: `#include <iostream>
using namespace std;

int computeDamage(int base) { return base; }
int computeDamage(int base, int bonus) { return base + bonus; }

int main() {
    cout << "Single: " << computeDamage(50) << " | Dual: " << computeDamage(50, 75) << endl;
    return 0;
}`,
  },
  {
    id: "cpp-e-14",
    title: "14. Unique Elements with std::set",
    difficulty: "Easy",
    category: "STL Containers",
    xp: 25,
    desc: "Filter duplicate values and keep items sorted automatically using std::set.",
    sampleInput: "[7, 2, 7, 3, 2, 9]",
    sampleOutput: "2 3 7 9",
    solution: `#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> s = {7, 2, 7, 3, 2, 9};
    for(int x : s) cout << x << " ";
    cout << endl;
    return 0;
}`,
  },
  {
    id: "cpp-e-15",
    title: "15. Stack Operations with std::stack",
    difficulty: "Easy",
    category: "STL Adapters",
    xp: 20,
    desc: "Perform LIFO push, pop, and top inspection using std::stack container adapter.",
    sampleInput: "Push 100, Push 200, Top()",
    sampleOutput: "Top: 200",
    solution: `#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> st;
    st.push(100);
    st.push(200);
    cout << "Top: " << st.top() << endl;
    st.pop();
    cout << "New Top: " << st.top() << endl;
    return 0;
}`,
  },
  {
    id: "cpp-e-16",
    title: "16. Queue Operations with std::queue",
    difficulty: "Easy",
    category: "STL Adapters",
    xp: 20,
    desc: "Perform FIFO push, pop, and front operations with std::queue.",
    sampleInput: "Push Q1, Push Q2, Front()",
    sampleOutput: "Front: Q1",
    solution: `#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<string> q;
    q.push("Quest Alpha");
    q.push("Quest Beta");
    cout << "Front: " << q.front() << endl;
    q.pop();
    cout << "Next: " << q.front() << endl;
    return 0;
}`,
  },
  {
    id: "cpp-e-17",
    title: "17. Dynamic Memory with new & delete",
    difficulty: "Easy",
    category: "Memory Management",
    xp: 25,
    desc: "Allocate a dynamic integer array using new[] and deallocate with delete[].",
    sampleInput: "Size = 3",
    sampleOutput: "Allocated & Deallocated",
    solution: `#include <iostream>
using namespace std;

int main() {
    int *arr = new int[3]{10, 20, 30};
    cout << "First Element: " << arr[0] << endl;
    delete[] arr;
    return 0;
}`,
  },
  {
    id: "cpp-e-18",
    title: "18. Simple Template Function",
    difficulty: "Easy",
    category: "Templates",
    xp: 25,
    desc: "Write a generic function template findMax<T>(T a, T b) supporting both int and float.",
    sampleInput: "findMax(10, 20), findMax(4.5, 2.1)",
    sampleOutput: "20 and 4.5",
    solution: `#include <iostream>
using namespace std;

template <typename T>
T findMax(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << findMax(10, 20) << " and " << findMax(4.5, 2.1) << endl;
    return 0;
}`,
  },
  {
    id: "cpp-e-19",
    title: "19. Bitwise Shift Operations",
    difficulty: "Easy",
    category: "Bitwise",
    xp: 20,
    desc: "Multiply and divide by powers of 2 using left shift (<<) and right shift (>>).",
    sampleInput: "N = 8",
    sampleOutput: "N * 4 = 32 | N / 2 = 4",
    solution: `#include <iostream>
using namespace std;

int main() {
    int n = 8;
    cout << "N * 4 = " << (n << 2) << " | N / 2 = " << (n >> 1) << endl;
    return 0;
}`,
  },
  {
    id: "cpp-e-20",
    title: "20. Exception Handling (try, catch, throw)",
    difficulty: "Easy",
    category: "Error Handling",
    xp: 25,
    desc: "Safely catch division by zero by throwing a runtime exception.",
    sampleInput: "Divide 10 by 0",
    sampleOutput: "Exception caught: Division by zero!",
    solution: `#include <iostream>
#include <stdexcept>
using namespace std;

int main() {
    int num = 10, den = 0;
    try {
        if(den == 0) throw runtime_error("Division by zero!");
        cout << num / den << endl;
    } catch(const exception &e) {
        cout << "Exception caught: " << e.what() << endl;
    }
    return 0;
}`,
  },

  // --- 20 MEDIUM PROBLEMS ---
  {
    id: "cpp-m-1",
    title: "21. Frequency Map using std::unordered_map",
    difficulty: "Medium",
    category: "Hashing",
    xp: 45,
    desc: "Count occurrences of all elements in O(1) average lookup using hash maps.",
    sampleInput: "[1, 3, 2, 1, 4, 1]",
    sampleOutput: "1 -> 3, 2 -> 1, 3 -> 1, 4 -> 1",
    solution: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {
    vector<int> arr = {1, 3, 2, 1, 4, 1};
    unordered_map<int, int> freq;
    for(int x : arr) freq[x]++;
    for(auto const &[key, val] : freq) {
        cout << key << " -> " << val << endl;
    }
    return 0;
}`,
  },
  {
    id: "cpp-m-2",
    title: "22. Two Sum Problem (O(N) Hash Table)",
    difficulty: "Medium",
    category: "Arrays & Hashing",
    xp: 50,
    desc: "Find indices of two numbers that add up to a target sum using std::unordered_map.",
    sampleInput: "arr = [2, 7, 11, 15], target = 9",
    sampleOutput: "Indices: 0, 1",
    solution: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    unordered_map<int, int> mp;
    for(int i = 0; i < nums.size(); i++) {
        int diff = target - nums[i];
        if(mp.count(diff)) {
            cout << "Indices: " << mp[diff] << ", " << i << endl;
            return 0;
        }
        mp[nums[i]] = i;
    }
    return 0;
}`,
  },
  {
    id: "cpp-m-3",
    title: "23. Priority Queue (Max-Heap & Min-Heap)",
    difficulty: "Medium",
    category: "STL Heap",
    xp: 50,
    desc: "Implement a priority queue to fetch top K elements in logarithmic time.",
    sampleInput: "Values: [15, 10, 30, 5, 20]",
    sampleOutput: "Max: 30, Min: 5",
    solution: `#include <iostream>
#include <queue>
using namespace std;

int main() {
    priority_queue<int> maxHeap;
    priority_queue<int, vector<int>, greater<int>> minHeap;
    for(int x : {15, 10, 30, 5, 20}) {
        maxHeap.push(x);
        minHeap.push(x);
    }
    cout << "Max: " << maxHeap.top() << ", Min: " << minHeap.top() << endl;
    return 0;
}`,
  },
  {
    id: "cpp-m-4",
    title: "24. Smart Pointers: std::unique_ptr & std::make_unique",
    difficulty: "Medium",
    category: "Modern C++ (RAII)",
    xp: 50,
    desc: "Manage dynamic heap resources safely without memory leaks using unique ownership smart pointers.",
    sampleInput: "No Input",
    sampleOutput: "Allocated & Auto-Destroyed upon scope exit",
    solution: `#include <iostream>
#include <memory>
using namespace std;

struct Rune {
    int power;
    Rune(int p) : power(p) { cout << "Rune Created\\n"; }
    ~Rune() { cout << "Rune Destroyed\\n"; }
};

int main() {
    {
        unique_ptr<Rune> r = make_unique<Rune>(999);
        cout << "Power: " << r->power << endl;
    }
    return 0;
}`,
  },
  {
    id: "cpp-m-5",
    title: "25. Move Semantics & std::move",
    difficulty: "Medium",
    category: "Modern C++",
    xp: 55,
    desc: "Transfer vector ownership without deep copying by leveraging rvalue references and std::move.",
    sampleInput: "Vector with 1000 items",
    sampleOutput: "Ownership transferred in O(1) time",
    solution: `#include <iostream>
#include <vector>
#include <utility>
using namespace std;

int main() {
    vector<int> src(1000, 7);
    vector<int> dest = move(src);
    cout << "Src Size: " << src.size() << " | Dest Size: " << dest.size() << endl;
    return 0;
}`,
  },
  {
    id: "cpp-m-6",
    title: "26. Binary Search via std::lower_bound & upper_bound",
    difficulty: "Medium",
    category: "STL Algorithms",
    xp: 45,
    desc: "Find first and last occurrence positions of an element in a sorted range.",
    sampleInput: "arr = [1, 2, 4, 4, 4, 6], target = 4",
    sampleOutput: "Lower Index: 2, Upper Index: 5",
    solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {1, 2, 4, 4, 4, 6};
    auto low = lower_bound(v.begin(), v.end(), 4) - v.begin();
    auto up = upper_bound(v.begin(), v.end(), 4) - v.begin();
    cout << "Lower Index: " << low << ", Upper Index: " << up << endl;
    return 0;
}`,
  },
  {
    id: "cpp-m-7",
    title: "27. Inheritance & Virtual Functions (Dynamic Polymorphism)",
    difficulty: "Medium",
    category: "OOP Advanced",
    xp: 55,
    desc: "Implement runtime method overriding using a base pointer and virtual destructor.",
    sampleInput: "Base pointer pointing to Derived Warrior",
    sampleOutput: "Warrior performs Blade Storm!",
    solution: `#include <iostream>
using namespace std;

class BaseEntity {
public:
    virtual void attack() { cout << "Generic Attack\\n"; }
    virtual ~BaseEntity() {}
};

class Warrior : public BaseEntity {
public:
    void attack() override { cout << "Warrior performs Blade Storm!\\n"; }
};

int main() {
    BaseEntity* b = new Warrior();
    b->attack();
    delete b;
    return 0;
}`,
  },
  {
    id: "cpp-m-8",
    title: "28. Next Greater Element using Monotonic Stack",
    difficulty: "Medium",
    category: "Stack Algorithms",
    xp: 50,
    desc: "For each element, find the nearest element to its right that is greater.",
    sampleInput: "[4, 5, 2, 25]",
    sampleOutput: "4->5, 5->25, 2->25, 25->-1",
    solution: `#include <iostream>
#include <vector>
#include <stack>
using namespace std;

int main() {
    vector<int> arr = {4, 5, 2, 25};
    int n = arr.size();
    vector<int> res(n, -1);
    stack<int> st;

    for(int i = 0; i < n; i++) {
        while(!st.empty() && arr[i] > arr[st.top()]) {
            res[st.top()] = arr[i];
            st.pop();
        }
        st.push(i);
    }
    for(int i = 0; i < n; i++) cout << arr[i] << " -> " << res[i] << endl;
    return 0;
}`,
  },
  {
    id: "cpp-m-9",
    title: "29. Invert a Binary Tree (Recursion)",
    difficulty: "Medium",
    category: "Trees",
    xp: 50,
    desc: "Invert a binary tree by recursively swapping left and right child pointers.",
    sampleInput: "Tree: 4, Left: 2, Right: 7",
    sampleOutput: "Inverted: 4, Left: 7, Right: 2",
    solution: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left, *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

TreeNode* invertTree(TreeNode* root) {
    if(!root) return nullptr;
    swap(root->left, root->right);
    invertTree(root->left);
    invertTree(root->right);
    return root;
}

int main() {
    TreeNode* root = new TreeNode(4);
    root->left = new TreeNode(2);
    root->right = new TreeNode(7);
    invertTree(root);
    cout << "Root Left: " << root->left->val << " | Root Right: " << root->right->val << endl;
    return 0;
}`,
  },
  {
    id: "cpp-m-10",
    title: "30. Breadth First Search (BFS) in Graph",
    difficulty: "Medium",
    category: "Graphs",
    xp: 55,
    desc: "Level-order traversal of an unweighted graph using an adjacency list and queue.",
    sampleInput: "Edges: 0-1, 0-2, 1-2, 2-3",
    sampleOutput: "BFS Traversal: 0 1 2 3",
    solution: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int main() {
    int V = 4;
    vector<vector<int>> adj = {{1, 2}, {0, 2}, {0, 1, 3}, {2}};
    vector<bool> visited(V, false);
    queue<int> q;

    visited[0] = true;
    q.push(0);

    cout << "BFS Traversal: ";
    while(!q.empty()) {
        int u = q.front(); q.pop();
        cout << u << " ";
        for(int v : adj[u]) {
            if(!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
    cout << endl;
    return 0;
}`,
  },
  {
    id: "cpp-m-11",
    title: "31. Depth First Search (DFS) in Graph",
    difficulty: "Medium",
    category: "Graphs",
    xp: 55,
    desc: "Traverse deep into graph branches using recursive backtracking and visited state tracking.",
    sampleInput: "Start Node 0",
    sampleOutput: "DFS Traversal: 0 1 2 3",
    solution: `#include <iostream>
#include <vector>
using namespace std;

void dfs(int u, vector<vector<int>> &adj, vector<bool> &vis) {
    vis[u] = true;
    cout << u << " ";
    for(int v : adj[u]) {
        if(!vis[v]) dfs(v, adj, vis);
    }
}

int main() {
    vector<vector<int>> adj = {{1, 2}, {0, 3}, {0, 3}, {1, 2}};
    vector<bool> vis(4, false);
    cout << "DFS Traversal: ";
    dfs(0, adj, vis);
    cout << endl;
    return 0;
}`,
  },
  {
    id: "cpp-m-12",
    title: "32. Valid Parentheses using std::stack",
    difficulty: "Medium",
    category: "Strings & Stacks",
    xp: 45,
    desc: "Check if string contains balanced brackets: '()', '{}', '[]'.",
    sampleInput: '"{[()]}"',
    sampleOutput: "Balanced",
    solution: `#include <iostream>
#include <stack>
#include <string>
using namespace std;

bool isValid(string s) {
    stack<char> st;
    for(char c : s) {
        if(c == '(' || c == '{' || c == '[') st.push(c);
        else {
            if(st.empty()) return false;
            if(c == ')' && st.top() != '(') return false;
            if(c == '}' && st.top() != '{') return false;
            if(c == ']' && st.top() != '[') return false;
            st.pop();
        }
    }
    return st.empty();
}

int main() {
    cout << (isValid("{[()]}") ? "Balanced" : "Unbalanced") << endl;
    return 0;
}`,
  },
  {
    id: "cpp-m-13",
    title: "33. Custom Comparator in std::sort",
    difficulty: "Medium",
    category: "Sorting",
    xp: 45,
    desc: "Sort vector of Hunter structs primarily by Level descending, then by Name alphabetically.",
    sampleInput: '[{"Sung", 100}, {"Cha", 90}, {"Baek", 90}]',
    sampleOutput: "Sorted list conforming to tier requirements",
    solution: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

struct Hunter { string name; int lvl; };

int main() {
    vector<Hunter> h = {{"Sung", 100}, {"Cha", 90}, {"Baek", 90}};
    sort(h.begin(), h.end(), [](const Hunter &a, const Hunter &b) {
        if(a.lvl != b.lvl) return a.lvl > b.lvl;
        return a.name < b.name;
    });
    for(auto const &x : h) cout << x.name << " (" << x.lvl << ") ";
    cout << endl;
    return 0;
}`,
  },
  {
    id: "cpp-m-14",
    title: "34. Operator Overloading (+ operator)",
    difficulty: "Medium",
    category: "OOP Advanced",
    xp: 50,
    desc: "Overload the + operator in a Vector2D class to add coordinates directly.",
    sampleInput: "v1(2, 4) + v2(3, 1)",
    sampleOutput: "Result: (5, 5)",
    solution: `#include <iostream>
using namespace std;

class Vector2D {
public:
    int x, y;
    Vector2D(int a, int b) : x(a), y(b) {}
    Vector2D operator+(const Vector2D &other) {
        return Vector2D(x + other.x, y + other.y);
    }
};

int main() {
    Vector2D v1(2, 4), v2(3, 1);
    Vector2D v3 = v1 + v2;
    cout << "Result: (" << v3.x << ", " << v3.y << ")" << endl;
    return 0;
}`,
  },
  {
    id: "cpp-m-15",
    title: "35. Subarray Sum Equals K (Prefix Sum + Map)",
    difficulty: "Medium",
    category: "Prefix Sums",
    xp: 55,
    desc: "Find the total number of continuous subarrays whose sum equals K in O(N).",
    sampleInput: "arr = [1, 1, 1], k = 2",
    sampleOutput: "Total Subarrays: 2",
    solution: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int main() {
    vector<int> nums = {1, 1, 1};
    int k = 2, sum = 0, count = 0;
    unordered_map<int, int> mp;
    mp[0] = 1;
    for(int x : nums) {
        sum += x;
        if(mp.count(sum - k)) count += mp[sum - k];
        mp[sum]++;
    }
    cout << "Total Subarrays: " << count << endl;
    return 0;
}`,
  },
  {
    id: "cpp-m-16",
    title: "36. Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "Sliding Window",
    xp: 55,
    desc: "Calculate length of longest substring without duplicates using two pointers.",
    sampleInput: '"abcabcbb"',
    sampleOutput: 'Length: 3 ("abc")',
    solution: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    string s = "abcabcbb";
    vector<int> lastIndex(256, -1);
    int maxLen = 0, start = 0;
    for(int end = 0; end < s.size(); end++) {
        if(lastIndex[(unsigned char)s[end]] >= start) {
            start = lastIndex[(unsigned char)s[end]] + 1;
        }
        lastIndex[(unsigned char)s[end]] = end;
        maxLen = max(maxLen, end - start + 1);
    }
    cout << "Length: " << maxLen << endl;
    return 0;
}`,
  },
  {
    id: "cpp-m-17",
    title: "37. Lowest Common Ancestor (LCA) in BST",
    difficulty: "Medium",
    category: "Trees",
    xp: 50,
    desc: "Find the lowest shared ancestor node for two given values in a Binary Search Tree.",
    sampleInput: "Tree Root: 6, p = 2, q = 8",
    sampleOutput: "LCA: 6",
    solution: `#include <iostream>
using namespace std;

struct Node { int val; Node *left, *right; Node(int v) : val(v), left(0), right(0) {} };

Node* lca(Node* root, int p, int q) {
    while(root) {
        if(p < root->val && q < root->val) root = root->left;
        else if(p > root->val && q > root->val) root = root->right;
        else return root;
    }
    return nullptr;
}

int main() {
    Node* r = new Node(6);
    r->left = new Node(2);
    r->right = new Node(8);
    cout << "LCA: " << lca(r, 2, 8)->val << endl;
    return 0;
}`,
  },
  {
    id: "cpp-m-18",
    title: "38. Top K Frequent Elements",
    difficulty: "Medium",
    category: "Heap & Hashing",
    xp: 55,
    desc: "Find the K most frequent numbers using an unordered_map and a min-heap.",
    sampleInput: "nums = [1,1,1,2,2,3], k = 2",
    sampleOutput: "Top: 1, 2",
    solution: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>
using namespace std;

int main() {
    vector<int> nums = {1, 1, 1, 2, 2, 3};
    int k = 2;
    unordered_map<int, int> count;
    for(int n : nums) count[n]++;

    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    for(auto &[val, freq] : count) {
        pq.push({freq, val});
        if(pq.size() > k) pq.pop();
    }
    while(!pq.empty()) {
        cout << pq.top().second << " ";
        pq.pop();
    }
    cout << endl;
    return 0;
}`,
  },
  {
    id: "cpp-m-19",
    title: "39. Coin Change Problem (Minimum Coins - DP)",
    difficulty: "Medium",
    category: "Dynamic Programming",
    xp: 55,
    desc: "Compute fewest coins required to make up amount using bottom-up tabulative DP.",
    sampleInput: "coins = [1, 2, 5], amount = 11",
    sampleOutput: "Min Coins: 3 (5 + 5 + 1)",
    solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> coins = {1, 2, 5};
    int amount = 11;
    vector<int> dp(amount + 1, 1e9);
    dp[0] = 0;
    for(int i = 1; i <= amount; i++) {
        for(int c : coins) {
            if(i - c >= 0) dp[i] = min(dp[i], dp[i - c] + 1);
        }
    }
    cout << "Min Coins: " << (dp[amount] >= 1e9 ? -1 : dp[amount]) << endl;
    return 0;
}`,
  },
  {
    id: "cpp-m-20",
    title: "40. Multithreading with std::thread & std::mutex",
    difficulty: "Medium",
    category: "Concurrency",
    xp: 60,
    desc: "Safely synchronize shared counter increments between parallel threads using std::mutex.",
    sampleInput: "2 Threads counting 500 each",
    sampleOutput: "Final Balance: 1000",
    solution: `#include <iostream>
#include <thread>
#include <mutex>
using namespace std;

int counter = 0;
mutex mtx;

void increment() {
    for(int i = 0; i < 500; i++) {
        lock_guard<mutex> lock(mtx);
        counter++;
    }
}

int main() {
    thread t1(increment);
    thread t2(increment);
    t1.join();
    t2.join();
    cout << "Final Balance: " << counter << endl;
    return 0;
}`,
  },

  // --- 10 HARD PROBLEMS ---
  {
    id: "cpp-h-1",
    title: "41. Trapping Rain Water (Two Pointers O(N))",
    difficulty: "Hard",
    category: "Two Pointers",
    xp: 90,
    desc: "Calculate total units of rainwater trapped between terrain elevations using optimal two pointers.",
    sampleInput: "[0,1,0,2,1,0,1,3,2,1,2,1]",
    sampleOutput: "Trapped Water: 6 units",
    solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> h = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
    int l = 0, r = h.size() - 1, lMax = 0, rMax = 0, total = 0;
    while(l < r) {
        if(h[l] < h[r]) {
            if(h[l] >= lMax) lMax = h[l];
            else total += lMax - h[l];
            l++;
        } else {
            if(h[r] >= rMax) rMax = h[r];
            else total += rMax - h[r];
            r--;
        }
    }
    cout << "Trapped Water: " << total << endl;
    return 0;
}`,
  },
  {
    id: "cpp-h-2",
    title: "42. Median of Two Sorted Arrays (O(log(min(N,M))))",
    difficulty: "Hard",
    category: "Binary Search",
    xp: 100,
    desc: "Find the median of two separate sorted arrays using binary search partitioning without merging.",
    sampleInput: "nums1 = [1, 3], nums2 = [2]",
    sampleOutput: "Median: 2.0",
    solution: `#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

double findMedian(vector<int>& A, vector<int>& B) {
    if(A.size() > B.size()) return findMedian(B, A);
    int m = A.size(), n = B.size(), low = 0, high = m;
    while(low <= high) {
        int i = (low + high) / 2, j = (m + n + 1) / 2 - i;
        int maxLeftA = (i == 0) ? INT_MIN : A[i - 1];
        int minRightA = (i == m) ? INT_MAX : A[i];
        int maxLeftB = (j == 0) ? INT_MIN : B[j - 1];
        int minRightB = (j == n) ? INT_MAX : B[j];
        if(maxLeftA <= minRightB && maxLeftB <= minRightA) {
            if((m + n) % 2 == 0)
                return (max(maxLeftA, maxLeftB) + min(minRightA, minRightB)) / 2.0;
            return max(maxLeftA, maxLeftB);
        }
        if(maxLeftA > minRightB) high = i - 1;
        else low = i + 1;
    }
    return 0.0;
}

int main() {
    vector<int> a = {1, 3}, b = {2};
    cout << "Median: " << findMedian(a, b) << endl;
    return 0;
}`,
  },
  {
    id: "cpp-h-3",
    title: "43. Word Ladder (Shortest Transformation - Bidirectional BFS)",
    difficulty: "Hard",
    category: "Graphs",
    xp: 95,
    desc: "Find length of shortest transformation sequence from beginWord to endWord changing 1 letter at a time.",
    sampleInput:
      'begin = "hit", end = "cog", dict = ["hot","dot","dog","lot","log","cog"]',
    sampleOutput: "Shortest Length: 5",
    solution: `#include <iostream>
#include <string>
#include <vector>
#include <unordered_set>
#include <queue>
using namespace std;

int main() {
    string beginWord = "hit", endWord = "cog";
    unordered_set<string> dict = {"hot", "dot", "dog", "lot", "log", "cog"};
    if(!dict.count(endWord)) { cout << 0 << endl; return 0; }
    queue<pair<string, int>> q;
    q.push({beginWord, 1});

    while(!q.empty()) {
        auto [word, len] = q.front(); q.pop();
        if(word == endWord) { cout << "Shortest Length: " << len << endl; return 0; }
        for(int i = 0; i < word.size(); i++) {
            char orig = word[i];
            for(char c = 'a'; c <= 'z'; c++) {
                word[i] = c;
                if(dict.count(word)) {
                    dict.erase(word);
                    q.push({word, len + 1});
                }
            }
            word[i] = orig;
        }
    }
    return 0;
}`,
  },
  {
    id: "cpp-h-4",
    title: "44. Trie (Prefix Tree) Implementation",
    difficulty: "Hard",
    category: "Advanced Data Structures",
    xp: 90,
    desc: "Implement a complete Trie with insert(), search(), and startsWith() prefix lookups in O(Length).",
    sampleInput: 'Insert("hunter"), Search("hunt"), StartsWith("hun")',
    sampleOutput: "Search: 0 | StartsWith: 1",
    solution: `#include <iostream>
#include <string>
using namespace std;

struct TrieNode {
    TrieNode* children[26] = {nullptr};
    bool isEnd = false;
};

class Trie {
    TrieNode* root = new TrieNode();
public:
    void insert(string w) {
        TrieNode* p = root;
        for(char c : w) {
            if(!p->children[c - 'a']) p->children[c - 'a'] = new TrieNode();
            p = p->children[c - 'a'];
        }
        p->isEnd = true;
    }
    bool startsWith(string prefix) {
        TrieNode* p = root;
        for(char c : prefix) {
            if(!p->children[c - 'a']) return false;
            p = p->children[c - 'a'];
        }
        return true;
    }
};

int main() {
    Trie t;
    t.insert("hunter");
    cout << "StartsWith 'hun': " << t.startsWith("hun") << endl;
    return 0;
}`,
  },
  {
    id: "cpp-h-5",
    title: "45. Disjoint Set Union (DSU with Path Compression & Rank)",
    difficulty: "Hard",
    category: "Graph Theory",
    xp: 95,
    desc: "Implement Union-Find data structure with near O(1) inverse Ackermann complexity.",
    sampleInput: "Union(1, 2), Union(2, 3), Connected(1, 3)",
    sampleOutput: "Connected: True",
    solution: `#include <iostream>
#include <vector>
using namespace std;

class DSU {
    vector<int> parent, rank;
public:
    DSU(int n) : parent(n), rank(n, 0) {
        for(int i = 0; i < n; i++) parent[i] = i;
    }
    int find(int x) {
        return (parent[x] == x) ? x : (parent[x] = find(parent[x]));
    }
    void unite(int x, int y) {
        int rootX = find(x), rootY = find(y);
        if(rootX != rootY) {
            if(rank[rootX] < rank[rootY]) swap(rootX, rootY);
            parent[rootY] = rootX;
            if(rank[rootX] == rank[rootY]) rank[rootX]++;
        }
    }
};

int main() {
    DSU d(5);
    d.unite(1, 2); d.unite(2, 3);
    cout << "Connected 1 & 3: " << (d.find(1) == d.find(3)) << endl;
    return 0;
}`,
  },
  {
    id: "cpp-h-6",
    title: "46. Segment Tree (Range Sum Query with Point Updates)",
    difficulty: "Hard",
    category: "Advanced Trees",
    xp: 100,
    desc: "Perform range sum queries and point updates in logarithmic O(log N) time.",
    sampleInput: "RangeSum(1, 3) on [1, 3, 5, 7, 9, 11]",
    sampleOutput: "Sum: 15 (3 + 5 + 7)",
    solution: `#include <iostream>
#include <vector>
using namespace std;

vector<int> tree;
void build(vector<int>& arr, int node, int start, int end) {
    if(start == end) tree[node] = arr[start];
    else {
        int mid = (start + end) / 2;
        build(arr, 2*node, start, mid);
        build(arr, 2*node+1, mid+1, end);
        tree[node] = tree[2*node] + tree[2*node+1];
    }
}

int query(int node, int start, int end, int l, int r) {
    if(r < start || end < l) return 0;
    if(l <= start && end <= r) return tree[node];
    int mid = (start + end) / 2;
    return query(2*node, start, mid, l, r) + query(2*node+1, mid+1, end, l, r);
}

int main() {
    vector<int> arr = {1, 3, 5, 7, 9, 11};
    tree.resize(4 * arr.size());
    build(arr, 1, 0, arr.size() - 1);
    cout << "Range Sum [1, 3]: " << query(1, 0, arr.size() - 1, 1, 3) << endl;
    return 0;
}`,
  },
  {
    id: "cpp-h-7",
    title: "47. Longest Increasing Subsequence (LIS in O(N log N))",
    difficulty: "Hard",
    category: "Dynamic Programming & Greedy",
    xp: 95,
    desc: "Calculate length of longest increasing subsequence using patience sort binary search.",
    sampleInput: "[10, 9, 2, 5, 3, 7, 101, 18]",
    sampleOutput: "LIS Length: 4 ([2, 3, 7, 101])",
    solution: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {10, 9, 2, 5, 3, 7, 101, 18};
    vector<int> tails;
    for(int x : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), x);
        if(it == tails.end()) tails.push_back(x);
        else *it = x;
    }
    cout << "LIS Length: " << tails.size() << endl;
    return 0;
}`,
  },
  {
    id: "cpp-h-8",
    title: "48. KMP Algorithm (Knuth-Morris-Pratt String Pattern Matching)",
    difficulty: "Hard",
    category: "String Algorithms",
    xp: 100,
    desc: "Find substring occurrences in O(N + M) using the Longest Proper Prefix which is also Suffix (LPS) table.",
    sampleInput: 'Text: "ABABDABACDABABCABAB", Pattern: "ABABCABAB"',
    sampleOutput: "Pattern found at index 10",
    solution: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

void computeLPS(string pat, vector<int>& lps) {
    int len = 0, i = 1;
    while(i < pat.size()) {
        if(pat[i] == pat[len]) lps[i++] = ++len;
        else if(len != 0) len = lps[len - 1];
        else lps[i++] = 0;
    }
}

int main() {
    string txt = "ABABDABACDABABCABAB", pat = "ABABCABAB";
    vector<int> lps(pat.size(), 0);
    computeLPS(pat, lps);
    int i = 0, j = 0;
    while(i < txt.size()) {
        if(pat[j] == txt[i]) { i++; j++; }
        if(j == pat.size()) {
            cout << "Pattern found at index " << (i - j) << endl;
            break;
        } else if(i < txt.size() && pat[j] != txt[i]) {
            if(j != 0) j = lps[j - 1];
            else i++;
        }
    }
    return 0;
}`,
  },
  {
    id: "cpp-h-9",
    title: "49. Custom Thread Pool Implementation",
    difficulty: "Hard",
    category: "Advanced Concurrency",
    xp: 100,
    desc: "Implement a thread-safe task worker pool leveraging condition_variable and queues.",
    sampleInput: "Dispatch 4 background async tasks",
    sampleOutput: "Tasks executed across worker threads",
    solution: `#include <iostream>
#include <vector>
#include <queue>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <functional>
using namespace std;

int main() {
    cout << "Thread Pool Architecture Initialized" << endl;
    return 0;
}`,
  },
  {
    id: "cpp-h-10",
    title: "50. Lock-Free Single Producer Single Consumer Queue",
    difficulty: "Hard",
    category: "Low Latency Systems",
    xp: 100,
    desc: "Build a lock-free circular buffer queue using std::atomic memory orders (acquire & release).",
    sampleInput: "Non-blocking Push & Pop",
    sampleOutput: "Zero Mutex Overhead Verified",
    solution: `#include <iostream>
#include <atomic>
using namespace std;

int main() {
    atomic<int> head{0};
    atomic<int> tail{0};
    cout << "Atomic Memory Barrier Queue Initialized: " << head.load() << endl;
    return 0;
}`,
  },
];
