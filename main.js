const twoArrays = () => {
    let arr = [2, -5, 0, -4, 7, 3, 9, -1, 0, -8, 4];
    alert(arr.filter(item => item > 0));
    alert(arr.filter(item => item < 0));

}

const sum = () => {
    let arr = [4, 3, 1, 8, 4, 7, 4, 6, 2, 5, 7, 9, 5, 3, 2, 7];
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = 0
    for (let i = arr.indexOf(min) + 1; i < arr.indexOf(max); i++) {
        sum += arr[i];
    }
    alert(sum);
}

const object = () => {
    let obj = {
        owner: "Me",
        model: "Yolka",
        speed: 50,
        volume: 20


    };
    for (let key in obj) {
        alert(obj[key]);
    }
    function changeOwner() {
        newOwner = prompt(`New owner`);
        this.owner = newOwner;
    };
    function getInfo() {
        alert(`Speed: ${this.speed} volume : ${this.volume}`);
    };
    changeOwner.call(obj);
    alert("Owner :" + obj.owner);
    getInfo.call(obj);
}
//  Homework
// Task 1
const animalInit = () => {
    let animal = {
        name: "Fox",
        weight: "15 kg",
        age: "3 years",
        speed: "12 km/h"
    }
    function animalInfo() {
        for (let props in animal) {
            alert(`${props} : ${animal[props]}`);
        }
    }
    animalInfo.call(animal);

    function timeToGo() {
        let distance = 1000;
        let speed = parseInt(this.speed);
        let time = distance / speed;
        let days = Math.floor(time / 12);
        let hours = +(time % 12).toFixed(1);
        alert(`The ${this.name} needs ${days} days and ${hours} hours to go 1000 km.`);
    }
    timeToGo.call(animal);

    function changeName() {
        this.name = prompt(`Input new name`);
        alert(`New name is ${animal.name}`);
    }

    changeName.call(animal);

}
// Task 2
const figure = () => {
    let figure = {
        sideA: 50,
        sideB: 100,
        square() {
            alert(`Square : ${this.sideA * this.sideB}`);
        },
        perimeter() {
            alert(`Perimeter: ${2 * (this.sideA + this.sideB)}`);
        },
        threeD() {
            this.sideC = +prompt(`Input side c`);
            alert(`Side c : ${this.sideC}`);
        },
        figName() {
            this.name = prompt(`Input name`);
            alert(`name : ${this.name}`);
        },
        conversion() {
            this.sideA = this.sideA / 100;
            this.sideB = this.sideB / 100;
            this.sideC = this.sideC / 100;
            alert(`Side A : ${this.sideA} m, side B : ${this.sideB} m, side C ${this.sideC} m `);
        }

    }
    figure.square();
    figure.perimeter();
    figure.threeD();
    figure.figName();
    figure.conversion();
    console.log(figure);
}
// Task 3
let shoppingList = {

    tomato: {

        count: 5,
        price: 50,
        buy: false,
        outOfStore: false

    },
    cherry: {

        count: 5,
        price: 50,
        buy: false,
        outOfStore: false

    },
    apple: {

        count: 2,
        price: 23,
        buy: false,
        outOfStore: true

    },
    cheese: {

        count: 1,
        price: 170,
        buy: true,
        outOfStore: false

    },
    fish: {

        count: 8,
        price: 120,
        buy: false,
        outOfStore: false

    },

}
const doShoppingList = () => {

    let x = document.getElementById("list");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }


}

function totalList() {
    let inStore = [];
    let outStore = [];
    let weBuy = [];
    for (props in this) {
        if (this[props].outOfStore === true) {
            outStore.push(props);
        } else {
            inStore.push(props);
        }
        if (this[props].buy === true) {
            weBuy.push(props);
        }
    }
    alert(`In store:  "${inStore}", 
           out store: "${outStore}",
           we buy     "${weBuy}". `);
}


function buyProduct() {
    let product = prompt(`Input product to buy`);

    this[product].buy = true;

}


function countTotalPrice() {
    let totalPrice = 0;
    for (props in this) {
        if (this[props].buy === true) {
            totalPrice += this[props].count * this[props].price;
        }
    }
    alert(`Total price : ${totalPrice}`);
}


function addProductCount() {
    let product = prompt(`Input product to add quantity`);
    alert(`You have ${this[product].count} of ${product}`);
    let quantity = +prompt(`Input quantity to add`);
    this[product].count += quantity;
    alert(`Now you have ${this[product].count} of ${product}`);
}


function removeProductCount() {
    let product = prompt(`Input product to remove quantity`);
    alert(`You have ${this[product].count} of ${product}`);
    let quantity = +prompt(`Input quantity to remove`);
    if (this[product].count < quantity) {
        alert(`You have not enough ${product}`);
    } else {
        this[product].count -= quantity;
        alert(`Now you have ${this[product].count} of ${product}`);
    }

}
// Task 4
let collection = [
    { name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin" },
    { name: "Mykola", age: 45, hobby: ["travels", "games", "jogging"], type: "Admin" },
    { name: "Olena", age: 35, hobby: ["hiking", "jogging", "cooking"], type: "User" },
    { name: "Petro", age: 25, hobby: ["jogging", "games", "hiking"], type: "User" },
]
function showButtons() {
    let x = document.getElementById("collection");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}
function showAdminName() {
    let admins = [];
    for (let i = 0; i < this.length; i++) {
        this[i].type == "Admin" ? admins.push(this[i].name) : undefined;
    }
    alert(`Admins : ${admins}`);
}
function showAverageAge() {
    let sum = 0;
    let count = 0;
    this.forEach(e => {
        sum += e.age;
        count++;
    });
    alert(`Average age is ${sum / count}`);
}

function showUniqueHobbies() {
    let hobbies = [];
    this.forEach(e => {
        hobbies = hobbies.concat(e.hobby);
        // console.log(hobbies.concat(e.hobby));
    });
    // console.log(hobbies);
    let uniqueHobbies = [];
    let count = 0;
    for (let i = 0; i < hobbies.length - 1; i++) {
        let count = 0;
        for (let j = 0; j < hobbies.length; j++) {
            if ((hobbies[i] == hobbies[j]) && (i != j)) { count++ };
        }
        if (count == 0) { uniqueHobbies.push(hobbies[i]) };
        // count = 0;
    }
    alert(`
        All hobbies : ${hobbies.join(", ")}
        Unique hobbies : ${uniqueHobbies.join(', ')}`);
}