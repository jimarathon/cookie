var modal = document.querySelector('.modal');

var openModal = document.querySelector('.modal-open');

var closeModal = document.querySelector('.modal-close');

openModal.addEventListener('click',function(){
  modal.classList.remove('hide');
})

closeModal.addEventListener('click',function(){
  modal.classList.add('hide');
})


//1. look for classname for this mobile button
//2. link the button to my js file
//3. listen to the click event
//4. write a function for the click event
//5. add and remove hide

var nav = document.querySelector('.mobile-menu');

var openNav = document.querySelector('.nav-open');

var closeNav = document.querySelector('.nav-close');

openNav.addEventListener('click',function(){
  nav.classList.remove('hide');
})

closeNav.addEventListener('click',function(){
  nav.classList.add('hide');
})


//1. link the select box
//2. link the all the article
//3. listen for the change event on my select box
//4. trigger a function
// if i select almond, butter and chocolate
// it should show me the exact result and hide the result
//else if i select all, it should unhide all the article

var filter = document.querySelector('.filter');
var articles = document.querySelectorAll('article');

filter.addEventListener('change',function(){

for (var i=0; i<articles.length;i++){
articles[i].classList.add('hide');

  if (articles[i].classList.contains(filter.value)){
    articles[i].classList.remove('hide');

  }
  if (filter.value === 'all'){
    articles[i].classList.remove('hide');
  }

}
})
