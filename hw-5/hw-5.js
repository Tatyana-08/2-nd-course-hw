<<<<<<< HEAD
// Задание 1
const min = (a, b) => {
   if (a < b) {
      return a;
   } else {
      return b;
   }
}

console.log(min(8, 4));
console.log(min(6, 6));

// Задание 2
function parity(n) { 
   if (n % 2 == 0) {
      console.log(`Число четное`);
   } else {
      console.log(`Число нечетное`);
   };
};

parity(prompt('Введите число'));   

// Задание 3
function numeric(x) {
   console.log(`Квадрат числа ${x ** 2}`);
   return x ** 2;
};

numeric(prompt('Введите число'));

// Задание 4
function helloUser () {
   let age = prompt('Сколько Вам лет?');
   age = Number(age);

   if (isNaN(age) || age < 0) {
      alert('Вы ввели неверное значение');
   } else if (age <= 12) {
      alert('Привет, друг!')
   } else {
      alert('Добро пожаловать!');
   };
};

helloUser();

// Задание 5
function checkNumber() {
   let c = prompt('Введите первое число');
   let d = prompt('Введите второе число');
   c = Number(c);
   d = Number(d);

   if (isNaN(c) || isNaN(d)) {
      console.log('Одно или оба значения не являются числом');
   } else {
      console.log(c * d);
   };
};

checkNumber();

// Задание 6
function kubNumber () {
   let kub = prompt('Введите число');
   kub = Number(kub);
  
   if (isNaN(kub)) {
      console.log('Переданный параметр не является числом');
   } else {
      console.log(`Куб числа ${kub ** 3}`);
   };
};

kubNumber();

// Задание 7
function getCircleArea() {
   return this.radius * this.radius * 3.14;
}
function getCirclePerimeter() {
   return this.radius * 2 * 3.14;
}
 
const circle1 = {
   radius: 4,
 
   getArea: getCircleArea,
   getPerimeter: getCirclePerimeter,
};
 
const circle2 = {
   radius: 7,
 
   getArea: getCircleArea,
   getPerimeter: getCirclePerimeter,
};
 
 console.log(circle1.getArea());
 console.log(circle1.getPerimeter());
 console.log(circle2.getArea());
 console.log(circle2.getPerimeter());

 // Задание 8
let monthNumber = Number(prompt("Введите номер месяца"));

if (isNaN(monthNumber)) {
   console.log('неверный формат ввода')
} else { 

   if (monthNumber == 12 || monthNumber == 1 || monthNumber == 2) {
         console.log('зима');
      } else if (monthNumber >= 3 && monthNumber <= 5) {
         console.log('весна');
      } else if (monthNumber >= 6 && monthNumber <= 8) {
         console.log('лето');
      } else if (monthNumber >= 9 && monthNumber <= 11) {   
         console.log('осень');
      } else {
         console.log('такого месяца не существует');
   };
=======
// Задание 1
const min = (a, b) => {
   if (a < b) {
      return a;
   } else {
      return b;
   }
}

console.log(min(8, 4));
console.log(min(6, 6));

// Задание 2
function parity(n) { 
   if (n % 2 == 0) {
      console.log(`Число четное`);
   } else {
      console.log(`Число нечетное`);
   };
};

parity(prompt('Введите число'));   

// Задание 3
function numeric(x) {
   console.log(`Квадрат числа ${x ** 2}`);
   return x ** 2;
};

numeric(prompt('Введите число'));

// Задание 4
function helloUser () {
   let age = prompt('Сколько Вам лет?');
   age = Number(age);

   if (isNaN(age) || age < 0) {
      alert('Вы ввели неверное значение');
   } else if (age <= 12) {
      alert('Привет, друг!')
   } else {
      alert('Добро пожаловать!');
   };
};

helloUser();

// Задание 5
function checkNumber() {
   let c = prompt('Введите первое число');
   let d = prompt('Введите второе число');
   c = Number(c);
   d = Number(d);

   if (isNaN(c) || isNaN(d)) {
      console.log('Одно или оба значения не являются числом');
   } else {
      console.log(c * d);
   };
};

checkNumber();

// Задание 6
function kubNumber () {
   let kub = prompt('Введите число');
   kub = Number(kub);
  
   if (isNaN(kub)) {
      console.log('Переданный параметр не является числом');
   } else {
      console.log(`Куб числа ${kub ** 3}`);
   };
};

kubNumber();

// Задание 7
function getCircleArea() {
   return this.radius * this.radius * 3.14;
}
function getCirclePerimeter() {
   return this.radius * 2 * 3.14;
}
 
const circle1 = {
   radius: 4,
 
   getArea: getCircleArea,
   getPerimeter: getCirclePerimeter,
};
 
const circle2 = {
   radius: 7,
 
   getArea: getCircleArea,
   getPerimeter: getCirclePerimeter,
};
 
 console.log(circle1.getArea());
 console.log(circle1.getPerimeter());
 console.log(circle2.getArea());
 console.log(circle2.getPerimeter());

 // Задание 8
let monthNumber = Number(prompt("Введите номер месяца"));

if (isNaN(monthNumber)) {
   console.log('неверный формат ввода')
} else { 

   if (monthNumber == 12 || monthNumber == 1 || monthNumber == 2) {
         console.log('зима');
      } else if (monthNumber >= 3 && monthNumber <= 5) {
         console.log('весна');
      } else if (monthNumber >= 6 && monthNumber <= 8) {
         console.log('лето');
      } else if (monthNumber >= 9 && monthNumber <= 11) {   
         console.log('осень');
      } else {
         console.log('такого месяца не существует');
   };
>>>>>>> a7e7e8492916dd429ecc4ef38721da986eb2fc03
};