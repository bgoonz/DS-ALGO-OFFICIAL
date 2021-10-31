The naive solution to this problem is to loop over all the vertices, and take each vertex as the root, perform a DFS to find out the tree depth, and get the minimum depth. The complexity for this solution is O(VE), obviously we can do better.

One solution involves finding the longest path in the graph(tree). This longest path must include the root node in our Minimum height tree. This can be proved with contradiction: assume the longest path doesn't pass through the root node, but pass through a closest descendent of root - root', then the tree rooted at root' 's height is smaller than that of root(why?).

Now the problem is reduced to finding the longest path in the graph. This can be done with 2 passes of DFS: pick a random node, and find the longest path originating from this node. The other end of this path has to be one end of the globally longest path (why?). Now perform another DFS on this node to get the longest path. The root node is either the middle of the path, if the length of the path is odd, or the middle 2 nodes, of the length of the path is even.

What if there are multiple longest paths? You can actually prove that these paths must cross the same root node, and in this case, the longest path has to be of odd length.
