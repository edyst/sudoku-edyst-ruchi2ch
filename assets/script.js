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
          document.querySelector(`#cell-${cellIdx}`).classList.remove("placeholder")
        } else {
          document.querySelector(`#cell-${cellIdx}`).classList.remove("placeholder")
          document.querySelector(`#cell-${cellIdx} input`).value =
            board[rowIdx][colIdx];
          document.querySelector(`#cell-${cellIdx}`).classList.add("placeholder")
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
          document.querySelector(`#cell-${cellIdx}`).classList.remove("placeholder")
        } else {
          document.querySelector(`#cell-${cellIdx}`).classList.remove("placeholder")
          document.querySelector(`#cell-${cellIdx} input`).value =
            board[rowIdx][colIdx];
            document.querySelector(`#cell-${cellIdx}`).classList.add("placeholder")
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
          document.querySelector(`#cell-${cellIdx}`).classList.remove("placeholder")
        } else {
          document.querySelector(`#cell-${cellIdx}`).classList.remove("placeholder")
          document.querySelector(`#cell-${cellIdx} input`).value =
            board[rowIdx][colIdx];
            document.querySelector(`#cell-${cellIdx}`).classList.add("placeholder")
        }
      });
    });
  }

  /* function validateRow(rowNumber){
    const values=[];
    const cellStart=(rowNumber-1)*9+1;
    const cellEnd=rowNumber*9;
    for(let i=cellStart;i<=cellEnd;i++){
      const v=document.querySelector(`#cell-${i} input`).value
      if(v!=="")values.push(v)
    }
    let val=isSudokuArrayValid(values)
    console.log(val)
  }
  const isSudokuArrayValid = (array) => {
    const row = array.slice(0).sort().join(''),
          passingRow = [1,2,3,4,5,6,7,8,9].join('');
  
    return (row === passingRow);
  }; 
  document.getElementById("validate").addEventListener("click", validateRow(1));  */
   function validateRow(rowNumber){
    const values=[];
    const cellStart=(rowNumber-1)*9+1;
    const cellEnd=rowNumber*9;
    for(let i=cellStart;i<=cellEnd;i++){
      const v=document.querySelector(`#cell-${i} input`).value
      if(v!=="")values.push(v)
    }
    values.sort()
    for(let i=1;i<9;i++){
      if(values[i]==values[i+1]){
        document.querySelector(`#cell-${i}`).classList.add("cell-error")
      }
    }
    console.log(values);
 
 
  }
     
 function validateRows(){
  for(let i=1;i<=9;i++){
    validateRow(i);
  }
 }
   
  function validateSudoku(){
   return validateRow(1);
   //return (_validate(_rows) && _validate(_cols) && _validate(_grid));
 }

    window.onload=function(){
     document.getElementById("easy").addEventListener("click", setEasyBoard);
     
     document.getElementById("medium").addEventListener("click", setMediumBoard);
  
     document.getElementById("hard").addEventListener("click", setHardBoard);
     
     document.getElementById("validate").addEventListener("click", validateSudoku);
    }
    
    /* let rows=[];
    let columns=[];
    let box=[];

    // ROW LOOP
ffunction isValidSudoku(board) { 
  for (let i = 0; i < board.length; i++) { 
    for (let j = 0; j < board.length; j++) {

      let cell = board[i][j];

      if(cell !== "") {
        if (rows[i].includes(cell) {
          return false
        } else rows[i].push(cell);

        if (columns[j].includes(cell) {
          return false;
        } else columns[j].push(cell);

        let boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);

        if (boxes[boxIndex].includes(cell) {
          return false;
        } else boxes[boxIndex].push(cell);

      }
    }
  } 

  return true;

} */
 
  