// Get a reference to the table cells and the message element
var cells = document.getElementsByTagName("td");
var message = document.querySelector(".message");

// Keep track of the current player
var currentPlayer = 1;

// Add an event listener to each cell
for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(event) {
    // Get the cell that was clicked
    var cell = event.target;

    // Make sure the cell is empty
    if (cell.textContent === "") {
      // Set the cell's text to the current player's symbol
      if (currentPlayer === 1) {
        cell.textContent = "X";
        cell.className = "player-1";
        currentPlayer = 2;
      } else {
        cell.textContent = "O";
        cell.className = "player-2";
        currentPlayer = 1;
      }

      // Check if the current player has won
      if (checkForWinner()) {
        // Display a message to announce the winner
        message.textContent = "Player " + currentPlayer + " wins!";
      }
    }
  });
}

// Add an event listener to the reset button
document.querySelector("#reset-button").addEventListener("click", function() {
  // Reset the board and the message
  resetBoard();
  message.textContent = "";
});

// Function to check for a winner
function checkForWinner() {
  // Get the cells in each row and column
  var rows = document.querySelectorAll("tr");
  var cols = document.querySelectorAll("td");

  // Check the rows
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    if (row.children[0].textContent === row.children[1].textContent && row.children[1].textContent === row.children[2].textContent && row.children[0].textContent !== "") {
      return true;
    }
  }

  // Check the columns
  for (var i = 0; i < cols.length; i++) {
    var col = cols[i];
    if (col.parentElement.children[0].textContent === col.parentElement.children[1].textContent && col.parentElement.children[1].textContent === col.parentElement.children[2].textContent && col.parentElement.children[0].textContent !== "") {
      return true;
    }
  }

  // Check the diagonals
  if (rows[0].children[0].textContent === rows[1].children[1].textContent && rows[1].children[1].textContent === rows[2].children[2].textContent && rows[0].children[0].textContent !== "") {
    return true;
  }
  if (rows[0].children[2].textContent === rows[1].children[1].textContent && rows[1].children[1].textContent === rows[2].children[0].textContent && rows[0].children[2].textContent !== "") {
    return true;
  }

  return false;
}

// Function to reset the board
function resetBoard() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
    cells[i].className = "";
  }
  currentPlayer = 1;
}
