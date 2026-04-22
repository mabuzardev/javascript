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

RightENgledStarTriangle(6);
