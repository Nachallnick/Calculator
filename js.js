let a = ""; // first number
let b = ""; // second number
let sign = ""; // Знак операции
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/", "%"];

// display
const out = document.querySelector(".calc-screen p");

function clearAll() {
  a = ""; // first number and result
  b = ""; // second number
  sign = ""; // Знак
  finish = false;
  out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  //Нажата не кнопка
  if (!event.target.classList.contains("btn")) return;
  // Нажата кнопка
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";
  // получаю нажатую кнопки
  const key = event.target.textContent;

  // если нажата клавиша 0-9 or dot
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      console.log(a, b, sign);
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    console.table(a, b, sign);
    return;
  }

  // Если нажата клавиша +-/*
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(a, b, sign);
    return;
  }

  // Нажата =
  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "%":
        a = (a * b) / 100
        break
      case "/":
        if (b === "0") {
          out.textContent = "Ошибка";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
    console.table(a, b, sign);
  }
};
