// this is a code cacth from form pass and user
{/* <div class="form-group">
<label for="user">Username</label>
<input type="text" class="form-control" id="user" placeholder="Username">
</div>
<div class="form-group">
<label for="pass">Password</label>
<input type="password" class="form-control" id="pass" placeholder="Password">
</div>   
<button class="btn btn-warning btn-block" type="button">Login</button>                    
</div> */}

$(function(){
    $('button').on('click', function(){
        var user = $('#user').val();
        var pass = $('#pass').val();
        if(user != ""){
           setSuccess('user');
        }else{
            setError('user');
        }
        if(pass != ""){
            setSuccess('pass');
        }else{
            setError('pass');
        }
        // console.log(user + pass);
    });
});
function setSuccess (success){
    $('#' + success).addClass('border-success').removeClass('border-danger');
}
function setError (error){
    $('#' + error).addClass('border-danger').removeClass('border-success');
}


///////////////////////////////////////////////////////////////////////////
$(function(){
    $('button').on('click', function(){
        var user = $('#user').val();
        var pass = $('#pass').val();
        (user != "") ? setSuccess('user') : setError('user');
        (pass != "") ? setSuccess('pass') : setError('pass');
    });
});
function setSuccess (success){
    $('#' + success).addClass('border-success').removeClass('border-danger');
}
function setError (error){
    $('#' + error).addClass('border-danger').removeClass('border-success');
}
