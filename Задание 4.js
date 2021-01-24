/*        Задание 4.
       Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math. */

let num = Math.round(Math.random() * 100);

console.log(num);


let str = prompt("Введите слово или фразу");
let result = "";

for (let i = str.length - 1; i >= 0; i--) {
    result += str.slice(i, i + 1);
}

console.log(result);

