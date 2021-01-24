/*    Задание 3.
     Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/

function reverse(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}

console.log(reverse("Hello"));

//    Или решение с помощью циклов.

let str = prompt("Введите слово или фразу");
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
    result += str.slice(i, i + 1);
}
console.log(result);
