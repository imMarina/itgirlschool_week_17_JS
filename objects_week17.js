// 1 exercise - У вас есть объект book. Создайте метод getBookInfo для объекта book, который будет выводить в консоль информацию о книге в формате: "Название: название книги, Автор: автор книги, Год издания: год издания книги".

const book = {
    title: "Преступление и наказание",
    author: "Федор Достоевский",
    year: 1866
  };
  
  //Ваш код
  book.getBookInfo = function () {
    console.log('Название: ' + this.title + ', Автор: ' + this.author + ', Год издания: ' +  this.year);
  };
  book.getBookInfo();
  

// 2 exercise - Вызовите метод getBookInfo для объекта book1 и убедитесь, что информация о книге правильно выводится в консоль. Создайте метод getBookInfo в объекте book2, который будет использовать метод getBookInfo из объекта book1 для вывода информации о книге book1 в консоль. Вызовите метод getBookInfo для объекта book2 и убедитесь, что информация о книге book1 выводится в консоль с использованием метода из объекта book2.

const book1 = {
    title: "Преступление и наказание",
    author: "Федор Достоевский",
    year: 1866,
    getBookInfo: function() {
      console.log("Название: " + this.title + ", Автор: " + this.author + ", Год издания: " + this.year);
    }
  };
  
  const book2 = {
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    year: 1997,
    //Ваш код
    getBookInfo: function() {
      book1.getBookInfo();
    }
  };
  
  //Ваш код
  
  console.log(book1.getBookInfo()); // "Название: Преступление и наказание, Автор: Федор Достоевский, Год издания: 1866"
  console.log(book2.getBookInfo()); // "Название: Преступление и наказание, Автор: Федор Достоевский, Год издания: 1866"


// 3 exercise - Задание: Управление корзиной на маркетплейсе с использованием конструкторов и прототипов
//В данном задании вам предстоит создать систему для управления корзиной покупок на маркетплейсе. Вы будете использовать конструкторы и прототипы для создания объектов, представляющих товары и корзину, а также добавлять методы для управления этими объектами.
//Создайте конструктор Product, который будет принимать аргументы name (название товара) и price (цена товара). Внутри конструктора установите свойства name и price.
//Добавьте метод displayInfo к прототипу конструктора Product, который будет выводить в консоль информацию о товаре в формате "Название: [name], Цена: [price]".
//Создайте несколько объектов-товаров, используя конструктор Product, например:
//item1 с названием "Футболка" и ценой 25.
//item2 с названием "Джинсы" и ценой 50.
//item3 с названием "Кроссовки" и ценой 80.
//Выведите на экран инормацию о товарах в консоль

// мое решение
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayInfo() {
      console.log('Название: ' + [this.name] + ', Цена: ' + [this.price]);
    }
  }

let item1 = new Product("Футболка", 25);
let item2 = new Product("Джинсы", 50);
let item3 = new Product("Кроссовки", 80);

item1.displayInfo();
item2.displayInfo();
item3.displayInfo();


// решение учителя
//Конструктор товара
function Product(name, price) {
    this.name = name;
    this.price = price;
}

//Метод для вывода информации о товаре
Product.prototype.displayInfo = function () {
    console.log(`Название: ${this.name}, Цена: ${this.price}`);
}

//Создаём несколько товаров
const item1 = new Product("Футболка", 25);
const item2 = new Product("Джинсы", 50);
const item3 = new Product("Кроссовки", 80);

//Выводим информацию о товарах
console.log("Информация о товарах:");
item1.displayInfo();
item2.displayInfo();
item3.displayInfo();


// 4 exercise - Класс Rabbit наследует Animal. К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      super(name);
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
  console.log(rabbit);
/* {
  "name": "Белый кролик",
  "created": 1694460196993
} */


/*  4 exercise -  Напишите конструктор User для создания объектов:
 1. С приватными свойствами имя 'name' и фамилия 'surname'
 2. С сеттерами для этих свойств.
 3. С геттером getFullName(), который возвращает полное имя. */

 class User {
	constructor(name, surname) {
		this._name = name;
		this._surname = surname;
	}

	_setFirstName (newFirstName) {
    // ваш код
    this._name = newFirstName
	};

	_setSurname (newSurname) {
    // ваш код
    this._surname = newSurname
	};

	getFullName = function () {
    return this._name + ' ' + this._surname
	};
}

let user = new User('Эрика', 'Лангольф');

console.log(user.getFullName()); // "Эрика Лангольф" 





  // 1 way - object1 === object2
  const obj_1 = {
    name: 'Alex',
    age: 29,
    address: 'Spb',
  };

  const obj_2 = obj_1;
  obj_1.email = 'user@gmail.com';
  console.log('Obgect1 ' + obj_1 + ' = Object2 ' + obj_2);
  console.log(obj_1);
  console.log(obj_2);
  console.log(obj_1 === obj_2); // true

  //2 way - object1 !== object2

  const objExample_1 = {
    name: 'Alex',
    age: 29,
    address: 'Spb',
  };

  const objExample_2 = {
    name: 'Alex',
    age: 29,
    address: 'Spb',
  };

  console.log(objExample_1 === objExample_2); // false
  console.log(JSON.stringify(objExample_1) === JSON.stringify(objExample_2)); // true

  // class
  class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    showInfo() {
        console.log('This is a ' + this.type);
    }
  }

  let animal1 = new Animal('Rex', 'dog');
  let animal2 = new Animal('Lex', 'cat');
  console.log(animal1.showInfo());
  console.log(animal2.showInfo());


  class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    drive() {
        console.log(`Let's go by ${this.brand}`);
    }
  }

  let car1 = new Car('BMW', 'X5');
  let car2 = new Car('Mercedes', 'ML500');
  console.log(car1.drive());
  console.log(car2.drive());


  // static

  class Validation {
    static CheckEmpty(collection) {
        let isEmpty = false;
        for (let input of collection) {
            if (input.value == '') {
                isEmpty = true;
            }
        return isEmpty;
        }
    }
}

// for example
let array = document.querySelector('.test');
let isEmpty = Validation.CheckEmpty(array);

if (document.querySelector('.test')) {
    console.log(`Here is an empty element`);
}


// constructor

function Square(color, size) {
    this.color = color;
    this.size = size;
}

const redSquare = new Square('red', 100);
const blueSquare = new Square('blue', 150);

drawSquare(redSquare);
drawSquare(blueSquare);

function drawSquare(square) {
    const squareElement = document.createElement('div');
    squareElement.style.backgroundColor = square.color;
    squareElement.style.width = square.size + 'px';
    squareElement.style.height = square.size + 'px';
    document.body.appendChild(squareElement);
}



//