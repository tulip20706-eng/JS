//push function
let fruits = ["apple","cherry","banana"];
let newlength = fruits.push("banana");
console.log(newlength)
console.log(fruits)

//pop
let fruits1 = ["apple","cherry","banana"];
let removed = fruits.pop();
console.log(removed)
console.log(fruits1)

//shift function
let fruits2=["apple","cherry","banana"];
let removed1 = fruits2.shift();
console.log(removed1)
console.log(fruits2)

//unshift
let fruits3=["apple","cherry","banana"];
let removed2 = fruits2.unshift();
console.log(removed2)
console.log(fruits3)

//question
let arr = ["apple","banana","grapes","mango"]
let reversedArr = []
while(arr.lrngth>0){
    let removedElement=arr.pop()
    reversedArr.push(removedElement)
}
console.log(reversedArr)
console.log(arr)