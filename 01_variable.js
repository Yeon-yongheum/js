/*
    1-1. 변수
    * var
    * let/const
*/
var myVar // 선언
myVar = 1 // 할당
console.log(myVar)

var myVar = 'Hello' // 재선언 가능

let myLet
myLet = 2
console.log(myLet)
myLet = 3
console.log(myLet)
// let myLet = 'hi' // SyntaxError -> 이미 선언함

// const myConst // SyntaxError -> 초기화 누락
const myConst = 'hi' // 반드시 값과 함께 선언
console.log(myConst)
// myConst = 'bye' // TypeError -> const에 할당함

/*
    1-2. scope
*/
let VarFunction = function() {
    var myVar = 0
    if (true) {
        var myVar = 1
        console.log(myVar) // 1
    }
    console.log(myVar) // 1
}

let LetFunction = function() {
    let myLet = 0
    if (true) {
        let myLet = 1
        console.log(myLet) // 1
    }
    console.log(myLet) // 0
}
