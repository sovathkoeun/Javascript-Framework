$(document).ready(function() {
    $.ajax({
        dataType: "json",
        url:"https://jsonplaceholder.typicode.com/users",
        success: function(data)  {
            console.log(data);
            var result = ""; 
            data.forEach(el => {
                console.log(el);
                result +=`
                    <tr>
                        <td>${el.name}</td>
                        <td>${el.email}</td>
                        <td>${el.phone}</td>
                        <td>${el.website}</td>
                    </tr>
                `;
            });
            $('.table').append(result);
        }
    });
});