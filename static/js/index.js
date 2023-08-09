window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    $('.results-carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000
    });

})

const position = { x: 0, y: 0 }
const box = $('.hyper-space1');
const box2 = $('.hyper-space2');
const cursor1 = $('.hyper-space-cursor1');
const cursor2 = $('.hyper-space-cursor2');

$(window).on("load", function(){
    // Reset gifs once everything is loaded to synchronize playback.
    $('.preload').attr('src', function(i, a){
        $(this).attr('src','').removeClass('preload').attr('src', a);
    });

    $('.author-portrait').each(function() {
      $(this).mouseover(function() {
          $(this).find('.depth').css('top', '-100%');
      });
      $(this).mouseout(function() {
          $(this).find('.depth').css('top', '0%');
      });
    });


    const position = { x: 0, y: 0 }
    const position2 = { x: 0, y: 0 }
    const position3 = { x: 0, y: 0 }
    const box = $('.hyper-space1');
    const box2 = $('.hyper-space2');
    const box3 = $('.hyper-space3');
    const cursor1 = $('.hyper-space-cursor1');
    const cursor2 = $('.hyper-space-cursor2');
    const cursor3 = $('.hyper-space-cursor3');
    interact('.hyper-space-cursor1').draggable({
      listeners: {
        start (event) {
          console.log(event.type, event.target)
        },
        move (event) {
          position.x += event.dx
          position.y += event.dy

          event.target.style.transform =
            `translate(${position.x}px, ${position.y}px)`

          let childPos = cursor1.offset();
          let parentPos = box.offset();
          let childSize = cursor1.outerWidth();
          let point = {
              x: (childPos.left - parentPos.left),
              y: (childPos.top - parentPos.top)
          };
          point = {
            x: (point.x) / (box.innerWidth() - childSize),
            y: (point.y) / (box.innerHeight() - childSize)
          }
          updateHyperGrid1(point);
        },
      },
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent'
        })
      ]
    });

    interact('.hyper-space-cursor2').draggable({
      listeners: {
        start (event) {
          console.log(event.type, event.target)
        },
        move (event) {
          position2.x += event.dx
          position2.y += event.dy

          event.target.style.transform =
            `translate(${position2.x}px, ${position2.y}px)`

          let childPos = cursor2.offset();
          let parentPos = box2.offset();
          let childSize = cursor2.outerWidth();
          let point = {
              x: (childPos.left - parentPos.left),
              y: (childPos.top - parentPos.top)
          };
          point = {
            x: (point.x) / (box2.innerWidth() - childSize),
            y: (point.y) / (box2.innerHeight() - childSize)
          }
          updateHyperGrid2(point);
        },
      },
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent'
        })
      ]
    });

    interact('.hyper-space-cursor3').draggable({
      listeners: {
        start (event) {
          console.log(event.type, event.target)
        },
        move (event) {
          position3.x += event.dx
          position3.y += event.dy

          event.target.style.transform =
            `translate(${position3.x}px, ${position3.y}px)`
          // console.log(`translate(${position3.x}px, ${position3.y}px)`)
          let childPos = cursor3.offset();
          let parentPos = box3.offset();
          let childSize = cursor3.outerWidth();
          let point = {
              x: (childPos.left - parentPos.left),
              y: (childPos.top - parentPos.top)
          };
          point = {
            x: (point.x) / (box3.innerWidth() - childSize),
            y: (point.y) / (box3.innerHeight() - childSize)
          }
          updateHyperGrid3(point);
        },
      },
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent'
        })
      ]
    });
  
   

});




Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};


function updateHyperGrid1(point) {
  const n = 20 - 1;
  let top = Math.round(n * point.y.clamp(0, 1)) * 100;
  let left = Math.round(n * point.x.clamp(0, 1)) * 100;
  $('.hyper-grid-rgb1 > img').css('left', -left + '%');
  $('.hyper-grid-rgb1 > img').css('top', -top + '%');
}

function updateHyperGrid2(point) {
  const n = 20 - 1;
  let top = Math.round(n * point.y.clamp(0, 1)) * 100;
  let left = Math.round(n * point.x.clamp(0, 1)) * 100;
  $('.hyper-grid-rgb2 > img').css('left', -left + '%');
  $('.hyper-grid-rgb2 > img').css('top', -top + '%');
}

function updateHyperGrid3(point) {
  const n = 20 - 1;
  let top = Math.round(n * point.y.clamp(0, 1)) * 100;
  let left = Math.round(n * point.x.clamp(0, 1)) * 100;
  $('.hyper-grid-rgb3 > img').css('left', -left + '%');
  $('.hyper-grid-rgb3 > img').css('top', -top + '%');
}

