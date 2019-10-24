$(document).ready(function(){  
    var url="https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=yellow+forest&image_type=photo&pretty=true";
    $.ajax({
        dataType: 'JSON',
        url: url,
        success :function(data){
            var result = "";
            data.hits.forEach(item => {
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
                    </div>
                    <button type="button" class="btn btn-success">Forest</button>
                    </div>
                </div>
                `;
            });
            $('#card').append(result);
        }
    });
});