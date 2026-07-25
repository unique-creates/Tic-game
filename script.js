const cells=document.querySelectorAll(".cell");

const statusText=document.getElementById("status");

const restart=document.getElementById("restart");

const line=document.getElementById("winLine");

const modal=document.getElementById("winnerModal");

const winnerText=document.getElementById("winnerSubText");

const newGameBtn=document.getElementById("newGameBtn");

let board=["","","","","","","","",""];

let currentPlayer="X";

let gameOver=false;

const wins=[

[0,1,2],
[3,4,5],
[6,7,8],

[0,3,6],
[1,4,7],
[2,5,8],

[0,4,8],
[2,4,6]

];

const coordinates={

0:[60,60],
1:[180,60],
2:[300,60],

3:[60,180],
4:[180,180],
5:[300,180],

6:[60,300],
7:[180,300],
8:[300,300]

};

cells.forEach(cell=>{

cell.addEventListener("click",clickCell);

});

restart.addEventListener("click",restartGame);

function clickCell(){

if(gameOver)return;

const index=this.dataset.index;

if(board[index]!="")return;

board[index]=currentPlayer;

this.textContent=currentPlayer;

checkWinner();

}

function checkWinner(){

for(let pattern of wins){

const[a,b,c]=pattern;

if(

board[a] &&
board[a]===board[b] &&
board[a]===board[c]

){

gameOver=true;

statusText.textContent="Player "+board[a]+" Wins!";

setTimeout(()=>{

    winnerText.textContent="🏆 Player "+board[a]+" Wins!";

        modal.classList.add("show");

        },600);

        drawWinningLine(pattern);

        return;

        }

        }

        if(!board.includes("")){

        statusText.textContent="Match Draw";

        setTimeout(()=>{

            winnerText.textContent="🤝 It's a Draw!";

                modal.classList.add("show");

                },500);

                gameOver=true;

                return;

                }

                currentPlayer=currentPlayer=="X"?"O":"X";

                statusText.textContent="Player "+currentPlayer+" Turn";

                }

                function drawWinningLine(pattern){

                    const board = document.getElementById("board");
                        const boardRect = board.getBoundingClientRect();

                            const startCell = document.querySelector(`.cell[data-index="${pattern[0]}"]`);
                                const endCell = document.querySelector(`.cell[data-index="${pattern[2]}"]`);

                                    const startRect = startCell.getBoundingClientRect();
                                        const endRect = endCell.getBoundingClientRect();

                                            const x1 = startRect.left + startRect.width / 2 - boardRect.left;
                                                const y1 = startRect.top + startRect.height / 2 - boardRect.top;

                                                    const x2 = endRect.left + endRect.width / 2 - boardRect.left;
                                                        const y2 = endRect.top + endRect.height / 2 - boardRect.top;

                                                            line.setAttribute("x1", x1);
                                                                line.setAttribute("y1", y1);
                                                                    line.setAttribute("x2", x2);
                                                                        line.setAttribute("y2", y2);

                                                                            line.classList.remove("draw");
                                                                                void line.offsetWidth;   // Restart animation
                                                                                    line.classList.add("draw");
                                                                                    }

                                                                                    function restartGame(){

                                                                                    board=["","","","","","","","",""];

                                                                                    gameOver=false;

                                                                                    currentPlayer="X";

                                                                                    cells.forEach(cell=>{

                                                                                    cell.textContent="";

                                                                                    });

                                                                                    statusText.textContent="Player X Turn";

                                                                                    line.classList.remove("draw");

                                                                                    line.setAttribute("x1",0);

                                                                                    line.setAttribute("y1",0);

                                                                                    line.setAttribute("x2",0);

                                                                                    line.setAttribute("y2",0);
                                                                                    modal.classList.remove("show");

                                                                                    }

                                                                                    newGameBtn.addEventListener("click",()=>{

                                                                                        modal.classList.remove("show");

                                                                                            restartGame();

                                                                                            });
                                                                                            