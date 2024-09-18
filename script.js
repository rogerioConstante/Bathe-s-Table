document.addEventListener("DOMContentLoaded", function() {
    const dataTable = document.getElementById("data-table");
    var status = false;
    // Table data
    const data = [
        ["Observation VI", "8/5", "11", "10", "9", "8", "7", "6"],
        ["Observation V", "1", "7", "6", "5", "4", "3", "2"],
        ["Observation IV", "7", "6", "5", "4", "3", "2", "1"],
        ["Observation III", "2", "1", "7", "6", "5", "4", "3"],
        ["Observation II", "5", "6", "7", "1", "2", "3", "4"],
        ["Observation I", "1", "2", "3", "4", "5", "6", "7"],
        ["Places up", "1", "7", "6", "5", "4", "3", "2"],
        ["Course up 1 - Course down 8", "1/3/5/6", "6", "1/3/5", "1/6", "3/5", "1/3/6", "5"],
        ["Course up 2 - Course down 7", "6", "1/3/5", "1/6", "3/5", "1/3/6", "5", "1/3/5/6"],
        ["Course up 3 - Course down 6", "1/3/5", "1/6", "3/5", "1/3/6", "5", "1/3/5/6", "6"],
        ["Course up 4 - Course down 5", "1/6", "3/5", "1/3/6", "5", "1/3/5/6", "6", "1/3/5"],
        ["Course up 5 - Course down 4", "3/5", "1/3/6", "5", "1/3/5/6", "6", "1/3/5", "1/6"],
        ["Course up 6 - Course down 3", "1/3/6", "5", "1/3/5/6", "6", "1/3/5", "1/6", "3/5"],
        ["Course up 7 - Course down 2", "5", "1/3/5/6", "6", "1/3/5", "1/6", "3/5", "1/3/6"],
        ["Course up 8 - Course down 1", "1/3/5/6", "6", "1/3/5", "1/6", "3/5", "1/3/6", "5"],
        ["Places down", "1", "2", "3", "4", "5", "6", "7"],
        ["Observation I", "1", "2", "3", "4", "5", "6", "7"],
        ["Observation II", "5", "6", "7", "1", "2", "3", "4"],
        ["Observation III", "2", "3", "4", "5", "6", "7", "1"],
        ["Observation IV", "7", "1", "2", "3", "4", "5", "6"],
        ["Observation V", "1", "2", "3", "4", "5", "6", "7"],
        ["Observation VI", "5", "6", "7", "8", "9", "10", "11"]
    ];

    // Row colors
    const rowColors = [
        "row-lightpink", "row-lightpink", "row-lightpink", "row-lightpink", "row-lightpink", "row-lightpink",
        "row-lightgreen",
        "row-lightblue", "row-lightblue", "row-lightblue", "row-lightblue", "row-lightblue", "row-lightblue", "row-lightblue", "row-lightblue",
        "row-lightgreen",
        "row-lightpink", "row-lightpink", "row-lightpink", "row-lightpink", "row-lightpink", "row-lightpink"
    ];

    // Highlight colors
    const highlightColors = {
        "row-lightpink": "highlight-lightpink",
        "row-lightgreen": "highlight-lightgreen",
        "row-lightblue": "highlight-lightblue"
    };

    // Create table
    for (let i = 0; i < data.length; i++) {
        const row = document.createElement("tr");
        row.className = rowColors[i];

        for (let j = 0; j < data[i].length; j++) {
            const cell = document.createElement("td");
            cell.textContent = data[i][j];

            // Add bold class to specific cells
            if (j === 0 || i === 6 || i === 15) {
                cell.classList.add("bold");
            }

            row.appendChild(cell);
        }

        dataTable.appendChild(row);
    }

    // Click effect
    dataTable.addEventListener("click", function(e) {
        if (e.target.tagName === "TD") {
            const colIndex = e.target.cellIndex;
            if (!status) {
                colorir(colIndex);
            } else {
                 // Remove highlight from all cells
                Array.from(dataTable.getElementsByTagName("td")).forEach(cell => {
                    const row = cell.parentElement;
                    const rowClass = row.className;
                    const highlightClass = highlightColors[rowClass];
                    cell.classList.remove(highlightClass);
                    cell.style.display = ""; // Show all cells
                });
                status = false;
            };
        };
    });
    function colorir(colIndex) {
        if (colIndex !== 0) {
            // Remove highlight from all cells
            Array.from(dataTable.getElementsByTagName("td")).forEach(cell => {
                const row = cell.parentElement;
                const rowClass = row.className;
                const highlightClass = highlightColors[rowClass];
                cell.classList.remove(highlightClass);
                cell.style.display = ""; // Show all cells
            });

            // Add highlight to the clicked column
            Array.from(dataTable.rows).forEach(row => {
                for (let i = 1; i < row.cells.length; i++) {
                        if (i === colIndex) {
                            const cell = row.cells[i];
                            const rowClass = row.className;
                            const highlightClass = highlightColors[rowClass];
                            cell.classList.add(highlightClass);
                        } else {
                            row.cells[i].style.display = "none"; // Hide other cells
                        }
                    }
            });
          };
          status = true;
    }

});
