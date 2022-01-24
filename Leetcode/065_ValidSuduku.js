


var isValidSudoku = function(board) {

    // have set record each element occurance in row/col/box
    let set = new Set();

    // nested for loop each element
    for(let row = 0; row < 9; row++) {
        for(let col = 0; col < 9; col++) {
            let num = board[row][col];
            // if ".", skip it
            if(num  === ".") {
                continue;
            }
            // console.log(num);

            // need to count each box
            let boxNum = 3 * Math.floor(row/3) + Math.floor(col/3);
            console.log(boxNum);
            
            let inRow = `row ${row}, value ${num}`;
            let inCol = `col ${col}, value ${num}`;
            let subBox = `box ${boxNum}, value ${num}`;

            // check with set if it ever occured before or not
            if(set.has(inRow) || set.has(inCol) || set.has(subBox)) {
                return false;
            }

            set.add(inRow);
            set.add(inCol);
            set.add(subBox);
        }
    }
    return true;
};

let board1 = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
console.log(isValidSudoku(board1));

let board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
console.log(isValidSudoku(board2));