const url="https://jsonplaceholder.typicode.com/users"
fetch(url)
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        const data = document.querySelector('#plus');
        data.innerHTML +=`
        <ul class="list-group">
            <li class="list-group-item">${element.id}</li>
            <li class="list-group-item">${element.name}<</li>
            <li class="list-group-item">${element.username}</li>
            <li class="list-group-item">${element.email}</li>
        </ul>
        `;
    })
})
.catch(() => console.error("I cannot do to "))
.finally(() => console.warn("success"))