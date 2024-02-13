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
      total = operate(total, num, oper);
    }
    oper = e.target.value.toString();
  }

  if (e.target.value == "=") {
    operate(total, num, oper);
  }

  console.log("(1) " + total);
  console.log(oper);
  console.log("(2) " + num);
};

function operate(a, b, o) {
  a = parseInt(a);
  b = parseInt(b);

  if (o == "+") {
    total = add(a, b);
  }
  if (o == "-") {
    total = subtract(a, b);
  }
  if (o == "*") {
    total = multiply(a, b);
  }
  if (o == "/") {
    total = divide(a, b);
  }
  display.innerHTML = total;
  num = 0;
  oper = "";
  return total;
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
  } 
  if (e.target.classList.contains("operator")) {
    grid.mouseup = (e) => {
      grid.style.opacity = 1;
      e.target.style.opacity = 0.5;
    };
  }
};

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};