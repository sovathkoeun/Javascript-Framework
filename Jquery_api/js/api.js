$(document).ready(function(){
    var url ="https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=yellow+flowers&image_type=photo&pretty=true";
    $.getJSON(
        url,
        function(data){
            const result = document.querySelector('#card');
            data.hits.forEach(item => {
                result.innerHTML +=`
                <tr>
                   <div class ="card-body">
                         <img src= "${item.largeImageURL}" class ="img-fluid"> 
                   </div>
                   <div class="card-footer">
                         <img src= "${item.userImageURL}" class ="img-fluid rounded-circle" width="40">
                         ${item.tags}
                         <i class="material-icons float-right text-success">favorite</i>
                         <i class="material-icons float-right text-success">thumb_up</i>
                   <div>
                </tr>
                `;
            });
        }
    );
});