// Задание 1
let i;
for (i = 0; i < 2; i++) {
   console.log('Привет');
};

// Задание 2
for (i = 1; i < 6; i++) {
   console.log(i);
};

// Задание 3
for (i = 7; i < 23; i++) {
   console.log(i);
};

// Задание 4
const obj = {
   'Коля': 200,
   'Вася': 300,
   'Петя': 400
};

for (let name in obj) {
   console.log(`имя сотрудника - ${name}, сумма - ${obj[name]}$`);
};

// Задание 5
let n = 1000;
let num = 0;

while (n >= 50) {
   console.log(`Шаг - ${num}, результат - ${n}`);
   num++;
   n = n / 2;
};

// Задание 6
let firstFriday = 5;

for (firstFriday = 2; firstFriday < 31; firstFriday += 7) {
   console.log(`Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет.`);
}
