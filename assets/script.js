const btnEasy=document.getElementById('easytBtn')
btnEasy.addEventListener('click',alert("hello"))
 function setEasyBoard(){
    const board=[
        [0,0,9,6,0,8,5,0,0],
        [1,0,0,4,0,0,9,3,0],
        [4,6,0,0,3,1,0,0,0],
        [3,0,1,7,8,9,0,0,0],
        [0,7,8,0,0,4,0,5,9],
        [0,0,4,0,6,0,1,0,7],
        [8,4,2,5,0,0,0,1,0],
        [5,0,0,1,2,0,4,6,0],
        [0,1,0,0,0,0,0,0,5],
    ]

    board.forEach((row,rowIdx)=>{
        row.forEach((col,colIdx)=>{
            const cellIdx=rowIdx*9+colIdx+1;
            if(board[rowIdx][colIdx]===0){
                document.querySelector(`#cell-${cellIdx} input`).value=""
            }else{
                document.querySelector(`#cell-${cellIdx} input`).value=board[rowIdx][colIdx]
            }
        })
    })
} 
/* const btnEasy=document.getElementById('easytBtn')
btnEasy.addEventListener('click',alert("hello"))
 */