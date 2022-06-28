<h1 id="arithmetic-progression">Arithmetic Progression</h1>
<p>A sequence of numbers is said to be in an <code>Arithmetic progression</code> if the difference between any two consecutive terms is always the same. In simple terms, it means that the next number in the series is calculated by adding a fixed number to the previous number in the series. For example, 2, 4, 6, 8, 10 is an AP because the difference between any two consecutive terms in the series (common difference) is same (4 - 2 = 6 - 4 = 8 - 6 = 10 - 8 = 2).</p>
<p align="center">
<img width="60%" src="https://user-images.githubusercontent.com/75872316/122635132-ce38d100-d0ff-11eb-8fdf-2e14a9f640cc.png">
</p>
<p><strong>Facts about Arithmetic Progression:</strong></p>
<ol type="1">
<li>Initial term: In an arithmetic progression, the first number in the series is called the initial term.</li>
<li>Common difference: The value by which consecutive terms increase or decrease is called the <code>common difference</code>.</li>
<li>The behavior of the arithmetic progression depends on the common difference <code>d</code>. If the common difference is positive, then the members (terms) will grow towards positive infinity. But if the common difference is negative, then the members (terms) will grow towards negative infinity.</li>
</ol>
<p><strong>Formula of the nth term of an A.P:</strong></p>
<p><code>a</code> is the initial term, and <code>d</code> is a common difference. Thus, the explicit formula is:</p>
<p align="center">
<img width="60%" src="https://user-images.githubusercontent.com/75872316/122635193-25d73c80-d100-11eb-9015-344d36633704.png">
</p>
<p><strong>Formula of the sum of first nth term of A.P:</strong></p>
<p align="center">
<img width="60%" src="https://user-images.githubusercontent.com/75872316/122635260-7a7ab780-d100-11eb-82a5-8ceeba3aff03.png">
</p>
<p><strong>General Formulas to solve problems related to Arithmetic Progressions:</strong></p>
<p>If <code>a</code> is the first term and <code>d</code> too, that would be a common difference:</p>
<ul>
<li><strong>nth term of an AP</strong> = <code>a + (n-1)*d</code>.</li>
<li><strong>Arithmetic Mean</strong> = <code>Sum of all terms in the AP / Number of terms in the AP</code>.</li>
<li><strong>Sum of ‘n’ terms</strong> of an AP = 0.5 n (first term + last term) = <code>0.5 n [ 2a + (n-1) d ]</code>.</li>
</ul>
<h1 id="source">Source</h1>
<ul>
<li><a href="https://www.geeksforgeeks.org/arithmetic-progression">Arithmetic Progression</a></li>
</ul>
<h1 id="youtube">YouTube</h1>
<ul>
<li><a href="https://youtu.be/gua96ju_FBk">Video URL for concept</a></li>
<li><a href="https://youtu.be/U_qtSRQYoPs">Video for understanding AP Dynamic Programming in C++</a></li>
</ul>
<h1 id="average-mean">Average (Mean)</h1>
<p>Calculate the average of a list of numbers using mean.</p>
<h2 id="applications">Applications</h2>
<p>Calculating the mean of a list of numbers is one of the most common ways to determine the average of those numbers.</p>
<p>Calculating a mean would be useful in these situations:</p>
<ul>
<li>Determining the average score for all players of a video game level.</li>
<li>Finding the average grade for tests that a student took this semester.</li>
<li>Determining the average size of all files in a directory/folder.</li>
</ul>
<h2 id="steps">Steps</h2>
<ol type="1">
<li>Input a list of numbers.</li>
<li>Calculate the sum of all numbers in the list.</li>
<li>Count the numbers in the list.</li>
<li>Divide the sum by the total count of numbers in the list.</li>
<li>Return mean.</li>
</ol>
<h2 id="example">Example</h2>
<p>Given the list <code>[2, 4, 6, 8, 20, 50, 70]</code>, let’s calculate the average.</p>
<h3 id="step-1">Step 1</h3>
<p>Send <code>[2, 4, 6, 8, 20, 50, 70]</code> as input for a method/function.</p>
<h3 id="step-2">Step 2</h3>
<p>Add all the numbers together.</p>
<p><code>2 + 4 + 6 + 8 + 20 + 50 + 70 = 160</code>, so <code>sum = 160</code>.</p>
<h3 id="step-3">Step 3</h3>
<p>Count the numbers in the list.</p>
<p>The list has seven numbers, so <code>count = 7</code>.</p>
<h3 id="step-4">Step 4</h3>
<p>Divide the sum of all the numbers by the count of the numbers.</p>
<pre><code>sum = 160
count = 7</code></pre>
<p>If we ignore significant digits: <code>sum / count =</code>22.<u>857142</u></p>
<p>If we properly consider significant digits: <code>sum / count = 23</code></p>
<h3 id="step-5">Step 5</h3>
<p>Return the value of 22.<u>857142</u> or <code>23</code>.</p>
<h2 id="implementation">Implementation</h2>
<ul>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/maths/average_mean.py">Python</a></li>
<li><a href="https://github.com/TheAlgorithms/Ruby/blob/master/maths/average_mean.rb">Ruby</a></li>
</ul>
<h2 id="video-url">Video URL</h2>
<ul>
<li><a href="https://www.khanacademy.org/math/ap-statistics/summarizing-quantitative-data-ap/measuring-center-quantitative/v/mean-median-and-mode">Mean on Khan Academy</a></li>
</ul>
<h2 id="others">Others</h2>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Mean">Mean on Wikipedia</a></li>
</ul>
<h1 id="bellman-ford">Bellman-Ford</h1>
<h4 id="problem-statement">Problem Statement</h4>
<p>Given a weighted directed graph G(V,E) and a source vertex s ∈ V, determine for each vertex v ∈ V the shortest path between s and v.</p>
<h4 id="approach">Approach</h4>
<ul>
<li>Initialize the distance from the source to all vertices as infinite.</li>
<li>Initialize the distance to itself as 0.</li>
<li>Create an array dist[] of size |V| with all values as infinite except dist[s].</li>
<li>Repeat the following |V| - 1 times. Where |V| is number of vertices.</li>
<li>Create another loop to go through each edge (u, v) in E and do the following:
<ol type="1">
<li>dist[v] = minimum(dist[v], dist[u] + weight of edge).</li>
</ol></li>
<li>Lastly iterate through all edges on last time to make sure there are no negatively weighted cycles.</li>
</ul>
<h4 id="time-complexity">Time Complexity</h4>
<p>O(VE)</p>
<h4 id="space-complexity">Space Complexity</h4>
<p>O(V^2)</p>
<h4 id="founders-name">Founder’s Name</h4>
<ul>
<li>Richard Bellman &amp; Lester Ford, Jr.</li>
</ul>
<h4 id="example-1">Example</h4>
<pre><code>    # of vertices in graph = 5 [A, B, C, D, E]
    # of edges in graph = 8

    edges  [A-&gt;B, A-&gt;C, B-&gt;C, B-&gt;D, B-&gt;E, D-&gt;C, D-&gt;B, E-&gt;D]
    weight [ -1,    4,    3,    2,    2,    5,    1,   -4 ]
    source [  A,    A,    B,    B,    B,    D,    D,    E ]



    // edge A-&gt;B
    graph-&gt;edge[0].src = A
    graph-&gt;edge[0].dest = B
    graph-&gt;edge[0].weight = -1

    // edge A-&gt;C
    graph-&gt;edge[1].src = A
    graph-&gt;edge[1].dest = C
    graph-&gt;edge[1].weight = 4

    // edge B-&gt;C
    graph-&gt;edge[2].src = B
    graph-&gt;edge[2].dest = C
    graph-&gt;edge[2].weight = 3

    // edge B-&gt;D
    graph-&gt;edge[3].src = B
    graph-&gt;edge[3].dest = D
    graph-&gt;edge[3].weight = 2

    // edge B-&gt;E
    graph-&gt;edge[4].src = B
    graph-&gt;edge[4].dest = E
    graph-&gt;edge[4].weight = 2

    // edge D-&gt;C
    graph-&gt;edge[5].src = D
    graph-&gt;edge[5].dest = C
    graph-&gt;edge[5].weight = 5

    // edge D-&gt;B
    graph-&gt;edge[6].src = D
    graph-&gt;edge[6].dest = B
    graph-&gt;edge[6].weight = 1

    // edge E-&gt;D
    graph-&gt;edge[7].src = E
    graph-&gt;edge[7].dest = D
    graph-&gt;edge[7].weight = -3

    for source = A

    Vertex   Distance from Source
    A                0              A-&gt;A
    B                -1             A-&gt;B
    C                2              A-&gt;B-&gt;C = -1 + 3
    D                -2             A-&gt;B-&gt;E-&gt;D = -1 + 2 + -3
    E                1              A-&gt;B-&gt;E = -1 + 2</code></pre>

<h4 id="code-implementation-links">Code Implementation Links</h4>
<ul>
<li><a href="https://github.com/TheAlgorithms/Java/blob/master/DataStructures/Graphs/BellmanFord.java">Java</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/Dynamic%20Programming/Bellman-Ford.cpp">C++</a></li>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/data_structures/graph/bellman_ford.py">Python</a></li>
<li><a href="https://github.com/TheAlgorithms/C/blob/master/data_structures/graphs/Bellman-Ford.c">C</a></li>
</ul>
<h4 id="video-explanation">Video Explanation</h4>
<p><a href="https://www.youtube.com/watch?v=hxMWBBCpR6A">A video explaining the Bellman-Ford Algorithm</a></p>
<h4 id="others-1">Others</h4>
<p>Sources Used:</p>
<ul>
<li>https://www.geeksforgeeks.org/bellman-ford-algorithm-dp-23/</li>
<li>https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm</li>
</ul>
<h1 id="binary-search-a-divide-and-conquer-algorithm">Binary Search (A divide and conquer algorithm)</h1>
<h4 id="problem-statement-1">Problem Statement</h4>
<p>Given a sorted array of n elements, write a function to search for the index of a given element (target)</p>
<h4 id="approach-1">Approach</h4>
<ul>
<li>Search for the array by dividing the array in half repeatedly.</li>
<li>Initially consider the actual array and pick the element at the middle index</li>
<li>Keep a lower index i.e. 0 and higher index i.e. length of array</li>
<li>If it is equal to the target element then return the index</li>
<li>Else if it is greater than the target element then consider only the left half of array. (lower index = 0, higher = middle - 1)</li>
<li>Else if it is less than the target element then consider only the right half of array. (lower index = middle + 1, higher = length of array)</li>
<li>Return -1 if target element is not found in the array (Base Case: If lower index is greater than or equal to higher index)</li>
</ul>
<h4 id="time-complexity-1">Time Complexity</h4>
<p>O(log n) Worse Case<br />
O(1) Best Case (If middle element of initial array is the target element)</p>
<h4 id="space-complexity-1">Space Complexity</h4>
<p>O(1) For iterative approach<br />
O(log n) For recursive approach due to recursion call stack</p>
<h4 id="example-2">Example</h4>
<pre><code>arr = [1,2,3,4,5,6,7]

target = 2
Initially the element at middle index is 4 which is greater than 2. Therefore we search the left half of the
array i.e. [1,2,3].
Here we find the middle element equal to target element so we return its index i.e. 1

target = 9
Binary Search should return -1 as 9 is not present in the array</code></pre>

<h4 id="code-implementation-links-1">Code Implementation Links</h4>
<ul>
<li><a href="https://github.com/TheAlgorithms/Java/blob/master/Searches/BinarySearch.java">Java</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/Search/Binary%20Search.cpp">C++</a></li>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/searches/binary_search.py">Python</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Sharp/blob/master/searches/binary_search.cs">C-Sharp</a></li>
<li><a href="https://github.com/TheAlgorithms/C/blob/master/searching/Binary_Search.c">C</a></li>
</ul>
<h4 id="video-explanation-1">Video Explanation</h4>
<p><a href="https://www.youtube.com/watch?v=5xlIPT1FRcA">A CS50 video explaining the Binary Search Algorithm</a></p>
<h4 id="animation-explanation">Animation Explanation</h4>
<ul>
<li><a href="https://boardhub.github.io/tute/?wd=binarySearchAlgo2">Tute Board</a></li>
</ul>
<h1 id="bubble-sort">Bubble Sort</h1>
<h4 id="problem-statement-2">Problem Statement</h4>
<p>Given an unsorted array of n elements, write a function to sort the array</p>
<h4 id="approach-2">Approach</h4>
<ul>
<li>select the first element of the array</li>
<li>compare it with its next element</li>
<li>if it is larger than the next element then swap them</li>
<li>else do nothing</li>
<li>keep doing this for every index of the array</li>
<li>repeat the above process n times.</li>
</ul>
<h4 id="time-complexity-2">Time Complexity</h4>
<p><code>O(n^2)</code> Worst case performance</p>
<p><code>O(n)</code> Best-case performance</p>
<p><code>O(n^2)</code> Average performance</p>
<h4 id="space-complexity-2">Space Complexity</h4>
<p><code>O(1)</code> Worst case</p>
<h4 id="founders-name-1">Founder’s Name</h4>
<ul>
<li>The term “Bubble Sort” was first used by Iverson, K in 1962.</li>
</ul>
<h4 id="example-3">Example</h4>
<pre><code>arr[] = {10, 80, 40, 30}
Indexes: 0   1   2   3

1. Index = 0, Number = 10
2. 10 &lt; 80, do nothing and continue

3. Index = 1, Number = 80
4. 80 &gt; 40, swap 80 and 40
5. The array now is {10, 40, 80, 30}

6. Index = 2, Number = 80
7. 80 &gt; 30, swap 80 and 30
8. The array now is {10, 40, 30, 80}

Repeat the Above Steps again

arr[] = {10, 40, 30, 80}
Indexes: 0 1 2 3

1. Index = 0, Number = 10
2. 10 &lt; 40, do nothing and continue

3. Index = 1, Number = 40
4. 40 &gt; 30, swap 40 and 30
5. The array now is {10, 30, 40, 80}

6. Index = 2, Number = 40
7. 40 &lt; 80, do nothing
8. The array now is {10, 30, 40, 80}

Repeat the Above Steps again

arr[] = {10, 30, 40, 80}
Indexes: 0 1 2 3

1. Index = 0, Number = 10
2. 10 &lt; 30, do nothing and continue

3. Index = 1, Number = 30
4. 30 &lt; 40, do nothing and continue

5. Index = 2, Number = 40
6. 40 &lt; 80, do nothing

Since there are no swaps in above steps, it means the array is sorted and we can stop here.</code></pre>

<h4 id="code-implementation-links-2">Code Implementation Links</h4>
<ul>
<li><a href="https://github.com/TheAlgorithms/Java/blob/master/Sorts/BubbleSort.java">Java</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/sorting/bubble_sort.cpp">C++</a></li>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/sorts/bubble_sort.py">Python</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Sharp/blob/master/Algorithms/Sorters/Comparison/BubbleSorter.cs">C-Sharp</a></li>
<li><a href="https://github.com/TheAlgorithms/Go/blob/master/sorts/bubblesort.go">Go</a></li>
<li><a href="https://github.com/TheAlgorithms/Ruby/blob/master/sorting/bubble_sort.rb">Ruby</a></li>
<li><a href="https://github.com/TheAlgorithms/C/blob/master/sorting/bubble_sort.c">C</a></li>
<li><a href="https://github.com/TheAlgorithms/Scala/blob/master/src/main/scala/Sort/BubbleSort.scala">Scala</a></li>
<li><a href="https://github.com/TheAlgorithms/Javascript/blob/master/Sorts/BubbleSort.js">Javascript</a></li>
</ul>
<h4 id="video-explanation-2">Video Explanation</h4>
<p><a href="https://www.youtube.com/watch?v=Jdtq5uKz-w4">A video explaining the Bubble Sort Algorithm</a></p>
<h4 id="others-2">Others</h4>
<p>Bubble sort is also known as Sinking sort.</p>
<h4 id="animation-explanation-1">Animation Explanation</h4>
<ul>
<li><a href="https://boardhub.github.io/tute/?wd=bubbleSortAlgo2">Tute Board</a></li>
</ul>
<h1 id="coin-change">Coin Change</h1>
<h4 id="problem-statement-3">Problem Statement</h4>
<p>Given a value <code>N</code>, if we want to make change for <code>N</code> cents, and we have infinite supply of each of <code>S = {S1, S2, .. , Sm}</code> valued coins, how many ways can we make the change? The order of coins doesn’t matter.</p>
<h4 id="approach-3">Approach</h4>
<p>Let the <code>dp[i]</code> be the length of the coin change of prefix <code>N[1..i]</code>. Our answer is <code>dp[N]</code>. We fill <code>dp[0]</code> as 1 because there is only one way to get 0 coins (We pick no coins).</p>
<p>Now let’s try calculate <code>dp[i]</code> for any <code>i</code>. <code>dp[0..i]</code> will store each sub problems from <code>0</code> to <code>N</code>. That’s why the answer will be <code>dp[N]</code>. First, we need to iterate each coin types to pick them one-by-one. Then we iterate the sub problems from current coin that we pick before to <code>N</code> cents. That’s why we must make dp table with <code>N</code> columns.</p>
<p>This is the codes for the Coin Change algorithm:</p>
<pre><code>    for coin_val in S:
        for i in range(coin_val, n + 1):
            dp[i] += dp[i - coin_val]</code></pre>
<p>In the second iteration, for every cent that can be exchanged, we take it by subtracting the i-th column by the value of the coin we take and adding it into the current column. So <code>dp[i]</code> will store the current sub problem.</p>
<h4 id="time-complexity-3">Time Complexity</h4>
<p><code>O(N * S)</code> in any case</p>
<h4 id="space-complexity-3">Space Complexity</h4>
<p><code>O(N)</code> - simple implementation. We only need 1D array to store the answer.</p>
<h4 id="example-4">Example</h4>
<p>Let’s say we have 3 coin types <code>[1,2,3]</code> and we want to change for <code>7</code> cents. So we will define our table like this.</p>
<pre><code>[1, 0, 0, 0, 0, 0, 0, 0]</code></pre>
<p>0th column will store 1 since there is only one way to get 0 cents.</p>
<ul>
<li>For the first iteration we take a coin that has a value of 1. Then for all sub problems, there is only one way to make change. For 7 cents, the only way is <code>{1,1,1,1,1,1,1}</code>. On the final iteration, our table be like:</li>
</ul>
<pre><code>[1, 1, 1, 1, 1, 1, 1, 1]</code></pre>
<ul>
<li>For the second iteration, we take a coin that has a value of 2. From here, all sub problems that can be divided by 2 will store another new way to make change. So, when the iteration stopped at 2nd column it will be like <code>dp[2] += dp[0]</code>. We know that <code>dp[0]</code> stored a value of 1. Thus, dp[2] will store the value of <code>1 + 1 = 2</code>. From here we know that for 2 cents, there are 2 ways <code>{1,1}</code> and <code>{2}</code>. And this operation will continue. Now our table be like:</li>
</ul>
<pre><code>[1, 1, 2, 2, 3, 3, 4, 4]</code></pre>
<p>4 ways to make 7 cents using value of 1 and 2. <code>{{1,1,1,1,1,1,1}, {1,1,1,1,1,2}, {1,1,1,2,2}, {1,2,2,2}}</code></p>
<ul>
<li>For the final iteration (3rd iteration), we take a coin that has a value of 3. Like before, now all the columns that can be devided by 3 will store another new way. And the final result will be like:</li>
</ul>
<pre><code>[1, 1, 2, 3, 4, 5, 7, 8]</code></pre>
<p>So the final answer is <strong>8</strong>. 8 ways to make change of 7 cents using all coin types. <code>{{1,1,1,1,1,1,1}, {1,1,1,1,1,2}, {1,1,1,2,2}, {1,2,2,2}, {1,1,1,1,3}, {1,3,3}, {2,2,3}, {1,1,2,3}}</code></p>
<h4 id="code-implementation-link">Code Implementation Link</h4>
<p><a href="https://github.com/TheAlgorithms/Python/blob/master/dynamic_programming/coin_change.py">Python</a></p>
<h4 id="video-explanation-3">Video Explanation</h4>
<p><a href="https://www.youtube.com/watch?v=DJ4a7cmjZY0">Total Unique Ways To Make Change by Back To Back SWE</a></p>
<h1 id="counting-sort">Counting Sort</h1>
<h4 id="problem-statement-4">Problem Statement</h4>
<p>Given an unsorted array of <code>n</code> elements, write a function to sort the array.</p>
<h4 id="approach-4">Approach</h4>
<ul>
<li>Find out the maximum element (let’s call it <code>max</code>) from the given array.</li>
<li>Initialize an array of length <code>max+1</code> with all elements set to 0 to store the array’s count.</li>
<li>Store the count of each element at their respective index in the array’s count.</li>
<li>Store cumulative sum of the elements of the count array. It helps in placing the elements into the correct index of the sorted array.</li>
<li>Find the index of each element of the original array in the array’s count. This gives the cumulative count.</li>
<li>Place the element at the index calculated and decrease its count by one.</li>
</ul>
<h4 id="time-complexity-4">Time Complexity</h4>
<p><code>O(n+k)</code>: where <code>k</code> is the range of the non-negative key values.</p>
<h4 id="space-complexity-4">Space Complexity</h4>
<p><code>O(n+k)</code>: where <code>k</code> is the range of the non-negative key values.</p>
<h4 id="founders-name-2">Founder’s Name</h4>
<ul>
<li>Harold H. Seward.</li>
</ul>
<h4 id="example-5">Example</h4>
<pre><code>countingSort(array, size)
  max &lt;- find largest element in array
  initialize count array with all zeros
  for j &lt;- 0 to size
    find the total count of each unique element and
    store the count at jth index in count array
  for i &lt;- 1 to max
    find the cumulative sum and store it in count array itself
  for j &lt;- size down to 1
    restore the elements to array
    decrease count of each element restored by 1</code></pre>
<h4 id="code-implementation-links-3">Code Implementation Links</h4>
<ul>
<li><a href="https://github.com/TheAlgorithms/C/blob/master/sorting/counting_sort.c">C</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/sorting/counting_sort.cpp">C++</a></li>
<li><a href="https://github.com/TheAlgorithms/Javascript/blob/master/Sorts/CountingSort.js">JavaScript</a></li>
<li><a href="https://github.com/TheAlgorithms/MATLAB-Octave/blob/master/algorithms/sorting/counting_sort.m">Matlab</a></li>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/sorts/counting_sort.py">Python</a></li>
<li><a href="https://github.com/TheAlgorithms/Rust/blob/master/src/sorting/counting_sort.rs">Rust</a></li>
</ul>
<h4 id="video-explanation-4">Video Explanation</h4>
<p><a href="https://www.youtube.com/watch?v=7zuGmKfUt7s">A video explaining the Counting Sort Algorithm</a></p>
<h4 id="animation-explanation-2">Animation Explanation</h4>
<p><a href="https://www.cs.usfca.edu/~galles/visualization/CountingSort.html">Counting Sort visualization</a></p>
<h1 id="doubly-linked-list">Doubly Linked List</h1>
<p>Singly Linked List is a linear and connected data structure made of Nodes. Each node is composed of a variable <code>data</code> where its content is stored and a pointer to the next Node on the list. The Linked List has a pointer to the first element of this Node sequence and may also have another pointer to the last Node to make operations at the far end less time-consuming. You can also store a <code>length</code> variable to store the total length.</p>
<p>A <strong>Doubly Linked List (DLL)</strong> contains an extra pointer, typically called previous pointer, together with next pointer and data which are there in singly linked list.</p>
<h3 id="advantages-over-singly-linked-list">Advantages over singly linked list</h3>
<ul>
<li>A DLL can be traversed in both forward and backward direction.</li>
<li>The delete operation in DLL is more efficient if pointer to the node to be deleted is given.</li>
<li>We can quickly insert a new node before a given node. In singly linked list, to delete a node, pointer to the previous node is needed. To get this previous node, sometimes the list is traversed. In DLL, we can get the previous node using previous pointer.</li>
</ul>
<h3 id="disadvantages-over-singly-linked-list">Disadvantages over singly linked list</h3>
<ul>
<li>Every node of DLL Require extra space for an previous pointer. It is possible to implement DLL with single pointer though (See this and this).</li>
<li>All operations require an extra pointer previous to be maintained. For example, in insertion, we need to modify previous pointers together with next pointers. For example in following functions for insertions at different positions, we need 1 or 2 extra steps to set previous pointer.</li>
</ul>
<h3 id="time-complexity-5">Time Complexity</h3>
<table>
<thead>
<tr class="header">
<th>Operation</th>
<th>Average</th>
<th>Worst</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Access</td>
<td>Θ(n)</td>
<td>O(n)</td>
</tr>
<tr class="even">
<td>Search</td>
<td>Θ(n)</td>
<td>O(n)</td>
</tr>
<tr class="odd">
<td>Insertion</td>
<td>Θ(1)</td>
<td>O(1)</td>
</tr>
<tr class="even">
<td>Deletion</td>
<td>Θ(1)</td>
<td>O(1)</td>
</tr>
</tbody>
</table>
<h2 id="example-6">Example</h2>
<div class="sourceCode" id="cb11"><pre class="sourceCode java"><code class="sourceCode java"><a class="sourceLine" id="cb11-1" title="1"><span class="kw">class</span> <span class="bu">LinkedList</span> {</a>
<a class="sourceLine" id="cb11-2" title="2"></a>
<a class="sourceLine" id="cb11-3" title="3">    <span class="bu">Node</span> head;      <span class="co">// Pointer to the first element</span></a>
<a class="sourceLine" id="cb11-4" title="4">    <span class="bu">Node</span> tail;      <span class="co">// Optional. Points to the last element</span></a>
<a class="sourceLine" id="cb11-5" title="5"></a>
<a class="sourceLine" id="cb11-6" title="6">    <span class="dt">int</span> length;     <span class="co">// Optional</span></a>
<a class="sourceLine" id="cb11-7" title="7"></a>
<a class="sourceLine" id="cb11-8" title="8">    <span class="kw">class</span> <span class="bu">Node</span> {</a>
<a class="sourceLine" id="cb11-9" title="9">        <span class="dt">int</span> data;   <span class="co">// Node data. Can be int, string, float, templates, etc</span></a>
<a class="sourceLine" id="cb11-10" title="10">        <span class="bu">Node</span> next;  <span class="co">// Pointer to the next node on the list</span></a>
<a class="sourceLine" id="cb11-11" title="11">        <span class="bu">Node</span> prev;</a>
<a class="sourceLine" id="cb11-12" title="12"></a>
<a class="sourceLine" id="cb11-13" title="13">        <span class="bu">Node</span>(<span class="dt">int</span> data) {</a>
<a class="sourceLine" id="cb11-14" title="14">            <span class="kw">this</span>.<span class="fu">data</span> = data;</a>
<a class="sourceLine" id="cb11-15" title="15">        }</a>
<a class="sourceLine" id="cb11-16" title="16">    }</a>
<a class="sourceLine" id="cb11-17" title="17"></a>
<a class="sourceLine" id="cb11-18" title="18"></a>
<a class="sourceLine" id="cb11-19" title="19">    <span class="co">// Adding a node at the front of the list</span></a>
<a class="sourceLine" id="cb11-20" title="20">    <span class="kw">public</span> <span class="dt">void</span> <span class="fu">push</span>(<span class="dt">int</span> new_data) {</a>
<a class="sourceLine" id="cb11-21" title="21"></a>
<a class="sourceLine" id="cb11-22" title="22">        <span class="co">/* 1. allocate node</span></a>
<a class="sourceLine" id="cb11-23" title="23"><span class="co">         * 2. put in the data */</span></a>
<a class="sourceLine" id="cb11-24" title="24">        <span class="bu">Node</span> new_Node = <span class="kw">new</span> <span class="bu">Node</span>(new_data);</a>
<a class="sourceLine" id="cb11-25" title="25"></a>
<a class="sourceLine" id="cb11-26" title="26">        <span class="co">/* 3. Make next of new node as head and previous as NULL */</span></a>
<a class="sourceLine" id="cb11-27" title="27">        new_Node.<span class="fu">next</span> = head;</a>
<a class="sourceLine" id="cb11-28" title="28">        new_Node.<span class="fu">prev</span> = <span class="kw">null</span>;</a>
<a class="sourceLine" id="cb11-29" title="29"></a>
<a class="sourceLine" id="cb11-30" title="30">        <span class="co">/* 4. change prev of head node to new node */</span></a>
<a class="sourceLine" id="cb11-31" title="31">        <span class="kw">if</span> (head != <span class="kw">null</span>)</a>
<a class="sourceLine" id="cb11-32" title="32">            head.<span class="fu">prev</span> = new_Node;</a>
<a class="sourceLine" id="cb11-33" title="33"></a>
<a class="sourceLine" id="cb11-34" title="34">        <span class="co">/* 5. move the head to point to the new node */</span></a>
<a class="sourceLine" id="cb11-35" title="35">        head = new_Node;</a>
<a class="sourceLine" id="cb11-36" title="36">    }</a>
<a class="sourceLine" id="cb11-37" title="37"></a>
<a class="sourceLine" id="cb11-38" title="38">    <span class="co">/* Given a node as prev_node, insert a new node after the given node */</span></a>
<a class="sourceLine" id="cb11-39" title="39">    <span class="kw">public</span> <span class="dt">void</span> <span class="fu">InsertAfter</span>(<span class="bu">Node</span> prev_Node, <span class="dt">int</span> new_data) {</a>
<a class="sourceLine" id="cb11-40" title="40"></a>
<a class="sourceLine" id="cb11-41" title="41">        <span class="co">/*1. check if the given prev_node is NULL */</span></a>
<a class="sourceLine" id="cb11-42" title="42">        <span class="kw">if</span> (prev_Node == <span class="kw">null</span>) {</a>
<a class="sourceLine" id="cb11-43" title="43">            <span class="bu">System</span>.<span class="fu">out</span>.<span class="fu">println</span>(<span class="st">&quot;The given previous node cannot be NULL &quot;</span>);</a>
<a class="sourceLine" id="cb11-44" title="44">            <span class="kw">return</span>;</a>
<a class="sourceLine" id="cb11-45" title="45">        }</a>
<a class="sourceLine" id="cb11-46" title="46"></a>
<a class="sourceLine" id="cb11-47" title="47">        <span class="co">/* 2. allocate node</span></a>
<a class="sourceLine" id="cb11-48" title="48"><span class="co">         * 3. put in the data */</span></a>
<a class="sourceLine" id="cb11-49" title="49">        <span class="bu">Node</span> new_node = <span class="kw">new</span> <span class="bu">Node</span>(new_data);</a>
<a class="sourceLine" id="cb11-50" title="50"></a>
<a class="sourceLine" id="cb11-51" title="51">        <span class="co">/* 4. Make next of new node as next of prev_node */</span></a>
<a class="sourceLine" id="cb11-52" title="52">        new_node.<span class="fu">next</span> = prev_Node.<span class="fu">next</span>;</a>
<a class="sourceLine" id="cb11-53" title="53"></a>
<a class="sourceLine" id="cb11-54" title="54">        <span class="co">/* 5. Make the next of prev_node as new_node */</span></a>
<a class="sourceLine" id="cb11-55" title="55">        prev_Node.<span class="fu">next</span> = new_node;</a>
<a class="sourceLine" id="cb11-56" title="56"></a>
<a class="sourceLine" id="cb11-57" title="57">        <span class="co">/* 6. Make prev_node as previous of new_node */</span></a>
<a class="sourceLine" id="cb11-58" title="58">        new_node.<span class="fu">prev</span> = prev_Node;</a>
<a class="sourceLine" id="cb11-59" title="59"></a>
<a class="sourceLine" id="cb11-60" title="60">        <span class="co">/* 7. Change previous of new_node&#39;s next node */</span></a>
<a class="sourceLine" id="cb11-61" title="61">        <span class="kw">if</span> (new_node.<span class="fu">next</span> != <span class="kw">null</span>)</a>
<a class="sourceLine" id="cb11-62" title="62">            new_node.<span class="fu">next</span>.<span class="fu">prev</span> = new_node;</a>
<a class="sourceLine" id="cb11-63" title="63">    }</a>
<a class="sourceLine" id="cb11-64" title="64">}</a></code></pre></div>
<h3 id="adding-node-at-front">Adding node at front</h3>
<figure>
<img src="https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/03/DLL_add_front1.png" alt="Tracing of algorithm" /><figcaption>Tracing of algorithm</figcaption>
</figure>
<h3 id="add-a-node-after-a-given-node">Add a node after a given node</h3>
<figure>
<img src="https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/03/DLL_add_middle1.png" alt="Tracing of algorithm" /><figcaption>Tracing of algorithm</figcaption>
</figure>
<h2 id="code-implementation-links-4">Code Implementation Links</h2>
<ul>
<li><a href="https://github.com/TheAlgorithms/Java/blob/master/DataStructures/Lists/DoublyLinkedList.java">Java</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/Data%20Structure/Doubly%20Linked%20List.cpp">C++</a></li>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/data_structures/linked_list/doubly_linked_list.py">Python</a></li>
<li><a href="https://github.com/TheAlgorithms/Go/blob/master/data-structures/linked-list/double-linkedlist.go">Go</a></li>
<li><a href="https://github.com/TheAlgorithms/Ruby/blob/master/data_structures/linked_lists/double_list.rb">Ruby</a></li>
</ul>
<h2 id="video-explanation-5">Video Explanation</h2>
<p><a href="https://www.youtube.com/watch?v=FHMPswJDCvU">A CS50 video explaining the Doubly Linked List Data Structure</a></p>
<h1 id="exponential-search">Exponential Search</h1>
<h4 id="prerequisites">Prerequisites</h4>
<ul>
<li><a href="https://github.com/faridevnz/Algorithms-Explanation/blob/master/en/Search%20Algorithms/Binary%20Search.md">Binary Search algorithm</a></li>
</ul>
<h4 id="problem-statement-5">Problem Statement</h4>
<p>Given a sorted array of <em>n</em> elements, write a function to search for the index of a given element (target)</p>
<h4 id="approach-5">Approach</h4>
<ul>
<li>Search for the <strong>range</strong> within which the target is included increasing <em>index</em> by powers of 2</li>
<li>If this range exists in array apply the Binary Search algorithm over it</li>
<li>Else return -1</li>
</ul>
<h4 id="example-7">Example</h4>
<div class="sourceCode" id="cb12"><pre class="sourceCode markdown"><code class="sourceCode markdown"><a class="sourceLine" id="cb12-1" title="1">arr = [1, 2, 3, 4, 5, 6, 7, ... 998, 999, 1_000]</a>
<a class="sourceLine" id="cb12-2" title="2"></a>
<a class="sourceLine" id="cb12-3" title="3">target = 998</a>
<a class="sourceLine" id="cb12-4" title="4">index = 0</a>
<a class="sourceLine" id="cb12-5" title="5"></a>
<a class="sourceLine" id="cb12-6" title="6">1. <span class="fl">SEARCHING FOR THE RANGE</span></a>
<a class="sourceLine" id="cb12-7" title="7"><span class="fl">   index = 1, 2, 4, 8, 16, 32, 64, ..., 512, ..., 1_024</span></a>
<a class="sourceLine" id="cb12-8" title="8"><span class="fl">   after 10 iteration we have the index at 1_024 and outside of the array</span></a>
<a class="sourceLine" id="cb12-9" title="9"><span class="fl">2. BINARY SEARCH</span></a>
<a class="sourceLine" id="cb12-10" title="10"><span class="fl">   Now we can apply the binary search on the subarray from 512 and 1_000.</span></a></code></pre></div>
<p><strong><em>Note</em></strong>: we apply the Binary Search from 512 to 1_000 because at <code>i = 2^10 = 1_024</code> the array is finisced and the target number is less than the latest index of the array ( 1_000 ).</p>
<h4 id="time-complexity-6">Time Complexity</h4>
<p><strong>worst case:</strong> <code>O(log *i*)</code> where <code>*i* = index</code> (position) of the target</p>
<p><strong>best case:</strong> <code>O(*1*)</code></p>
<h4 id="complexity-explanation">Complexity Explanation</h4>
<ul>
<li>The complexity of the first part of the algorithm is <strong>O( log <em>i</em> )</strong> because if <em>i</em> is the position of the target in the array, after doubling the search <em>index</em> <code>⌈log(i)⌉</code> times, the algorithm will be at a search index that is greater than or equal to <em>i</em>. We can write <code>2^⌈log(i)⌉ &gt;= i</code></li>
<li>The complexity of the second part of the algorithm also is <strong>O ( log <em>i</em> )</strong> because that is a simple Binary Search. The Binary Search complexity ( as explained <a href="https://github.com/faridevnz/Algorithms-Explanation/blob/master/en/Search%20Algorithms/Binary%20Search.md">here</a> ) is O( <em>n</em> ) where <em>n</em> is the length of the array. In the Exponential Search, the length of the array on which the algorithm is applied is <code>2^i - 2^(i-1)</code>, put into words it means ‘( the length of the array from start to <em>i</em> ) - ( the part of array skipped until the previous iteration )’. Is simple verify that <code>2^i - 2^(i-1) = 2^(i-1)</code></li>
</ul>
<p>After this detailed explanation we can say that the the complexity of the Exponential Search is:</p>
<div class="sourceCode" id="cb13"><pre class="sourceCode mathematica"><code class="sourceCode mathematica"><a class="sourceLine" id="cb13-1" title="1"><span class="fu">O</span>(<span class="fu">log</span> <span class="fu">i</span>) + <span class="fu">O</span>(<span class="fu">log</span> <span class="fu">i</span>) = 2O(<span class="fu">log</span> <span class="fu">i</span>) = <span class="fu">O</span>(<span class="fu">log</span> <span class="fu">i</span>)</a></code></pre></div>
<h4 id="binary-search-vs-exponential-search">Binary Search vs Exponential Search</h4>
<p>Let’s take a look at this comparison with a less theoretical example. Imagine we have an array with<code>1_000_000</code> elements and we want to search an element that is in the <code>4th</code> position. It’s easy to see that:</p>
<ul>
<li>The Binary Search start from the middle of the array and arrive to the 4th position after many iterations</li>
<li>The Exponential Search arrive at the 4th index after only 2 iterations</li>
</ul>
<h4 id="code-implementation-links-5">Code Implementation Links</h4>
<ul>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/search/exponential_search.cpp">C++</a></li>
<li><a href="https://github.com/TheAlgorithms/Javascript/blob/master/Search/ExponentialSearch.js">JavaScript</a></li>
</ul>
<h1 id="calculating-fibonacci-numbers">Calculating Fibonacci numbers</h1>
<p>In mathematics, the Fibonacci numbers commonly denoted F(n), form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. The Sequence looks like this:</p>
<p><code>[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...]</code></p>
<h2 id="applications-1">Applications</h2>
<p>Finding <code>N-th</code> member of this sequence would be useful in many Applications:</p>
<ul>
<li>Recently Fibonacci sequence and the golden ratio are of great interest to researchers in many fields of science including high energy physics, quantum mechanics, Cryptography and Coding.</li>
</ul>
<h2 id="steps-1">Steps</h2>
<ol type="1">
<li>Prepare Base Matrice</li>
<li>Calculate the power of this Matrice</li>
<li>Take Corresponding value from Matrix</li>
</ol>
<h2 id="example-8">Example</h2>
<p>Find <code>8-th</code> member of Fibonacci</p>
<h3 id="step-0">Step 0</h3>
<pre><code>| F(n+1)  F(n)  |
| F(n)    F(n-1)|</code></pre>
<h3 id="step-1-1">Step 1</h3>
<pre><code>Calculate matrix^1
| 1 1 |
| 1 0 |</code></pre>
<h3 id="step-2-1">Step 2</h3>
<pre><code>Calculate matrix^2
| 2 1 |
| 1 1 |</code></pre>
<h3 id="step-3-1">Step 3</h3>
<pre><code>Calculate matrix^4
| 5 3 |
| 3 2 |</code></pre>
<h3 id="step-4-1">Step 4</h3>
<pre><code>Calculate matrix^8
| 34 21 |
| 21 13 |</code></pre>
<h3 id="step-5-1">Step 5</h3>
<p>F(8)=21</p>
<h2 id="implementation-1">Implementation</h2>
<ul>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/math/fibonacci.cpp">C++</a></li>
<li><a href="https://github.com/TheAlgorithms/Java/blob/master/Maths/FibonacciNumber.java">Java</a></li>
<li><a href="https://github.com/TheAlgorithms/Javascript/blob/80c2dc85d714f73783f133964d6acd9b5625ddd9/Maths/Fibonacci.js">Javascript</a></li>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/maths/fibonacci.py">Python</a></li>
</ul>
<h2 id="video-url-1">Video URL</h2>
<ul>
<li><a href="https://www.youtube.com/watch?v=EEb6JP3NXBI">Youtube</a></li>
</ul>
<h2 id="others-3">Others</h2>
<ul>
<li><a href="https://brilliant.org/wiki/fast-fibonacci-transform/">Proof</a></li>
</ul>
<h1 id="finding-the-number-of-digits-in-a-number">Finding the number of digits in a number</h1>
<p>Let’s say <code>N = 2019</code>. The number of digits in N here is 4 and the digits are: <code>2</code>, <code>0</code>, <code>1</code>, and <code>9</code>.</p>
<p>Some more Examples:</p>
<pre><code>N = 00  [zero]
Number of digits = 0

N = -123 [negative]
Number of digits = 3

N = 10000 [positive]
Number of digits = 5</code></pre>

<div data-align="center">
<h2 align="center">
1st Solution
</h2>
</div>
<h3 id="simple-solution">Simple Solution</h3>
<p>The first solution that comes to mind is quite simple:</p>
<pre><code>1. Check whether the number N is equal to zero.
2. Increase the count of digits by 1 if N is not zero.
3. Reduce the number by dividing it by 10.
4. Repeat the above steps until the number is reduced to zero.</code></pre>
<p><strong>Analysis of the above algorithm:</strong> You can clearly see that the number of operations performed in the above solution is equal to the count of digits present in the number. So, the time complexity of the solution is O(digitsCount).</p>
<p><strong>Dry-run of the above algorithm:</strong> Consider an example, N = 58964. Initialize a variable digitsCount to zero which will store the count of digits. Keep incrementing digitsCount until N is not zero, and reduce it by dividing by 10 at each step.</p>
<pre><code>Iteration 1: N not equals to 0
Increment digitsCount, digitsCount = digitsCount + 1.
digitsCount = 0 + 1 = 1.
N = N/10 = 58964/10 = 5896.

Iteration 2: N not equals to 0
Increment digitsCount, digitsCount = digitsCount + 1.
digitsCount = 1 + 1 = 2.
N = N/10 = 5896/10 = 589.

Iteration 3: N not equals to 0
Increment digitsCount, digitsCount = digitsCount + 1.
digitsCount = 2 + 1 = 3.
N = N/10 = 589/10 = 58.

Iteration 4: N not equals to 0
Increment digitsCount, digitsCount = digitsCount + 1.
digitsCount = 3 + 1 = 4.
N = N/10 = 58/10 = 5.

Iteration 5: N not equals to 0
Increment digitsCount, digitsCount = digitsCount + 1.
digitsCount = 4 + 1 = 5.
N = N/10 = 5/10 = 0.

Iteration 6: N becomes equal to 0.
Terminate any further operation.
Return value of digitsCount.

Therefore, number of digits = 5.</code></pre>

<div data-align="center">
<h2 align="center">
2nd Solution
</h2>
</div>
<h3 id="better-solution">Better Solution</h3>
<p>A better solution is to use mathematics to solve this problem. The number of digits in a number say N can be easily obtained by using the following formula:</p>
<pre><code>number of digits in N = log10(N) + 1.</code></pre>
<p><strong>Derivation:</strong> Suppose the number of digits in the number <strong>N</strong> is <strong>K</strong>.</p>
<p>Therefore, we can say that:</p>
<pre><code>10^(K-1) &lt;= N &lt; 10K</code></pre>
<p>Applying base-10 logarithm to both sides in the above equation, we get:</p>
<pre><code>K-1 &lt;= log10(N) &lt; K.

or, K - 1 + 1 &lt;= log10(N) + 1 &lt; K + 1
or, K &lt;= log10(N) + 1 &lt; K + 1</code></pre>

<p>Therefore,</p>
<pre><code>K = floor(log10(N) + 1)</code></pre>
<p><strong>Analysis of the above algorithm:</strong> The above algorithm uses two mathematical functions: the <code>logarithm of a number</code> and the <code>floor function</code>. Therefore, its time complexity depends on the complexity of those two functions. Practically, the <code>floor function</code> is always, or can at least easily be made, constant time - all it has to do is: drop the digits behind the decimal point. For practical purposes, one can <code>assume that the logarithm is constant time</code> as well, as one will usually be working with fixed-width floating-point values. If one uses <code>arbitrary-precision "big number" libraries</code> however, logarithm will not be constant anymore: performance will depend on the logarithm algorithms used.</p>
<h1 id="source-1">Source</h1>
<ul>
<li><a href="https://www.geeksforgeeks.org/program-count-digits-integer-3-different-methods/">Proof in GeeksForGeeks</a></li>
</ul>
<h1 id="youtube-1">YouTube</h1>
<ul>
<li><a href="https://www.youtube.com/watch?v=ngWnvWR8NkE">Video URL</a></li>
</ul>
<h1 id="geometric-progression">Geometric Progression</h1>
<p>A sequence of numbers is said to be in a <code>Geometric progression</code> if the ratio of any two consecutive terms is always the same. In simple terms, it means that the next number in the series is calculated by multiplying a fixed number to the previous number in the series.</p>
<p>For example, 2, 4, 8, 16 is a GP because ratio of any two consecutive terms in the series (common ratio) is the same (4 / 2 = 8 / 4 = 16 / 8 = 2).</p>
<p align="center">
<img width="60%" src="https://user-images.githubusercontent.com/75872316/122635376-2fad6f80-d101-11eb-9d06-74c5c854cc9d.png">
</p>
<p><strong>Facts about Geometric Progression:</strong></p>
<ol type="1">
<li><strong>Initial term:</strong> In a geometric progression, the first number is called the initial term.</li>
<li><strong>Common ratio:</strong> The ratio of any two consecutive terms by taking the previous term in the denominator.</li>
<li>The behaviour of a geometric sequence depends on the value of the common ratio. If the common ratio is:</li>
</ol>
<ul>
<li>Positive, the terms will all be of the same sign as the initial term.</li>
<li>Negative, the terms will alternate between positive and negative.</li>
<li>Greater than 1, there will be exponential growth towards positive or negative infinity (depending on the sign of the initial term).</li>
<li>1, the progression is a constant sequence.</li>
<li>Between -1 and 1 but not zero, there will be exponential decay towards zero.</li>
<li>-1, the progression is an alternating sequence.</li>
<li>Less than -1, for the absolute values there is exponential growth towards (unsigned) infinity, due to the alternating sign.</li>
</ul>
<p><strong>Formula of the nth term of a G.P:</strong></p>
<p><code>a</code> is the initial term, and <code>d</code> is a common difference. Thus, the explicit formula is:</p>
<p align="center">
<img width="60%" src="https://user-images.githubusercontent.com/75872316/122635586-6fc12200-d102-11eb-9a87-333c9a578cc8.png">
</p>
<p><strong>Formula of the sum of the first nth term of G.P:</strong></p>
<p align="center">
<img width="60%" src="https://user-images.githubusercontent.com/75872316/122635613-9717ef00-d102-11eb-89db-5182e966b1db.png">
</p>
<p><strong>General Formulas to solve problems related to Geometric Progressions:</strong></p>
<p>If <code>a</code> is the first term and <code>r</code> is the common ratio: nth term of a GP = <code>a*rn-1</code>.</p>
<ul>
<li>Geometric Mean = <code>nth root of the product of n terms in the GP</code>.</li>
<li>Sum of <code>n</code> terms of a GP (r &lt; 1) = <code>[a (1 – rn)] / [1 – r]</code>.</li>
<li>Sum of <code>n</code> terms of a GP (r &gt; 1) = <code>[a (rn – 1)] / [r – 1]</code>.</li>
<li>Sum of infinite terms of a GP (r &lt; 1) = <code>(a) / (1 – r)</code>.</li>
</ul>
<h1 id="source-2">Source</h1>
<ul>
<li><a href="https://www.geeksforgeeks.org/geometric-progression/">Geometric Progression</a></li>
</ul>
<h1 id="youtube-2">YouTube</h1>
<ul>
<li><a href="https://youtu.be/gua96ju_FBk">Video URL for concept</a></li>
<li><a href="https://youtu.be/92ZldzuGUHs">Video for understanding GP Dynamic Programming in C++</a></li>
</ul>
<h1 id="harris-detector">Harris Detector</h1>
<h2 id="problem-statement-6">Problem Statement</h2>
<p>Detect corners and edges in a given image.</p>
<h2 id="approach-6">Approach</h2>
<p>Given image <span class="math inline"><em>I</em></span>, <span class="math inline"><em>n</em> × <em>n</em></span> size Gaussian Kernel <span class="math inline"><em>G</em><sub><em>n</em> × <em>n</em></sub></span>,</p>
<ol type="1">
<li>Compute the gradients of the image, both horizontal and vertical directions. <span class="math inline"><em>X</em> = ( − 1, 0, 1) ⊗ <em>I</em></span>, <span class="math inline"><em>Y</em> = ( − 1, 0, 1)<sup><em>T</em></sup> ⊗ <em>I</em></span></li>
<li>Compute the matrix <span class="math inline"><em>M</em></span>, where <span class="math inline"><em>A</em> = <em>G</em><sub><em>n</em> × <em>n</em></sub> ⊗ <em>X</em><sup>2</sup></span>, <span class="math inline"><em>B</em> = <em>G</em><sub><em>n</em> × <em>n</em></sub> ⊗ <em>Y</em><sup>2</sup></span>, <span class="math inline"><em>C</em> = <em>G</em><sub><em>n</em> × <em>n</em></sub> ⊗ <em>X</em><em>Y</em></span></li>
<li>Compute the response function <span class="math inline"><em>R</em></span>, where <span class="math inline"><em>R</em> = <em>A</em><em>B</em> − <em>C</em><sup>2</sup> − <em>k</em>(<em>A</em> + <em>B</em>)</span></li>
<li>Classify all points in <span class="math inline"><em>R</em>​</span>.</li>
</ol>
<h2 id="code-implementation-links-6">Code Implementation Links</h2>
<ul>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/digital_image_processing/feature_detectors/harris.py">Python</a></li>
</ul>
<h2 id="reference">Reference</h2>
<p>C. Harris and M. Stephens, “A Combined Corner and Edge Detector,” in <em>Procedings of the Alvey Vision Conference 1988</em>, Manchester, 1988, pp. 23.1-23.6.</p>
<h1 id="heap-sort">Heap Sort</h1>
<h4 id="problem-statement-7">Problem Statement</h4>
<p>Given an unsorted array of n elements, write a function to sort the array</p>
<h4 id="approach-7">Approach</h4>
<ul>
<li>Build a max heap from the input data.</li>
<li>At this point, the largest item is stored at the root of the heap. Replace it with the last item of the heap followed by reducing the size of heap by 1. Finally, heapify the root of tree.</li>
<li>Repeat above steps while size of heap is greater than 1.</li>
</ul>
<h4 id="time-complexity-7">Time Complexity</h4>
<p><code>O(n log n)</code> Worst case performance</p>
<p><code>O(n log n)</code> (distinct keys) or O(n) (equal keys) Best-case performance</p>
<p><code>O(n log n)</code> Average performance</p>
<h4 id="space-complexity-5">Space Complexity</h4>
<p><code>O(1)</code> Worst case auxiliary</p>
<h4 id="example-9">Example</h4>
<pre><code>Input data: 4, 10, 3, 5, 1
        4(0)
       /   \
    10(1)   3(2)
   /   \
5(3)    1(4)

The numbers in bracket represent the indices in the array
representation of data.

Applying heapify procedure to index 1:
4(0)
/ \
 10(1) 3(2)
/ \
5(3) 1(4)

Applying heapify procedure to index 0:
10(0)
/ \
 5(1) 3(2)
/ \
4(3) 1(4)
The heapify procedure calls itself recursively to build heap
in top down manner.</code></pre>

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif" title="Heap Sort" alt="heap-image" /><figcaption>heap-image</figcaption>
</figure>
<h4 id="code-implementation-links-7">Code Implementation Links</h4>
<ul>
<li><a href="https://github.com/TheAlgorithms/Java/blob/master/Sorts/HeapSort.java">Java</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/sorting/heap_sort.cpp">C++</a></li>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/sorts/heap_sort.py">Python</a></li>
<li><a href="https://github.com/TheAlgorithms/Go/blob/master/sorts/heapsort.go">Go</a></li>
<li><a href="https://github.com/TheAlgorithms/Ruby/blob/master/sorting/heap_sort.rb">Ruby</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Sharp/blob/master/Algorithms/Sorters/Comparison/HeapSorter.cs">C-sharp</a></li>
<li><a href="https://github.com/TheAlgorithms/C/blob/master/sorting/heap_sort.c">C</a></li>
<li><a href="https://github.com/TheAlgorithms/Javascript/blob/master/Sorts/HeapSort.js">Javascript</a></li>
</ul>
<h4 id="video-explanation-6">Video Explanation</h4>
<p><a href="https://www.youtube.com/watch?v=MtQL_ll5KhQ">A video explaining the Selection Sort Algorithm</a></p>
<h1 id="insertion-sort">Insertion Sort</h1>
<h4 id="problem-statement-8">Problem Statement</h4>
<p>Given an array of n elements, write a function to sort the array in increasing order.</p>
<h4 id="approach-8">Approach</h4>
<ul>
<li>Define a “key” index, the subarray to the left of which is sorted.</li>
<li>Initiate “key” as 1, ie. the second element of array(as there is only one element to left of the second element, which can be considered as sorted array with one element).</li>
<li>If value of element at (key - 1) position is less than value of element at (key) position; increment “key”.</li>
<li>Else move elements of sorted subarray that are greater than value of element at “key” to one position ahead of their current position. Put the value of element at “key” in the newly created void.</li>
</ul>
<h4 id="time-complexity-8">Time Complexity</h4>
<ul>
<li><p><code>О(n^2)</code> comparisons, <code>О(n^2)</code> swaps – Worst Case</p></li>
<li><p><code>O(n)</code> comparisons, <code>O(1)</code> swaps – Best Case</p></li>
</ul>
<h4 id="space-complexity-6">Space Complexity</h4>
<p><code>O(1)</code> – (No extra space needed, sorting done in place)</p>
<h4 id="example-10">Example</h4>
<pre><code>
12, 11, 13, 5, 6

Let us loop for i = 1 (second element of the array) to 4 (Size of input array)

i = 1.
Since 11 is smaller than 12, move 12 and insert 11 before 12
11, 12, 13, 5, 6

i = 2.
13 will remain at its position as all elements in sorted subarray are smaller than 13
11, 12, 13, 5, 6

i = 3.
5 will move to the beginning,
and all other elements from 11 to 13 will move one position ahead of their current position.
5, 11, 12, 13, 6

i = 4.
6 will move to position after 5,
and elements from 11 to 13 will move one position ahead of their current position.
5, 6, 11, 12, 13 -- sorted array</code></pre>

<h4 id="code-implementation-links-8">Code Implementation Links</h4>
<ul>
<li><a href="https://github.com/TheAlgorithms/Java/blob/master/Sorts/InsertionSort.java">Java</a></li>
<li><a href="https://github.com/TheAlgorithms/C/blob/master/sorting/insertion_sort.c">C</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/sorting/insertion_sort.cpp">C++</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Sharp/blob/master/Algorithms/Sorters/Comparison/InsertionSorter.cs">C#</a></li>
<li><a href="https://github.com/TheAlgorithms/Scala/blob/master/src/main/scala/Sort/InsertionSort.scala">Scala</a></li>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/sorts/insertion_sort.py">Python</a></li>
<li><a href="https://github.com/TheAlgorithms/Ruby/blob/master/sorting/insertion_sort.rb">Ruby</a></li>
</ul>
<h4 id="video-explanation-7">Video Explanation</h4>
<p><a href="https://www.youtube.com/watch?v=DFG-XuyPYUQ">A CS50 video explaining the Insertion Search Algorithm</a></p>
<h1 id="linear-search">Linear Search</h1>
<h4 id="problem-statement-9">Problem Statement</h4>
<p>Given an array of n elements, write a function to search for the index of a given element (target)</p>
<h4 id="approach-9">Approach</h4>
<ul>
<li>Start iterating with the first element in the array.</li>
<li>Compare it with the target element</li>
<li>If it is equal to the target element then return the index</li>
<li>Else continue iterating</li>
<li>Return -1 if target element is not found in the array</li>
</ul>
<h4 id="time-complexity-9">Time Complexity</h4>
<p>O(n) Worse Case<br />
O(1) Best Case (If first element of array is the target element)</p>
<h4 id="space-complexity-7">Space Complexity</h4>
<p>O(1)</p>
<h4 id="example-11">Example</h4>
<pre><code>arr = [1, 3, 9, 5, 0, 2]

target = 5
Linear Search should return index 3 as 5 is on index 3

target = 6
Linear Search should return -1 as 6 is not present in the array</code></pre>

<h4 id="code-implementation-links-9">Code Implementation Links</h4>
<ul>
<li><a href="https://github.com/TheAlgorithms/Java/blob/master/Searches/LinearSearch.java">Java</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/Search/Linear%20Search.cpp">C++</a></li>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/searches/linear_search.py">Python</a></li>
</ul>
<h4 id="video-explanation-8">Video Explanation</h4>
<p><a href="https://www.youtube.com/watch?v=CX2CYIJLwfg">A CS50 video explaining the Linear Search Algorithm</a></p>
<h4 id="animation-explanation-3">Animation Explanation</h4>
<ul>
<li><a href="https://boardhub.github.io/tute/?wd=linearSearchAlgo">Tute Board</a></li>
</ul>
<h1 id="longest-common-subsequence">Longest Common Subsequence</h1>
<h4 id="problem-statement-10">Problem Statement</h4>
<p>Given two strings <code>S</code> and <code>T</code>, find the length of the longest common subsequence (<b>LCS</b>).</p>
<h4 id="approach-10">Approach</h4>
<p>Let the <code>dp[i][j]</code> be the length of the longest common subsequence of prefixes <code>S[1..i]</code> and <code>T[1..j]</code>. Our answer (the length of LCS) is <code>dp[|S|][|T|]</code> since the prefix of the length of string is the string itself.</p>
<p>Both <code>dp[0][i]</code> and <code>dp[i][0]</code> are <code>0</code> for any <code>i</code> since the LCS of empty prefix and anything else is an empty string.</p>
<p>Now let’s try to calculate <code>dp[i][j]</code> for any <code>i</code>, <code>j</code>. Let’s say <code>S[1..i] = *A</code> and <code>T[1..j] = *B</code> where <code>*</code> stands for any sequence of letters (could be different for <code>S</code> and <code>T</code>), <code>A</code> stands for any letter and <code>B</code> stands for any letter different from <code>A</code>. Since <code>A != B</code>, our LCS doesn’t include <code>A</code> or <code>B</code> as a last character. So we could try to throw away <code>A</code> or <code>B</code> character. If we throw <code>A</code>, our LCS length will be <code>dp[i - 1][j]</code> (since we have prefixes <code>S[1..i - 1]</code> and <code>T[1..j]</code>). If we try to throw <code>B</code> character, we will have prefixes <code>S[1..i]</code> and <code>T[1..j - 1]</code> so the length of LCS will be <code>dp[i][j - 1]</code>. As we are looking for the <b>Longest</b> common subsequence, we will pick <b>the maximum value</b> from <code>dp[i][j - 1]</code> and <code>dp[i - 1][j]</code>.</p>
<p>But what if <code>S[1..i] = *A</code> and <code>T[1..j] = *A</code>? We could say that the LCS of our prefixes is LCS of prefixes <code>S[1..i - 1]</code> and <code>T[1..j - 1]</code> <b>plus</b> the letter <code>A</code>. So <code>dp[i][j] = dp[i - 1][j - 1] + 1</code> if <code>S[i] = T[j]</code>.</p>
<p>We could see that we can fill our <code>dp</code> table row by row, column by column. So our algorithm will be like:</p>
<ul>
<li>Let’s say that we have strings <code>S</code> of the length N and <code>T</code> of the length M (numbered from 1). Let’s create the table <code>dp</code> of size <code>(N + 1) x (M + 1)</code> numbered from 0.</li>
<li>Let’s fill the 0th row and the 0th column of <code>dp</code> with 0.</li>
<li>Then, we follow the algorithm:</li>
</ul>
<pre><code>for i in range(1..N):
    for j in range(1..M):
        if(S[i] == T[j])
            dp[i][j] = dp[i - 1][j - 1] + 1
        else
            dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])</code></pre>
<h4 id="time-complexity-10">Time Complexity</h4>
<p><code>O(N * M)</code> In any case</p>
<h4 id="space-complexity-8">Space Complexity</h4>
<p><code>O(N * M)</code> - simple implementation <code>O(min {N, M})</code> - two-layers implementation (as <code>dp[i][j]</code> depends on only i-th and i-th layers, we coudld store only two layers).</p>
<h4 id="example-12">Example</h4>
<p>Let’s say we have strings <code>ABCB</code> and <code>BBCB</code>. We will build such a table:</p>
<pre><code># # A B C B
# 0 0 0 0 0
B 0 ? ? ? ?
B 0 ? ? ? ?
C 0 ? ? ? ?
B 0 ? ? ? ?</code></pre>
<p>Now we will start to fill our table from 1st row. Since <code>S[1] = A</code> and <code>T[1] = B</code>, the <code>dp[1][1]</code> will be tha maximal value of <code>dp[0][1] = 0</code> and <code>dp[1][0] = 0</code>. So <code>dp[1][1] = 0</code>. But now <code>S[2] = B = T[1]</code>, so <code>dp[1][2] = dp[0][1] + 1 = 1</code>. <code>dp[1][3]</code> is <code>1</code> since <code>A != C</code> and we pick <code>max{dp[1][2], dp[0][3]}</code>. And <code>dp[1][4] = dp[0][3] + 1 = 1</code>.</p>
<pre><code># # A B C B
# 0 0 0 0 0
B 0 0 1 1 1
B 0 ? ? ? ?
C 0 ? ? ? ?
B 0 ? ? ? ?</code></pre>
<p>Now let’s fill the other part of the table:</p>
<pre><code># # A B C B
# 0 0 0 0 0
B 0 0 1 1 1
B 0 0 1 1 2
C 0 0 1 2 2
B 0 0 1 2 3</code></pre>
<p>So the length of LCS is <code>dp[4][4] = 3</code>.</p>
<h4 id="code-implementation-links-10">Code Implementation Links</h4>
<ul>
<li><a href="https://github.com/TheAlgorithms/Java/blob/master/Dynamic%20Programming/LongestCommonSubsequence.java">Java</a></li>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/dynamic_programming/longest_common_subsequence.py">Python</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/Dynamic%20Programming/Longest%20Common%20Subsequence.cpp">C++</a></li>
</ul>
<h4 id="video-explanation-9">Video Explanation</h4>
<p><a href="https://youtu.be/NnD96abizww">Video explanation by Tushar Roy</a></p>
<h1 id="merge-sort-divide-and-conquer-algorithm">Merge Sort (Divide and Conquer Algorithm)</h1>
<h4 id="problem-statement-11">Problem Statement</h4>
<p>Given an array of n elements, write a function to sort the array</p>
<h4 id="approach-11">Approach</h4>
<ul>
<li>Find a mid point and divide the array into to halves based on the mid point</li>
<li>Recursively call the merge sort function for both the halves</li>
<li>Merge the two sorted halves to get the sorted array</li>
</ul>
<h4 id="time-complexity-11">Time Complexity</h4>
<p><code>O(n log n)</code></p>
<h4 id="space-complexity-9">Space Complexity</h4>
<p><code>O(n)</code></p>
<h4 id="example-13">Example</h4>
<pre><code>arr = [1, 3, 9, 5, 0, 2]

Divide the array in two halves [1, 3, 9] and [5, 0, 2]

Recursively call merge sort function for both these halves which will provide sorted halves
=&gt; [1, 3, 9] &amp; [0, 2, 5]

Now merge both these halves to get the sorted array [0, 1, 2, 3, 5, 9]</code></pre>

<h4 id="code-implementation-links-11">Code Implementation Links</h4>
<ul>
<li><a href="https://github.com/TheAlgorithms/Java/blob/master/Sorts/MergeSort.java">Java</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/sorting/merge_sort.cpp">C++</a></li>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/sorts/merge_sort.py">Python</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Sharp/blob/master/Algorithms/Sorters/Comparison/MergeSorter.cs">C-Sharp</a></li>
<li><a href="https://github.com/TheAlgorithms/C/blob/master/sorting/merge_sort.c">C</a></li>
<li><a href="https://github.com/TheAlgorithms/Ruby/blob/master/sorting/merge_sort.rb">Ruby</a></li>
</ul>
<h4 id="video-explanation-10">Video Explanation</h4>
<p><a href="https://www.youtube.com/watch?v=EeQ8pwjQxTM">A CS50 video explaining the Merge Sort Algorithm</a></p>
<h1 id="quick-select">Quick Select</h1>
<h3 id="problem-statement-12">Problem Statement</h3>
<p>Given an array, find the kth largest / smallest element in linear time complexity.</p>
<h3 id="approach-12">Approach</h3>
<ul>
<li>Select a pivot element at random</li>
<li>Apply partitioning as used in quick sort</li>
<li>After partitioning, the pivot will be placed in its sorted location ie. All elements smaller than the pivot will be on its left and greater on its right</li>
<li>If index of sorted pivot is k, then the pivot is our kth element and we return the number</li>
<li>Else, check if ‘k’ is greater or smaller and choose a new pivot in that range.</li>
<li>Repeat till we get the kth element at kth position</li>
</ul>
<h3 id="time-complexity-12">Time Complexity</h3>
<ul>
<li><p><code>O(n^2)</code> Worst-Case Performance</p></li>
<li><p><code>O(n)</code> Best-case Performance</p></li>
<li><p><code>O(n)</code> Average Performance</p></li>
</ul>
<h3 id="founders-name-3">Founder’s Name</h3>
<ul>
<li>This algorithm was developed by Tony Hoare and is also called <code>Hoare's Selection Algorithm</code>.</li>
</ul>
<h3 id="example-14">Example</h3>
<pre><code>arr[] = {8,2,11,7,9,1,3}
Indexes: 0 1 2 3 4 5 6

Let&#39;s say k = 4. ie. We have to find 4th smallest element.

1. Choosing random pivot as 7
2. Swap 7 with the last element and apply the partitioning algorithm
3. After applying partition, all elements smaller than 7 will be placed to the left and greater in its right.
   Thus we can say that 7 is in its sorted position arr[] = {2,3,1,7,8,9,11}
4. As position of &#39;7&#39; is 4th (ie. k). Thus we will simply return 7</code></pre>
<h3 id="code-implementation-links-12">Code Implementation Links</h3>
<ul>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/selecting/quickSelect.cpp">C++</a></li>
</ul>
<h3 id="helpful-video-links">Helpful Video Links</h3>
<p><a href="https://youtu.be/hGK_5n81drs">Video explaining how to find the Kth smallest/largest element in varying complexities</a></p>
<h1 id="quick-sort">Quick Sort</h1>
<h4 id="problem-statement-13">Problem Statement</h4>
<p>Given an unsorted array of n elements, write a function to sort the array</p>
<h4 id="approach-13">Approach</h4>
<ul>
<li>Make the right-most index value pivot</li>
<li>partition the array using pivot value</li>
<li>quicksort left partition recursively</li>
<li>quicksort right partition recursively</li>
</ul>
<h4 id="time-complexity-13">Time Complexity</h4>
<ul>
<li><code>O(n^2)</code> Worst case performance</li>
<li><code>O(n log n)</code> Best-case performance</li>
<li><code>O(n log n)</code> Average performance</li>
</ul>
<h4 id="space-complexity-10">Space Complexity</h4>
<p><code>O(log n)</code> Worst case</p>
<h4 id="founders-name-4">Founder’s Name</h4>
<p>Tony Hoare in 1959</p>
<h4 id="example-15">Example</h4>
<pre><code>arr[] = {10, 80, 30, 90, 40, 50, 70}
Indexes:  0   1   2   3   4   5   6

low = 0, high = 6, pivot = arr[h] = 70
Initialize index of smaller element, i = -1

Traverse elements from j = low to high-1
j = 0 : Since arr[j] &lt;= pivot, do i++ and swap(arr[i], arr[j])
i = 0
arr[] = {10, 80, 30, 90, 40, 50, 70} // No change as i and j
// are same

j = 1 : Since arr[j] &gt; pivot, do nothing
// No change in i and arr[]

j = 2 : Since arr[j] &lt;= pivot, do i++ and swap(arr[i], arr[j])
i = 1
arr[] = {10, 30, 80, 90, 40, 50, 70} // We swap 80 and 30

j = 3 : Since arr[j] &gt; pivot, do nothing
// No change in i and arr[]

j = 4 : Since arr[j] &lt;= pivot, do i++ and swap(arr[i], arr[j])
i = 2
arr[] = {10, 30, 40, 90, 80, 50, 70} // 80 and 40 Swapped
j = 5 : Since arr[j] &lt;= pivot, do i++ and swap arr[i] with arr[j]
i = 3
arr[] = {10, 30, 40, 50, 80, 90, 70} // 90 and 50 Swapped

We come out of loop because j is now equal to high-1.
Finally we place pivot at correct position by swapping
arr[i+1] and arr[high] (or pivot)
arr[] = {10, 30, 40, 50, 70, 90, 80} // 80 and 70 Swapped

Now 70 is at its correct place. All elements smaller than
70 are before it and all elements greater than 70 are after
it.</code></pre>

<h4 id="code-implementation-links-13">Code Implementation Links</h4>
<ul>
<li><a href="https://github.com/TheAlgorithms/Java/blob/master/Sorts/QuickSort.java">Java</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/Sorting/Quick%20Sort.cpp">C++</a></li>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/sorts/quick_sort.py">Python</a></li>
<li><a href="https://github.com/TheAlgorithms/Ruby/blob/master/sorting/quicksort.rb">Ruby</a></li>
</ul>
<h4 id="video-explanation-11">Video Explanation</h4>
<p><a href="https://www.youtube.com/watch?v=COk73cpQbFQ">A video explaining the Quick Sort Algorithm</a></p>
<h1 id="radix-sort">Radix Sort</h1>
<p>The lower bound for Comparison based sorting algorithm (Merge Sort, Heap Sort, Quick-Sort .. etc) is <code>Ω(nlogn)</code>, i.e., they cannot do better than <code>nlogn</code>.</p>
<p>Counting sort is a linear time sorting algorithm that sort in <code>O(n+k)</code> time when elements are in the range from 1 to k.</p>
<p>What if the elements are in the range from 1 to n2? We can’t use counting sort because counting sort will take <code>O(n2)</code> which is worse than comparison-based sorting algorithms. Can we sort such an array in linear time?</p>
<p>Radix Sort is the answer. The idea of Radix Sort is to do digit by digit sort starting from least significant digit to most significant digit. Radix sort uses counting sort as a subroutine to sort.</p>
<h2 id="the-radix-sort-algorithm">The Radix Sort Algorithm</h2>
<p>Do following for each digit i where i varies from least significant digit to the most significant digit. Sort input array using counting sort (or any stable sort) according to the i’th digit.</p>
<p>Example:</p>
<p>Original, unsorted list: <code>170, 45, 75, 90, 802, 24, 2, 66</code></p>
<p>Sorting by least significant digit (1s place) gives:</p>
<p>[*Notice that we keep 802 before 2, because 802 occurred before 2 in the original list, and similarly for pairs 170 &amp; 90 and 45 &amp; 75.]</p>
<p>Sorting by next digit (10s place) gives:</p>
<p>[*Notice that 802 again comes before 2 as 802 comes before 2 in the previous list.]</p>
<p><code>802, 2, 24, 45, 66, 170, 75, 90</code></p>
<p>Sorting by the most significant digit (100s place) gives: <code>2, 24, 45, 66, 75, 90, 170, 802</code></p>
<h2 id="what-is-the-running-time-of-radix-sort">What is the running time of Radix Sort?</h2>
<p>Let there be d digits in input integers. Radix Sort takes <code>O(d*(n+b))</code> time where b is the base for representing numbers, for example, for the decimal system, b is 10. What is the value of d? If <code>k</code> is the maximum possible value, then d would be <code>O(logb(k))</code>. So overall time complexity is <code>O((n+b) * logb(k))</code>. Which looks more than the time complexity of comparison-based sorting algorithms for a large k. Let us first limit k. Let k &lt;= nc where c is a constant. In that case, the complexity becomes <code>O(n logb(n))</code>. But it still doesn’t beat comparison-based sorting algorithms.</p>
<h2 id="is-radix-sort-preferable-to-comparison-based-sorting-algorithms-like-quick-sort">Is Radix Sort preferable to Comparison based sorting algorithms like Quick-Sort?</h2>
<p>If we have <code>log2n</code> bits for every digit, the running time of Radix appears to be better than Quick Sort for a wide range of input numbers. The constant factors hidden in asymptotic notation are higher for Radix Sort and Quick-Sort uses hardware caches more effectively. Also, Radix sort uses counting sort as a subroutine and counting sort takes extra space to sort numbers.</p>
<p>Video reference: https://youtu.be/nu4gDuFabIM</p>
<h1 id="recursive-bubble-sort">Recursive Bubble Sort</h1>
<p>Bubble Sort is one of the simplest sorting algorithms that compares two elements at a time and swaps them if they are in the wrong order. This process is repeated until the entire sequence is in order.</p>
<ul>
<li>Time Complexity: <code>O(n ^ 2)</code> for average case; <code>O(n)</code> for best case.</li>
<li>Space Complexity: <code>O(n)</code>; note that iterative bubble sort has space complexity as <code>O(1)</code>.</li>
</ul>
<h2 id="steps-2">Steps</h2>
<p>Base case: If the size of the array is 1, return.</p>
<ul>
<li>We need to fix the last element of the current sub-array. For this, iterate over the entire array using normal Bubble Sort, and perform swapping.</li>
<li>Next, call the function on the entire array excluding the last element(which was fixed by the iteration in the above step)</li>
<li>Repeat until Base Case is reached.</li>
</ul>
<h2 id="example-16">Example</h2>
<p>Let the given array be: <code>{5, 3, 2, 1, 4}</code></p>
<p><strong>First Iteration:</strong></p>
<ul>
<li>{<code>5</code>, <code>3</code>, 2, 1, 4} -&gt; {<code>3</code>, <code>5</code>, 2, 1, 4} Swap since <code>5 &gt; 3</code></li>
<li>{3, <code>5</code>, <code>2</code>, 1, 4} -&gt; {3, <code>2</code>, <code>5</code>, 1, 4} Swap since <code>5 &gt; 2</code></li>
<li>{3, 2, <code>5</code>, <code>1</code>, 4} -&gt; {3, 2, <code>1</code>, <code>5</code>, 4} Swap since <code>5 &gt; 1</code></li>
<li>{3, 2, 1, <code>5</code>, <code>4</code>} -&gt; {3, 2, 1, <code>4</code>, <code>5</code>} Swap since <code>5 &gt; 4</code></li>
</ul>
<p>This iteration has fixed the position of 5. Now, we will consider the array up to index 3.</p>
<p><strong>Second Iteration:</strong></p>
<ul>
<li>{<code>3</code>, <code>2</code>, 1, 4, 5} -&gt; {<code>2</code>, <code>3</code>, 1, 4, 5} Swap since <code>3 &gt; 2</code></li>
<li>{2, <code>3</code>, <code>1</code>, 4, 5} -&gt; {2, <code>1</code>, <code>3</code>, 4, 5} Swap since <code>3 &gt; 1</code></li>
<li>{2, 1, <code>3</code>, <code>4</code>, 5}; As <code>3 &lt; 4</code>, do not swap</li>
</ul>
<p>Note: As we check one less element with every iteration, we do not need elements at index 3 and 4 i.e., <code>4</code> and <code>5</code>, as 5 is already in order. Formally, for an array with <code>n</code> integers, we consider elements only up to index <code>n - i</code>, where <code>i</code> is the iteration number.</p>
<p><strong>Third Iteration:</strong></p>
<ul>
<li>{<code>2</code>, <code>1</code>, 3, 4, 5} -&gt; {<code>1</code>, <code>2</code>, 3, 4, 5} Swap since <code>1 &gt; 2</code></li>
<li>{1, <code>2</code>, <code>3</code>, 4, 5}; As <code>2 &lt; 3</code>, do not swap</li>
</ul>
<p><strong>Fourth Iteration:</strong></p>
<ul>
<li>{<code>1</code>, <code>2</code>, 3, 4, 5}; As <code>1 &lt; 2</code>, do not swap</li>
</ul>
<p><strong>Fifth Iteration:</strong></p>
<ul>
<li>{<code>1</code>, 2, 3, 4, 5}; As the size of the array is 1, return.</li>
</ul>
<p>Note: This is the base case.</p>
<h2 id="pseudo-code">Pseudo Code</h2>
<pre><code>void bubbleSort(arr[], n)
    if(n==1)
        return;

    for(i = 0; i&lt;n-1; i++)
        if(arr[i] &gt; arr[i+1])
            swap(arr[i], arr[i+1])

    bubbleSort(arr, n-1)</code></pre>

<h2 id="implementations">Implementations</h2>
<ul>
<li><a href="https://github.com/TheAlgorithms/Java/blob/master/Sorts/BubbleSortRecursion.java">Java</a></li>
<li><a href="https://github.com/TheAlgorithms/C/blob/master/sorting/bubble_sort_recursion.c">C</a></li>
</ul>
<h2 id="video-explanation-12">Video Explanation</h2>
<p><a href="https://www.youtube.com/watch?v=gDMDVLBfCI0">A video explaining iterative as well as recursive bubble sort</a></p>
<h1 id="selection-sort">Selection Sort</h1>
<h4 id="problem-statement-14">Problem Statement</h4>
<p>Given an unsorted array of n elements, write a function to sort the array</p>
<h4 id="approach-14">Approach</h4>
<ul>
<li>select the smallest element from the array</li>
<li>put it at the beginning of the array</li>
<li>then select the smallest array from the remaining unsorted list</li>
<li>append it to the sorted array at the beginning</li>
<li>keep doing this for every element of the array</li>
<li>repeat the above process n times</li>
</ul>
<h4 id="time-complexity-14">Time Complexity</h4>
<p><code>O(n^2)</code> Worst case performance</p>
<p><code>O(n^2)</code> Best-case performance</p>
<p><code>O(n^2)</code> Average performance</p>
<h4 id="space-complexity-11">Space Complexity</h4>
<p><code>O(1)</code> Worst case</p>
<h4 id="example-17">Example</h4>
<pre><code>arr[] = {80, 10, 40, 30}
Indexes: 0   1   2   3

1. Index = 0
   Select the minimum number from the array (between index 0-3), ie, 10
2. Swap 10 and 80 (arr[0])
3. The array now is {10, 80, 40, 30}

4. Index = 1
   Select the minimum number from the array (between index 1-3), ie, 30
5. Swap 30 and 80 (arr[1])
6. The array now is {10, 30, 40, 80}

7. Index = 2
   Select the minimum number from the array (between index 2-3), ie, 40
8. Swap 40 and 40 (arr[2])
9. The array now is {10, 30, 40, 80}

The array is now sorted.</code></pre>

<h4 id="code-implementation-links-14">Code Implementation Links</h4>
<ul>
<li><a href="https://github.com/TheAlgorithms/Java/blob/master/Sorts/SelectionSort.java">Java</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/Sorting/Selection%20Sort.cpp">C++</a></li>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/sorts/selection_sort.py">Python</a></li>
<li><a href="https://github.com/TheAlgorithms/Go/blob/master/sorts/selection_sort.go">Go</a></li>
<li><a href="https://github.com/TheAlgorithms/Ruby/blob/master/Sorting/selection_sort.rb">Ruby</a></li>
<li><a href="https://github.com/TheAlgorithms/C/blob/master/sorting/SelectionSort.c">C</a></li>
<li><a href="https://github.com/TheAlgorithms/Scala/blob/master/src/main/scala/Sort/SelectionSort.scala">Scala</a></li>
<li><a href="https://github.com/TheAlgorithms/Javascript/blob/master/Sorts/selectionSort.js">Javascript</a></li>
</ul>
<h4 id="video-explanation-13">Video Explanation</h4>
<p><a href="https://www.youtube.com/watch?v=f8hXR_Hvybo">A video explaining the Selection Sort Algorithm</a></p>
<h4 id="animation-explanation-4">Animation Explanation</h4>
<ul>
<li><a href="https://boardhub.github.io/tute/?wd=selectSortAlgo2">Tute Board</a></li>
</ul>
<h1 id="shell-sort">Shell Sort</h1>
<h4 id="problem-statement-15">Problem Statement</h4>
<p>Given an unsorted array of n elements, write a function to sort the array</p>
<h4 id="approach-15">Approach</h4>
<ul>
<li>start with the initial gap, g</li>
<li>go through the first (n - g) elements in the array</li>
<li>compare the element with the next element that is g distance away</li>
<li>swap the two elements if the first element is bigger</li>
<li>decrease the gap and repeat until gap = 1</li>
</ul>
<h4 id="time-complexity-15">Time Complexity</h4>
<p>Time complexity is dependent on the gap sequences. Below time complexities are based on the gap sequences of n/2^k.</p>
<p><code>O(n^2)</code> Worst case performance</p>
<p><code>O(n)</code> Best-case performance</p>
<p><code>O(n^2)</code> Average performance</p>
<h4 id="space-complexity-12">Space Complexity</h4>
<p><code>O(1)</code> Worst case</p>
<h4 id="founders-name-5">Founder’s Name</h4>
<p>Donald Shell</p>
<h4 id="example-18">Example</h4>
<pre><code>arr[] = {61, 109, 149, 111, 34, 2, 24, 119}
Initial Gap: 4

1.  Index = 0, Next element index = 4
2.  61 &gt; 34, swap 61 and 34
3.  The array is now {34, 109, 149, 111, 61, 2, 24, 119}

4.  Index = 1, Next element index = 5
5.  109 &gt; 2, swap 109 and 2
6.  The array is now {34, 2, 149, 111, 61, 109, 24, 119}

7.  Index = 2, Next element index = 6
8.  149 &gt; 24, swap 149 and 24
9.  The array is now {34, 2, 24, 111, 61, 109, 149, 119}

10. Index = 3, Next element index = 7
11. 111 &lt; 119, do nothing and continue

12. Divide the gap by 2 and repeat until gap = 1</code></pre>
<h4 id="code-implementation-links-15">Code Implementation Links</h4>
<ul>
<li><a href="https://github.com/TheAlgorithms/Java/blob/master/Sorts/ShellSort.java">Java</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/Sorting/Shell%20Sort.cpp">C++</a></li>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/sorts/shell_sort.py">Python</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Sharp/blob/master/sorts/shell_sort.cs">C-Sharp</a></li>
<li><a href="https://github.com/TheAlgorithms/Go/blob/master/sorts/shell_sort.go">Go</a></li>
<li><a href="https://github.com/TheAlgorithms/Ruby/blob/master/Sorting/shell_sort.rb">Ruby</a></li>
<li><a href="https://github.com/TheAlgorithms/C/blob/master/sorting/shellSort.c">C</a></li>
<li><a href="https://github.com/TheAlgorithms/Javascript/blob/master/Sorts/shellSort.js">Javascript</a></li>
</ul>
<h4 id="video-explanation-14">Video Explanation</h4>
<p><a href="https://www.youtube.com/watch?v=H8NiFkGu2PY">A video explaining the Shell Sort Algorithm</a></p>
<h4 id="others-4">Others</h4>
<p>Shell sort is also known as diminishing increment sort.</p>
<h1 id="singly-linked-list">Singly Linked List</h1>
<p>Singly Linked List is a linear and connected data structure made of Nodes. Each node is composed of a variable <code>data</code> where its content is stored and a pointer to the next Node on the list. The Linked List has a pointer to the first element of this Node sequence and may also have another pointer to the last Node to make operations at the far end less time-consuming. You can also store a <code>length</code> variable to store the total length.</p>
<h3 id="advantages-over-arrays">Advantages over Arrays</h3>
<ul>
<li>Size of a linked list is not fixed (dynamic size)</li>
<li>Deleting and adding an element is not expensive compared to an array</li>
</ul>
<h3 id="drawbacks">Drawbacks</h3>
<ul>
<li>Elements can be accessed sequentially not randomly compared to an array</li>
<li>Extra memory allocation needs to be done for pointers which connects elements in a linked list</li>
</ul>
<h3 id="time-complexity-16">Time Complexity</h3>
<table>
<thead>
<tr class="header">
<th>Operation</th>
<th>Average</th>
<th>Worst</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Access</td>
<td>O(n)</td>
<td>O(n)</td>
</tr>
<tr class="even">
<td>Search</td>
<td>O(n)</td>
<td>O(n)</td>
</tr>
<tr class="odd">
<td>Insertion</td>
<td>O(1)</td>
<td>O(1)</td>
</tr>
<tr class="even">
<td>Deletion</td>
<td>O(1)</td>
<td>O(1)</td>
</tr>
</tbody>
</table>
<h2 id="example-19">Example</h2>
<div class="sourceCode" id="cb39"><pre class="sourceCode .java"><code class="sourceCode java"><a class="sourceLine" id="cb39-1" title="1"><span class="kw">class</span> <span class="bu">LinkedList</span> {</a>
<a class="sourceLine" id="cb39-2" title="2">    <span class="bu">Node</span> head;      <span class="co">// Pointer to the first element</span></a>
<a class="sourceLine" id="cb39-3" title="3">    <span class="bu">Node</span> tail;      <span class="co">// Optional. Points to the last element</span></a>
<a class="sourceLine" id="cb39-4" title="4"></a>
<a class="sourceLine" id="cb39-5" title="5">    <span class="dt">int</span> length;     <span class="co">// Optional</span></a>
<a class="sourceLine" id="cb39-6" title="6"></a>
<a class="sourceLine" id="cb39-7" title="7">    <span class="kw">class</span> <span class="bu">Node</span> {</a>
<a class="sourceLine" id="cb39-8" title="8">        <span class="dt">int</span> data;   <span class="co">// Node data. Can be int, string, float, templates, etc</span></a>
<a class="sourceLine" id="cb39-9" title="9">        <span class="bu">Node</span> next;  <span class="co">// Pointer to the next node on the list</span></a>
<a class="sourceLine" id="cb39-10" title="10">    }</a>
<a class="sourceLine" id="cb39-11" title="11">}</a></code></pre></div>
<h2 id="code-implementation-links-16">Code Implementation Links</h2>
<ul>
<li><a href="https://github.com/TheAlgorithms/Java/blob/master/DataStructures/Lists/SinglyLinkedList.java">Java</a></li>
<li><a href="https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/Data%20Structure/Linked%20List.cpp">C++</a></li>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/data_structures/linked_list/singly_linked_list.py">Python</a></li>
<li><a href="https://github.com/TheAlgorithms/Ruby/blob/master/data_structures/linked_lists/single_list.rb">Ruby</a></li>
</ul>
<h2 id="video-explanation-15">Video Explanation</h2>
<p><a href="https://www.youtube.com/watch?v=5nsKtQuT6E8">A CS50 video explaining the Linked List Data Structure</a></p>
<h1 id="caesar-cipher">Caesar Cipher</h1>
<p>The Caesar cipher is a simple cipher and one of the best known encryption algorithms. It is very simple to encrypt, decrypt and intercept. The Caesar cipher is a substitution cipher where each letter in the plain-text (decoded text) is replaced by a letter a certain number of spaces to the right of the letter in the alphabet. (The amount of spaces is called the key or shift and is only known by the sender and intended receiver).</p>
<p><strong>Disclaimer: Do not attempt to encrypt personal data or serious messages with this cipher!!! It takes only half a second to crack by a computer!</strong></p>
<ol type="1">
<li>It takes a very small amount of time to encode and decode messages. (Less than a second, usually)</li>
<li>No real applications exist for the cipher as it is the most insecure out there.</li>
<li>This cipher was invented by Julius Caesar as a way to send messages of high military significance.</li>
</ol>
<h2 id="steps-3">Steps</h2>
<h3 id="encryption">Encryption</h3>
<ol type="1">
<li>Choose the alphabet you are going to use.</li>
<li>Choose a secret key (shift) that you are going to use in this case <code>n</code>.</li>
<li>For every letter in the plain-text, replace it by a letter of the alphabet that is <code>n</code> letters away from the letter. (Ex: for a key of <code>1</code>, <code>a</code> would become <code>b</code>, <code>z</code> would become <code>a</code>, etc.)</li>
<li>The message should now be encoded.</li>
</ol>
<h3 id="decryption">Decryption</h3>
<ol type="1">
<li>Choose the alphabet that the message was encrypted with.</li>
<li>Let <code>n</code> be the secret key the message is encoded in.</li>
<li>For every letter in the cipher-text, replace it by a letter of the alphabet that is <code>n</code> letters behind in the alphabet from the letter. <code>c</code> would be <code>b</code>, <code>a</code> would be <code>z</code> with a key of <code>1</code>.</li>
<li>The message should now be decoded</li>
</ol>
<h2 id="example-20">Example</h2>
<h3 id="an-example-of-encryption">An example of encryption</h3>
<p>Let us say we are sending a secret message to a friend.</p>
<ul>
<li>We first write out our message. In this case: <code>The Caesar cipher is a fun substitution cipher</code></li>
<li>Our alphabet will be: <code>abcdefghijklmnopqrstuvwxyz</code>. For the uses of this tutorial, case doesn’t matter. (On a shift of <code>1</code>: <code>A</code> will become <code>B</code>, <code>a</code> will become <code>b</code>)</li>
<li>Let our key be 6.</li>
<li>Starting with the first letter: <code>T</code>. The letter 6 letters away is <code>Z</code>. We add <code>Z</code> to the message.</li>
<li>The second letter is <code>h</code>. The letter 6 letters away is <code>n</code>. Our message is now <code>Zn</code></li>
<li>We continue like that until the end. Our final message is: <code>Znk Igkygx iovnkx oy g lat yahyzozazout iovnkx.</code></li>
<li>Decryption is the same way, except instead of going to the right in the alphabet, we go backwards.</li>
</ul>
<h2 id="implementation-2">Implementation</h2>
<ul>
<li><a href="https://github.com/TheAlgorithms/Python/blob/master/ciphers/caesar_cipher.py">Python</a></li>
</ul>
<h1 id="hill-cipher">Hill Cipher</h1>
<p>The Hill cipher was invented by <a href="https://en.wikipedia.org/wiki/Lester_S._Hill">Lester S. Hill</a>.</p>
<p>Hill cipher is a polygraphic substitution cipher based on linear algebra. Each letter is represented by a number modulo 26. Often the simple scheme <code>A = 0, B = 1, …, Z = 25</code> is used, but this is not an essential feature of the cipher. To encrypt a message, each block of <code>n</code> letters (considered as an n-component vector) is multiplied by an invertible <code>n × n</code> matrix, against modulus 26. To decrypt the message, each block is multiplied by the inverse of the matrix used for encryption.</p>
<h2 id="example-21">Example</h2>
<p>Suppose we take an example as: Plain Text (PT):ACT key:<code>GYBNQKURP</code></p>
<h2 id="steps-4">Steps</h2>
<h3 id="encryption-1">Encryption</h3>
<ol type="1">
<li>We have to write key as an <code>n × n</code> matrix as</li>
</ol>
<pre><code>   [6 24 1]
   [13 16 10]
   [20 17 15]</code></pre>
<ol start="2" type="1">
<li>Same way convert PT into a vector as</li>
</ol>
<pre><code>    [0]
    [2]
    [19]</code></pre>
<ol start="3" type="1">
<li>Now, we need to encipher the vector by just multiplying these two matrices</li>
</ol>
<pre><code>    [6 24 1]        [0]         [67]        [15]
    [13 16 10]  *   [2]     =   [222]   ≈   [4]   (mod 26)
    [20 17 15]      [19]        [319]       [7]</code></pre>
<p>So we will get the encrypted text as <strong>POH</strong>.</p>
<h3 id="decryption-1">Decryption</h3>
<ol type="1">
<li>We need to first inverse our key matrix</li>
</ol>
<pre><code>           -1
   [6 24 1]        [8 5 10]
   [13 16 10]   ≈  [21 8 21]  (mod 26)
   [20 17 15]      [21 12 8]</code></pre>
<ol start="2" type="1">
<li>For the previous Cipher Text <strong>POH</strong></li>
</ol>
<pre><code>    [8 5 10]      [15]      [260]     [0]
    [21 8 21]  *  [14]  ≈   [574]  ≈  [2]    (mod 26)  ≈ ACT
    [21 12 8]     [7]       [539]     [19]</code></pre>
<h2 id="implementations-1">Implementations</h2>
<p><a href="https://github.com/TheAlgorithms/Python/blob/master/ciphers/hill_cipher.py"><strong>Python</strong></a></p>
<h2 id="video-explanation-16">Video Explanation</h2>
<p><a href="https://www.youtube.com/watch?v=6T46sgty4Mk">Video explanation of the Hill Cipher</a></p>
