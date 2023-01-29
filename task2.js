// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.

function showNumberType(num) {
    let dividersArr = [];
    let remainder;
    if (num > 1000) {
        console.log("Данные неверны")
    } else if (num === 0 || num === 1) {
        console.log(`Число ${num} не является ни простым, ни составным`)
    } else {
        for (let i = 1; i <= num / 2; i++) {
            remainder = num % i;
            if (remainder === 0) {
                dividersArr.push(i);
            }
        }
        if (dividersArr.length === 1) {
            console.log(`Число ${num} - простое`)
        } else {
            console.log(`Число ${num} - составное`);
        }
    }
}
showNumberType(197);