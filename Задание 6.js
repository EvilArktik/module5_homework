/* Задание 6.

   Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых
   элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые. */

const arr = [1, 1, 1, 1];
let result = 0;

for (let i = 0; i < arr.length; i++) {
    if (result === false) {
        break;
    }
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            result = true;
        } else {
            result = false;
            break;
        }
    }
}
console.log(result);

// И другой вариант, после того, как подумал над упрощением кода.


const arr = [1, 1, 1, 1];
let result = true;

for (let i = 0; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
        result = false;
        break;
    }
}
console.log(result);
