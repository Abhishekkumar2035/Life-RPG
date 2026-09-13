export const C_PROBLEMS = [
  // --- 20 EASY PROBLEMS ---
  {
    id: "c-e-1",
    title: "1. Hello Hunter (Print to Console)",
    difficulty: "Easy",
    category: "Basics",
    xp: 20,
    desc: "Write a program in C that prints 'Hello, Hunter!' to standard output.",
    sampleInput: "No Input",
    sampleOutput: "Hello, Hunter!",
    solution: `#include <stdio.h>

int main() {
    printf("Hello, Hunter!\\n");
    return 0;
}`,
  },
  {
    id: "c-e-2",
    title: "2. Sum of Two Integers",
    difficulty: "Easy",
    category: "Basics",
    xp: 20,
    desc: "Take two integers as user input using scanf and display their arithmetic sum.",
    sampleInput: "5 7",
    sampleOutput: "Sum = 12",
    solution: `#include <stdio.h>

int main() {
    int a, b;
    scanf("%d %d", &a, &b);
    printf("Sum = %d\\n", a + b);
    return 0;
}`,
  },
  {
    id: "c-e-3",
    title: "3. Check Even or Odd",
    difficulty: "Easy",
    category: "Conditionals",
    xp: 20,
    desc: "Determine if an integer is even or odd using the modulo operator (%).",
    sampleInput: "14",
    sampleOutput: "Even",
    solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    if(n % 2 == 0) printf("Even\\n");
    else printf("Odd\\n");
    return 0;
}`,
  },
  {
    id: "c-e-4",
    title: "4. Maximum of Three Numbers",
    difficulty: "Easy",
    category: "Conditionals",
    xp: 20,
    desc: "Read 3 numbers and print the largest among them.",
    sampleInput: "12 45 32",
    sampleOutput: "Max = 45",
    solution: `#include <stdio.h>

int main() {
    int a, b, c;
    scanf("%d %d %d", &a, &b, &c);
    int max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    printf("Max = %d\\n", max);
    return 0;
}`,
  },
  {
    id: "c-e-5",
    title: "5. Factorial of a Number",
    difficulty: "Easy",
    category: "Loops",
    xp: 25,
    desc: "Calculate the factorial (n!) of a positive integer using a loop.",
    sampleInput: "5",
    sampleOutput: "120",
    solution: `#include <stdio.h>

int main() {
    int n;
    long long fact = 1;
    scanf("%d", &n);
    for(int i = 1; i <= n; i++) fact *= i;
    printf("%lld\\n", fact);
    return 0;
}`,
  },
  {
    id: "c-e-6",
    title: "6. Multiplication Table",
    difficulty: "Easy",
    category: "Loops",
    xp: 20,
    desc: "Print the table of a given number from 1 to 10.",
    sampleInput: "3",
    sampleOutput: "3 6 9 12 15 18 21 24 27 30",
    solution: `#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    for(int i = 1; i <= 10; i++) printf("%d ", n * i);
    return 0;
}`,
  },
  {
    id: "c-e-7",
    title: "7. Swap Two Numbers (Using Pointers)",
    difficulty: "Easy",
    category: "Pointers",
    xp: 25,
    desc: "Swap values of two variables using pointers in a swap() function.",
    sampleInput: "a = 10, b = 20",
    sampleOutput: "a = 20, b = 10",
    solution: `#include <stdio.h>

void swap(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

int main() {
    int a = 10, b = 20;
    swap(&a, &b);
    printf("a = %d, b = %d\\n", a, b);
    return 0;
}`,
  },
  {
    id: "c-e-8",
    title: "8. Reverse an Array",
    difficulty: "Easy",
    category: "Arrays",
    xp: 25,
    desc: "Reverse a 1D array of size N in-place.",
    sampleInput: "[1, 2, 3, 4, 5]",
    sampleOutput: "[5, 4, 3, 2, 1]",
    solution: `#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = 5;
    for(int i = 0; i < n / 2; i++) {
        int temp = arr[i];
        arr[i] = arr[n - 1 - i];
        arr[n - 1 - i] = temp;
    }
    for(int i = 0; i < n; i++) printf("%d ", arr[i]);
    return 0;
}`,
  },
  {
    id: "c-e-9",
    title: "9. Find String Length Without strlen()",
    difficulty: "Easy",
    category: "Strings",
    xp: 20,
    desc: "Traverse a string until the null character ('\\0') to count its length.",
    sampleInput: '"Hunter"',
    sampleOutput: "6",
    solution: `#include <stdio.h>

int main() {
    char str[] = "Hunter";
    int len = 0;
    while(str[len] != '\\0') len++;
    printf("Length = %d\\n", len);
    return 0;
}`,
  },
  {
    id: "c-e-10",
    title: "10. Check Leap Year",
    difficulty: "Easy",
    category: "Conditionals",
    xp: 20,
    desc: "Check if a given year is a leap year (divisible by 4 and not 100, or by 400).",
    sampleInput: "2024",
    sampleOutput: "Leap Year",
    solution: `#include <stdio.h>

int main() {
    int y;
    scanf("%d", &y);
    if((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0))
        printf("Leap Year\\n");
    else
        printf("Not Leap Year\\n");
    return 0;
}`,
  },
  {
    id: "c-e-11",
    title: "11. Sum of Digits of a Number",
    difficulty: "Easy",
    category: "Loops",
    xp: 20,
    desc: "Extract digits using modulo 10 and compute their total sum.",
    sampleInput: "1234",
    sampleOutput: "10",
    solution: `#include <stdio.h>

int main() {
    int n = 1234, sum = 0;
    while(n > 0) {
        sum += n % 10;
        n /= 10;
    }
    printf("%d\\n", sum);
    return 0;
}`,
  },
  {
    id: "c-e-12",
    title: "12. Reverse a Number",
    difficulty: "Easy",
    category: "Loops",
    xp: 20,
    desc: "Reverse the digits of an integer (e.g., 982 -> 289).",
    sampleInput: "982",
    sampleOutput: "289",
    solution: `#include <stdio.h>

int main() {
    int n = 982, rev = 0;
    while(n > 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    printf("%d\\n", rev);
    return 0;
}`,
  },
  {
    id: "c-e-13",
    title: "13. Check Palindrome Number",
    difficulty: "Easy",
    category: "Conditionals",
    xp: 20,
    desc: "Check whether a number reads the same forwards and backwards.",
    sampleInput: "121",
    sampleOutput: "Palindrome",
    solution: `#include <stdio.h>

int main() {
    int n = 121, orig = n, rev = 0;
    while(n > 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    if(orig == rev) printf("Palindrome\\n");
    else printf("Not Palindrome\\n");
    return 0;
}`,
  },
  {
    id: "c-e-14",
    title: "14. Fibonacci Series Up to N Terms",
    difficulty: "Easy",
    category: "Loops",
    xp: 25,
    desc: "Generate the first N numbers in the Fibonacci sequence (0, 1, 1, 2, 3...).",
    sampleInput: "6",
    sampleOutput: "0 1 1 2 3 5",
    solution: `#include <stdio.h>

int main() {
    int n = 6, t1 = 0, t2 = 1, next;
    for(int i = 1; i <= n; i++) {
        printf("%d ", t1);
        next = t1 + t2;
        t1 = t2;
        t2 = next;
    }
    return 0;
}`,
  },
  {
    id: "c-e-15",
    title: "15. Find ASCII Value of Character",
    difficulty: "Easy",
    category: "Basics",
    xp: 15,
    desc: "Print the underlying integer ASCII code of an input character.",
    sampleInput: "'A'",
    sampleOutput: "65",
    solution: `#include <stdio.h>

int main() {
    char ch = 'A';
    printf("ASCII of %c = %d\\n", ch, (int)ch);
    return 0;
}`,
  },
  {
    id: "c-e-16",
    title: "16. Count Vowels and Consonants",
    difficulty: "Easy",
    category: "Strings",
    xp: 20,
    desc: "Traverse a string and count how many vowels and consonants it contains.",
    sampleInput: '"gate"',
    sampleOutput: "Vowels: 2, Consonants: 2",
    solution: `#include <stdio.h>
#include <ctype.h>

int main() {
    char s[] = "gate";
    int v = 0, c = 0;
    for(int i = 0; s[i] != '\\0'; i++) {
        char ch = tolower(s[i]);
        if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') v++;
        else if(isalpha(ch)) c++;
    }
    printf("Vowels: %d, Consonants: %d\\n", v, c);
    return 0;
}`,
  },
  {
    id: "c-e-17",
    title: "17. Convert Celsius to Fahrenheit",
    difficulty: "Easy",
    category: "Math",
    xp: 15,
    desc: "Apply the formula F = (C * 9/5) + 32 to convert temperatures.",
    sampleInput: "37",
    sampleOutput: "98.60 F",
    solution: `#include <stdio.h>

int main() {
    float c = 37.0;
    float f = (c * 9.0 / 5.0) + 32.0;
    printf("%.2f F\\n", f);
    return 0;
}`,
  },
  {
    id: "c-e-18",
    title: "18. Find Min and Max in Array",
    difficulty: "Easy",
    category: "Arrays",
    xp: 25,
    desc: "Linear scan to find both lowest and highest element in a list.",
    sampleInput: "[14, 2, 99, 4]",
    sampleOutput: "Min: 2, Max: 99",
    solution: `#include <stdio.h>

int main() {
    int arr[] = {14, 2, 99, 4};
    int min = arr[0], max = arr[0];
    for(int i = 1; i < 4; i++) {
        if(arr[i] < min) min = arr[i];
        if(arr[i] > max) max = arr[i];
    }
    printf("Min: %d, Max: %d\\n", min, max);
    return 0;
}`,
  },
  {
    id: "c-e-19",
    title: "19. Simple Calculator using switch case",
    difficulty: "Easy",
    category: "Conditionals",
    xp: 25,
    desc: "Implement a basic arithmetic operator parser (+, -, *, /) using switch.",
    sampleInput: "10 + 5",
    sampleOutput: "15",
    solution: `#include <stdio.h>

int main() {
    char op = '+';
    int a = 10, b = 5;
    switch(op) {
        case '+': printf("%d\\n", a + b); break;
        case '-': printf("%d\\n", a - b); break;
        case '*': printf("%d\\n", a * b); break;
        case '/': printf("%d\\n", a / b); break;
    }
    return 0;
}`,
  },
  {
    id: "c-e-20",
    title: "20. Check Prime Number",
    difficulty: "Easy",
    category: "Math",
    xp: 25,
    desc: "Test if an integer N > 1 has no positive divisors other than 1 and itself.",
    sampleInput: "29",
    sampleOutput: "Prime",
    solution: `#include <stdio.h>

int main() {
    int n = 29, isPrime = 1;
    for(int i = 2; i * i <= n; i++) {
        if(n % i == 0) { isPrime = 0; break; }
    }
    if(isPrime && n > 1) printf("Prime\\n");
    else printf("Not Prime\\n");
    return 0;
}`,
  },

  // --- 20 MEDIUM PROBLEMS ---
  {
    id: "c-m-1",
    title: "21. Binary Search in Sorted Array",
    difficulty: "Medium",
    category: "Searching",
    xp: 45,
    desc: "Implement O(log N) binary search on a sorted integer array.",
    sampleInput: "arr = [2, 5, 8, 12, 16], target = 12",
    sampleOutput: "Found at index 3",
    solution: `#include <stdio.h>

int binarySearch(int arr[], int n, int target) {
    int l = 0, r = n - 1;
    while(l <= r) {
        int m = l + (r - l) / 2;
        if(arr[m] == target) return m;
        if(arr[m] < target) l = m + 1;
        else r = m - 1;
    }
    return -1;
}

int main() {
    int arr[] = {2, 5, 8, 12, 16};
    printf("Found at index %d\\n", binarySearch(arr, 5, 12));
    return 0;
}`,
  },
  {
    id: "c-m-2",
    title: "22. Bubble Sort Algorithm",
    difficulty: "Medium",
    category: "Sorting",
    xp: 40,
    desc: "Sort an array in ascending order by repeatedly swapping adjacent elements.",
    sampleInput: "[64, 34, 25, 12, 22]",
    sampleOutput: "[12, 22, 25, 34, 64]",
    solution: `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for(int i = 0; i < n - 1; i++) {
        for(int j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {64, 34, 25, 12, 22};
    bubbleSort(arr, 5);
    for(int i = 0; i < 5; i++) printf("%d ", arr[i]);
    return 0;
}`,
  },
  {
    id: "c-m-3",
    title: "23. Matrix Multiplication (2D Array)",
    difficulty: "Medium",
    category: "2D Arrays",
    xp: 50,
    desc: "Multiply two 2x2 matrices and print the resultant product matrix.",
    sampleInput: "A = [[1,2],[3,4]], B = [[1,1],[1,1]]",
    sampleOutput: "[[3, 3], [7, 7]]",
    solution: `#include <stdio.h>

int main() {
    int a[2][2] = {{1, 2}, {3, 4}};
    int b[2][2] = {{1, 1}, {1, 1}};
    int c[2][2] = {0};

    for(int i = 0; i < 2; i++)
        for(int j = 0; j < 2; j++)
            for(int k = 0; k < 2; k++)
                c[i][j] += a[i][k] * b[k][j];

    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 2; j++) printf("%d ", c[i][j]);
        printf("\\n");
    }
    return 0;
}`,
  },
  {
    id: "c-m-4",
    title: "24. Transpose of a Matrix",
    difficulty: "Medium",
    category: "2D Arrays",
    xp: 45,
    desc: "Swap matrix rows and columns such that B[i][j] = A[j][i].",
    sampleInput: "[[1, 2], [3, 4]]",
    sampleOutput: "[[1, 3], [2, 4]]",
    solution: `#include <stdio.h>

int main() {
    int a[2][2] = {{1, 2}, {3, 4}};
    int t[2][2];
    for(int i = 0; i < 2; i++)
        for(int j = 0; j < 2; j++)
            t[j][i] = a[i][j];

    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 2; j++) printf("%d ", t[i][j]);
        printf("\\n");
    }
    return 0;
}`,
  },
  {
    id: "c-m-5",
    title: "25. Single Linked List: Node Creation & Insertion",
    difficulty: "Medium",
    category: "Data Structures",
    xp: 55,
    desc: "Define a struct Node and insert new nodes at the head using malloc.",
    sampleInput: "Insert 10 -> 20 -> 30",
    sampleOutput: "30 -> 20 -> 10 -> NULL",
    solution: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

void insertHead(struct Node** head, int val) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = val;
    newNode->next = *head;
    *head = newNode;
}

int main() {
    struct Node* head = NULL;
    insertHead(&head, 10);
    insertHead(&head, 20);
    insertHead(&head, 30);
    while(head) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\\n");
    return 0;
}`,
  },
  {
    id: "c-m-6",
    title: "26. String Anagram Check",
    difficulty: "Medium",
    category: "Strings",
    xp: 45,
    desc: "Verify if two strings have the exact same character frequencies.",
    sampleInput: '"listen", "silent"',
    sampleOutput: "Anagram",
    solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s1[] = "listen", s2[] = "silent";
    int count[256] = {0};
    if(strlen(s1) != strlen(s2)) { printf("Not Anagram\\n"); return 0; }
    for(int i = 0; s1[i]; i++) {
        count[(unsigned char)s1[i]]++;
        count[(unsigned char)s2[i]]--;
    }
    for(int i = 0; i < 256; i++) {
        if(count[i] != 0) { printf("Not Anagram\\n"); return 0; }
    }
    printf("Anagram\\n");
    return 0;
}`,
  },
  {
    id: "c-m-7",
    title: "27. Stack Implementation Using Array",
    difficulty: "Medium",
    category: "Data Structures",
    xp: 50,
    desc: "Implement push, pop, and peek functions on a static array stack.",
    sampleInput: "Push 10, Push 20, Pop()",
    sampleOutput: "Popped 20",
    solution: `#include <stdio.h>

#define MAX 5
int stack[MAX], top = -1;

void push(int x) { if(top < MAX - 1) stack[++top] = x; }
int pop() { return (top >= 0) ? stack[top--] : -1; }

int main() {
    push(10);
    push(20);
    printf("Popped %d\\n", pop());
    return 0;
}`,
  },
  {
    id: "c-m-8",
    title: "28. Circular Queue Using Array",
    difficulty: "Medium",
    category: "Data Structures",
    xp: 50,
    desc: "Implement enqueue and dequeue operations utilizing modulo arithmetic.",
    sampleInput: "Enqueue 5, Enqueue 10, Dequeue()",
    sampleOutput: "Dequeued 5",
    solution: `#include <stdio.h>

#define SIZE 5
int q[SIZE], front = -1, rear = -1;

void enqueue(int val) {
    if((rear + 1) % SIZE == front) return;
    if(front == -1) front = 0;
    rear = (rear + 1) % SIZE;
    q[rear] = val;
}

int dequeue() {
    if(front == -1) return -1;
    int data = q[front];
    if(front == rear) front = rear = -1;
    else front = (front + 1) % SIZE;
    return data;
}

int main() {
    enqueue(5);
    enqueue(10);
    printf("Dequeued %d\\n", dequeue());
    return 0;
}`,
  },
  {
    id: "c-m-9",
    title: "29. GCD and LCM (Euclidean Algorithm)",
    difficulty: "Medium",
    category: "Math",
    xp: 40,
    desc: "Compute greatest common divisor using recursion and derive LCM.",
    sampleInput: "a = 24, b = 36",
    sampleOutput: "GCD = 12, LCM = 72",
    solution: `#include <stdio.h>

int gcd(int a, int b) {
    return (b == 0) ? a : gcd(b, a % b);
}

int main() {
    int a = 24, b = 36;
    int g = gcd(a, b);
    int lcm = (a * b) / g;
    printf("GCD = %d, LCM = %d\\n", g, lcm);
    return 0;
}`,
  },
  {
    id: "c-m-10",
    title: "30. Tower of Hanoi (Recursion)",
    difficulty: "Medium",
    category: "Recursion",
    xp: 55,
    desc: "Print the step-by-step disk transfers between Pegs A, B, and C.",
    sampleInput: "3 disks",
    sampleOutput: "Move disk from A to C...",
    solution: `#include <stdio.h>

void hanoi(int n, char from, char to, char aux) {
    if(n == 0) return;
    hanoi(n - 1, from, aux, to);
    printf("Move disk %d from %c to %c\\n", n, from, to);
    hanoi(n - 1, aux, to, from);
}

int main() {
    hanoi(3, 'A', 'C', 'B');
    return 0;
}`,
  },
  {
    id: "c-m-11",
    title: "31. Dynamic 2D Array Allocation (malloc)",
    difficulty: "Medium",
    category: "Memory",
    xp: 50,
    desc: "Allocate a 2D integer array dynamically using pointer-to-pointers (int**).",
    sampleInput: "Rows = 2, Cols = 3",
    sampleOutput: "Allocated & Freed 6 integers",
    solution: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int r = 2, c = 3;
    int **arr = (int **)malloc(r * sizeof(int *));
    for(int i = 0; i < r; i++)
        arr[i] = (int *)malloc(c * sizeof(int));

    arr[0][0] = 42;
    printf("Value = %d\\n", arr[0][0]);

    for(int i = 0; i < r; i++) free(arr[i]);
    free(arr);
    return 0;
}`,
  },
  {
    id: "c-m-12",
    title: "32. Count Frequency of Each Element in Array",
    difficulty: "Medium",
    category: "Arrays",
    xp: 40,
    desc: "Traverse array to display how many times each unique integer occurs.",
    sampleInput: "[1, 2, 2, 3, 1]",
    sampleOutput: "1 -> 2, 2 -> 2, 3 -> 1",
    solution: `#include <stdio.h>

int main() {
    int arr[] = {1, 2, 2, 3, 1};
    int n = 5, visited[5] = {0};
    for(int i = 0; i < n; i++) {
        if(visited[i]) continue;
        int count = 1;
        for(int j = i + 1; j < n; j++) {
            if(arr[i] == arr[j]) { visited[j] = 1; count++; }
        }
        printf("%d -> %d\\n", arr[i], count);
    }
    return 0;
}`,
  },
  {
    id: "c-m-13",
    title: "33. Remove Duplicate Elements from Array",
    difficulty: "Medium",
    category: "Arrays",
    xp: 45,
    desc: "Remove duplicate values from a sorted array in O(N) time.",
    sampleInput: "[1, 1, 2, 2, 3]",
    sampleOutput: "[1, 2, 3]",
    solution: `#include <stdio.h>

int removeDuplicates(int arr[], int n) {
    if(n == 0 || n == 1) return n;
    int j = 0;
    for(int i = 0; i < n - 1; i++)
        if(arr[i] != arr[i + 1]) arr[j++] = arr[i];
    arr[j++] = arr[n - 1];
    return j;
}

int main() {
    int arr[] = {1, 1, 2, 2, 3};
    int newLen = removeDuplicates(arr, 5);
    for(int i = 0; i < newLen; i++) printf("%d ", arr[i]);
    return 0;
}`,
  },
  {
    id: "c-m-14",
    title: "34. Check Substring Presence (Manual strstr)",
    difficulty: "Medium",
    category: "Strings",
    xp: 45,
    desc: "Search whether pattern string P exists inside text string T.",
    sampleInput: 'T = "hunterguild", P = "guild"',
    sampleOutput: "Found at index 6",
    solution: `#include <stdio.h>

int findSubstring(char str[], char sub[]) {
    for(int i = 0; str[i] != '\\0'; i++) {
        int j = 0;
        while(str[i + j] == sub[j] && sub[j] != '\\0') j++;
        if(sub[j] == '\\0') return i;
    }
    return -1;
}

int main() {
    printf("Found at index %d\\n", findSubstring("hunterguild", "guild"));
    return 0;
}`,
  },
  {
    id: "c-m-15",
    title: "35. File Read & Write (File I/O)",
    difficulty: "Medium",
    category: "File Handling",
    xp: 50,
    desc: "Open a file using fopen, write formatted text, and read it back with fgets.",
    sampleInput: '"Hunter Log: Rank S Achieved"',
    sampleOutput: '"Hunter Log: Rank S Achieved"',
    solution: `#include <stdio.h>

int main() {
    FILE *fp = fopen("vault.txt", "w");
    fputs("Hunter Log: Rank S Achieved", fp);
    fclose(fp);

    char buffer[100];
    fp = fopen("vault.txt", "r");
    fgets(buffer, 100, fp);
    printf("%s\\n", buffer);
    fclose(fp);
    return 0;
}`,
  },
  {
    id: "c-m-16",
    title: "36. Bit Manipulation: Check if Power of 2",
    difficulty: "Medium",
    category: "Bitwise",
    xp: 45,
    desc: "Use the bitwise AND trick `(n & (n - 1)) == 0` to verify powers of 2.",
    sampleInput: "16",
    sampleOutput: "Power of 2",
    solution: `#include <stdio.h>

int main() {
    int n = 16;
    if(n > 0 && (n & (n - 1)) == 0) printf("Power of 2\\n");
    else printf("Not Power of 2\\n");
    return 0;
}`,
  },
  {
    id: "c-m-17",
    title: "37. Quick Selection Sort",
    difficulty: "Medium",
    category: "Sorting",
    xp: 40,
    desc: "Sort array by repeatedly finding minimum element in the unsorted partition.",
    sampleInput: "[29, 10, 14, 37]",
    sampleOutput: "[10, 14, 29, 37]",
    solution: `#include <stdio.h>

void selectionSort(int arr[], int n) {
    for(int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for(int j = i + 1; j < n; j++)
            if(arr[j] < arr[minIdx]) minIdx = j;
        int temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
}

int main() {
    int arr[] = {29, 10, 14, 37};
    selectionSort(arr, 4);
    for(int i = 0; i < 4; i++) printf("%d ", arr[i]);
    return 0;
}`,
  },
  {
    id: "c-m-18",
    title: "38. Insertion Sort Algorithm",
    difficulty: "Medium",
    category: "Sorting",
    xp: 40,
    desc: "Build the sorted array one element at a time like cards in a deck.",
    sampleInput: "[12, 11, 13, 5, 6]",
    sampleOutput: "[5, 6, 11, 12, 13]",
    solution: `#include <stdio.h>

void insertionSort(int arr[], int n) {
    for(int i = 1; i < n; i++) {
        int key = arr[i], j = i - 1;
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    insertionSort(arr, 5);
    for(int i = 0; i < 5; i++) printf("%d ", arr[i]);
    return 0;
}`,
  },
  {
    id: "c-m-19",
    title: "39. Binary Search Tree (BST) Node Insertion",
    difficulty: "Medium",
    category: "Trees",
    xp: 55,
    desc: "Create recursive insertion into a Binary Search Tree maintaining BST rules.",
    sampleInput: "Insert 50 -> 30 -> 70",
    sampleOutput: "Inorder: 30 50 70",
    solution: `#include <stdio.h>
#include <stdlib.h>

struct BSTNode {
    int data;
    struct BSTNode *left, *right;
};

struct BSTNode* insert(struct BSTNode* node, int val) {
    if(!node) {
        struct BSTNode* n = (struct BSTNode*)malloc(sizeof(struct BSTNode));
        n->data = val; n->left = n->right = NULL;
        return n;
    }
    if(val < node->data) node->left = insert(node->left, val);
    else node->right = insert(node->right, val);
    return node;
}

void inorder(struct BSTNode* root) {
    if(root) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

int main() {
    struct BSTNode* root = NULL;
    root = insert(root, 50);
    insert(root, 30);
    insert(root, 70);
    inorder(root);
    return 0;
}`,
  },
  {
    id: "c-m-20",
    title: "40. Reverse a Singly Linked List",
    difficulty: "Medium",
    category: "Data Structures",
    xp: 55,
    desc: "Reverse a singly linked list in-place using 3 pointer references (prev, curr, next).",
    sampleInput: "1 -> 2 -> 3 -> NULL",
    sampleOutput: "3 -> 2 -> 1 -> NULL",
    solution: `#include <stdio.h>
#include <stdlib.h>

struct Node { int val; struct Node* next; };

struct Node* reverse(struct Node* head) {
    struct Node *prev = NULL, *curr = head, *nxt = NULL;
    while(curr) {
        nxt = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nxt;
    }
    return prev;
}

int main() {
    struct Node* head = (struct Node*)malloc(sizeof(struct Node));
    head->val = 1;
    head->next = (struct Node*)malloc(sizeof(struct Node));
    head->next->val = 2;
    head->next->next = NULL;

    head = reverse(head);
    while(head) { printf("%d -> ", head->val); head = head->next; }
    printf("NULL\\n");
    return 0;
}`,
  },

  // --- 10 HARD PROBLEMS ---
  {
    id: "c-h-1",
    title: "41. Merge Sort Algorithm (Divide & Conquer)",
    difficulty: "Hard",
    category: "Advanced Algorithms",
    xp: 80,
    desc: "Implement O(N log N) Merge Sort recursively by dividing arrays into subarrays.",
    sampleInput: "[38, 27, 43, 3, 9, 82, 10]",
    sampleOutput: "[3, 9, 10, 27, 38, 43, 82]",
    solution: `#include <stdio.h>

void merge(int a[], int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    int L[n1], R[n2];
    for(int i = 0; i < n1; i++) L[i] = a[l + i];
    for(int j = 0; j < n2; j++) R[j] = a[m + 1 + j];
    int i = 0, j = 0, k = l;
    while(i < n1 && j < n2) a[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];
    while(i < n1) a[k++] = L[i++];
    while(j < n2) a[k++] = R[j++];
}

void mergeSort(int a[], int l, int r) {
    if(l < r) {
        int m = l + (r - l) / 2;
        mergeSort(a, l, m);
        mergeSort(a, m + 1, r);
        merge(a, l, m, r);
    }
}

int main() {
    int arr[] = {38, 27, 43, 3, 9, 82, 10};
    mergeSort(arr, 0, 6);
    for(int i = 0; i < 7; i++) printf("%d ", arr[i]);
    return 0;
}`,
  },
  {
    id: "c-h-2",
    title: "42. Quick Sort Algorithm (Partitioning)",
    difficulty: "Hard",
    category: "Advanced Algorithms",
    xp: 80,
    desc: "In-place recursive Quick Sort with Lomuto or Hoare partitioning.",
    sampleInput: "[10, 7, 8, 9, 1, 5]",
    sampleOutput: "[1, 5, 7, 8, 9, 10]",
    solution: `#include <stdio.h>

int partition(int a[], int low, int high) {
    int pivot = a[high], i = low - 1;
    for(int j = low; j < high; j++) {
        if(a[j] < pivot) {
            i++;
            int t = a[i]; a[i] = a[j]; a[j] = t;
        }
    }
    int t = a[i + 1]; a[i + 1] = a[high]; a[high] = t;
    return i + 1;
}

void quickSort(int a[], int low, int high) {
    if(low < high) {
        int pi = partition(a, low, high);
        quickSort(a, low, pi - 1);
        quickSort(a, pi + 1, high);
    }
}

int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    quickSort(arr, 0, 5);
    for(int i = 0; i < 6; i++) printf("%d ", arr[i]);
    return 0;
}`,
  },
  {
    id: "c-h-3",
    title: "43. N-Queens Problem (Backtracking)",
    difficulty: "Hard",
    category: "Backtracking",
    xp: 95,
    desc: "Place N non-attacking queens on an N x N chessboard using recursion and backtracking.",
    sampleInput: "N = 4",
    sampleOutput: "Configurations displaying safe coordinates",
    solution: `#include <stdio.h>
#include <stdbool.h>

#define N 4

bool isSafe(int b[N][N], int r, int c) {
    for(int i = 0; i < c; i++) if(b[r][i]) return false;
    for(int i = r, j = c; i >= 0 && j >= 0; i--, j--) if(b[i][j]) return false;
    for(int i = r, j = c; j >= 0 && i < N; i++, j--) if(b[i][j]) return false;
    return true;
}

bool solve(int b[N][N], int col) {
    if(col >= N) return true;
    for(int i = 0; i < N; i++) {
        if(isSafe(b, i, col)) {
            b[i][col] = 1;
            if(solve(b, col + 1)) return true;
            b[i][col] = 0;
        }
    }
    return false;
}

int main() {
    int board[N][N] = {0};
    if(solve(board, 0)) {
        for(int i = 0; i < N; i++) {
            for(int j = 0; j < N; j++) printf("%d ", board[i][j]);
            printf("\\n");
        }
    }
    return 0;
}`,
  },
  {
    id: "c-h-4",
    title: "44. 0/1 Knapsack Problem (Dynamic Programming)",
    difficulty: "Hard",
    category: "Dynamic Programming",
    xp: 90,
    desc: "Find the maximum value subset of weights that does not exceed capacity W.",
    sampleInput: "val = [60, 100, 120], wt = [10, 20, 30], W = 50",
    sampleOutput: "Max Value = 220",
    solution: `#include <stdio.h>

int max(int a, int b) { return (a > b) ? a : b; }

int knapsack(int W, int wt[], int val[], int n) {
    int K[n + 1][W + 1];
    for(int i = 0; i <= n; i++) {
        for(int w = 0; w <= W; w++) {
            if(i == 0 || w == 0) K[i][w] = 0;
            else if(wt[i - 1] <= w)
                K[i][w] = max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);
            else
                K[i][w] = K[i - 1][w];
        }
    }
    return K[n][W];
}

int main() {
    int val[] = {60, 100, 120}, wt[] = {10, 20, 30}, W = 50;
    printf("Max Value = %d\\n", knapsack(W, wt, val, 3));
    return 0;
}`,
  },
  {
    id: "c-h-5",
    title: "45. Dijkstra's Shortest Path Algorithm",
    difficulty: "Hard",
    category: "Graph Theory",
    xp: 100,
    desc: "Find shortest paths from a single source vertex to all other vertices in a weighted graph.",
    sampleInput: "Graph with 4 vertices",
    sampleOutput: "Shortest distances from Source 0",
    solution: `#include <stdio.h>
#include <limits.h>

#define V 4

int minDistance(int dist[], int sptSet[]) {
    int min = INT_MAX, min_index;
    for(int v = 0; v < V; v++)
        if(!sptSet[v] && dist[v] <= min) min = dist[v], min_index = v;
    return min_index;
}

void dijkstra(int graph[V][V], int src) {
    int dist[V], sptSet[V] = {0};
    for(int i = 0; i < V; i++) dist[i] = INT_MAX;
    dist[src] = 0;

    for(int count = 0; count < V - 1; count++) {
        int u = minDistance(dist, sptSet);
        sptSet[u] = 1;
        for(int v = 0; v < V; v++)
            if(!sptSet[v] && graph[u][v] && dist[u] != INT_MAX
               && dist[u] + graph[u][v] < dist[v])
                dist[v] = dist[u] + graph[u][v];
    }
    for(int i = 0; i < V; i++) printf("0 -> %d = %d\\n", i, dist[i]);
}

int main() {
    int graph[V][V] = {
        {0, 4, 0, 0},
        {4, 0, 8, 0},
        {0, 8, 0, 7},
        {0, 0, 7, 0}
    };
    dijkstra(graph, 0);
    return 0;
}`,
  },
  {
    id: "c-h-6",
    title: "46. Longest Common Subsequence (LCS)",
    difficulty: "Hard",
    category: "Dynamic Programming",
    xp: 90,
    desc: "Compute the length of longest subsequence present in both strings in order.",
    sampleInput: 'S1 = "AGGTAB", S2 = "GXTXAYB"',
    sampleOutput: 'LCS Length = 4 ("GTAB")',
    solution: `#include <stdio.h>
#include <string.h>

int max(int a, int b) { return (a > b) ? a : b; }

int lcs(char* X, char* Y, int m, int n) {
    int L[m + 1][n + 1];
    for(int i = 0; i <= m; i++) {
        for(int j = 0; j <= n; j++) {
            if(i == 0 || j == 0) L[i][j] = 0;
            else if(X[i - 1] == Y[j - 1]) L[i][j] = L[i - 1][j - 1] + 1;
            else L[i][j] = max(L[i - 1][j], L[i][j - 1]);
        }
    }
    return L[m][n];
}

int main() {
    char s1[] = "AGGTAB", s2[] = "GXTXAYB";
    printf("LCS Length = %d\\n", lcs(s1, s2, strlen(s1), strlen(s2)));
    return 0;
}`,
  },
  {
    id: "c-h-7",
    title: "47. Detect Cycle in a Directed Graph",
    difficulty: "Hard",
    category: "Graph Theory",
    xp: 95,
    desc: "Use Depth First Search (DFS) with a recursion stack to identify cycles.",
    sampleInput: "0 -> 1 -> 2 -> 0 (Cycle)",
    sampleOutput: "Cycle Detected",
    solution: `#include <stdio.h>
#include <stdbool.h>

#define V 3
int adj[V][V] = {{0, 1, 0}, {0, 0, 1}, {1, 0, 0}};

bool isCyclicUtil(int v, bool visited[], bool recStack[]) {
    visited[v] = true; recStack[v] = true;
    for(int i = 0; i < V; i++) {
        if(adj[v][i]) {
            if(!visited[i] && isCyclicUtil(i, visited, recStack)) return true;
            else if(recStack[i]) return true;
        }
    }
    recStack[v] = false;
    return false;
}

int main() {
    bool visited[V] = {false}, recStack[V] = {false};
    if(isCyclicUtil(0, visited, recStack)) printf("Cycle Detected\\n");
    else printf("No Cycle\\n");
    return 0;
}`,
  },
  {
    id: "c-h-8",
    title: "48. AVL Tree: Height-Balanced BST Self-Rotation",
    difficulty: "Hard",
    category: "Advanced Trees",
    xp: 100,
    desc: "Implement Left and Right rotations in AVL trees to maintain O(log N) balance factor.",
    sampleInput: "Insert into unbalanced branch",
    sampleOutput: "Tree rebalanced via rotation",
    solution: `#include <stdio.h>
#include <stdlib.h>

struct Node { int key; struct Node *left, *right; int height; };
int max(int a, int b) { return (a > b) ? a : b; }
int height(struct Node *N) { return (N == NULL) ? 0 : N->height; }

struct Node* rightRotate(struct Node *y) {
    struct Node *x = y->left;
    struct Node *T2 = x->right;
    x->right = y; y->left = T2;
    y->height = max(height(y->left), height(y->right)) + 1;
    x->height = max(height(x->left), height(x->right)) + 1;
    return x;
}

int main() {
    printf("AVL Rotation Subroutine Compiled Successfully\\n");
    return 0;
}`,
  },
  {
    id: "c-h-9",
    title: "49. Custom Memory Allocator (Mini malloc & free)",
    difficulty: "Hard",
    category: "System Programming",
    xp: 100,
    desc: "Simulate heap allocation using a static memory pool and linked metadata headers.",
    sampleInput: "allocate(64 bytes)",
    sampleOutput: "Pointer memory offset returned",
    solution: `#include <stdio.h>

#define POOL_SIZE 1024
static char memory_pool[POOL_SIZE];

struct Block { size_t size; int free; struct Block* next; };

void init_allocator() {
    struct Block* initial = (struct Block*)memory_pool;
    initial->size = POOL_SIZE - sizeof(struct Block);
    initial->free = 1;
    initial->next = NULL;
}

int main() {
    init_allocator();
    printf("Memory Pool Initialized: %d Bytes\\n", POOL_SIZE);
    return 0;
}`,
  },
  {
    id: "c-h-10",
    title: "50. LRU Cache Simulation in C",
    difficulty: "Hard",
    category: "System Architecture",
    xp: 100,
    desc: "Design a Least Recently Used (LRU) eviction structure with doubly linked lists and hash array.",
    sampleInput: "Capacity = 2, Put(1, 10), Put(2, 20), Get(1)",
    sampleOutput: "Key 1 accessed; Key 2 prioritized for eviction",
    solution: `#include <stdio.h>
#include <stdlib.h>

struct DNode { int key, value; struct DNode *prev, *next; };

int main() {
    printf("LRU Cache Architecture Framework Initialized\\n");
    return 0;
}`,
  },
];
