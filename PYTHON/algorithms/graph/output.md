"""
Given a n*n adjacency array.
it will give you all pairs shortest path length.
use deepcopy to preserve the original information.

Time complexity : O(E^3)

example

a = [[0, 0.1, 0.101, 0.142, 0.277], [0.465, 0, 0.191, 0.192, 0.587], [0.245, 0.554, 0, 0.333, 0.931], [1.032, 0.668, 0.656, 0, 0.151], [0.867, 0.119, 0.352, 0.398, 0]]

result 

[[0, 0.1, 0.101, 0.142, 0.277], [0.436, 0, 0.191, 0.192, 0.34299999999999997], [0.245, 0.345, 0, 0.333, 0.484], [0.706, 0.27, 0.46099999999999997, 0, 0.151], [0.5549999999999999, 0.119, 0.31, 0.311, 0]]

"""
import copy


def all_pairs_shortest_path(adjacency_matrix):
    new_array = copy.deepcopy(adjacency_matrix)

    for k in range(len(new_array)):
        for i in range(len(new_array)):
            for j in range(len(new_array)):
                if new_array[i][j] > new_array[i][k] + new_array[k][j]:
                    new_array[i][j] = new_array[i][k] + new_array[k][j]

    return new_array

"""
This Bellman-Ford Code is for determination whether we can get
shortest path from given graph or not for single-source shortest-paths problem.
In other words, if given graph has any negative-weight cycle that is reachable
from the source, then it will give answer False for "no solution exits".
For argument graph, it should be a dictionary type
such as
graph = {
    'a': {'b': 6, 'e': 7},
    'b': {'c': 5, 'd': -4, 'e': 8},
    'c': {'b': -2},
    'd': {'a': 2, 'c': 7},
    'e': {'b': -3}
}
"""


def bellman_ford(graph, source):
    weight = {}
    pre_node = {}

    initialize_single_source(graph, source, weight, pre_node)

    for i in range(1, len(graph)):
        for node in graph:
            for adjacent in graph[node]:
                if weight[adjacent] > weight[node] + graph[node][adjacent]:
                    weight[adjacent] = weight[node] + graph[node][adjacent]
                    pre_node[adjacent] = node

    for node in graph:
        for adjacent in graph[node]:
            if weight[adjacent] > weight[node] + graph[node][adjacent]:
                return False

    return True


def initialize_single_source(graph, source, weight, pre_node):

    for node in graph:
        weight[node] = float("inf")
        pre_node[node] = None

    weight[source] = 0

"""

Bipartite graph is a graph whose vertices can be divided into two disjoint and independent sets.
(https://en.wikipedia.org/wiki/Bipartite_graph)

Time complexity is O(|E|)
Space complexity is O(|V|)

"""


def check_bipartite(adj_list):

    V = len(adj_list)

    # Divide vertexes in the graph into set_type 1 and 2
    # Initialize all set_types as -1
    set_type = [-1 for v in range(V)]
    set_type[0] = 0

    q = [0]

    while q:
        v = q.pop(0)

        # If there is a self-loop, it cannot be bipartite
        if adj_list[v][v]:
            return False

        for u in range(V):
            if adj_list[v][u]:
                if set_type[u] == set_type[v]:
                    return False
                elif set_type[u] == -1:
                    # set type of u opposite of v
                    set_type[u] = 1 - set_type[v]
                    q.append(u)

    return True

from collections import defaultdict


class Graph:
    def __init__(self, v):
        self.v = v
        self.graph = defaultdict(list)

    def add_edge(self, u, v):
        self.graph[u].append(v)

    def dfs(self):
        visited = [False] * self.v
        self.dfs_util(0, visited)
        if visited == [True] * self.v:
            return True
        return False

    def dfs_util(self, i, visited):
        visited[i] = True
        for u in self.graph[i]:
            if not (visited[u]):
                self.dfs_util(u, visited)

    def reverse_graph(self):
        g = Graph(self.v)
        for i in range(len(self.graph)):
            for j in self.graph[i]:
                g.add_edge(j, i)
        return g

    def is_sc(self):
        if self.dfs():
            gr = self.reverse_graph()
            if gr.dfs():
                return True
        return False


g1 = Graph(5)
g1.add_edge(0, 1)
g1.add_edge(1, 2)
g1.add_edge(2, 3)
g1.add_edge(3, 0)
g1.add_edge(2, 4)
g1.add_edge(4, 2)
print("Yes") if g1.is_sc() else print("No")

g2 = Graph(4)
g2.add_edge(0, 1)
g2.add_edge(1, 2)
g2.add_edge(2, 3)
print("Yes") if g2.is_sc() else print("No")

"""
Clone an undirected graph. Each node in the graph contains a label and a list
of its neighbors.


OJ's undirected graph serialization:
Nodes are labeled uniquely.

We use # as a separator for each node, and , as a separator for node label and
each neighbor of the node.
As an example, consider the serialized graph {0,1,2#1,2#2,2}.

The graph has a total of three nodes, and therefore contains three parts as
separated by #.

First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
Second node is labeled as 1. Connect node 1 to node 2.
Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a
self-cycle.
Visually, the graph looks like the following:

       1
      / \
     /   \
    0 --- 2
         / \
         \_/
"""
import collections


# Definition for a undirected graph node
class UndirectedGraphNode:
    def __init__(self, x):
        self.label = x
        self.neighbors = []


# BFS
def clone_graph1(node):
    if not node:
        return
    node_copy = UndirectedGraphNode(node.label)
    dic = {node: node_copy}
    queue = collections.deque([node])
    while queue:
        node = queue.popleft()
        for neighbor in node.neighbors:
            if neighbor not in dic:  # neighbor is not visited
                neighbor_copy = UndirectedGraphNode(neighbor.label)
                dic[neighbor] = neighbor_copy
                dic[node].neighbors.append(neighbor_copy)
                queue.append(neighbor)
            else:
                dic[node].neighbors.append(dic[neighbor])
    return node_copy


# DFS iteratively
def clone_graph2(node):
    if not node:
        return
    node_copy = UndirectedGraphNode(node.label)
    dic = {node: node_copy}
    stack = [node]
    while stack:
        node = stack.pop()
        for neighbor in node.neighbors:
            if neighbor not in dic:
                neighbor_copy = UndirectedGraphNode(neighbor.label)
                dic[neighbor] = neighbor_copy
                dic[node].neighbors.append(neighbor_copy)
                stack.append(neighbor)
            else:
                dic[node].neighbors.append(dic[neighbor])
    return node_copy


# DFS recursively
def clone_graph(node):
    if not node:
        return
    node_copy = UndirectedGraphNode(node.label)
    dic = {node: node_copy}
    dfs(node, dic)
    return node_copy


def dfs(node, dic):
    for neighbor in node.neighbors:
        if neighbor not in dic:
            neighbor_copy = UndirectedGraphNode(neighbor.label)
            dic[neighbor] = neighbor_copy
            dic[node].neighbors.append(neighbor_copy)
            dfs(neighbor, dic)
        else:
            dic[node].neighbors.append(dic[neighbor])

# count connected no of component using DFS
"""
In graph theory, a component, sometimes called a connected component, 
of an undirected graph is a subgraph in which any 
two vertices are connected to each other by paths.

Example:


    1                3------------7
    |
    |
    2--------4
    |        |
    |        |              output = 2
    6--------5

"""

# Code is Here


def dfs(source, visited, l):
    """ Function that performs DFS """

    visited[source] = True
    for child in l[source]:
        if not visited[child]:
            dfs(child, visited, l)


def count_components(l, size):
    """ 
    Function that counts the Connected components on bases of DFS.
    return type : int
    """

    count = 0
    visited = [False] * (size + 1)
    for i in range(1, size + 1):
        if not visited[i]:
            dfs(i, visited, l)
            count += 1
    return count


# Driver code
if __name__ == "__main__":
    n, m = map(int, input("Enter the Number of Nodes and Edges \n").split(" "))
    l = [[] for _ in range(n + 1)]
    for i in range(m):
        print("Enter the edge's Nodes in form of a b\n")
        a, b = map(int, input().split(" "))
        l[a].append(b)
        l[b].append(a)
    print("Total number of Connected Components are : ", count_components(l, n))

"""
Given a directed graph, check whether it contains a cycle.

Real-life scenario: deadlock detection in a system. Processes may be
represented by vertices, then and an edge A -> B could mean that process A is
waiting for B to release its lock on a resource.
"""
from enum import Enum


class TraversalState(Enum):
    WHITE = 0
    GRAY = 1
    BLACK = 2


example_graph_with_cycle = {
    "A": ["B", "C"],
    "B": ["D"],
    "C": ["F"],
    "D": ["E", "F"],
    "E": ["B"],
    "F": [],
}

example_graph_without_cycle = {
    "A": ["B", "C"],
    "B": ["D", "E"],
    "C": ["F"],
    "D": ["E"],
    "E": [],
    "F": [],
}


def is_in_cycle(graph, traversal_states, vertex):
    if traversal_states[vertex] == TraversalState.GRAY:
        return True
    traversal_states[vertex] = TraversalState.GRAY
    for neighbor in graph[vertex]:
        if is_in_cycle(graph, traversal_states, neighbor):
            return True
    traversal_states[vertex] = TraversalState.BLACK
    return False


def contains_cycle(graph):
    traversal_states = {vertex: TraversalState.WHITE for vertex in graph}
    for vertex, state in traversal_states.items():
        if state == TraversalState.WHITE and is_in_cycle(
            graph, traversal_states, vertex
        ):
            return True
    return False


print(contains_cycle(example_graph_with_cycle))
print(contains_cycle(example_graph_without_cycle))

# Dijkstra's single source shortest path algorithm


class Dijkstra:
    def __init__(self, vertices):
        self.vertices = vertices
        self.graph = [[0 for column in range(vertices)] for row in range(vertices)]

    def min_distance(self, dist, min_dist_set):
        min_dist = float("inf")
        for v in range(self.vertices):
            if dist[v] < min_dist and min_dist_set[v] == False:
                min_dist = dist[v]
                min_index = v
        return min_index

    def dijkstra(self, src):

        dist = [float("inf")] * self.vertices
        dist[src] = 0
        min_dist_set = [False] * self.vertices

        for count in range(self.vertices):

            # minimum distance vertex that is not processed
            u = self.min_distance(dist, min_dist_set)

            # put minimum distance vertex in shortest tree
            min_dist_set[u] = True

            # Update dist value of the adjacent vertices
            for v in range(self.vertices):
                if (
                    self.graph[u][v] > 0
                    and min_dist_set[v] == False
                    and dist[v] > dist[u] + self.graph[u][v]
                ):
                    dist[v] = dist[u] + self.graph[u][v]

        return dist

# takes dict of sets
# each key is a vertex
# value is set of all edges connected to vertex
# returns list of lists (each sub list is a maximal clique)
# implementation of the basic algorithm described in:
# Bron, Coen; Kerbosch, Joep (1973), "Algorithm 457: finding all cliques of an undirected graph",


def find_all_cliques(edges):
    def expand_clique(candidates, nays):
        nonlocal compsub
        if not candidates and not nays:
            nonlocal solutions
            solutions.append(compsub.copy())
        else:
            for selected in candidates.copy():
                candidates.remove(selected)
                candidates_temp = get_connected(selected, candidates)
                nays_temp = get_connected(selected, nays)
                compsub.append(selected)
                expand_clique(candidates_temp, nays_temp)
                nays.add(compsub.pop())

    def get_connected(vertex, old_set):
        new_set = set()
        for neighbor in edges[str(vertex)]:
            if neighbor in old_set:
                new_set.add(neighbor)
        return new_set

    compsub = []
    solutions = []
    possibles = set(edges.keys())
    expand_clique(possibles, set())
    return solutions

myGraph = {
    "A": ["B", "C"],
    "B": ["C", "D"],
    "C": ["D", "F"],
    "D": ["C"],
    "E": ["F"],
    "F": ["C"],
}

# find path from start to end using recursion with backtracking
def find_path(graph, start, end, path=[]):
    path = path + [start]
    if start == end:
        return path
    if not start in graph:
        return None
    for node in graph[start]:
        if node not in path:
            newpath = find_path(graph, node, end, path)
            return newpath
    return None


# find all path
def find_all_path(graph, start, end, path=[]):
    path = path + [start]
    if start == end:
        return [path]
    if not start in graph:
        return None
    paths = []
    for node in graph[start]:
        if node not in path:
            newpaths = find_all_path(graph, node, end, path)
            for newpath in newpaths:
                paths.append(newpath)
    return paths


def find_shortest_path(graph, start, end, path=[]):
    path = path + [start]
    if start == end:
        return path
    if start not in graph:
        return None
    shortest = None
    for node in graph[start]:
        if node not in path:
            newpath = find_shortest_path(graph, node, end, path)
            if newpath:
                if not shortest or len(newpath) < len(shortest):
                    shortest = newpath
    return shortest


print(find_all_path(myGraph, "A", "F"))
# print(find_shortest_path(myGraph, 'A', 'D'))

"""
These are classes to represent a Graph and its elements.
It can be shared across graph algorithms.
"""


class Node(object):
    def __init__(self, name):
        self.name = name

    @staticmethod
    def get_name(obj):
        if isinstance(obj, Node):
            return obj.name
        elif isinstance(obj, str):
            return obj
        return ""

    def __eq__(self, obj):
        return self.name == self.get_name(obj)

    def __repr__(self):
        return self.name

    def __hash__(self):
        return hash(self.name)

    def __ne__(self, obj):
        return self.name != self.get_name(obj)

    def __lt__(self, obj):
        return self.name < self.get_name(obj)

    def __le__(self, obj):
        return self.name <= self.get_name(obj)

    def __gt__(self, obj):
        return self.name > self.get_name(obj)

    def __ge__(self, obj):
        return self.name >= self.get_name(obj)

    def __bool__(self):
        return self.name


class DirectedEdge(object):
    def __init__(self, node_from, node_to):
        self.nf = node_from
        self.nt = node_to

    def __eq__(self, obj):
        if isinstance(obj, DirectedEdge):
            return obj.nf == self.nf and obj.nt == self.nt
        return False

    def __repr__(self):
        return "({0} -> {1})".format(self.nf, self.nt)


class DirectedGraph(object):
    def __init__(self, load_dict={}):
        self.nodes = []
        self.edges = []
        self.adjmt = {}

        if load_dict and type(load_dict) == dict:
            for v in load_dict:
                node_from = self.add_node(v)
                self.adjmt[node_from] = []
                for w in load_dict[v]:
                    node_to = self.add_node(w)
                    self.adjmt[node_from].append(node_to)
                    self.add_edge(v, w)

    def add_node(self, node_name):
        try:
            return self.nodes[self.nodes.index(node_name)]
        except ValueError:
            node = Node(node_name)
            self.nodes.append(node)
            return node

    def add_edge(self, node_name_from, node_name_to):
        try:
            node_from = self.nodes[self.nodes.index(node_name_from)]
            node_to = self.nodes[self.nodes.index(node_name_to)]
            self.edges.append(DirectedEdge(node_from, node_to))
        except ValueError:
            pass


class Graph:
    def __init__(self, vertices):
        # No. of vertices
        self.V = vertices

        # default dictionary to store graph
        self.graph = {}

        # To store transitive closure
        self.tc = [[0 for j in range(self.V)] for i in range(self.V)]

    # function to add an edge to graph
    def add_edge(self, u, v):
        if u in self.graph:
            self.graph[u].append(v)
        else:
            self.graph[u] = [v]


# g = Graph(4)
# g.add_edge(0, 1)
# g.add_edge(0, 2)
# g.add_edge(1, 2)
# g.add_edge(2, 0)
# g.add_edge(2, 3)
# g.add_edge(3, 3)

from .tarjan import *
from .check_bipartite import *
from .maximum_flow import *
from .maximum_flow_bfs import *
from .maximum_flow_dfs import *
from .all_pairs_shortest_path import *
from .bellman_ford import *
from .prims_minimum_spanning import *

import random

my_chain = {"A": {"A": 0.6, "E": 0.4}, "E": {"A": 0.7, "E": 0.3}}


def __choose_state(state_map):
    choice = random.random()
    probability_reached = 0
    for state, probability in state_map.items():
        probability_reached += probability
        if probability_reached > choice:
            return state


def next_state(chain, current_state):
    next_state_map = chain.get(current_state)
    next_state = __choose_state(next_state_map)
    return next_state


def iterating_markov_chain(chain, state):
    while True:
        state = next_state(chain, state)
        yield state

"""
Given a n*n adjacency array.
it will give you a maximum flow.
This version use BFS to search path.

Assume the first is the source and the last is the sink.

Time complexity - O(Ef)

example

graph = [[0, 16, 13, 0, 0, 0], 
        [0, 0, 10, 12, 0, 0], 
        [0, 4, 0, 0, 14, 0], 
        [0, 0, 9, 0, 0, 20], 
        [0, 0, 0, 7, 0, 4], 
        [0, 0, 0, 0, 0, 0]] 

answer should be

23

"""
import copy
import queue
import math


def maximum_flow_bfs(adjacency_matrix):
    # initial setting
    new_array = copy.deepcopy(adjacency_matrix)
    total = 0

    while 1:
        # setting min to max_value
        min = math.inf
        # save visited nodes
        visited = [0] * len(new_array)
        # save parent nodes
        path = [0] * len(new_array)

        # initialize queue for BFS
        bfs = queue.Queue()

        # initial setting
        visited[0] = 1
        bfs.put(0)

        # BFS to find path
        while bfs.qsize() > 0:
            # pop from queue
            src = bfs.get()
            for k in range(len(new_array)):
                # checking capacity and visit
                if new_array[src][k] > 0 and visited[k] == 0:
                    # if not, put into queue and chage to visit and save path
                    visited[k] = 1
                    bfs.put(k)
                    path[k] = src

        # if there is no path from src to sink
        if visited[len(new_array) - 1] == 0:
            break

        # initial setting
        tmp = len(new_array) - 1

        # Get minimum flow
        while tmp != 0:
            # find minimum flow
            if min > new_array[path[tmp]][tmp]:
                min = new_array[path[tmp]][tmp]
            tmp = path[tmp]

        # initial setting
        tmp = len(new_array) - 1

        # reduce capacity
        while tmp != 0:
            new_array[path[tmp]][tmp] = new_array[path[tmp]][tmp] - min
            tmp = path[tmp]

        total = total + min

    return total

"""
Given a n*n adjacency array.
it will give you a maximum flow.
This version use DFS to search path.

Assume the first is the source and the last is the sink.

Time complexity - O(Ef)

example

graph = [[0, 16, 13, 0, 0, 0], 
        [0, 0, 10, 12, 0, 0], 
        [0, 4, 0, 0, 14, 0], 
        [0, 0, 9, 0, 0, 20], 
        [0, 0, 0, 7, 0, 4], 
        [0, 0, 0, 0, 0, 0]] 

answer should be

23

"""
import copy
import math


def maximum_flow_dfs(adjacency_matrix):
    # initial setting
    new_array = copy.deepcopy(adjacency_matrix)
    total = 0

    while 1:
        # setting min to max_value
        min = math.inf
        # save visited nodes
        visited = [0] * len(new_array)
        # save parent nodes
        path = [0] * len(new_array)

        # initialize stack for DFS
        stack = []

        # initial setting
        visited[0] = 1
        stack.append(0)

        # DFS to find path
        while len(stack) > 0:
            # pop from queue
            src = stack.pop()
            for k in range(len(new_array)):
                # checking capacity and visit
                if new_array[src][k] > 0 and visited[k] == 0:
                    # if not, put into queue and chage to visit and save path
                    visited[k] = 1
                    stack.append(k)
                    path[k] = src

        # if there is no path from src to sink
        if visited[len(new_array) - 1] == 0:
            break

        # initial setting
        tmp = len(new_array) - 1

        # Get minimum flow
        while tmp != 0:
            # find minimum flow
            if min > new_array[path[tmp]][tmp]:
                min = new_array[path[tmp]][tmp]
            tmp = path[tmp]

        # initial setting
        tmp = len(new_array) - 1

        # reduce capacity
        while tmp != 0:
            new_array[path[tmp]][tmp] = new_array[path[tmp]][tmp] - min
            tmp = path[tmp]

        total = total + min

    return total

"""
Given the capacity, source and sink of a graph,
computes the maximum flow from source to sink.
Input : capacity, source, sink
Output : maximum flow from source to sink
Capacity is a two-dimensional array that is v*v.
capacity[i][j] implies the capacity of the edge from i to j.
If there is no edge from i to j, capacity[i][j] should be zero.
"""

import queue


def dfs(capacity, flow, visit, vertices, idx, sink, current_flow=1 << 63):
    # DFS function for ford_fulkerson algorithm.
    if idx == sink:
        return current_flow
    visit[idx] = True
    for nxt in range(vertices):
        if not visit[nxt] and flow[idx][nxt] < capacity[idx][nxt]:
            tmp = dfs(
                capacity,
                flow,
                visit,
                vertices,
                nxt,
                sink,
                min(current_flow, capacity[idx][nxt] - flow[idx][nxt]),
            )
            if tmp:
                flow[idx][nxt] += tmp
                flow[nxt][idx] -= tmp
                return tmp
    return 0


def ford_fulkerson(capacity, source, sink):
    # Computes maximum flow from source to sink using DFS.
    # Time Complexity : O(Ef)
    # E is the number of edges and f is the maximum flow in the graph.
    vertices = len(capacity)
    ret = 0
    flow = [[0] * vertices for i in range(vertices)]
    while True:
        visit = [False for i in range(vertices)]
        tmp = dfs(capacity, flow, visit, vertices, source, sink)
        if tmp:
            ret += tmp
        else:
            break
    return ret


def edmonds_karp(capacity, source, sink):
    # Computes maximum flow from source to sink using BFS.
    # Time complexity : O(V*E^2)
    # V is the number of vertices and E is the number of edges.
    vertices = len(capacity)
    ret = 0
    flow = [[0] * vertices for i in range(vertices)]
    while True:
        tmp = 0
        q = queue.Queue()
        visit = [False for i in range(vertices)]
        par = [-1 for i in range(vertices)]
        visit[source] = True
        q.put((source, 1 << 63))
        # Finds new flow using BFS.
        while q.qsize():
            front = q.get()
            idx, current_flow = front
            if idx == sink:
                tmp = current_flow
                break
            for nxt in range(vertices):
                if not visit[nxt] and flow[idx][nxt] < capacity[idx][nxt]:
                    visit[nxt] = True
                    par[nxt] = idx
                    q.put((nxt, min(current_flow, capacity[idx][nxt] - flow[idx][nxt])))
        if par[sink] == -1:
            break
        ret += tmp
        parent = par[sink]
        idx = sink
        # Update flow array following parent starting from sink.
        while parent != -1:
            flow[parent][idx] += tmp
            flow[idx][parent] -= tmp
            idx = parent
            parent = par[parent]
    return ret


def dinic_bfs(capacity, flow, level, source, sink):
    # BFS function for Dinic algorithm.
    # Check whether sink is reachable only using edges that is not full.

    vertices = len(capacity)
    q = queue.Queue()
    q.put(source)
    level[source] = 0
    while q.qsize():
        front = q.get()
        for nxt in range(vertices):
            if level[nxt] == -1 and flow[front][nxt] < capacity[front][nxt]:
                level[nxt] = level[front] + 1
                q.put(nxt)
    return level[sink] != -1


def dinic_dfs(capacity, flow, level, idx, sink, work, current_flow=1 << 63):
    # DFS function for Dinic algorithm.
    # Finds new flow using edges that is not full.
    if idx == sink:
        return current_flow
    vertices = len(capacity)
    while work[idx] < vertices:
        nxt = work[idx]
        if level[nxt] == level[idx] + 1 and flow[idx][nxt] < capacity[idx][nxt]:
            tmp = dinic_dfs(
                capacity,
                flow,
                level,
                nxt,
                sink,
                work,
                min(current_flow, capacity[idx][nxt] - flow[idx][nxt]),
            )
            if tmp > 0:
                flow[idx][nxt] += tmp
                flow[nxt][idx] -= tmp
                return tmp
        work[idx] += 1
    return 0


def dinic(capacity, source, sink):
    # Computes maximum flow from source to sink using Dinic algorithm.
    # Time complexity : O(V^2*E)
    # V is the number of vertices and E is the number of edges.
    vertices = len(capacity)
    flow = [[0] * vertices for i in range(vertices)]
    ret = 0
    while True:
        level = [-1 for i in range(vertices)]
        work = [0 for i in range(vertices)]
        if not dinic_bfs(capacity, flow, level, source, sink):
            break
        while True:
            tmp = dinic_dfs(capacity, flow, level, source, sink, work)
            if tmp > 0:
                ret += tmp
            else:
                break
    return ret

# Minimum spanning tree (MST) is going to use an undirected graph
#
# The disjoint set is represented with an list <n> of integers where
# <n[i]> is the parent of the node at position <i>.
# If <n[i]> = <i>, <i> it's a root, or a head, of a set


class Edge:
    def __init__(self, u, v, weight):
        self.u = u
        self.v = v
        self.weight = weight


class DisjointSet:
    def __init__(self, n):
        # Args:
        #   n (int): Number of vertices in the graph

        self.parent = [
            None
        ] * n  # Contains wich node is the parent of the node at poisition <i>
        self.size = [
            1
        ] * n  # Contains size of node at index <i>, used to optimize merge
        for i in range(n):
            self.parent[i] = i  # Make all nodes his own parent, creating n sets.

    def merge_set(self, a, b):
        # Args:
        #   a, b (int): Indexes of nodes whose sets will be merged.

        # Get the set of nodes at position <a> and <b>
        # If <a> and <b> are the roots, this will be constant O(1)
        a = self.find_set(a)
        b = self.find_set(b)

        # Join the shortest node to the longest, minimizing tree size (faster find)
        if self.size[a] < self.size[b]:
            self.parent[a] = b  # Merge set(a) and set(b)
            self.size[b] += self.size[a]  # Add size of old set(a) to set(b)
        else:
            self.parent[b] = a  # Merge set(b) and set(a)
            self.size[a] += self.size[b]  # Add size of old set(b) to set(a)

    def find_set(self, a):
        if self.parent[a] != a:
            # Very important, memoize result of the
            # recursion in the list to optimize next
            # calls and make this operation practically constant, O(1)
            self.parent[a] = self.find_set(self.parent[a])

        # node <a> it's the set root, so we can return that index
        return self.parent[a]


def kruskal(n, edges, ds):
    # Args:
    #   n (int): Number of vertices in the graph
    #   edges (list of Edge): Edges of the graph
    #   ds (DisjointSet): DisjointSet of the vertices
    # Returns:
    #   int: sum of weights of the minnimum spanning tree
    #
    # Kruskal algorithm:
    #   This algorithm will find the optimal graph with less edges and less
    #   total weight to connect all vertices (MST), the MST will always contain
    #   n-1 edges because it's the minimum required to connect n vertices.
    #
    # Procedure:
    #   Sort the edges (criteria: less weight).
    #   Only take edges of nodes in different sets.
    #   If we take a edge, we need to merge the sets to discard these.
    #   After repeat this until select n-1 edges, we will have the complete MST.
    edges.sort(key=lambda edge: edge.weight)

    mst = []  # List of edges taken, minimum spanning tree

    for edge in edges:
        set_u = ds.find_set(edge.u)  # Set of the node <u>
        set_v = ds.find_set(edge.v)  # Set of the node <v>
        if set_u != set_v:
            ds.merge_set(set_u, set_v)
            mst.append(edge)
            if len(mst) == n - 1:
                # If we have selected n-1 edges, all the other
                # edges will be discarted, so, we can stop here
                break

    return sum([edge.weight for edge in mst])


if __name__ == "__main__":
    # Test. How input works:
    # Input consists of different weighted, connected, undirected graphs.
    # line 1:
    #   integers n, m
    # lines 2..m+2:
    #   edge with the format -> node index u, node index v, integer weight
    #
    # Samples of input:
    #
    # 5 6
    # 1 2 3
    # 1 3 8
    # 2 4 5
    # 3 4 2
    # 3 5 4
    # 4 5 6
    #
    # 3 3
    # 2 1 20
    # 3 1 20
    # 2 3 100
    #
    # Sum of weights of the optimal paths:
    # 14, 40
    import sys

    for n_m in sys.stdin:
        n, m = map(int, n_m.split())
        ds = DisjointSet(m)
        edges = [None] * m  # Create list of size <m>

        # Read <m> edges from input
        for i in range(m):
            u, v, weight = map(int, input().split())
            u -= 1  # Convert from 1-indexed to 0-indexed
            v -= 1  # Convert from 1-indexed to 0-indexed
            edges[i] = Edge(u, v, weight)

        # After finish input and graph creation, use Kruskal algorithm for MST:
        print("MST weights sum:", kruskal(n, edges, ds))

from collections import defaultdict


class Graph:
    def __init__(self, v):
        self.v = v
        self.graph = defaultdict(list)
        self.has_path = False

    def add_edge(self, u, v):
        self.graph[u].append(v)

    def dfs(self, x, y):
        visited = [False] * self.v
        self.dfsutil(visited, x, y)

    def dfsutil(self, visited, x, y):
        visited[x] = True
        for i in self.graph[x]:
            if y in self.graph[x]:
                self.has_path = True
                return
            if not (visited[i]):
                self.dfsutil(visited, x, i)

    def is_reachable(self, x, y):
        self.has_path = False
        self.dfs(x, y)
        return self.has_path


# Create a graph given in the above diagram
g = Graph(4)
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 2)
g.add_edge(2, 0)
g.add_edge(2, 3)
g.add_edge(3, 3)

u = 1
v = 3

if g.is_reachable(u, v):
    print("There is a path from %d to %d" % (u, v))
else:
    print("There is no path from %d to %d" % (u, v))

u = 3
v = 1
if g.is_reachable(u, v):
    print("There is a path from %d to %d" % (u, v))
else:
    print("There is no path from %d to %d" % (u, v))

"""
This Prim's Algorithm Code is for finding weight of minimum spanning tree
of a connected graph.
For argument graph, it should be a dictionary type
such as
graph = {
    'a': [ [3, 'b'], [8,'c'] ],
    'b': [ [3, 'a'], [5, 'd'] ],
    'c': [ [8, 'a'], [2, 'd'], [4, 'e'] ],
    'd': [ [5, 'b'], [2, 'c'], [6, 'e'] ],
    'e': [ [4, 'c'], [6, 'd'] ]
}

where 'a','b','c','d','e' are nodes (these can be 1,2,3,4,5 as well)
"""


import heapq  # for priority queue

# prim's algo. to find weight of minimum spanning tree
def prims_minimum_spanning(graph_used):
    vis = []
    s = [[0, 1]]
    prim = []
    mincost = 0

    while len(s) > 0:
        v = heapq.heappop(s)
        x = v[1]
        if x in vis:
            continue

        mincost += v[0]
        prim.append(x)
        vis.append(x)

        for j in graph_used[x]:
            i = j[-1]
            if i not in vis:
                heapq.heappush(s, j)

    return mincost

"""
Given a formula in conjunctive normal form (2-CNF), finds a way to assign
True/False values to all variables to satisfy all clauses, or reports there
is no solution.

https://en.wikipedia.org/wiki/2-satisfiability
"""


""" Format:
        - each clause is a pair of literals
        - each literal in the form (name, is_neg)
          where name is an arbitrary identifier,
          and is_neg is true if the literal is negated
"""
formula = [
    (("x", False), ("y", False)),
    (("y", True), ("y", True)),
    (("a", False), ("b", False)),
    (("a", True), ("c", True)),
    (("c", False), ("b", True)),
]


def dfs_transposed(v, graph, order, vis):
    vis[v] = True

    for u in graph[v]:
        if not vis[u]:
            dfs_transposed(u, graph, order, vis)

    order.append(v)


def dfs(v, current_comp, vertex_scc, graph, vis):
    vis[v] = True
    vertex_scc[v] = current_comp

    for u in graph[v]:
        if not vis[u]:
            dfs(u, current_comp, vertex_scc, graph, vis)


def add_edge(graph, vertex_from, vertex_to):
    if vertex_from not in graph:
        graph[vertex_from] = []

    graph[vertex_from].append(vertex_to)


def scc(graph):
    """ Computes the strongly connected components of a graph """
    order = []
    vis = {vertex: False for vertex in graph}

    graph_transposed = {vertex: [] for vertex in graph}

    for (v, neighbours) in graph.iteritems():
        for u in neighbours:
            add_edge(graph_transposed, u, v)

    for v in graph:
        if not vis[v]:
            dfs_transposed(v, graph_transposed, order, vis)

    vis = {vertex: False for vertex in graph}
    vertex_scc = {}

    current_comp = 0
    for v in reversed(order):
        if not vis[v]:
            # Each dfs will visit exactly one component
            dfs(v, current_comp, vertex_scc, graph, vis)
            current_comp += 1

    return vertex_scc


def build_graph(formula):
    """ Builds the implication graph from the formula """
    graph = {}

    for clause in formula:
        for (lit, _) in clause:
            for neg in [False, True]:
                graph[(lit, neg)] = []

    for ((a_lit, a_neg), (b_lit, b_neg)) in formula:
        add_edge(graph, (a_lit, a_neg), (b_lit, not b_neg))
        add_edge(graph, (b_lit, b_neg), (a_lit, not a_neg))

    return graph


def solve_sat(formula):
    graph = build_graph(formula)
    vertex_scc = scc(graph)

    for (var, _) in graph:
        if vertex_scc[(var, False)] == vertex_scc[(var, True)]:
            return None  # The formula is contradictory

    comp_repr = {}  # An arbitrary representant from each component

    for vertex in graph:
        if not vertex_scc[vertex] in comp_repr:
            comp_repr[vertex_scc[vertex]] = vertex

    comp_value = {}  # True/False value for each strongly connected component
    components = sorted(vertex_scc.values())

    for comp in components:
        if comp not in comp_value:
            comp_value[comp] = False

            (lit, neg) = comp_repr[comp]
            comp_value[vertex_scc[(lit, not neg)]] = True

    value = {var: comp_value[vertex_scc[(var, False)]] for (var, _) in graph}

    return value


if __name__ == "__main__":
    result = solve_sat(formula)

    for (variable, assign) in result.iteritems():
        print("{}:{}".format(variable, assign))

"""
Implements Tarjan's algorithm for finding strongly connected components
in a graph.
https://en.wikipedia.org/wiki/Tarjan%27s_strongly_connected_components_algorithm
"""
from algorithms.graph.graph import DirectedGraph


class Tarjan(object):
    def __init__(self, dict_graph):
        self.graph = DirectedGraph(dict_graph)
        self.index = 0
        self.stack = []

        # Runs Tarjan
        # Set all node index to None
        for v in self.graph.nodes:
            v.index = None

        self.sccs = []
        for v in self.graph.nodes:
            if v.index is None:
                self.strongconnect(v, self.sccs)

    def strongconnect(self, v, sccs):
        # Set the depth index for v to the smallest unused index
        v.index = self.index
        v.lowlink = self.index
        self.index += 1
        self.stack.append(v)
        v.on_stack = True

        # Consider successors of v
        for w in self.graph.adjmt[v]:
            if w.index is None:
                # Successor w has not yet been visited; recurse on it
                self.strongconnect(w, sccs)
                v.lowlink = min(v.lowlink, w.lowlink)
            elif w.on_stack:
                # Successor w is in stack S and hence in the current SCC
                # If w is not on stack, then (v, w) is a cross-edge in the DFS tree and must be ignored
                # Note: The next line may look odd - but is correct.
                # It says w.index not w.lowlink; that is deliberate and from the original paper
                v.lowlink = min(v.lowlink, w.index)

        # If v is a root node, pop the stack and generate an SCC
        if v.lowlink == v.index:
            # start a new strongly connected component
            scc = []
            while True:
                w = self.stack.pop()
                w.on_stack = False
                scc.append(w)
                if w == v:
                    break
            scc.sort()
            sccs.append(scc)

# This class represents a directed graph using adjacency
class Graph:
    def __init__(self, vertices):
        # No. of vertices
        self.V = vertices

        # default dictionary to store graph
        self.graph = {}

        # To store transitive closure
        self.tc = [[0 for j in range(self.V)] for i in range(self.V)]

    # function to add an edge to graph
    def add_edge(self, u, v):
        if u in self.graph:
            self.graph[u].append(v)
        else:
            self.graph[u] = [v]

    # A recursive DFS traversal function that finds
    # all reachable vertices for s
    def dfs_util(self, s, v):

        # Mark reachability from s to v as true.
        self.tc[s][v] = 1

        # Find all the vertices reachable through v
        for i in self.graph[v]:
            if self.tc[s][i] == 0:
                self.dfs_util(s, i)

    # The function to find transitive closure. It uses
    # recursive dfs_util()
    def transitive_closure(self):

        # Call the recursive helper function to print DFS
        # traversal starting from all vertices one by one
        for i in range(self.V):
            self.dfs_util(i, i)
        print(self.tc)


# g = Graph(4)
# g.add_edge(0, 1)
# g.add_edge(0, 2)
# g.add_edge(1, 2)
# g.add_edge(2, 0)
# g.add_edge(2, 3)
# g.add_edge(3, 3)

# print("Transitive closure matrix is")
# g.transitive_closure()

graph = {
    "A": set(["B", "C", "F"]),
    "B": set(["A", "D", "E"]),
    "C": set(["A", "F"]),
    "D": set(["B"]),
    "E": set(["B", "F"]),
    "F": set(["A", "C", "E"]),
}

# dfs and bfs are the ultimately same except that they are visiting nodes in
# different order. To simulate this ordering we would use stack for dfs and
# queue for bfs.
#


def dfs_traverse(graph, start):
    visited, stack = set(), [start]
    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            for nextNode in graph[node]:
                if nextNode not in visited:
                    stack.append(nextNode)
    return visited


# print(dfs_traverse(graph, 'A'))


def bfs_traverse(graph, start):
    visited, queue = set(), [start]
    while queue:
        node = queue.pop(0)
        if node not in visited:
            visited.add(node)
            for nextNode in graph[node]:
                if nextNode not in visited:
                    queue.append(nextNode)
    return visited


# print(bfs_traverse(graph, 'A'))


def dfs_traverse_recursive(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    for nextNode in graph[start]:
        if nextNode not in visited:
            dfs_traverse_recursive(graph, nextNode, visited)
    return visited


# print(dfs_traverse_recursive(graph, 'A'))

# def find_path(graph, start, end, visited=[]):
# # basecase
# visitied = visited + [start]
# if start == end:
# return visited
# if start not in graph:
# return None
# for node in graph[start]:
# if node not in visited:
# new_visited = find_path(graph, node, end, visited)
# return new_visited
# return None

# print(find_path(graph, 'A', 'F'))

