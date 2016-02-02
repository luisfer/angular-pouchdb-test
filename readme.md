

Test for eHealth Africa in Berlin
---------------------------------
*Luisfer Romero Calero, 2016*

 - Questions are located in **js/questions.js**
 - Tests for angular-pouchdb are located in **test/put-test.js**
 - Made with **Gulp** (plugin gulp-karma-jasmine), installed and set up
   with **npm**.
 - Used **bower** to retrieve all the references, like Angular, Pouchdb,
   angular-pouchdb and jquery.


----------


**DEPTH FIRST SEARCH**
Definition in Wikipedia:

> Depth-first search (DFS) is an algorithm for traversing or searching
> tree or graph data structures. One starts at the root (selecting some
> arbitrary node as the root in the case of a graph) and explores as far
> as possible along each branch before backtracking.

The main difference with **BFS** (Breadth-First Search) is that is possible that DFS might be extremely slow and inefficient for huge trees, since the solution it finds might be not minimal (minimal, solution takes a minimal path in minimum time). The reason for that is the lack of backtracking, which would mean an efficient evaluation of the node of a tree before visiting the children. In BFS, the solution might be not deep at all and the algorithm would take less time. So the perfect approach would be DFS iteratively, increasing the maximum depth allowed in each iteration.

So, if we have the tree

 a
 
 |\
 
 b c
 
 | |
 
 d e
 
 |
 
 f

 In DFS, the path of the search would be the following: **a-b-d-f-c-e**
 In BFS, **a-b-c-d-e-f**

 So, in DFS, the complexity of the search in space (and hence time) would depend a lot in the maximum depth of a leaf node (this is, a node with no children) that takes part in the search.

 Complexity in time has order O(r^m), being r: branch index (number of children per node, hence number of branches that a node generates), m: maximum depth of a leaf node.

 Complexity in space (resources that the system needs) has order O(r^m) also.

 The algorithm itself could be the following (pseudo-code, but similar to JavaScript):

    function NodeStack (nodes, path){
    	this.nodes = nodes; // array of nodes
    	this.path = path; // path from the beginning to finding the desired node
        /* More logic related to make it a stack */
    }
    
    function DFS(Tree t) {
    	var firstNode = getFirstNodeFromTree(t);
    	// nodes not visited yet
    	var undiscovered = new NodeStack(firstNode, null); 
    	// nodes visited already
    	var discovered = new NodeStack(null, null); 
    	while(undiscovered.nodes.length > 0){
    		var currentNode = undiscovered.nodes[0];
    		undiscovered.nodes.remove(currentNode);
    		discovered.nodes.push(currentNode);
    		if (currentNode == solution){
    			return currentNode;
    		} else {
    			nextNodes = getNextNodesFromTree(t); // nextNodes are neither in undiscovered nor discovered
    			undiscovered.nodes.push(nextNodes);
    		}
    	}
    	return false; // it might actually not offer a node which is a solution
    }

**Related links**:

https://en.wikipedia.org/wiki/Depth-first_search
https://www.cs.us.es/cursos/ia1/temas/tema-03.pdf (in Spanish; course from my university)

