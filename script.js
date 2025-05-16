const html = document;
const play = html.getElementById("play");
const board = html.getElementsByClassName("board");
const A11 = html.getElementById("s11");
const A12 = html.getElementById("s12");
const A13 = html.getElementById("s13");
const A21 = html.getElementById("s21");
const A22 = html.getElementById("s22");
const A23 = html.getElementById("s23");
const A31 = html.getElementById("s31");
const A32 = html.getElementById("s32");
const A33 = html.getElementById("s33");
const bottom = html.getElementById("bottom");

let turn = 0; // X (default)
let empty = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let whoWIn = 0;
bottom.innerText = "You Play X";

function win() {
    //Row
    for (let i = 0; i < 3; i++) {
        if (empty[i][0] != 0 && empty[i][0] == empty[i][1] && empty[i][0] == empty[i][2]) {
            whoWIn = turn ? 1 : -1;
        }
    }

    //Column
    for (let i = 0; i < 3; i++) {
        if (empty[0][i] != 0 && empty[0][i] == empty[1][i] && empty[0][i] == empty[2][i]) {
            whoWIn = turn ? 1 : -1;
        }
    }

    // Daigonal
    if (empty[0][0] != 0 && empty[0][0] == empty[1][1] && empty[0][0] == empty[2][2]) {
        whoWIn = turn ? 1 : -1;
    }
    if (empty[2][0] != 0 && empty[2][0] == empty[1][1] && empty[2][0] == empty[0][2]) {
        whoWIn = turn ? 1 : -1;
    }
}

function isFull() {
    let fill = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (empty[i][j])
                fill++;
        }
    }
    return fill >= 9;
}

function clearBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            empty[i][j] = 0;
            html.getElementById("s" + (i + 1).toString() + (j + 1).toString()).innerText = "";
        }
    }
}

function move(attr, point, n) {
    attr.addEventListener("click", function () {
        if (isFull() || whoWIn != 0) {
            clearBoard();
            bottom.innerText = "You Play X";
        }
        else {
            if (point[Math.floor(n / 3)][n % 3]) {
                bottom.innerText = "Already filled. Choose another position";
            }
            else {
                attr.innerText = turn ? "O" : "X";
                point[Math.floor(n / 3)][n % 3] = turn ? 1 : -1;
                win();
                console.log(whoWIn);
                if (whoWIn == 1) {
                    bottom.innerText = "O WINS";
                }
                else if (whoWIn == -1) {
                    bottom.innerText = "X wins";
                }
                else {
                    turn = turn ? 0 : 1;
                    bottom.innerText = turn ? "You Play O" : "You Play X";
                }
                if (isFull()) {
                    bottom.innerText = "GAME DRAW";
                }
            }
        }
    });
}

move(A11, empty, 0);
move(A12, empty, 1);
move(A13, empty, 2);
move(A21, empty, 3);
move(A22, empty, 4);
move(A23, empty, 5);
move(A31, empty, 6);
move(A32, empty, 7);
move(A33, empty, 8);






