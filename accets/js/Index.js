/*
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 8);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}
*/
$(document).ready(() => {
  $('').click(() => {
    $('').toggleClass('active')
    $('').toggleClass('active')
  });



  // setting owl carousel

  let navText = ["<img width='43rem' src='images/icons transparent/bx-chevron-left.ico' />", "<img width='43rem' src='images/icons transparent/bx-chevron-right.ico' />"
  ]

  $('#hero-carousel').owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: navText,
    autoplay: false,
    autoplayHoverPause: false
  });

  $('#top-movies-slide').owlCarousel({
    items: 3,
    dots: false,
    loop: true,
    autoplay: true,
    margin: 2,
    autoplayHoverPause: true,
    responsive: {
      500: {
        items: 4
      },
      1000: {
        items: 4
      },
      1280: {
        items: 6
      },
      1600: {
        items: 6
      }
    }
  });

  $('.movies-slide').owlCarousel({
    items: 3,
    dots: false,
    nav: true,
    loop: false,
    center: false,
    navText: navText,
    margin: 2,
    focusOnSelect: true,
    responsive: {
      500: {
        items: 4
      },
      1000: {
        items: 5
      },
      1280: {
        items: 6
      },
      1600: {
        items: 6
      }
    }
  });
});


// BUTTON NEWS

$(document).ready(function() {
  $('.fullscreen').click(function() {

    // NEWS
    
    $('body').css({
      position: 'fixed'
    });

    $('.contaimment-news').css({
      position: 'fixed',
      top: 'auto',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: '#ededed',
    });
    
    $('.container-news .card-news').css({
      marginTop: '5.2rem',
      marginBottom: '-4rem',
      marginLeft: 'auto',
      marginRight: 'auto'
    });
    
    $('.container-news .exitscreen').css({
      display: 'block',
      marginTop: '1rem',
      marginLeft: '1rem',
      padding: '.8rem',
    });
    
    $('.title-fullscreen').css({
      display: 'block',
      marginTop: '1.4rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontFamily: 'Sans serif',
      fontWeight: '600'
    });

  });
});

$(document).ready(function() {
  $('.exitscreen').click(function() {

    // NEWS
    
    $('body').css({
      position: 'relative'
    });

    $('.contaimment-news').css({
      position: 'relative',
      width: '95%',
      height: '100%',
      background: '0'
    });
    
    $('.container-news .card-news').css({
      marginTop: '1.4rem',
      marginBottom: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto'
    });
    
    $('.container-news .exitscreen').css({
      display: 'none'
    });
    
    $('.title-fullscreen').css({
      display: 'none'
    });

  });
});

// BUTTON HOME

$(document).ready(function() {
  $('.button-menu-home').click(function() {

    // PAGES THE SITE

    $('#home').css({
      display: 'block'
    });
    $('#documents').css({
      display: 'none'
    });
    $('#chat').css({
      display: 'none'
    });
    $('#comments-the-newls').css({
      display: 'none'
    });
    $('#accout').css({
      display: 'none'
    });
    $('#notification').css({
      display: 'none'
    });


    // BUTTON BOOKMARK

    $('.button-menu-home .bookmark').css({
      opacity: '1'
    });
    $('.button-menu-documents .bookmark').css({
      opacity: '0',
    });
    $('.button-menu-chat .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-comments .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-accout .bookmark').css({
      opacity: '0'
    });

    // BUTTON I

    $('.home').css({
      color: 'rgb(0,122,255)'
    });
    $('.documents').css({
      color: '#8B8E8D'
    });
    $('.chat').css({
      color: '#8B8E8D'
    });
    $('.comments').css({
      color: '#8B8E8D'
    });
    $('.accout').css({
      color: '#8B8E8D'
    });

  });
});

// BUTTON DOCUMENTS

$(document).ready(function() {
  $('.button-menu-documents').click(function() {

    // PAGES THE SITE

    $('#home').css({
      display: 'none'
    });
    $('#documents').css({
      display: 'block'
    });
    $('#chat').css({
      display: 'none'
    });
    $('#comments-the-newls').css({
      display: 'none'
    });
    $('#accout').css({
      display: 'none'
    });
    $('#notification').css({
      display: 'none'
    });

    // BUTTONS BOOKMARK

    $('.button-menu-home .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-documents .bookmark').css({
      opacity: '1'
    });
    $('.button-menu-chat .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-comments .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-accout .bookmark').css({
      opacity: '0'
    });


    // BUTTON I

    $('.home').css({
      color: '#8B8E8D'
    });
    $('.documents').css({
      color: 'rgb(0,122,255)'
    });
    $('.chat').css({
      color: '#8B8E8D'
    });
    $('.comments').css({
      color: '#8B8E8D'
    });
    $('.accout').css({
      color: '#8B8E8D'
    });

  });
});

// BUTTON CHAT

$(document).ready(function() {
  $('.button-menu-chat').click(function() {

    // PAGES THE SITE

    $('#home').css({
      display: 'none'
    });
    $('#documents').css({
      display: 'none'
    });
    $('#chat').css({
      display: 'block'
    });
    $('#comments-the-newls').css({
      display: 'none'
    });
    $('#accout').css({
      display: 'none'
    });
    $('#notification').css({
      display: 'none'
    });

    // BUTTONS BOOKMARK

    $('.button-menu-home .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-documents .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-chat .bookmark').css({
      opacity: '1'
    });
    $('.button-menu-comments .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-accout .bookmark').css({
      opacity: '0'
    });

    // BUTTON I

    $('.home').css({
      color: '#8B8E8D'
    });
    $('.documents').css({
      color: '#8B8E8D'
    });
    $('.chat').css({
      color: 'rgb(0,122,255)'
    });
    $('.comments').css({
      color: '#8B8E8D'
    });
    $('.accout').css({
      color: '#8B8E8D'
    });
  });
});

// BUTTON COMMENTS

$(document).ready(function() {
  $('.button-menu-comments').click(function() {

    // PAGES THE SITE

    $('#home').css({
      display: 'none'
    });
    $('#documents').css({
      display: 'none'
    });
    $('#chat').css({
      display: 'none'
    });
    $('#comments-the-newls').css({
      display: 'block'
    });
    $('#accout').css({
      display: 'none'
    });
    $('#notification').css({
      display: 'none'
    });

    // BUTTONS BOOKMARK

    $('.button-menu-home .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-documents .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-chat .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-comments .bookmark').css({
      opacity: '1'
    });
    $('.button-menu-accout .bookmark').css({
      opacity: '0'
    });

    // BUTTON I

    $('.home').css({
      color: '#8B8E8D'
    });
    $('.documents').css({
      color: '#8B8E8D'
    });
    $('.chat').css({
      color: '#8B8E8D'
    });
    $('.comments').css({
      color: 'rgb(0,122,255)'
    });
    $('.accout').css({
      color: '#8B8E8D'
    });

  });
});

// BUTTON ACCOUT

$(document).ready(function() {
  $('.button-menu-accout').click(function() {

    // PAGES THE SITE

    $('#home').css({
      display: 'none'
    });
    $('#documents').css({
      display: 'none'
    });
    $('#chat').css({
      display: 'none'
    });
    $('#comments-the-newls').css({
      display: 'none'
    });
    $('#accout').css({
      display: 'block'
    });
    $('#notification').css({
      display: 'none'
    });

    // BUTTONS BOOKMARK

    $('.button-menu-home .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-documents .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-chat .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-comments .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-accout .bookmark').css({
      opacity: '1'
    });


    // BUTTON I

    $('.home').css({
      color: '#8B8E8D'
    });
    $('.documents').css({
      color: '#8B8E8D'
    });
    $('.chat').css({
      color: '#8B8E8D'
    });
    $('.comments').css({
      color: '#8B8E8D'
    });
    $('.accout').css({
      color: 'rgb(0,122,255)'
    });

  });
});

// BUTTON NOTIFICATION

$(document).ready(function() {
  $('.button-menu-notification').click(function() {

    // PAGES THE SITE

    $('#home').css({
      display: 'none'
    });
    $('#documents').css({
      display: 'none'
    });
    $('#chat').css({
      display: 'none'
    });
    $('#comments-the-newls').css({
      display: 'none'
    });
    $('#accout').css({
      display: 'none'
    });
    $('#notification').css({
      display: 'block'
    });

    // BUTTONS BOOKMARK

    $('.button-menu-home .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-documents .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-chat .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-comments .bookmark').css({
      opacity: '0'
    });
    $('.button-menu-accout .bookmark').css({
      opacity: '0'
    });


    // BUTTON I

    $('.home').css({
      color: '#8B8E8D'
    });
    $('.documents').css({
      color: '#8B8E8D'
    });
    $('.chat').css({
      color: '#8B8E8D'
    });
    $('.comments').css({
      color: '#8B8E8D'
    });
    $('.accout').css({
      color: '#8B8E8D'
    });

  });
});