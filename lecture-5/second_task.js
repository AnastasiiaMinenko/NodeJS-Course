const firstCircle = {
  x: 4,
  y: 5,
  r: 3,
};
const secondCircle = {
  x: 6,
  y: 7,
  radius: 2,
};

function findAnArea(radiusOfTheCircle) {
  return (
    "The area of of the circle is " +
    Math.PI * Math.pow(radiusOfTheCircle, 2) +
    " and the perimeter of the circle is " +
    2 * Math.PI * radiusOfTheCircle
  );
}
console.log(findAnArea(firstCircle.r));

function areaOfIntersection(x0, y0, r0, x1, y1, r1) {
  var rr0 = r0 * r0;
  var rr1 = r1 * r1;
  var d = Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));

  if (d > r1 + r0) {
    return 0;
  } else if (d <= Math.abs(r0 - r1) && r0 >= r1) {
    return Math.PI * rr1;
  } else if (d <= Math.abs(r0 - r1) && r0 < r1) {
    return Math.PI * rr0;
  } else {
    var phi = Math.acos((rr0 + d * d - rr1) / (2 * r0 * d)) * 2;
    var theta = Math.acos((rr1 + d * d - rr0) / (2 * r1 * d)) * 2;
    var area1 = 0.5 * theta * rr1 - 0.5 * rr1 * Math.sin(theta);
    var area2 = 0.5 * phi * rr0 - 0.5 * rr0 * Math.sin(phi);

    return "Area of intersection is " + (area1 + area2);
  }
}

console.log(
  areaOfIntersection(
    firstCircle.x,
    firstCircle.y,
    firstCircle.r,
    secondCircle.x,
    secondCircle.y,
    secondCircle.radius
  )
);
