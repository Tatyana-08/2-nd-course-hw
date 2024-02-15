// Задание 1
let password = 'пароль';
let password2 = prompt('Введите пароль');
if (password === password2) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
};

// Задание 2
let c = 2;
if (c > 0 && c < 10) {
   console.log('Верно');
} else {
   console.log('Неверно');
};

// Задание 3
let d = 2;
let e = 101;
if (d > 100 || e > 100) {
   console.log('Верно');
} else {
   console.log('Неверно');
};

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5
var monthNumber = Number(prompt("Введите номер месяца"));

if (isNaN(monthNumber)) {
   console.log('неверный формат ввода')
} else { 

   switch (monthNumber) {
      case 12:
      case 1:
      case 2:
         console.log('зима');
         break;
      case 3:
      case 4:
      case 5:
         console.log('весна');
         break;
      case 6:
      case 7:
      case 8:
         console.log('лето');
         break;   
      case 9:
      case 10:
      case 11:
         console.log('осень');
         break;

      default:
         console.log('такого месяца не существует');
   };
};