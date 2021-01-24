/* Задание 5.
   Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива. */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(arr.length);

let result = arr.map(function (item, index, array) {
    return item + "10"
});

console.log(result);

