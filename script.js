let display = document.getElementById("display");
let button = document.querySelector("button");
let grid = document.getElementById("button-grid");
let ac = document.querySelector(".clear");
let number = document.querySelector(".number");

let total = 0;
let num = 0;
let oper = "";

grid.onclick = (e) => {
  if (total == 0 && e.target.classList.contains("operator")) {
    return;
  }

  if (e.target.classList.contains("number")) {
    if (oper == "") {
      if (total != 0) {
        total = total.toString() + e.target.value.toString();
      } else {
        total = e.target.value;
      }
      display.innerHTML = total;
    } else {
      if (num != 0) {
        num = num.toString() + e.target.value.toString();
      } else {
        num = e.target.value;
      }
      display.innerHTML = num;
    }
  }

  if (e.target.classList.contains("operator") && e.target.value != "=") {
    if (total != 0 && num != 0) {
      total = operate(total, oper, num);
    }
    oper = e.target.value.toString();
  }

  if (e.target.value == "=") {
    operate(parseInt(total), oper, parseInt(num));
  }

  console.log("(1) " + total);
  console.log(oper);
  console.log("(2) " + num);
};

function operate(total, oper, num) {
  total = parseInt(total);
  num = parseInt(num);

  if (oper == "+") {
    total = add(total, num);
  }
  if (oper == "-") {
    total = subtract(total, num);
  }
  if (oper == "*") {
    total = multiply(total, num);
  }
  if (oper == "/") {
    total = divide(total, num);
  }
  display.innerHTML = total;
}

ac.addEventListener("click", () => {
  display.innerHTML = "0";
  total = 0;
  oper = "";
  num = 0;
});

grid.onmousedown = (e) => {
  e.target.style.opacity = 0.5;
  if (e.target.classList.contains("number")) {
    grid.onmouseup = (e) => {
      e.target.style.opacity = 1;
    };
  } else if (e.target.classList.contains("operator")) {
    grid.mouseup = (e) => {
      grid.style.opacity = 1;
      e.target.style.opacity = 0.5;
    };
  }
};

function dimmer() {}

// grid.addEventListener("mousedown", (e) =>{
//     e.target.style.opacity = 0.5;
// });

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// function sum(array) {
// return array.reduce((total, current) => total + current, 0);
// };

// function multiply(array) {
// return array.reduce((product, current) => product * current);
// };

// number.addEventListener("click", (e) =>{
//     e.target.style.backgroundColor = 'red';
//     console.log("sup")
//   });
