document.addEventListener("DOMContentLoaded", function () {

  $('.header__select').styler();
  $('.filter__select').styler();

  $('.projects-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: `<button class="slick-arrow slick-prev"><img src="images/icons/prev-arrow.png" alt="slick-arrow"></button>`,
    nextArrow: `<button class="slick-arrow slick-next"><img src="images/icons/next-arrow.png" alt="slick-arrow"></button>`,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      },
    ]
  })

  $('.slick-banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    fade: true,
    infinite: true,
  })

  $(".post__slider").slick({
    prevArrow: `<button class="slick-arrow slick-prev"><img src="images/icons/prev-arrow.png" alt="slick-arrow"></button>`,
    nextArrow: `<button class="slick-arrow slick-next"><img src="images/icons/next-arrow.png" alt="slick-arrow"></button>`,
    infinite: true
  })

  document.querySelector(".burger").addEventListener('click', (e) => {
    e.target.classList.toggle("close");
    if (e.target.classList.contains("close")) {
      e.target.src = 'images/icons/cross.svg';
      document.querySelector(".burger-menu").classList.add('burger-menu--active')
      $('.overlay').fadeIn();
    } else {
      e.target.src = 'images/icons/burger.svg';
      document.querySelector(".burger-menu").classList.remove('burger-menu--active')
      $('.overlay').fadeOut();
    }
  })

  $(".overlay").on('click', function(){
    $(this).fadeOut();
    $(".burger-menu").removeClass("burger-menu--active");
    $(".burger img").attr('src', 'images/icons/burger.svg');
    $(".burger img").removeClass("close");
    $(".pop-up").fadeOut();
    $(".video").fadeOut();
    document.querySelector('.video__content').pause();
    document.querySelector('.video iframe').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  })


  $(".footer__category").on('click', function () {
    $(this).toggleClass("footer__category--active")
    $(this).next().slideToggle();
  })


  $(".categories__name").on('click', function () {
    $(this).parent().toggleClass('categories__item--active')
    $(this).next().slideToggle();
  });


  $(".text-article__btn").on('click', function () {
    $(this).prev().slideToggle();
    $(this).toggleClass('text-article__btn--active');
  });

  $(".tabs__item").each(function(i){
    $(this).on('click', function(){
      $(".tabs__item").eq(i).addClass('tabs__item--active').siblings().removeClass('tabs__item--active');
      $(".tabs__content").eq(i).addClass('tabs__content--active').siblings().removeClass('tabs__content--active');
    })
  });

  $("[data-popup]").on('click' , function(){
    $('.overlay').fadeIn();
    $(".burger-menu").removeClass("burger-menu--active");
    $(".burger img").attr('src', 'images/icons/burger.svg');
    $(".burger img").removeClass("close");
    $('.pop-up').fadeIn();
  });


  $("[data-film]").on('click' , function(){
    $('.overlay').fadeIn();
    $('.video').fadeIn();
  });

  $("[data-video]").on('click' , function(){
    $('.overlay').fadeIn();
    $('.video').fadeIn();
  });

  $('.pop-up__cross').on('click', function(){
    $(this).parent().parent().fadeOut();
    $('.overlay').fadeOut();
  });


  $(".categories__drop").on('click', function(){
    $(this).toggleClass("categories__drop--active")
    $(this).next().slideToggle();
  })

  //скрипт карты 
  function initMap() {

    let coordinates = { lat: 48.47237500546418, lng: 34.98296222704675 };

    map = new google.maps.Map(document.querySelector('.map'), {
      center: coordinates,
      zoom: 16,
      disableDefaultUI: false,
      scrollwheel: false
    });
  marker = new google.maps.Marker({
    position: {
      lat: 48.47237500546418,
      lng: 34.98296222704675
    },
    map: map,
    animation: google.maps.Animation.DROP
  });

  let popupContent = `<h2 style="font-size: 18px; font-weight: 500">ТОВ "Станкомплект" - верстати та обладнання для виготовлення меблів</h2>
        <addres style="margin-top: 10px; display: block; font-size: 16px;">вулиця Костя Гордиенко, 2 <br> Дніпро Дніпропетровська область, Украина 49000</addres>`;
  infowindow = new google.maps.InfoWindow({
    content: popupContent
  });

  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
  }

  initMap();


})