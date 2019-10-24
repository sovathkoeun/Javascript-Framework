const url="https://jsonplaceholder.typicode.com/todos";
const method = "GET";
const syncs = true;
const sk = new XMLHttpRequest();
sk.open(method, url, syncs);
sk.onload = () => {
    const data = JSON.parse(sk.response);
    const sovath = document.querySelector('table');
    data.forEach(element => {
        //destruturing
        const {userId, id, title, completed} = element;
        sovath.innerHTML +=`
            <tr>
                <td>${userId}</td>
                <td>${id}</td>
                <td>${title}</td>
                <td>${completed}</td>
            </tr>
        `;
    })
}
sk.send();

//example 
// const student = [
//     {
//         "id":1;
//         "name":sovath;
//     }
// ]
// student.forEach(element => {
//     const {id, name} = item;
//     console.log(id)
//     console.log(name)
// })