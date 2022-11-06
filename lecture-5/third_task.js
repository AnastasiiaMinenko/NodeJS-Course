let x = 4;
let y = 4;
let circle_x = 1;
let circle_y = 1;
let rad = 6;

function isInside(circle_x, circle_y, rad, x, y) {
  if (
    (x - circle_x) * (x - circle_x) + (y - circle_y) * (y - circle_y) <=
    rad * rad
  )
    return true;
  else return false;
}

if (isInside(circle_x, circle_y, rad, x, y)) {
  console.log("The point is inside");
} else {
  console.log("The point is outside");
}
