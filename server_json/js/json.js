const url="https://jsonplaceholder.typicode.com/photos"
fetch(url)
.then(response =>response.json())
.then(data => {
    const table = document.querySelector('#card');
    data.forEach(element => {
        if(element.id <= 10){
            table.innerHTML +=`
            <tr>
                <td>${element.id}</td>
                <td>${element.title}</td>
            </tr>
         `;
        }
    });
})
.catch(() => console.error("I cannot"))
.finally( ()=> console.warn("success"))
