function multiply(a, b) {
  let aNumRows = a.length,
    aNumCols = a[0].length,
    bNumCols = b[0].length,
    m = new Array(aNumRows);
  for (let r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols);
    for (let c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;
      for (let i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}

function display(m) {
  for (let r = 0; r < m.length; ++r) {
    console.log(m[r].join(" "));
  }
}

let a = [
    [8, 3],
    [2, 4],
    [3, 6],
  ],
  b = [
    [1, 2, 3],
    [4, 6, 8],
  ];

display(multiply(a, b));
