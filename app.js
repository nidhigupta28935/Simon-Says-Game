let nums = [2,4,6,8,-2,-4];
const square = nums.map((num) => num*num);
console.log(square);

let sum = square.reduce((acc,cur) => acc+cur,0);
let avg = sum/nums.length;
console.log(avg);
console.log(nums.map((number) => number + 5));

let strings=["adam","bob","catlyn","donald","eve"];
console.log(strings.map((string)=>string.toUpperCase()));

const doubleAndReturnArgs=(arr,...args)=>[
...arr,
...args.map((v)=>v*2),
];
doubleAndReturnArgs([1,2,3],4,4);
doubleAndReturnArgs([2],10,4);//[2,20,8]