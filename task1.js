// В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

// На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

let arrExample = [1, 2, 3, 4, 0, null, true, undefined, NaN, 7];
function countArrayElements(arr) {
    let evenCounter = 0;
    let oddCounter = 0;
    let zeroCounter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i]) !== true && typeof arr[i] === 'number') {
            if (arr[i] % 2 === 0) {
                if (arr[i] === 0) {
                    zeroCounter++;
                } else evenCounter++;
            } else oddCounter++
        }
    }
    console.log(`Четных ненулевых элементов: ${evenCounter}`);
    console.log(`Нечетных элементов: ${oddCounter}`);
    console.log(`Нулей: ${zeroCounter}`);
}
countArrayElements(arrExample);