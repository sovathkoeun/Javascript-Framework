
const url="https://jsonplaceholder.typicode.com/users";
const method = "GET";
const syncs = true;
const api = new XMLHttpRequest();
api.open(method, url , syncs);
api.onload = () => {
    const data = JSON.parse(api.response);
    const result = document.querySelector('table');
    data.forEach(element => {
            result.innerHTML +=`
            <tr>
                <td class="btn-danger">${element.id}</td>
                <td>${element.name}</td>
                <td>${element.username}</td>
                <td>${element.email}</td>
                <td>
                    ${element.address.street}
                    ${element.address.suite}
                    ${element.address.city}
                    ${element.address.zipcde}
                    ${element.address.geo}
                    ${element.address.geo.lng}
                </td>
                <td>${element.phone}</td>
                <td>${element.website}</td>
                <td>
                    ${element.company.name}
                    ${element.company.catchPhrase}
                    ${element.company.bs}
                </td>
            </tr>
       `;
    })
}
api.send();