"""
This is a bfs-version of counting-islands problem in dfs section.
Given a 2d grid map of '1's (land) and '0's (water),
count the number of islands.
An island is surrounded by water and is formed by
connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.

Example 1:
11110
11010
11000
00000
Answer: 1

Example 2:
11000
11000
00100
00011
Answer: 3

Example 3:
111000
110000
100001
001101
001100
Answer: 3

Example 4:
110011
001100
000001
111100
Answer: 5
"""


def count_islands(grid):
    row = len(grid)
    col = len(grid[0])

    num_islands = 0
    visited = [[0] * col for i in range(row)]
    directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    queue = []

    for i in range(row):
        for j, num in enumerate(grid[i]):
            if num == 1 and visited[i][j] != 1:
                visited[i][j] = 1
                queue.append((i, j))
                while queue:
                    x, y = queue.pop(0)
                    for k in range(len(directions)):
                        nx_x = x + directions[k][0]
                        nx_y = y + directions[k][1]
                        if nx_x >= 0 and nx_y >= 0 and nx_x < row and nx_y < col:
                            if visited[nx_x][nx_y] != 1 and grid[nx_x][nx_y] == 1:
                                queue.append((nx_x, nx_y))
                                visited[nx_x][nx_y] = 1
                num_islands += 1

    return num_islands

from .count_islands import *
from .maze_search import *
from .shortest_distance_from_all_buildings import *
from .word_ladder import *

from collections import deque

"""
BFS time complexity : O(|E| + |V|)
BFS space complexity : O(|E| + |V|)

do BFS from (0,0) of the grid and get the minimum number of steps needed to get to the lower right column

only step on the columns whose value is 1

if there is no path, it returns -1

Ex 1)
If grid is
[[1,0,1,1,1,1],
 [1,0,1,0,1,0],
 [1,0,1,0,1,1],
 [1,1,1,0,1,1]], 
the answer is: 14

Ex 2)
If grid is
[[1,0,0],
 [0,1,1],
 [0,1,1]], 
the answer is: -1
"""


def maze_search(maze):
    BLOCKED, ALLOWED = 0, 1
    UNVISITED, VISITED = 0, 1

    initial_x, initial_y = 0, 0

    if maze[initial_x][initial_y] == BLOCKED:
        return -1

    directions = [(0, -1), (0, 1), (-1, 0), (1, 0)]

    height, width = len(maze), len(maze[0])

    target_x, target_y = height - 1, width - 1

    queue = deque([(initial_x, initial_y, 0)])

    is_visited = [[UNVISITED for w in range(width)] for h in range(height)]
    is_visited[initial_x][initial_y] = VISITED

    while queue:
        x, y, steps = queue.popleft()

        if x == target_x and y == target_y:
            return steps

        for dx, dy in directions:
            new_x = x + dx
            new_y = y + dy

            if not (0 <= new_x < height and 0 <= new_y < width):
                continue

            if maze[new_x][new_y] == ALLOWED and is_visited[new_x][new_y] == UNVISITED:
                queue.append((new_x, new_y, steps + 1))
                is_visited[new_x][new_y] = VISITED

    return -1

import collections

"""
do BFS from each building, and decrement all empty place for every building visit
when grid[i][j] == -b_nums, it means that grid[i][j] are already visited from all b_nums
and use dist to record distances from b_nums
"""


def shortest_distance(grid):
    if not grid or not grid[0]:
        return -1

    matrix = [[[0, 0] for i in range(len(grid[0]))] for j in range(len(grid))]

    count = 0  # count how many building we have visited
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            if grid[i][j] == 1:
                bfs(grid, matrix, i, j, count)
                count += 1

    res = float("inf")
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            if matrix[i][j][1] == count:
                res = min(res, matrix[i][j][0])

    return res if res != float("inf") else -1


def bfs(grid, matrix, i, j, count):
    q = [(i, j, 0)]
    while q:
        i, j, step = q.pop(0)
        for k, l in [(i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1)]:
            # only the position be visited by count times will append to queue
            if (
                0 <= k < len(grid)
                and 0 <= l < len(grid[0])
                and matrix[k][l][1] == count
                and grid[k][l] == 0
            ):
                matrix[k][l][0] += step + 1
                matrix[k][l][1] = count + 1
                q.append((k, l, step + 1))

"""
Given two words (begin_word and end_word), and a dictionary's word list,
find the length of shortest transformation sequence
from beginWord to endWord, such that:

Only one letter can be changed at a time
Each intermediate word must exist in the word list
For example,

Given:
begin_word = "hit"
end_word = "cog"
word_list = ["hot","dot","dog","lot","log"]
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Note:
Return -1 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
"""


def ladder_length(begin_word, end_word, word_list):
    """
    Bidirectional BFS!!!
    :type begin_word: str
    :type end_word: str
    :type word_list: Set[str]
    :rtype: int
    """
    if len(begin_word) != len(end_word):
        return -1  # not possible

    if begin_word == end_word:
        return 0

    # when only differ by 1 character
    if sum(c1 != c2 for c1, c2 in zip(begin_word, end_word)) == 1:
        return 1

    begin_set = set()
    end_set = set()
    begin_set.add(begin_word)
    end_set.add(end_word)
    result = 2
    while begin_set and end_set:

        if len(begin_set) > len(end_set):
            begin_set, end_set = end_set, begin_set

        next_begin_set = set()
        for word in begin_set:
            for ladder_word in word_range(word):
                if ladder_word in end_set:
                    return result
                if ladder_word in word_list:
                    next_begin_set.add(ladder_word)
                    word_list.remove(ladder_word)
        begin_set = next_begin_set
        result += 1
        # print(begin_set)
        # print(result)
    return -1


def word_range(word):
    for ind in range(len(word)):
        temp = word[ind]
        for c in [chr(x) for x in range(ord("a"), ord("z") + 1)]:
            if c != temp:
                yield word[:ind] + c + word[ind + 1 :]

