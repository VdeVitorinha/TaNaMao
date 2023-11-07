var btn = document.querySelector('#show-btn');
var section = document.querySelector('.show-carrinho')
var container = document.querySelector('.container');

btn.addEventListener('click', function(){
    if(section.style.display === 'block'){
        section.style.display = 'none';
    }else{
        section.style.display = 'block';
    }

});


var btn = document.querySelector('.hide');
var section = document.querySelector('.show-carrinho')
var container = document.querySelector('.container');

btn.addEventListener('click', function(){
    if(section.style.display === 'block'){
        section.style.display = 'none';
    }else{
        section.style.display = 'block';
    }

});