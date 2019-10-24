const url ="https://jsonplaceholder.typicode.com/posts?userId=1";
fetch(url)
.then((response) => response.json())
.then((data) => {
    const result = document.querySelector('table');
    data.forEach(table => {
        if(table.id <= 24){
            result.innerHTML +=`
                <tr>
                    <td>${table.userid}</td>
                    <td class="btn-success">${table.id}</td>
                    <td>${table.title}</td>
                    <td>${table.body}</td>
                </tr>
            `;
        }
    })
})
.catch( () => console.error("cannot success"))
.finally( () => console.warn("display success"))