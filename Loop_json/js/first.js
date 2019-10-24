
// const url="src/loop.json";
// fetch(url)
// .then( function(resp){
//         return resp.json(); 
// })
// .then( function(loop){
// loop.forEach(function(item){
//       console.log(item.first_name);

//     })
// })
// .catch(function(){
//     console.error("cannot display data")
// })

const url="src/loop.json"
fetch(url)
.then((response) => response.json())
.then((loop) => {
    const result = document.querySelector('table');
    loop.forEach((element) => {
        if(element.id <= 13){
        result.innerHTML +=`
            <tr>
               <td class="btn-danger">${element.id}</td>
               <td>${element.first_name}</td>
               <td>${element.last_name}</td>
               <td>${element.email}</td>
               <td>${element.gender}</td>
           </tr>
         `;
        }
    });
})
.catch( () => console.error("svoath cannot display dat"))