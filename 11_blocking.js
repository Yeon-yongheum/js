
function a() {
    console.log('a')
}
console.log('hi') // 출력순서 1
setTimeout(a,3000) // 출력순서 3
console.log('bye') // 출력순서 2

function printHello() {
    console.log('hellooo')
}

function baz(){
    console.log('baz') // 1
    setTimeout(printHello, 3000)
    console.log('baz end')
}

function bar(){
    baz()
}

function foo(){
    bar()
}

foo()