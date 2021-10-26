/**
 * @param {number[][]} grid
 * @return {number}
 */
 let shortestDistance = function(grid) {
     let rows = grid.length;
    if(rows === 0) {
        return -1;
    }
    
     let cols = grid[0].length;
    // 2D array that records sum distances to all buildings
     let dist = [];
    
    // 2D array that records how many buildings can visit here
     let nums = [];
    
    for( let row = 0; row < rows; row++) {
        dist.push([]);
        nums.push([]);
        
        for( let col = 0; col < cols; col++) {
            dist[row][col] = 0;
            nums[row][col] = 0;
        }
    }
    
     let buildingNum = 0;
    
    for(row = 0; row < rows; row++) {
        for(col = 0; col < cols; col++) {
            if(grid[row][col] === 1) {
                buildingNum++;
                bfs(grid, row, col, dist, nums);
            }
        }
    }  
    
     let min = Infinity;
    
    for(row = 0; row < rows; row++) {
        for(col = 0; col < cols; col++) {
            if(grid[row][col] === 0 && dist[row][col] !== 0 && nums[row][col] === buildingNum) {
                min = Math.min(min, dist[row][col]);
            }
        }
    }
    
    if(min < Infinity) {
        return min;
    }
    
    return -1;
};

function bfs(grid, begCol, begRow, dist, nums) {
     let rows = grid.length;
     let cols = grid[0].length;
     let queue = [];
    queue.push([begRow, begCol]);
     let dirs = [[-1,0],[0,1],[1,0],[0,-1]];
     let level = 0;
    
    // record if location is visited
     let visited = [];
    // init visited to all false
    for( let row = 0; row < rows; row++) {
        visited.push([]);
        for( let col = 0; col < cols; col++) {
            visited[row][col] = false;
        }
    }
     
    while(queue.length !== 0) {
        level++;
         let len = queue.length;
        
        for( let i = 0; i < len; i++) {
             let coords = queue.shift();
            for( let j =0; j < dirs.length; j++) {
                 let x = coords[0] + dirs[j][0];
                 let y = coords[1] + dirs[j][1];
                
                if(x >= 0 && x < rows && y >= 0 && y < cols && !visited[x][y] && grid[x][y] === 0) {
                    visited[x][y] = true;
                    
                    dist[x][y] += level;
                    nums[x][y]++;
                    queue.push([x,y]);
                }
            }
        }
    }
}


function init2D
