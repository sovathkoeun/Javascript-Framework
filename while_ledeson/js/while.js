

$(function(){
    $('button').on('click', function(){
        var user = $('#user').val();
        var pass = $('#pass').val();
        // console.log(user);
        isUser(user);
        isPass(pass);
    });
});
function setSuccess (success){
    $('#' + success).addClass('border-success').removeClass('border-danger');
}
function setError (error){
    $('#' + error).addClass('border-danger').removeClass('border-success');
}

function isUser(u){
    (u != "") ? setSuccess('user') : setError('user');
}
function isPass(p){
    (p != "") ? setSuccess('pass') : setError('pass');
}