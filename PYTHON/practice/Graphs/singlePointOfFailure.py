# Problem required O(n^2) time for the solution, where n is the number of nodes
# Problem outline is to find "single points of failure" in a LAN computer
# network, so that the admin can plan new additions to the network to make it
# more robust. That translates into finding which single cables (edges) can
# be disconnected and cause the entire network to be disconnected.

# This looks a lot like the strongly-connected components problem, in that
# we are trying to figure out how many "clusters" of computers there are that
# are connected by a single cable. We are given an adjacency matrix for the
# connections and are assured the graph is connected.

# My solution (that should work in O(n^2) time) entails first removing computers
# that only have one connection to the network - one cable (edge). After
# removing these computers, we can look at each separate computer in the
# network and disconnect it from all others temporarily. Then we use a BFS
# to determine if the network is disconnected. If so, at least one of the cables
# (edges) attached to that computer could be a single point of failure. We find
# all the possible "problem" computers, then check how they are connected to
# each other to determine how many valid single points of failure there are.

# This part gets a little tricky. The computers causing a single point of failure
# are attached at two ends - that is, if one computer is disconnected on either
# end of the cable, then there will be a failure. So each computer is examined
# to see if it connects to another problem computer, and then if so, the failure
# point is counted once. If there is a bypass cable (e.g. both computers are
# connected to a third computer, so there is no failure if either is
# disconnected from the other, but they occur at a network bottleneck meaning
# that all cables from a computer being disconnected would result in a failure),
# we account for that case by checking if the problem computers are connected
# to a third computer, which would eliminate the problem of the single point
# of failure but is a corner case since we looked at which computers cause
# problems when all cables are disconnected from them.

# The resulting algorithm should take O(n^2) because we look at each computer
# once when it is disconnected and then do a BFS to check connectivity, which
# takes linear time. So n computers times with n search time each yields
# O(n^2). Usually can't do much better than that with an adjacency matrix,
# anyway!


def singlePointOfFailure(connections):
    size = len(connections)
    total = 0
    if size == 1:
        return total

    # print(connections)
    cuttable_nodes = set()
    cut_segments = {}

    single_edges = set()
    while anySingleEdges(connections):
        for i, item in enumerate(connections):
            # add case for singly-connected nodes
            # just cut it here!
            if sum(connections[i]) == 1:
                connections = remove_node(i, connections)
                total += 1
                single_edges.add(i)

    print(connections)
    # print(single_edges)
    # remove single edges here!
    connections = remove_empty_nodes(connections, single_edges)
    # corner case where there are no nodes left!
    if len(connections) == 1:
        return total
    for i, item in enumerate(connections):
        # print(i, connections)
        if i in single_edges:
            continue

        test_graph = remove_node(i, connections)
        # print(test_graph)

        if i == 0:
            [truth, vals] = adjacency_matrix_BFS(1, test_graph)
            if not truth:
                # total += sum(item)
                # print(test_graph)
                cuttable_nodes.add(i)
                cut_segments[i] = vals
                print("added 0")
        else:
            [truth, vals] = adjacency_matrix_BFS(0, test_graph)
            if not truth:
                # total += sum(item)
                cuttable_nodes.add(i)
                cut_segments[i] = vals
                print(i, test_graph)
                print("added", i)
    print(cuttable_nodes)
    # process how to find the nodes that are centrally located (no redundant cuts)
    added_nodes = set()
    size = len(connections)
    for item in cuttable_nodes:
        for i in range(size):
            # test that there are no other connections between the items first
            a = []
            if i in cuttable_nodes and i not in added_nodes:
                for l in range(size):
                    if l in cuttable_nodes:
                        continue
                    a.append((connections[item][l] == 1 and connections[i][l] == 1))
                print(item, i, a)
                if not any(a):
                    total += connections[item][i]

        added_nodes.add(item)

    return total


def anySingleEdges(adj_matrix):
    for item in adj_matrix:
        if sum(item) == 1:
            return True

    return False


def remove_empty_nodes(adj_matrix, nodes):
    if len(nodes) == 0:
        return adj_matrix

    removals = list(nodes)
    print(removals)
    removals.sort()
    removals.reverse()
    for item in removals:
        for i, node in enumerate(adj_matrix):
            if i == item:
                continue
            else:
                adj_matrix[i].pop(item)
        adj_matrix.pop(item)

    print(adj_matrix)
    return adj_matrix


def remove_node(node, adj_matrix):
    size = len(adj_matrix)
    indices = set()
    for i, a in enumerate(adj_matrix[node]):
        if a == 1:
            indices.add(i)

    output = []
    for i, item in enumerate(adj_matrix):
        if i == node:
            this_row = [0 for l in range(size)]
        else:
            this_row = [a if (not l == node) else 0 for l, a in enumerate(item)]
        output.append(this_row)

    return output


# determine if the graph described is connected or not!
def adjacency_matrix_BFS(node, adj_matrix):
    seen = set()
    seen.add(node)
    queue = [i for i, a in enumerate(adj_matrix[node]) if a == 1]
    while queue:
        curr_node = queue.pop(0)
        seen.add(curr_node)
        new_items = [
            i for i, a in enumerate(adj_matrix[curr_node]) if a == 1 and not i in seen
        ]
        queue.extend(new_items)

    if len(adj_matrix) == len(seen) + 1:
        return [True, seen]
    else:
        return [False, seen]

    # older, erroneous code!
    # possible_cuts = [True if sum(a)==1 else False for a in connections]
    # if(not any(possible_cuts)):
    #     return 0
    # else:
    #     indices = [i for i in range(len(connections)) if possible_cuts[i]==True]
    #     if(len(connections)>2):
    #         num_failure_points = len(indices)
    #     elif(len(connections)==2 and len(indices)!=0):
    #         num_failure_points = 1
    #     revised_connections = []
    #     print(indices, num_failure_points)
    #     for i, node in enumerate(connections):
    #         if(i not in indices):
    #             node_update = [0 if i in indices else a for i, a in enumerate(node)]
    #         else:
    #             node_update = [0 for a in node]
    #         revised_connections.append(node_update)

    #     return num_failure_points + singlePointOfFailure(revised_connections)


connections = [
    [0, 1, 1, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
]

test8 = [
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]


print(singlePointOfFailure(test8))


# from online

# def singlePointOfFailure(connections):
#     size = len(connections)
#     total = 0
#     if(size==1):
#         return total
#     cuttable_nodes = set()
#     cut_segments = {}
#     single_edges = set()
#     while(anySingleEdges(connections)):
#         for i, item in enumerate(connections):
#             #add case for singly-connected nodes
#             #just cut it here!
#             if(sum(connections[i])==1):
#                 connections = remove_node(i, connections)
#                 total+=1
#                 single_edges.add(i)
#
#
#     for i, item in enumerate(connections):
#         if(i in single_edges):
#             continue
#
#         test_graph = remove_node(i, connections)
#
#         if(i==0):
#             if(not adjacency_matrix_BFS(1, test_graph, single_edges)):
#                 # total += sum(item)
#                 # print(test_graph)
#                 cuttable_nodes.add(i)
#         else:
#             if(not adjacency_matrix_BFS(0, test_graph, single_edges)):
#                 # total += sum(item)
#                 cuttable_nodes.add(i)
#     print(cuttable_nodes)
#     #process how to find the nodes that are centrally located (no redundant cuts)
#     added_nodes = set()
#     for item in cuttable_nodes:
#         for i in range(size):
#             #test that there are no other connections between the items first
#             a = []
#             if(i in cuttable_nodes and i not in added_nodes):
#                 for l in range(size):
#                     if l in cuttable_nodes:
#                         continue
#                     a.append((connections[item][l]==1 and connections[i][l]==1))
#                 print(item, i, a)
#                 if(not any(a)):
#                     total += connections[item][i]
#
#         added_nodes.add(item)
#
#     return total
#
# def anySingleEdges(adj_matrix):
#     for item in adj_matrix:
#         if sum(item)==1:
#             return True
#
#     return False
#
#
# def remove_node(node, adj_matrix):
#     size = len(adj_matrix)
#     indices = set()
#     for i, a in enumerate(adj_matrix[node]):
#         if a==1:
#             indices.add(i)
#
#     output = []
#     for i, item in enumerate(adj_matrix):
#         if(i==node):
#             this_row = [0 for l in range(size)]
#         else:
#             this_row = [a if(not l==node) else 0 for l, a in enumerate(item)]
#         output.append(this_row)
#
#     return output
#
#
#
# #determine if the graph described is connected or not!
# def adjacency_matrix_BFS(node, adj_matrix, single_edges):
#     seen = single_edges.copy()
#     seen.add(node)
#     queue = [i for i, a in enumerate(adj_matrix[node]) if a==1]
#     while(queue):
#         curr_node = queue.pop(0)
#         seen.add(curr_node)
#         new_items = [i for i, a in enumerate(adj_matrix[curr_node]) if a==1 and not i in seen]
#         queue.extend(new_items)
#
#     if(len(adj_matrix)==len(seen)+1):
#         return [True, seen]
#     else:
#         return [False, seen]

# older, erroneous code!
# possible_cuts = [True if sum(a)==1 else False for a in connections]
# if(not any(possible_cuts)):
#     return 0
# else:
#     indices = [i for i in range(len(connections)) if possible_cuts[i]==True]
#     if(len(connections)>2):
#         num_failure_points = len(indices)
#     elif(len(connections)==2 and len(indices)!=0):
#         num_failure_points = 1
#     revised_connections = []
#     print(indices, num_failure_points)
#     for i, node in enumerate(connections):
#         if(i not in indices):
#             node_update = [0 if i in indices else a for i, a in enumerate(node)]
#         else:
#             node_update = [0 for a in node]
#         revised_connections.append(node_update)

#     return num_failure_points + singlePointOfFailure(revised_connections)
