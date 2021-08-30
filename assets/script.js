 function setEasyBoard() {
    const board = [
      [0, 0, 9, 6, 0, 8, 5, 0, 0],
      [1, 0, 0, 4, 0, 0, 9, 3, 0],
      [4, 6, 0, 0, 3, 1, 0, 0, 0],
      [3, 0, 1, 7, 8, 9, 0, 0, 0],
      [0, 7, 8, 0, 0, 4, 0, 5, 9],
      [0, 0, 4, 0, 6, 0, 1, 0, 7],
      [8, 4, 2, 5, 0, 0, 0, 1, 0],
      [5, 0, 0, 1, 2, 0, 4, 6, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 5]
    ];
  
    board.forEach((row, rowIdx) => {
      row.forEach((col, colIdx) => {
        const cellIdx = rowIdx * 9 + colIdx + 1;
        if (board[rowIdx][colIdx] === 0) {
          document.querySelector(`#cell-${cellIdx} input`).value = "";
        } else {
          document.querySelector(`#cell-${cellIdx} input`).value =
            board[rowIdx][colIdx];
        }
      });
    });
  }
 

  function setMediumBoard() {
    const board = [
      [8, 0, 0, 7, 3, 0, 0, 1, 0],
      [0, 0, 5, 0, 0, 0, 2, 0, 6],
      [1, 4, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 7, 0, 0, 0],
      [0, 0, 8, 9, 0, 0, 4, 0, 3],
      [0, 0, 0, 0, 4, 0, 0, 0, 0],
      [0, 0, 6, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 4, 0, 0, 9, 0, 8],
      [9, 7, 0, 8, 0, 0, 0, 6, 0]
    ]
  
    board.forEach((row, rowIdx) => {
      row.forEach((col, colIdx) => {
        const cellIdx = rowIdx * 9 + colIdx + 1;
        if (board[rowIdx][colIdx] === 0) {
          document.querySelector(`#cell-${cellIdx} input`).value = "";
        } else {
          document.querySelector(`#cell-${cellIdx} input`).value =
            board[rowIdx][colIdx];
        }
      });
    });
  }


  function setHardBoard() {
    const board = [
      [0, 5, 0, 0, 0, 0, 4, 0, 0],
      [1, 6, 0, 8, 0, 0, 7, 0, 5],
      [4, 0, 0, 0, 0, 0, 0, 2, 6],
      [0, 4, 9, 0, 0, 0, 0, 0, 0],
      [8, 0, 5, 6, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 8, 7, 0],
      [0, 0, 0, 3, 9, 0, 0, 6, 4],
      [0, 0, 0, 0, 0, 6, 0, 1, 0],
      [9, 0, 0, 0, 2, 0, 0, 0, 0]
    ];
  
    board.forEach((row, rowIdx) => {
      row.forEach((col, colIdx) => {
        const cellIdx = rowIdx * 9 + colIdx + 1;
        if (board[rowIdx][colIdx] === 0) {
          document.querySelector(`#cell-${cellIdx} input`).value = "";
        } else {
          document.querySelector(`#cell-${cellIdx} input`).value =
            board[rowIdx][colIdx];
        }
      });
    });
  }

    
    window.onload=function(){
     document.getElementById("easy").addEventListener("click", setEasyBoard);
     
     document.getElementById("medium").addEventListener("click", setMediumBoard);
  
     document.getElementById("hard").addEventListener("click", setHardBoard);
    }
   
  
  

  