// Object Data
const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];


// Задание 1
// Создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice():

class Transport {
	constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
	}
	getInfo() {
        return {
            type: this.type,
            price: this.price,
            brand: this.brand,
        }
	}
    getPrice() {
        return 'This kind of Transport costs ' + this.price
    }
}
console.log(data);


// Задание 2
// Создать класс Car, который наследует от Transport. Этот класс должен содержать метод getDoorsCount(), который возвращает количество дверей:

const objects = document.querySelector(".objects");

class Car extends Transport {
    constructor(type, price, brand) {
    super(type, price, brand);
    }
    getDoorsCount() {
        for (let object of data) {
            let newList = '';
            if (object.type == 'car') {
                newList += '<li>' + object.type + ', ' + object.brand + ' has ' + object.doors + ' doors.</li>'
                objects.innerHTML = newList;
                // Добавляется только один элемент li ?!
            }
        }        
    }
} 

// Задание 3
// Создать класс Bike, который наследует от Transport. Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла:

const objects_2 = document.querySelector(".objects_2");

class Bike extends Transport {
    constructor(type, price, brand) {
    super(type, price, brand);
    }
    getMaxSpeed() {
        for (let object of data) {
            let newList = '';
            if (object.maxSpeed) {
                newList += '<li>' + object.type + ', ' + object.brand + ' has speed ' + object.maxSpeed + '.</li>'
                objects_2.innerHTML = newList;
                // Добавляется только один элемент li ?!
            }
        }     
    }
} 

// getDoorsCount()
function getDoorsCount(arr) {
    const list = document.querySelector('.main-list');
    for (let obj of arr) {
        const li = document.createElement('li');
        if (obj.type == 'car') {
            li.textContent = obj.type + ', ' + obj.brand + ' has ' + obj.doors + ' doors.'
            list.append(li);
        }
    }
}
getDoorsCount(data);

// getMaxSpeed()
function getMaxSpeed(arr) {
    const list_2 = document.querySelector('.main-list_2');
    for (let obj of arr) {
        const li = document.createElement('li');
        if (obj.maxSpeed) {
            li.textContent = obj.type + ', ' + obj.brand + ' has speed ' + obj.maxSpeed + '.'
            list_2.append(li);
        }
    }
}
getMaxSpeed(data);


// Full list / 

function render(arr) {
    const filterList = document.querySelector('.list');
    for (let obj of arr) {
        const li = document.createElement('li');
        if (obj.doors) {
            li.textContent = `${obj.id}. ${obj.type}, ${obj.brand}, has ${obj.doors} doors.`
        } else {
            li.textContent = `${obj.id}. ${obj.type}, ${obj.brand}, has speed ${obj.maxSpeed}.`
        }
        // <img src="${obj.image}" alt=""></img> 
        filterList.append(li);
    }
} 
render(data);