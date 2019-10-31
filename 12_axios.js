console.log('hi')
axios.get('https://jsonplaceholder.typicode.com/posts/1') // 도착하면
    .then(  response=> { // 그때 실행을 해 달라 (.then) 계속 쓰면서 나가면 됨
        console.log(response)
        document.write(`
            <h1>${response.data.id} : ${response.data.title}</h1>
            <p>${response.data.body}`
        )
        return response.data
    })
console.log('bye')
