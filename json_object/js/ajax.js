const url ="src/data.json";
fetch(url)
.then(Response => Response.json())
.then(data => {
    const table = document.querySelector('table');
    data.forEach(item => {    
        if(item.id <= 300){
            table.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.first_name}</td>
            <td>${item.last_name}</td>
            <td>${item.email}</td>
            <td>${item.gender}</td>
        <tr>
    `;
   }
  });
})
.catch( ()=> console.log("Request failed"))
.finally( () => console.warn("I alway happy"))