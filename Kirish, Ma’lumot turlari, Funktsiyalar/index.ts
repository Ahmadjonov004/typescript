
let ism: string = "asilbek"
let age: number = 24;
let mantiqiy: boolean = true;
let numbers: number[] = [1, 2, 4, 3, 5]

let Tuple: [string, number] = ["asilbek", 24]


let fasllar: "winter" | "spring" | "summer" | "Autumn"
fasllar = "winter";

let inson: {ism: string, yosh:number, isStudent:boolean} = {
    ism: "asilbek",
    yosh: 24,
    isStudent: true
};


let harxil: string | number ;
harxil = "asilbek";
harxil = 123;


let any: any = "Hohlagan";
any = 42
any = "asil"
any = true;

type Men = {
    ism: string;
    yosh: number;

};
let men: Men = {
    ism: "asil",
    yosh: 24
}


// !! Funksiya e’lon qilish

// 1-misool

function qoshish(a: number, b: number) : number{
    return a + b;
}
console.log(qoshish(2,3));

// 2-misol 

function shunchaki(ism: string = "Asilbek" ) : string {
    return `salom ${ism}`;
}
console.log(shunchaki("farruxbek"))
console.log(shunchaki())

// 3-misol


type sonlarKopaytmasi = (son1: number, son2: number) => number;
let kopaytir: sonlarKopaytmasi = function(son1, son2){
    return son1 * son2;
}
console.log(kopaytir(12, 12));
console.log('asilbek')


// !! 3-misol

function add(x: number, y: number): number;
function add(x: string, y: string): string;

function add(x: number | string, y: number | string): number | string {
  if (typeof x === "number" && typeof y === "number") {
    return x * y;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x + y;
  }
  throw new Error("nato'g'ri malumot kiritildi");
}

console.log(add(5, 10));    
console.log(add("tatuff, ", "Tatu"));




















