"use strict";
let ism = "asilbek";
let age = 24;
let mantiqiy = true;
let numbers = [1, 2, 4, 3, 5];
let Tuple = ["asilbek", 24];
let fasllar;
fasllar = "winter";
let inson = {
    ism: "asilbek",
    yosh: 24,
    isStudent: true
};
let harxil;
harxil = "asilbek";
harxil = 123;
let any = "Hohlagan";
any = 42;
any = "asil";
any = true;
let men = {
    ism: "asil",
    yosh: 24
};
// !! Funksiya e’lon qilish
// 1-misool
function qoshish(a, b) {
    return a + b;
}
console.log(qoshish(2, 3));
// 2-misol 
function shunchaki(ism = "Asilbek") {
    return `salom ${ism}`;
}
console.log(shunchaki("farruxbek"));
console.log(shunchaki());
let kopaytir = function (son1, son2) {
    return son1 * son2;
};
console.log(kopaytir(12, 12));
console.log('asilbek');
function add(x, y) {
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
