let today = new Date();
let hourNow = today.getHours();
let greeting;

// if (hourNow > 18) {
//   greeting = "Добрый вечер!";
// } else if (hourNow > 0) {
//   greeting = "Доброй ночи!";
// } else if (hourNow > 12) {
//   greeting = "Добрый день!";
// } else if (hourNow > 5) {
//   greeting = "Доброе утро!";
// } else {
//   greeting = "Приветствую Вас!";
// }

if (hourNow < 5) {
  greeting = "Доброй ночи !";
} else if (hourNow < 12) {
  greeting = "Доброе утро !";
} else if (hourNow < 18) {
  greeting = "Добрый день !";
} else if (hourNow < 23) {
  greeting = "Добрый вечер !";
} else {
  greeting = "Приветствую Вас!";
}

document.write("<h3>" + greeting + "</h3>");
