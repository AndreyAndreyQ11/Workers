import { textEnter, textOutput, button } from "./modules/elements.js";
// foo1()
// function heavyСalculation(e) {
//   let number = 0;
//   for (let i = 1; i <= e; i++) {
//     number += i;
//   };
//   console.log(e);
//   return number;
// };
// textOutput.addEventListener('change', test)
let n = Number(textEnter.value);
const worker = new Worker('./workers/test.js', {
  type: 'module',
});

worker.onmessage = event => {
  console.log(event.data);
  textOutput.innerHTML = event.data;
  // textOutput.style.height = 17 * Math.ceil(((String(event.data).length) / 20)) + "px";
};
worker.onerror = error => {
  console.log(error);
  textOutput.innerHTML = error.masage;
  // textOutput.style.height = 17 * Math.ceil(((String(event.data).length) / 20)) + "px";
};


// textOutput.addEventListener('keyup', function () {
//   if (this.scrollTop > 0) {
//     this.style.height = this.scrollHeight + "px";
//   }
// });


textEnter.addEventListener('change', (e) => {
  n = Number(e.target.value);
})
button.onclick = function () {
  textOutput.innerHTML = "Ожидайте...";
  // textOutput.style.height = 17 + "px";
  worker.postMessage(n);
};





