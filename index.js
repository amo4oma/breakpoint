import data from './data.js'; 
 
var menu = ['01', '02', '03', '04','05']


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000, // Time between slide transitions (in milliseconds)
      disableOnInteraction: false, // Allow autoplay to continue even when the user interacts with the slider
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
    },
    navigation: {
        nextEl: ".next-slide",
        prevEl: ".prev-slide",
      },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
        nextEl: ".sw-left",
        prevEl: ".sw-right",
      },
  });

var rightBtn = $('sw-right').prop('disabled')
var leftBtn = $('sw-right').prop('disabled')

function rightClickHandler(){
  if (rightBtn){
    $('right').attr('src','Assests/arrow-red.png')
  }
  console.log('cliked')
}
  
swiper2.on('slideChange', function (e) {
  if(swiper2.activeIndex === 0){
    $('.left').attr('src','Assests/arrow-red.png')
    $('.right').attr('src','Assests/arrow.png')
  }else if(swiper2.activeIndex === 2){
    $('.right').attr('src','Assests/arrow-red.png')
    $('.left').attr('src','Assests/arrow.png')

  }

  console.log('*** mySwiper.activeIndex', swiper2.activeIndex);
});

 

$(document).ready(function(){
  $('#back').hide();
  $('#book').hide();
})

$('#back').on('click', function(){
  $('.description').hide();
  $('.cards-container').show()
  $('#back').hide();
  $('#book').hide();
  $('.title').text('services');x
});
$('#one').on('click', function(){
  $('#back').show();
  $('#book').show();
  $('.cards-container').hide();
  $('.description').slideDown();
  $('.description').text(`${data.one}`);
  $('.title').text('Website development');
})
$('#two').on('click', function(){
  $('#back').show();
  $('#book').show();
  $('.cards-container').hide();
  $('.description').slideDown();
  $('.description').text(`${data.one}`);
  $('.title').text('Website development');
})
$('#three').on('click', function(){
  $('#back').show();
  $('#book').show();
  $('.cards-container').hide();
  $('.description').slideDown();
  $('.description').text(`${data.three}`);
  $('.title').text('Website development');
})
$('#four').on('click', function(){
  $('#back').show();
  $('#book').show();
  $('.cards-container').hide();
  $('.description').slideDown();
  $('.description').text(`${data.four}`);
  $('.title').text('Website development');
})
$('#five').on('click', function(){
  $('#back').show();
  $('#book').show();
  $('.cards-container').hide();
  $('.description').slideDown();
  $('.description').text(`${data.five}`);
  $('.title').text('Website development');
})
$('#six').on('click', function(){
  $('#back').show();
  $('#book').show();
  $('.cards-container').hide();
  $('.description').slideDown();
  $('.description').text(`${data.six}`);
  $('.title').text('Website development');
})
$('#seven').on('click', function(){
  $('#back').show();
  $('#book').show();
  $('.cards-container').hide();
  $('.description').slideDown();
  $('.description').text(`${data.seven}`);
  $('.title').text('Website development');
})