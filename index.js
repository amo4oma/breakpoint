import data from './data.js'; 
 
var menu = ['01', '02', '03', '04','05']


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 5000, // Time between slide transitions (in milliseconds)
    //   disableOnInteraction: false, // Allow autoplay to continue even when the user interacts with the slider
    // },
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
var lang = $('#lang').val()
  if (lang == '/breakpoint/'){
      var typed = new Typed('#typing', {
    strings: ["creative", "We love what we do","effective","We think out of the box","Beak point From nothing to everything"],
    typeSpeed: 50,
    loop:true,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
  });
  } if (lang == '/breakpoint/ar') {
    var typed = new Typed('#typing', {
      strings: ["مبدعون ", "حب ما نفعله","فعالين","نفكر خارج الصندوق","Beak point من لا شي الى كل شي"],
      typeSpeed: 50,
      loop:true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
    });
  }  
  

  
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
        nextEl: ".sw-left",
        prevEl: ".sw-right",
      },
  });



 
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CSSRulePlugin);

  let about = gsap.timeline({
    scrollTrigger :{
      trigger: '#about',
      scrub : 0.5,
      start : "-100% top",
      end: 'bottom',
    

    }
  })
  let rule = CSSRulePlugin.getRule(".about-title::after");

    

  
      about.from('.about-title',5, {x:-50 , opacity: 0.5},'f')
      about.from('.about-p',5, {x:50 , opacity: 0},'f')
      about.to(rule, 1 , {cssRule : {top : '100px'}})
    



 

  let tl = gsap.timeline({
      scrollTrigger :{
          trigger : "#services",
          
          pin :true,
          toggleActions: 'play none play none',
          scrub: true,
          nullTargetWarn: false,
          start : "top top",
          end: '+=1200',
      
        }
          });
  
      
           tl.to('.center',5,{opacity:0})
          tl.from('.element-1',5,{x:'100%',opacity:0})
          tl.from('.element-2',5,{x:'100%',opacity:0})
          tl.from('.element-3',5,{x:'100%',opacity:0})
          tl.from('#one',5,{y:'100%',opacity:0})
          tl.from('#two',5,{y:'100%',opacity:0})

          tl.from('#three',5,{y:'100%',opacity:0})
          tl.from('#four',5,{y:'100%',opacity:0})
          tl.from('#five',5,{y:'100%',opacity:0})
          tl.from('#six',5,{y:'100%',opacity:0})
          tl.from('#seven',5,{y:'100%',opacity:0})


      

          let elementSeven = gsap.timeline({
            scrollTrigger :{
                trigger : "#services",
    
                pin :true,
                toggleActions: 'play none play none',
                scrub: true,
                nullTargetWarn: false,
                start : "top top",
                end: '+=1200',
              }
                });
                elementSeven.from('.element-4',5,{x:'800%',opacity:0})

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

 function handelLang(option){
  var val = option.val()
console.log(val)
 }



$(document).ready(function(){
  $('#back').hide();
  $('#book').hide();

})

$('#back').on('click', function(){
  $('.description').hide();
  $('.cards-container').show()
  $('#back').hide();
  $('#book').hide();
  $('.title').text('services');
  $('.center').show()
});
$('#one').on('click', function(){
  $('#back').show();
  $('#book').show();
  $('.cards-container').hide();
  $('.description').slideDown();
  $('.description').text(`${data.one}`);
  $('.title').text('Website development');
  $('.center').hide()
})
$('#two').on('click', function(){
  $('#back').show();
  $('#book').show();
  $('.cards-container').hide();
  $('.description').slideDown();
  $('.description').text(`${data.one}`);
  $('.title').text('Website development');
  $('.center').hide()
})
$('#three').on('click', function(){
  $('#back').show();
  $('#book').show();
  $('.cards-container').hide();
  $('.description').slideDown();
  $('.description').text(`${data.three}`);
  $('.title').text('Website development');
  $('.center').hide()
})
$('#four').on('click', function(){
  $('#back').show();
  $('#book').show();
  $('.cards-container').hide();
  $('.description').slideDown();
  $('.description').text(`${data.four}`);
  $('.title').text('Website development');
  $('.center').hide()
})
$('#five').on('click', function(){
  $('#back').show();
  $('#book').show();
  $('.cards-container').hide();
  $('.description').slideDown();
  $('.description').text(`${data.five}`);
  $('.title').text('Website development');
  $('.center').hide()
})
$('#six').on('click', function(){
  $('#back').show();
  $('#book').show();
  $('.cards-container').hide();
  $('.description').slideDown();
  $('.description').text(`${data.six}`);
  $('.title').text('Website development');
  $('.custom-modal').hide()
})
$('#seven').on('click', function(){
  $('#back').show();
  $('#book').show();
  $('.cards-container').hide();
  $('.description').slideDown();
  $('.description').text(`${data.seven}`);
  $('.title').text('Website development');
  $('.center').hide()
})
