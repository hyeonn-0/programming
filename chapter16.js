
const animal = {
    type: "고양이",
    name: "나비",
    color:"black",
};

animal.age = 2;
animal.name = "까망이";
delete animal.color;
console.log(animal);

const person = {
    name: "이정환",
    sayHi() {
        console.log("안녕!");
    },
};

person.sayHi();
person["sayHi"]();