// Задание 1
// Создайте класс Worker. Класс должен содержать свойства name, surname. Создайте на его основе объект worker. Выведите в консоль созданный объект.
// Подсказка: имена классов пишем с большой буквы

//Ваш код
class Worker {
	constructor(name, surname) {
	  this.name = name;
	  this.surname = surname;
	}
	fullName() {
		return this.surname + ', ' + this.name
		  }
}

//Создаём объекта на основе класса Worker
const worker = new Worker("Ivan", 'Petrov');

//Выводим созданный объект в консоль
console.log(worker);

//Задание 2
//Добавьте в класс Worker метод fullName, который будет возвращать полное имя работника в формате "Фамилия, Имя". Создайте объект worker2 на основе класса Worker и выведите его полное имя в консоль с помощью метода fullName

//Ваш код - Задание 1
//Создаём объект worker2 на основе класса Worker
const worker2 = new Worker('Fedr', 'Ivanov');
//Выводим полное имя объекта worker2 в консоль с помощью метода fullName
console.log(worker2.fullName());


//Задание 3
//Создайте класс Car. Класс должен содержать свойства brand, model и year. Создайте на его основе объект car и выведите его свойства в консоль.

//Ваш код
const currentYear = new Date().getFullYear();

class Car {
	constructor(brand, model, year) {
	  this.brand = brand;
	  this.model = model;
	  this.year = year;
	}
	getAge() {
		return currentYear - this.year
	  }
}

//Создаём объекта на основе класса Worker
const car = new Car('BMW', 'X5', 2021);

//Выводим созданный объект в консоль
console.log(car);
console.log(car.getAge()); // 2


//Задание 4
//Добавьте в класс Car метод getAge, который будет возвращать возраст машины (текущий год минус год выпуска). Создайте объект car2 на основе класса Car и выведите его возраст в консоль с помощью метода getAge.

//Ваш код - Задание 3
//Создаём объект car2 на основе класса Car
const car2 = new Car('Brand', 'Model', 2010);
//Выводим возраст объекта car2 в консоль с помощью метода getAge
console.log(car2.getAge()); // 13


//Задание 5
//Создайте класс Rectangle. Класс должен содержать свойства width и height. Создайте на его основе объект rectangle и выведите его свойства в консоль.

//Ваш код
class Rectangle {
	constructor(width, height) {
	  this.width = width;
	  this.height = height;
	}
	getArea() {
		return this.width * this.height
	  }
}
const rectangle = new Rectangle(200, 100);
console.log(rectangle);


//Задание 6
//Добавьте в класс Rectangle метод getArea, который будет возвращать площадь прямоугольника (произведение ширины и высоты). Создайте объект rectangle2 на основе класса Rectangle и выведите его площадь в консоль с помощью метода getArea.

//Ваш код - Задание 5
const rectangle2 = new Rectangle(150, 50);
console.log(rectangle2.getArea()); // 7500


//Задание 7
//Создайте класс Circle. Класс должен содержать свойство radius. Создайте на его основе объект circle и выведите его свойство в консоль.

//Ваш код
class Circle {
	constructor(radius) {
	  this.radius = radius;
	}
	calculateArea() {
		return Math.round(this.radius ** 2 * Math.PI)
	}
}
const circle = new Circle(18);
console.log(circle);
console.log(circle.calculateArea()); // 1018


//Задание 8
//Добавьте в класс Circle метод calculateArea, который будет вычислять и возвращать площадь круга. Формула для расчета площади круга: площадь = радиус * радиус * 3.14. Создайте объект circle2 на основе класса Circle с радиусом 3 и выведите его площадь круга в консоль с помощью метода calculateArea.

//Ваш код - Задание 7
const circle2 = new Circle(3);
console.log(circle2.calculateArea()); // 28.274333882308138 // 28


//Задание 9
//Создайте класс Student. Класс должен содержать свойства name, age и grade. Создайте на его основе объект student и выведите его свойства в консоль.

//Ваш код
class Student {
	constructor(name, age, grade) {
	  this.name = name;
	  this.age = age;
	  this.grade = grade;
	}
	increaseGrade() {
		return ++this.grade
	  }
}

const student = new Student('Vasiliy', 21, 5);
console.log(student);

//Задание 10
//Добавьте в класс Student метод increaseGrade, который будет увеличивать текущую оценку на 1. Создайте объект student2 на основе класса Student, увеличьте его оценку с помощью метода increaseGrade и выведите новую оценку в консоль.

//Ваш код - Задание 9
const student2 = new Student('Petya', 23, 4);
console.log(student2.increaseGrade()); // 5
console.log(student2.increaseGrade()); // 6


//Задание 11
//Создайте класс Book. Класс должен содержать свойства title, author и year. Создайте на его основе объект book и выведите его свойства в консоль.

//Ваш код
class Book {
	constructor(title, author, year) {
	  this.title = title;
	  this.author = author;
	  this.year = year;
	}
	getTitleAndAuthor() {
		return '"' + this.title + '" - ' + this.author
	  }
}

const book = new Book('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 1997);
console.log(book);
console.log(book.getTitleAndAuthor()); // "Harry Potter and the Philosopher's Stone" - J.K. Rowling


//Задание 12
//Добавьте в класс Book метод getTitleAndAuthor, который будет возвращать строку в формате "Название книги - Автор". Создайте объект book2 на основе класса Book и выведите его название и автора в консоль с помощью метода getTitleAndAuthor.

//Ваш код - Задание 11
const book2 = new Book('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 1998);
console.log(book2);
console.log(book2.getTitleAndAuthor()); // "Harry Potter and the Chamber of Secrets" - J.K. Rowling


//Задание 13
//Создайте класс BankAccount. Класс должен содержать свойства accountNumber и balance. Создайте на его основе объект account и выведите его свойства в консоль.

//Ваш код

class BankAccount {
	constructor(accountNumber, balance) {
	  this.accountNumber = accountNumber;
	  this.balance = balance;
	}
	deposit(incoming) {
		return this.balance += incoming
	  }

	withdraw(amount) {
		if (amount <= this.balance) {
			return this.balance -= amount
		} else {
			console.log("Insufficient funds in your banking account")
		}
	}
}

const account = new BankAccount(12345678900, 530);
console.log(account);
console.log(account.deposit(50)); // 580

//Задание 14
//Добавьте в класс BankAccount метод deposit, который будет увеличивать баланс на заданную сумму. Создайте объект account2 на основе класса BankAccount, пополните его баланс с помощью метода deposit и выведите новый баланс в консоль.

//Ваш код - Задание 13
const account2 = new BankAccount(98765432100, 280);
console.log(account2);
console.log(account2.deposit(130)); // 410
console.log(account2.deposit(280)); // 690


//Задание 15
//В класс BankAccount добавлен метод withdraw, который уменьшает баланс на заданную сумму. Если запрошенная сумма превышает текущий баланс, выведите сообщение "Недостаточно средств". Создайте объект account3 на основе класса BankAccount, попробуйте снять с него сумму, превышающую баланс, и выведите соответствующее сообщение в консоль.

//Создайте объект account3 на основе класса BankAccount
//Попытайтесь снять сумму, превышающую баланс
const account3 = new BankAccount(12300045600, 150);
console.log(account3);
console.log(account3.withdraw(50)); // 100
console.log(account3.withdraw(150)); // Insufficient funds in your banking account


//Задание 16
//Создайте класс Animal. Класс должен содержать свойства name и sound. Создайте на его основе объект animal и выведите его свойства в консоль.
//Ваш код
class Animal {
	constructor(name, sound) {
	  this.name = name;
	  this.sound = sound;
	}
	makeSound() {
		return console.log(this.sound)
	  }
}

const animal = new Animal('Kitten', 'Meow-Meow');
console.log(animal);


//Задание 17
//Добавьте в класс Animal метод makeSound, который будет выводить в консоль звук животного. Создайте объект animal2 на основе класса Animal и вызовите метод makeSound.
//Ваш код
const animal2 = new Animal('Puppy', 'Wow-Wow');
animal2.makeSound(); // Wow-Wow


//Задание 18
//Создайте класс Point. Класс должен содержать свойства x и y. Создайте на его основе объект point и выведите его свойства в консоль.
//Ваш код
class Point {
	constructor(x, y) {
	  this.x = x;
	  this.y = y;
	}
	// Метод getDistance возвращает расстояние от точки до начала координат (0,0)
	getDistance() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
}
const point = new Point(18, 23);
console.log(point)


//Задание 19
//В классе Point добавлен метод getDistance, который будет возвращать расстояние от точки до начала координат (0,0). Создайте объект point2 на основе класса Point и выведите его расстояние до начала координат с помощью метода getDistance.
//Ваш код
const point2 = new Point(96, 74);
console.log(Math.round(point.getDistance())); // 29


//Задание 20
//Создайте класс Calculator. Класс должен содержать методы add, subtract, multiply и divide, которые будут выполнять соответствующие математические операции над двумя числами и возвращать результат. Создайте объект calculator на основе класса Calculator, вызовите каждый из методов и выведите результаты в консоль.

class Calculator {
	constructor(x, y) {
	  this.x = x;
	  this.y = y;
	}
	// Метод add
	getAdd() {
		return this.x + this.y
	}
	// Метод subtract
	getSubstract() {
		return this.x - this.y
	}
	// Метод multiply
	getMultiply() {
		return this.x * this.y
	}
	// Метод divide
		getDivide() {
		return this.x / this.y
	}
}
const calculator = new Calculator(18, 23);
console.log(calculator.getAdd()); // 41
console.log(calculator.getSubstract()); // -5
console.log(calculator.getMultiply()); // 414
console.log(calculator.getDivide()); // 0.782608695652174


//Задание 21
//Создайте класс Person. Класс должен содержать свойства name, age и city. Создайте на его основе объект person и выведите его свойства в консоль.

class Person {
	constructor(name, age, city) {
		this.name = name;
		this.age = age;
		this.city = city;
	}

	changeCity() {
		return this.city = "New York"
	}
}
const person = new Person('Nick', 35, 'Philadelphia');
console.log(person); 


//Задание 22
//Добавьте в класс Person метод changeCity, который будет изменять значение свойства city на новое значение. Создайте объект person2 на основе класса Person, вызовите метод changeCity с аргументом "New York" и выведите новое значение свойства city в консоль.

const person2 = new Person('Lui', 33, 'Paris');
console.log(person2.changeCity()); 
console.log(person2); // Person {name: 'Lui', age: 33, city: 'New York'}


//Задание 23
//Создайте класс Employee. Класс должен содержать свойства name, position и salary. Создайте на его основе объект employee и выведите его свойства в консоль.
//Подсказка: Используйте методы класса, чтобы создать объект employee и вывести его свойства.

class Employee {
	constructor(name, position, salary) {
	  this.name = name;
	  this.position = position;
	  this.salary = salary;
	}
	calculateBonus(percent) {
		return this.salary += this.salary / 100 * percent
	  }
}
const employee = new Employee('Beck', 'Manager', 1500);
console.log(employee);


//Задание 24
//Добавьте в класс Employee метод calculateBonus, который будет принимать процент бонуса и увеличивать зарплату сотрудника на соответствующую сумму. Создайте объект employee2 на основе класса Employee и вызовите метод calculateBonus с процентом 10. Выведите новую зарплату сотрудника в консоль.
//Подсказка: Используйте метод call или apply, чтобы вызвать метод calculateBonus для объекта employee2 и передать процент бонуса.

const employee2 = new Employee('Lily', 'Assistant', 1200);
console.log(employee2.calculateBonus(10)); // 1320


//Задание 25
//Создайте класс Product. Класс должен содержать свойства name, price и quantity. Создайте на его основе объект product и выведите его свойства в консоль.
//Подсказка: Используйте методы класса, чтобы создать объект product и вывести его свойства.

class Product {
	constructor(name, price, quantity) {
	  this.name = name;
	  this.price = price;
	  this.quantity = quantity;
	}
	calculateTotalPrice() {
		return this.price * this.quantity
	  }
}
const product = new Product('Chocolate', 1.5, 15);
console.log(product);


//Задание 26
//Добавьте в класс Product метод calculateTotalPrice, который будет возвращать общую стоимость продукта (произведение цены на количество). Создайте объект product2 на основе класса Product с ценой 10 и количеством 5. Выведите общую стоимость продукта в консоль с помощью метода calculateTotalPrice.

const product2 = new Product('Chocolate cake', 10, 5);
console.log(product2.calculateTotalPrice()); // 50


//Задание 27
//Создайте класс Triangle. Класс должен содержать свойства side1, side2 и side3, которые представляют длины сторон треугольника. Создайте на его основе объект triangle и выведите его свойства в консоль.

class Triangle {
	constructor(side1, side2, side3) {
	  this.side1 = side1;
	  this.side2 = side2;
	  this.side3 = side3;
	}
	calculatePerimeter() {
		return this.side1 + this.side2 + this.side3
	  }
}
const triangle = new Triangle(28, 32, 45);
console.log(triangle);


//Задание 28
//Добавьте в класс Triangle метод calculatePerimeter, который будет возвращать периметр треугольника (сумма длин всех сторон). Создайте объект triangle2 на основе класса Triangle со сторонами 3, 4 и 5. Выведите периметр треугольника в консоль с помощью метода calculatePerimeter.

const triangle2 = new Triangle(3, 4, 5);
console.log(triangle2.calculatePerimeter()); // 12


//Задание 29
//Создайте класс Square. Класс должен содержать свойство side, представляющее длину стороны квадрата. Создайте на его основе объект square и выведите его свойство в консоль.

class Square {
	constructor(side) {
	  this.side = side;
	}
	calculateArea() {
		return Math.pow(this.side, 2); 
	  }
}
const square = new Square(28);
console.log(square);

//Задание 30
//Добавьте в класс Square метод calculateArea, который будет вычислять и возвращать площадь квадрата (произведение длины стороны на саму себя). Создайте объект square2 на основе класса Square со стороной 5 и выведите его площадь квадрата в консоль с помощью метода calculateArea.

const square2 = new Square(5);
console.log(square2.calculateArea(25));
