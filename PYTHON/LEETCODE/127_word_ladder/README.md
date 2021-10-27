The problem can be represented by a graph, with the nodes representing the words, and edges between words that differ by only 1 character, then we only need to find the shortest distance from a start node to an end node. Obviously, this is a problem solvable by BFS.

But a naive BFS solution will exceed time limit. Because calculating the difference between every pair of words is O(N^2) time, to reduce the time, observe that for a word with length N, trying to replace every char with a different char in alphabet only requires N\*26.
