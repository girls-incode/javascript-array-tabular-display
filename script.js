let A = [6, 88, 2, 98652, 43, 70, 1022, 3];
let C = 6;

/* Can be replaced with ES6 repeat method
function repeatString(n, string) {
    let repeat = [];
    repeat.length = n + 1;
    return repeat.join(string);
}
*/

function getLine(cellWidth, numCols) {
    let res = '';
    let dash = "-".repeat(cellWidth);
    res = ('+' + dash).repeat(numCols) + '+';
    return res + '\n'
}

function printCell(item, cellWidth) {
    let diff = cellWidth - getNumberSize(item);
    let space = " ".repeat(diff);
    return "|" + space + item
}

function getNumberSize(num) {
    // Number(num).toString().length
    return ("" + num).length
}

function print(A, C) {
    let N = A.length;
        maxItem = Math.max(...A),
        cellWidth = getNumberSize(maxItem),
        leftCol = 0,
        output = '';
    
    C = Math.abs(Math.floor(C));
    if (!C || C >= N) {
        C = N;
    }
    leftCol = Math.floor(N % C);

    let line = getLine(cellWidth, C);

    output = line;
    for (let i=0; i<N; i++) {
        output += printCell(A[i], cellWidth);
        if ((i+1) % C == 0) {
            output += '|\n' + line;
        }
    }
    if (leftCol) {
        line = getLine(cellWidth, leftCol);
        output += '|\n' + line;
    }

    console.log(output);
}

console.log('A: ', A);
console.log('C: ', C);
print(A, C);
