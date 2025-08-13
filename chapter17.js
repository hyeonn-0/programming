let arrA = new Array();
let arrB = [];

let arrC = [
    1,
    2,
    3,
    true,
    "hello",
    null,
    undefined,
    () => {},
    {},
    [],
];

console.log(arrC);

let item1 = arrC[0];
let item2 = arrC[1];
console.log(item1,item2);
arrC[0]="hello";

console.log(arrC);