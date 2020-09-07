import "./styles.css";

/*
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
*/

const cellList = document.getElementsByClassName("cell");

let player = 1;
let win = 0;

// making sure the document is ready and loaded
if (document.readyState !== "loading") {
  console.log("executing");
  initialize();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("executing after wait");
    initialize();
  });
}

function initialize() {
  console.log("initializing");

  // add eventlisteners to all cells
  for (let i = 0; i < cellList.length; i++) {
    cellList[i].addEventListener("mousedown", function () {
      //do the thing that happens when u click
      clickAction(i);
    });
  }
}

function clickAction(i) {
  //check if cell is empty or game has ended
  if (cellList[i].innerHTML.trim() === "" && win === 0) {
    if (player === 1) {
      // add x to cell
      cellList[i].innerHTML = "x";
      // change player
      player = 2;
    } else {
      // add o to cell
      cellList[i].innerHTML = "o";
      // change player
      player = 1;
    }

    // check win status
    // 5 in a row
    for (let i = 0; i < cellList.length; i = i + 5) {
      if (
        cellList[i].innerHTML !== "" &&
        cellList[i].innerHTML === cellList[i + 1].innerHTML &&
        cellList[i].innerHTML === cellList[i + 2].innerHTML &&
        cellList[i].innerHTML === cellList[i + 3].innerHTML &&
        cellList[i].innerHTML === cellList[i + 4].innerHTML
      ) {
        // trigger win
        winning(i);
      }
    }
    // 5 in a column
    if (win === 0) {
      for (let i = 0; i < 5; i++) {
        if (
          cellList[i].innerHTML !== "" &&
          cellList[i].innerHTML === cellList[i + 5].innerHTML &&
          cellList[i].innerHTML === cellList[i + 10].innerHTML &&
          cellList[i].innerHTML === cellList[i + 15].innerHTML &&
          cellList[i].innerHTML === cellList[i + 20].innerHTML
        ) {
          // trigger win
          winning(i);
        }
      }
    }
    // 5 diagonally
    if (win === 0) {
      let i = 0;
      if (
        cellList[i].innerHTML !== "" &&
        cellList[i].innerHTML === cellList[i + 6].innerHTML &&
        cellList[i].innerHTML === cellList[i + 12].innerHTML &&
        cellList[i].innerHTML === cellList[i + 18].innerHTML &&
        cellList[i].innerHTML === cellList[i + 24].innerHTML
      ) {
        // trigger win
        winning(i);
      }
    }
    if (win === 0) {
      let i = 4;
      if (
        cellList[i].innerHTML !== "" &&
        cellList[i].innerHTML === cellList[i + 4].innerHTML &&
        cellList[i].innerHTML === cellList[i + 8].innerHTML &&
        cellList[i].innerHTML === cellList[i + 12].innerHTML &&
        cellList[i].innerHTML === cellList[i + 16].innerHTML
      ) {
        // trigger win
        winning(i);
      }
    }
  }
}

function winning(i) {
  console.log("win sequence");
  // show winning row/column/ etc
  // cellList[i].style.backgroundColor = "lightgreen";
  // ...
  // alert winner
  if (player === 1) {
    alert("Player 2 won!");
    console.log("2");
  } else {
    alert("Player 1 won!");
    console.log("1");
  }
  // log win
  win++;
}
