const url="https://jsonplaceholder.typicode.com/comments"
fetch(url)
.then(response => response.json())
.then(data => {
        data.forEach(element => {
            const plus = document.querySelector('#plus');
                if(element.id <= 20){
                    plus.innerHTML += `
                        <div class="card mt-5">
                            <div class="plus-header">${element.email}</div>
                            <div class="plus-body">${element.body}</div>
                    `;
            }
     })
})
.catch ( () =>  console.log("Cannot request data!"))
.finally( () => console.log("I am happy"))