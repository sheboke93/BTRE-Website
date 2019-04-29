const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

setImmediate(function () {
    $('#message').fadeOut('slow');
},3000);
