// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
const iPhone = 2007;
console.log(iPhone);

// Задание 3
const name='Brendan Eich';
console.log(name);

// Задание 4
let x=10, y=2;
alert(x+y);
alert(x-y);
alert(x*y);
alert(x/y);

// Задание 5
let result = y ** 5;
alert(result);

// Задание 6
a=9;
let b=2;
alert(a%b);

// Задание 7
let num = 1;
alert(num += 5);
alert(num *= 7);
alert(num -= 3);
alert(num /= 3);
alert(num++);
alert(num--);
alert(num);

// Задание 8
let age=prompt('Сколько Вам лет?');
alert(age);

// Задание 9.0
const user = {
    name: 'Иван',
    age: 20,
    isAdmin: true,
 }

console.log(user['name']); 
console.log(user['age']);
console.log(user['isAdmin']);

// Задание 9.1
user['city of residence'] = 'Moscow';

console.log(user['city of residence']); 

// Задание 9.2
user.age = 25;

console.log(user.age); 

// Задание 9.3
delete user['city of residence'];

console.log(user['city of residence']); 

// Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?", "name, age");
alert(user[info]); 

// Задание 10
let userName=prompt('Ваше имя?');
alert(`Привет, ${userName}!`);