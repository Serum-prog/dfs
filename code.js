const grid2 = [
    ["1","1","0","0"],
    ['1','0','1','1'],
    ['0','0','1','0']
]
var numIslands = function(grid) {
    let count = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            count += dfs(i,j)
        }
    }


    function dfs(i, j) {

        if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
            return 0
        }
        grid[i][j] = '0'
        //look at 12 o'clock
        dfs(i - 1,j)
        //look at 3 o'clock
        dfs(i,j + 1)
        //look at 6 o'clock
        dfs(i + 1,j)
        //look at 9 o'clock
        dfs(i,j - 1)
        return 1

    }
    return count
}
numIslands(grid2)
