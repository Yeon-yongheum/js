// 데이터를 외부로 부터 받아와서 변수에 저장하고 풀력하는 함수 
// 1. 비동기 x
function getData() {
    const data = {'data': 'some data'}
    return data
}

let response = getData()
console.log(response)



// 2. setTimeout
function getData() {
    let data
    setTimeout(function () {
        console.log('요청을 보냈습니다.')
        data = {'data': 'some data'}
    },1000)
    return data
}

let response1 = getData()
console.log(response1) // undefined



// 3. callback function 정의
function getDataCallback(callback) {
    // callback = 저함수
    setTimeout(function (){
        console.log('요청을 보냈습니다.')
        const data = {'data': 'some data'} // 데이터 도착
        callback(data)// 내가 원하는 작업을 시작
    }, 1000)
}

// 함수호출, 인자로 함수를 넘겨주는데 그게 출력하는 작업
getDataCallback(function(data){
    let response2 = data
    console.log(response2)
})



// 4. promise (약속)
function getDataPromise(){
    return new Promise(resolve => {
        setTimeout(function (){
            console.log('요청을 보냈습니다.')
            const data = {'data': 'some data'} // 데이터 도착
            resolve(data)// 내가 원하는 작업을 시작
        }, 1000)
    })
}
let response3 = getDataPromise()
console.log(response3) // 1. 출력 pendong
// 위에 붙여놓고 아래에 확인
console.log(response3) // 2. 출력 resolved
response3.then(response => console.log(response)) // 3. data 출력

getDataPromise()
    .then(response => console.log(response))



// 4-1. promise
function myPromise(url){
    return new Promise( (resolve, reject) => {
        if (url == 'http') {
            resolve('성공')
        } else{
            reject('url이 잘못 되었습니다.')
        }
    })
}

const promise1 = myPromise('http')
console.log(promise1)
promise1
    .then(response => {
        console.log(response)
    })

const promise2 = myPromise('www')
console.log(promise2) // reject 함수를 호출하기 때문에
promise2
    .then(response => {
        console.log('성공')
        console.log(response)
    })
    .catch(error => { // catch 만 실행
        console.log('error')
        console.log(error)        
    })