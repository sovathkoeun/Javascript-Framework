// const student = ["a", "b", "c"];
// const student = [
//     {
//         "id" : 1,
//         "name" : "romdul",
//         "age" : 23
//     },
//     {
//         "id":2,
//         "name":"bopha",
//         "age":23
//     }
// ]

// const url ="https://jsonplaceholder.typicode.com/todos";
// fetch(url)
// .then((response) => response.json())
// .then((data) => {
//     const card = document.querySelector('table');
//     data.forEach(element => {
//        if(element.id <= 111){
//            card.innerHTML +=`
//             <tr>
//                 <td>${element.userid}</td>
//                 <td>${element.id}</td>
//                 <td>${element.title}</td>
//                 <td>${element.completed}</td>
//             </tr>
//            `;
//        }
//     })
// })
// .catch(() => console.error("no display"))
// .finally(() => console.warn("display sucess"))



///////////
//ajax
const url ="https://jsonplaceholder.typicode.com/todos";
const method = "GET";
const syncs = true;
const php = new XMLHttpRequest();
php.open(method, url, syncs);
php.onload = () => {
    const data = JSON.parse(php.response);
    const table = document.querySelector('table');
    data.forEach(element => {
        table.innerHTML +=`
        <tr>
            <td>${element.userid}</td>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.completed}</td>
        </tr>
        `;
    })
}
php.send();