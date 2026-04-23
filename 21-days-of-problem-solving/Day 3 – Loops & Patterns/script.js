// Print Right-Angled Star Triangle

const RightENgledStarTriangle = (row) => {
  let str = "";
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < row; j++) {
      if (i > j) {
        str += "*";
      }
    }
    str += "\n";
  }
  console.log(str);
};

// RightENgledStarTriangle(6);

// Print Pyramid Pattern

const pyramidPattern = (row) => {
  let str = "";

  for (let i = 1; i <= 2 * row - 1; i += 2) {
    let currentRow = (i + 1) / 2;

    for (let j = 1; j <= row + currentRow - 1; j++) {
      if (j <= row - currentRow) {
        str += " ";
      } else {
        str += "*";
      }
    }

    str += "\n";
  }
  console.log(str);
};
pyramidPattern(5);
