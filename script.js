let boxes = document.querySelectorAll('.box');
let turnO = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
            checkWin();
        } else {
            box.innerText = 'X';
            turnO = true;
            checkWin();
        }
        box.disabled = true;
    });
});
checkWin = () => {
    for (let pattern of winpatterns) {
        let [a, b, c] = pattern;
        if (boxes[a].innerText !== '' && boxes[a].innerText === boxes[b].innerText && boxes[b].innerText === boxes[c].innerText) {
            console.log(`${boxes[a].innerText} has won !`);
            document.getElementById('winner').innerText = `${boxes[a].innerText} has won !`;
            boxes.forEach(box => box.disabled = true);
            return;
        }
    }
};
resetgame = () => {
    boxes.forEach(box => {
        box.innerText = '';
        box.disabled = false;
    });
    document.getElementById('winner').innerText = 'Winner';
    turnO = true;
};
document.getElementById('btn-reset').addEventListener('click', resetgame);