const width = document.getElementById('width');
const height = document.getElementById('height');
const create = document.getElementById('create');
const color = document.getElementById('color');
const rectangleFinish = document.getElementById('rectangleFinish');

class Developer {
    constructor (name) {
        this.name = name;
    }

    get startWork () {
        return this.name + ' start work ...';
    }

    get endWork () {
        return this.name + ' end work...'
    }
}

const developer = new Developer('Vasya');


class Frontend extends Developer {
    constructor (name, websiteName) {
        super(name);
        this.websiteName = websiteName;
    }

    get buildWebSite () {
        return `${this.name} start build website ${this.websiteName}`;
    }
}

const john = new Frontend('John', 'Amazon');
console.log(john.startWork);
console.log(john.buildWebSite);
console.log(john.endWork);

class Backend extends Developer {
    constructor (name) {
        super(name);
    }

    get buildServer () {
        return `${this.name} build server`;
    }
}

const liza = new Backend('Liza');
console.log(liza.startWork);
console.log(liza.buildServer);
console.log(liza.endWork);

class User {
    constructor(firstName, lastName) {
        this.id = Date.now();
        this.isAdmin = false;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    showInfo() {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

const newUser = new User('Alexey', 'Gromov');
newUser.showInfo(); 
console.log(newUser.id); 
console.log(newUser.isAdmin);

class Rectangle {
    constructor (width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

const px = 'px';

create.addEventListener('click', () => {
    const rectangle = new Rectangle(width.value, height.value, color.value);
    console.log(rectangle);

    rectangleFinish.style.width = rectangle.width + px;
    rectangleFinish.style.height = rectangle.height + px;
    rectangleFinish.style.background = rectangle.color;

    rectangleFinish.innerHTML = +rectangle.width * +rectangle.height;
})

function generateRandomString() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const string = 'foo';
            resolve(string);
        }, 2000);
    });
}

// Пример использования
generateRandomString()
    .then(string => {
        console.log('Получено значение:', string);
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });

 