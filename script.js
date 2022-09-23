import { textEnter, textOutput, button } from "./modules/elements.js";
// foo1()
function foo1() {
  let number = null;
  for (let i = 0; i < textEnter; i++) {
    number += i;
  };
  return number;
};

button.onclick = function () {
  textOutput.value = "Ожидайте"
  textOutput.value = foo1();
};



console.log(textEnter);
console.log(textOutput);
console.log(button);






