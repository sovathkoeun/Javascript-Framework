// $(document).ready(function () {
//     $('button').on('click', function () {
//         let username = $('#user').val();
//         let password = $('#pass').val();
//         let email = $('#email').val();
//         let material = $('.material-icons').val();

//         if (material == "") {
//             error('.material-icons');
//         } else {
//             success('.material-icons');
//         }
//         if (username == "") {
//             error('#user');
//         } else {
//             success('#user');
//         }
//         if (password == "") {
//             error('#pass');
//         } else {
//             success('#pass');
//         }
//         if (email == "") {
//             error('#email');
//         } else {
//             success('#email');
//         }
//     });
// });
// function error(e) {
//     $(e).css('border', '2px solid red');
// }
// function success(s) {
//     $(s).css('border', '2px solid green');
// }


// $(document).ready(function(){
//     $('button').on('click',function(){
//         var username = $('#user').val();
//         var password = $('#pass').val();
//         var email    = $('#email').val();
//         username == "" ? setError('user','u-label') : setSuccess('user','u-label');
//         password == "" ? setError('pass','p-label') : setSuccess('pass','p-label');
//         email    == "" ? setError('email','e-label') : setSuccess('email','e-label');
//     });
// });

// function setSuccess(success, label){
//     $('#' + success).addClass('border-success').removeClass('border-danger');
//     $('#' + label).addClass('text-success').removeClass('text-danger');
// }
// function setError(Error, label){
//     $('#' + Error).addClass('border-danger').removeClass('border-success');
//     $('#' + label).addClass('text-danger').removeClass('text-success');
// }


$(document).ready(function(){
    $('button').on('click',function(){
        var user = $('#user').val();
        var pass = $('#pass').val();
        var email    = $('#email').val();
        register(user, pass,email);
    });
});

function setSuccess(success, label){
    $('#' + success).addClass('border-success').removeClass('border-danger');
    $('#' + label).addClass('text-success').removeClass('text-danger');
}
function setError(error, label){
    $('#' + error).addClass('border-danger').removeClass('border-success');
    $('#' + label).addClass('text-danger').removeClass('text-success');
}
function isUsername(u){
    u == "" ? setError('user','u-label'): setSuccess('user', 'u-label');
}
function isPassword(p){
    p == "" ? setError('pass','p-label'): setSuccess('pass', 'p-label');
}
function isEmail(e){
    e == "" ? setError('email','e-label'): setSuccess('email', 'e-label');
}

function register(u,p,e){
    isUsername(u);
    isPassword(p);
    isEmail(e);
}