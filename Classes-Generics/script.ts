// !! 1-misol

class BankAccaunt {
    private balance: number;

    constructor (
        public accountNumber: string,
        public ownerName: string,
        initialBalance: number
    ){
        this.balance = initialBalance;
    }
    get getBalance():number {
        return this.balance;
    }

    // Pul qoyish 
    deposit(amount: number) : void{
        if(amount > 0){
            this.balance += amount;
            console.log(`${amount}$ qo'shildi. Yangi balans: ${this.balance}$`);
        }else {
            console.log("Summani natog'ri kiritdingiz");
            
        }
    }
    withdraw(amount: number): void {
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount;
            console.log(`${amount}$ yechildi. Qolgan balans ${this.balance}`);
        }else {
            console.log("Yetarli mablag' mavjud emas");
            
        }

    }
}
const myAccaunt = new BankAccaunt("123456", "asilbek", 600);
console.log(myAccaunt.getBalance);
myAccaunt.deposit(200)

// !! 2-misol

class Car {
    static totalCars: number = 0;
    readonly brand: string;

    private constructor(brand: string){
        this.brand = brand;
        Car.totalCars++;

    }
    static createCar(brand:string): Car {
        return new Car(brand);
    }
}

const car1 = Car.createCar("Toyota")
const car2 = Car.createCar("BMW")

console.log(car1.brand)
console.log(Car.totalCars);


// !! 3-misol

interface Shape{
    getArea(): number;

}
class Circle implements Shape {
    constructor(public radius: number){}

    getArea(): number {
        return Math.PI * this.radius * this.radius;

    }
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    getArea(): number {
        return this.width * this.height;
    }
}
const circle = new Circle(34);
const rectangle = new Rectangle(10, 5);

console.log(circle.getArea());
console.log(rectangle.getArea());


// !! 4-misol

abstract class Epmloye {
    constructor(public name: string, public salary: number) {}
    abstract getSalary(): number;

}

class FullTimeEmployee extends Employee {
    getSalary(): number {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(name: string, salary:number, private hoursWorked: number){
        super(name, salary);

    }
    getSalary(): number {
        return this.salary * this.hoursWorked;

    }
}

const fullTime = new FullTimeEmployee("asilbk", 2004);
const partTime = new PartTimeEmployee("Vali", 10, 100);

console.log(fullTime.getSalary());
console.log(partTime.getSalary());


// !! 5-misol

class User {
    protected username: string;
    private password: string;
  
    constructor(username: string, password: string) {
      this.username = username;
      this.password = password;
    }
  
    checkPassword(inputPassword: string): boolean {
      return this.password === inputPassword;
    }
  }
  
  class Admin extends User {
    private users: string[] = [];
  
    constructor(username: string, password: string) {
      super(username, password);
    }
  
    addUser(user: string) {
      this.users.push(user);
    }
  
    showUsers() {
      console.log("Foydalanuvchilar:", this.users);
    }
  }
  
  // **Test qilish**
  const admin = new Admin("adminUser", "adminPass");
  admin.addUser("Ali");
  admin.addUser("Vali");
  
  console.log(admin.checkPassword("adminPass")); 
  admin.showUsers(); 



// !! 6-misol

interface LibraryItem {
    title: string;
    year: number;
  }
  
  class Book implements LibraryItem {
    constructor(public title: string, public author: string, public year: number) {}
  }
  
  class Magazine implements LibraryItem {
    constructor(public title: string, public publisher: string, public year: number) {}
  }
  
  class Library<T extends LibraryItem> {
    private items: T[] = [];
  
    addItem(item: T) {
      this.items.push(item);
    }
  
    getItems(): T[] {
      return this.items;
    }
  }
  
  const library = new Library<Book>();
  library.addItem(new Book("TypeScript Guide", "Ali", 2023));
  
  const magazineLibrary = new Library<Magazine>();
  magazineLibrary.addItem(new Magazine("Tech Today", "Tech Media", 2022));
  
  console.log(library.getItems()); 
  console.log(magazineLibrary.getItems()); 

//   !! 7-misol

abstract class Vehicle {
    constructor(public name: string) {}
  
    abstract move(): void;
  }
  
  class Car extends Vehicle {
    move() {
      console.log(`${this.name} harakatlanmoqda! `);
    }
  }
  
  class Bike extends Vehicle {
    move() {
      console.log(`${this.name} harakatlanmoqda! `);
    }
  }
  
  const myCar = new Car("BMW");
  const myBike = new Bike("Yamaha");
  
  myCar.move(); 
  myBike.move(); 

//   !! 8-misol

class Product {
    constructor(public name: string, public price: number) {}
  }
  
  class ShoppingCart {
    private products: Product[] = [];
  
    addProduct(product: Product) {
      this.products.push(product);
    }
  
    getTotalPrice(): number {
      return this.products.reduce((total, product) => total + product.price, 0);
    }
  }
  
  const cart = new ShoppingCart();
  cart.addProduct(new Product("Laptop", 1000));
  cart.addProduct(new Product("Mouse", 50));
  
  console.log(cart.getTotalPrice()); 

//   !! 9-misol

class Logger {
    private static instance: Logger;
  
    private constructor() {}
  
    static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }
  
    log(message: string) {
      console.log(`[LOG]: ${message}`);
    }
  }
  
  const logger1 = Logger.getInstance();
  logger1.log("Dastur boshlandi!");
  
  const logger2 = Logger.getInstance();
  logger2.log("Ishga tushdi!");
  
  console.log(logger1 === logger2); 



//   !! 10-misol

interface Task {
    readonly id: number;
    title: string;
    completed: boolean;
    toggleStatus(): void;
  }
  
  class TaskManager {
    private tasks: Task[] = [];
  
    addTask(task: Task) {
      this.tasks.push(task);
    }
  
    showTasks() {
      this.tasks.forEach((task) => console.log(task));
    }
  }
  
  const task1: Task = {
    id: 1,
    title: "TypeScript o‘rganish",
    completed: false,
    toggleStatus() {
      this.completed = !this.completed;
    },
  };
  
  const manager = new TaskManager();
  manager.addTask(task1);
  manager.showTasks();

