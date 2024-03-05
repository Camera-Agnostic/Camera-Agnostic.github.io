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

// const position = { x: 0, y: 0 }
// const box = $('.hyper-space1');
// const box2 = $('.hyper-space2');
// const cursor1 = $('.hyper-space-cursor1');
// const cursor2 = $('.hyper-space-cursor2');


function getDraggable(imageName, position, box, cursor) {
  return {
    listeners: {
      start (event) {
        console.log(event.type, event.target)
      },
      move (event) {
        position.x += event.dx
        position.y += event.dy
        event.target.style.transform =
            `translate(${position.x}px, ${position.y}px)`

          let childPos = cursor.offset();
          let parentPos = box.offset();
          let childSize = cursor.outerWidth();
          let point = {
              x: (childPos.left - parentPos.left),
              y: (childPos.top - parentPos.top)
          };
          point = {
            x: (point.x) / (box.innerWidth() - childSize),
            y: (point.y) / (box.innerHeight() - childSize)
          }
          updateHyperGrid(point, imageName);
      },
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent'
        })
      ]
    }
  }
}


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


    const positions = []


    for(let i = 0; i < 6; i++) {
      positions.push({ x: 0, y: 0 })
    }
    const boxs = [
      $('.hyper-space1'),
      $('.hyper-space2'),
      $('.hyper-space3'),
      // $('.hyper-space4'),
      // $('.hyper-space5'),
      // $('.hyper-space6'),
    ]
    const cursors = [
      $('.hyper-space-cursor1'),
      $('.hyper-space-cursor2'),
      $('.hyper-space-cursor3'),
      // $('.hyper-space-cursor4'),
      // $('.hyper-space-cursor5'),
      // $('.hyper-space-cursor6'),
    ]
    

    
    interact('#cursor1').draggable({
      ...getDraggable('.hyper-grid-rgb1 > img', positions[0], boxs[0], cursors[0]),
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent'
        })
      ]
    });

    interact('.hyper-space-cursor2').draggable({
      ...getDraggable('.hyper-grid-rgb2 > img', positions[1], boxs[1], cursors[1]),
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent'
        })
      ]
    });

    interact('.hyper-space-cursor3').draggable({
      ...getDraggable('.hyper-grid-rgb3 > img', positions[2], boxs[2], cursors[2]),
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent'
        })
      ]
    });

    interact('.hyper-space-cursor4').draggable({
      ...getDraggable('.hyper-grid-rgb4 > img', positions[3], boxs[3], cursors[3]),
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent'
        })
      ]
    });

    interact('.hyper-space-cursor5').draggable({
      ...getDraggable('.hyper-grid-rgb5 > img', positions[4], boxs[4], cursors[4]),
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent'
        })
      ]
    });

    interact('.hyper-space-cursor6').draggable({
      ...getDraggable('.hyper-grid-rgb6 > img', positions[5], boxs[5], cursors[5]),
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


// function updateHyperGrid1(point) {
//   const n = 20 - 1;
//   let top = Math.round(n * point.y.clamp(0, 1)) * 100;
//   let left = Math.round(n * point.x.clamp(0, 1)) * 100;
//   $('.hyper-grid-rgb1 > img').css('left', -left + '%');
//   $('.hyper-grid-rgb1 > img').css('top', -top + '%');
// }

// function updateHyperGrid2(point) {
//   const n = 20 - 1;
//   let top = Math.round(n * point.y.clamp(0, 1)) * 100;
//   let left = Math.round(n * point.x.clamp(0, 1)) * 100;
//   $('.hyper-grid-rgb2 > img').css('left', -left + '%');
//   $('.hyper-grid-rgb2 > img').css('top', -top + '%');
// }

// function updateHyperGrid3(point) {
//   const n = 20 - 1;
//   let top = Math.round(n * point.y.clamp(0, 1)) * 100;
//   let left = Math.round(n * point.x.clamp(0, 1)) * 100;
//   $('.hyper-grid-rgb3 > img').css('left', -left + '%');
//   $('.hyper-grid-rgb3 > img').css('top', -top + '%');
// }

function updateHyperGrid(point, imageName) {
  const n = 20 - 1;
  let top = Math.round(n * point.y.clamp(0, 1)) * 100;
  let left = Math.round(n * point.x.clamp(0, 1)) * 100;
  $(imageName).css('left', -left + '%');
  $(imageName).css('top', -top + '%');
}

