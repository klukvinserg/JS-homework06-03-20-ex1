let max;
let min;

while (true) {
  min = +prompt("Enter min");
  max = +prompt("Enter max");

  if (min <= max && !isNaN(min) && !isNaN(max)) {
    break;
  } else {
    alert("Input incorrect");
    continue;
  }
}

for (let i = min + 1; i <= max; i++) {
  min += i;
}

alert(min);
