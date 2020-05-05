// var a = [10,6,1];
// var b = 12;
// var c = [];
// var d = '';
// var cnt = 0;

// c.push({"id":b.toString(), "parientId": ""});

// function diferencia(af,bf,cf) {
//     if (c[cf].id > 0) {
//         for (var i = 0; i < a.length; i++){
//             if (a[i]<=c[cf].id) {
//                 var tmp = c[cf].id - a[i];
//                 c.push({"id":tmp.toString(), "parentId":c[cf].id.toString()})

//                 cnt++;
//             }                      
//         }
//     }
// }

// for (var j = 0; j < c.length; j++) {
//     diferencia(a,c[j].id,j);    
// }

// var stratify = d3.stratify()
//     .parentId(function(d) { return d.substring(0, d.lastIndexOf(".")); });
//     // .parentId(function (dos) {
//     //     return dos.id.s

//     // })



// var table = "id,value\n12,\n12.2,\n12.6,\n12.11,\n12.11.1,\n12.11.5,\n12.11.10,\n";

// // var tabla = d3.csvParse()(c);

// var estesi = stratify(table)
//       .sort(function(a, b) { return (a.height - b.height) || a.id.localeCompare(b.id); });
var margin = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
    },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// var svg = d3.select("svg"),
//     width = +svg.attr("width"),
//     height = +svg.attr("height"),
//     g = svg.append("g").attr("transform", "translate(40,0)");

var N = 1 << 0,
    S = 1 << 1,
    W = 1 << 2,
    E = 1 << 3;

function generateTree(width, height) {
    var cells = generateMaze(width, height), // each cell’s edge bits
        visited = d3.range(width * height).map(function () {
            return false;
        }),
        root = {
            index: cells.length - 1,
            children: []
        },
        frontier = [root],
        parent,
        child,
        childIndex,
        cell;

    while ((parent = frontier.pop()) != null) {
        cell = cells[parent.index];
        if (cell & E && !visited[childIndex = parent.index + 1]) visited[childIndex] = true, child = {
            index: childIndex,
            children: []
        }, parent.children.push(child), frontier.push(child);
        if (cell & W && !visited[childIndex = parent.index - 1]) visited[childIndex] = true, child = {
            index: childIndex,
            children: []
        }, parent.children.push(child), frontier.push(child);
        if (cell & S && !visited[childIndex = parent.index + width]) visited[childIndex] = true, child = {
            index: childIndex,
            children: []
        }, parent.children.push(child), frontier.push(child);
        if (cell & N && !visited[childIndex = parent.index - width]) visited[childIndex] = true, child = {
            index: childIndex,
            children: []
        }, parent.children.push(child), frontier.push(child);
    }

    return root;
}

function generateMaze(width, height) {
    var cells = new Array(width * height), // each cell’s edge bits
        remaining = d3.range(width * height), // cell indexes to visit
        previous = new Array(width * height); // current random walk

    // Add the starting cell.
    var start = remaining.pop();
    cells[start] = 0;



    // While there are remaining cells,
    // add a loop-erased random walk to the maze.
    while (!loopErasedRandomWalk());

    return cells;

    function loopErasedRandomWalk() {
        var i0,
            i1,
            x0,
            y0;

        // Pick a location that’s not yet in the maze (if any).
        do
            if ((i0 = remaining.pop()) == null) return true;
        while (cells[i0] >= 0);

        // Perform a random walk starting at this location,
        previous[i0] = i0;
        while (true) {
            x0 = i0 % width;
            y0 = i0 / width | 0;

            // picking a legal random direction at each step.
            i1 = Math.random() * 4 | 0;
            if (i1 === 0) {
                if (y0 <= 0) continue;
                --y0, i1 = i0 - width;
            } else if (i1 === 1) {
                if (y0 >= height - 1) continue;
                ++y0, i1 = i0 + width;
            } else if (i1 === 2) {
                if (x0 <= 0) continue;
                --x0, i1 = i0 - 1;
            } else {
                if (x0 >= width - 1) continue;
                ++x0, i1 = i0 + 1;
            }

            // If this new cell was visited previously during this walk,
            // erase the loop, rewinding the path to its earlier state.
            if (previous[i1] >= 0) eraseWalk(i0, i1);

            // Otherwise, just add it to the walk.
            else previous[i1] = i0;

            // If this cell is part of the maze, we’re done walking.
            if (cells[i1] >= 0) {

                // Add the random walk to the maze by backtracking to the starting cell.
                // Also erase this walk’s history to not interfere with subsequent walks.
                while ((i0 = previous[i1]) !== i1) {
                    if (i1 === i0 + 1) cells[i0] |= E, cells[i1] |= W;
                    else if (i1 === i0 - 1) cells[i0] |= W, cells[i1] |= E;
                    else if (i1 === i0 + width) cells[i0] |= S, cells[i1] |= N;
                    else cells[i0] |= N, cells[i1] |= S;
                    previous[i1] = NaN;
                    i1 = i0;
                }

                previous[i1] = NaN;
                return;
            }

            i0 = i1;
        }
    }

    function eraseWalk(i0, i2) {
        var i1;
        do i1 = previous[i0], previous[i0] = NaN, i0 = i1; while (i1 !== i2);
    }
}


var root = generateTree(4, 4);

// var tree = d3.layout.tree()
//     .size([height, width]);

var tree = d3.cluster()
    .size([height, width - 160]);

// var tree = d3.layout.tree()
//     .size([height, width - 160]);

var nodes = tree.nodes(root),
    links = tree.links(nodes);


var node = g.selectAll(".node")
    .data(root.descendants())
    .enter().append("g")
    .attr("class", function (d) {
        return "node" + (d.children ? " node--internal" : " node--leaf");
    })
    .attr("transform", function (d) {
        return "translate(" + d.y + "," + d.x + ")";
    })

node.append("circle")
    .attr("r", 2.5);

node.append("text")
    .attr("dy", 3)
    .attr("x", function (d) {
        return d.children ? -8 : 8;
    })
    .style("text-anchor", function (d) {
        return d.children ? "end" : "start";
    })
    .text(function (d) {
        return d.id.substring(d.id.lastIndexOf(".") + 1);
    });



// var link = g.selectAll(".link")
//       .data(root.descendants().slice(1))
//     .enter().append("path")
//       .attr("class", "link")
//       .attr("d", function(d) {
//         return "M" + d.y + "," + d.x
//             + "C" + (d.parent.y + 100) + "," + d.x
//             + " " + (d.parent.y + 100) + "," + d.parent.x
//             + " " + d.parent.y + "," + d.parent.x;
//       });