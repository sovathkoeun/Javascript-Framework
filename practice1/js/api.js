$(document).ready(function(){
   $.getJSON(
    'https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=red+fruit&image_type=photo&pretty=true',
    function(data){
       var result = "";
       data.hits.forEach(function(item){
           result +=`
               <div class="col-4">
               <div class="card shadow-lg mt-5">
               <div class="card-body">
               <img src="${item.largeImageURL}" class="img-fluid">
               </div>
               <div class="card-footer">
               <img src="${item.userImageURL}" class="rounded-circle" width="40px">
               ${item.tags};
               <a href="animal.html" class="btn btn-warning float-right btn-sm">View</a>
               <i class="material-icons float-right text-danger">add_circle</i>
               <i class="material-icons float-right text-danger">attach_file</i>
               </div>
               <button type="button" class="btn btn-success">Success</button>
               </div>
            </div>
           `;
          });
       $('#card').append(result);
     }      
   );
});