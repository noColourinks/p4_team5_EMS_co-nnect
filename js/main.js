$(document).ready(() => {

  // Add smooth scrolling to all links
  $('a').on('click', (event) => {
    // Make sure this.hash has a value before overriding default behavior
    if (event.currentTarget.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      const { hash } = event.currentTarget;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds
      // it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top,
      }, 500, () => {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });


//https://codepen.io/hienlm/pen/BaojoBj


  $('.basis .disk').on('click', (event) => {
    console.log('click');

    $('section#experten').removeClass();
    $('.expert.content').animate({display:'none'}, 'fast');
    $('.disk').removeClass('active').animate({top:'0px'}, 'fast');
    $(event.currentTarget).addClass('active').animate({top:'-130px'}, 'fast');

   let idName = $(event.currentTarget).attr('id');

    console.log(idName+"Content");
    $('section#experten').addClass(idName);
    $(idName+"Content").animate({display:'flex'});

    let curHeight = $(idName+"Content").parent().height();
    $(idName+"Content").parent().css('height', 'auto');
    var autoHeight = $(idName+"Content").parent().height();
    $(idName+"Content").height(curHeight).parent().animate({height: autoHeight}, 1000);
  });


  $('#problem .button').on('click', (event) => {
    console.log('bruh');
    $('#problem').addClass('animationStart');
    $('.button.state_1').remove();
});

///////////////////////////////
// --------  drag  --------- //
///////////////////////////////

(function() {
  var init,
      start, stop, move,
      _x, _y,
      active = false,
      drag = document.getElementById('drag'),
      d = document.getElementById('draggable'),
      con = document.getElementById('container');
  
  init = function() {
    // Mouse Events
    drag.addEventListener('mousedown', start, false);
    $(document).bind('mousemove', function(event) {
      if (active === true) {
        move(event);
      }
    });
    $(document).bind('mouseup', function(event) {
      stop(event.originalEvent);
    });
  };

  start = function(e) {
    e.preventDefault();
    // mouse pos
    var Mx = e.clientX,
        My = e.clientY,
        l = d.getBoundingClientRect().left,
        t = d.getBoundingClientRect().top;
    // offset 
    _x = Mx - l;
    _y = My - t;
    return active = true;
  };

  move = function(e) {
    e.preventDefault();
    var Mx = e.clientX,
        My = e.clientY,
        l = d.getBoundingClientRect().left,
        t = d.getBoundingClientRect().top,
        w = d.getBoundingClientRect().width,
        h = d.getBoundingClientRect().height,
        _l = con.getBoundingClientRect().left,
        _t = con.getBoundingClientRect().top,
        _w = con.getBoundingClientRect().width,
        _h = con.getBoundingClientRect().height,
        x, y;
    //check to see if mouse is inside container
    if (Mx - _x > _l && Mx + w - _l < _w + _x) {
      // x = mouseX - offsetX - containerX
      x = Mx - _x - _l ;
    }
    if (My - _y > _t && My + h - _t < _h + _y) {
      // y = mouseY - offsetY - containerY
      y = My - _y - _t;
    }
    return d.style.left = x + 'px', d.style.top = y + 'px';
  };

  stop = function() {
    return active = false;
  };

  init();

}).call(this);

///////////////////////////////
// -------  rotate  -------- //
///////////////////////////////

(function() {
  var init, rotate, start, stop,
    active = false,
    angle = 0,
    rotation = 0,
    startAngle = 0,
    center = {
      x: 0,
      y: 0
    },
    R2D = 180 / Math.PI,
    rot = document.getElementById('rotate');

  init = function() {
    rot.addEventListener("mousedown", start, false);
    $(document).bind('mousemove', function(event) {
      if (active === true) {
        event.preventDefault();
        rotate(event);
      }
    });
    $(document).bind('mouseup', function(event) {
      event.preventDefault();
      stop(event);
    });
  };

  start = function(e) {
    e.preventDefault();
    var bb = this.getBoundingClientRect(),
      t = bb.top,
      l = bb.left,
      h = bb.height,
      w = bb.width,
      x, y;
    center = {
      x: l + (w / 2),
      y: t + (h / 2)
    };
    x = e.clientX - center.x;
    y = e.clientY - center.y;
    startAngle = R2D * Math.atan2(y, x);
    return active = true;
  };

  rotate = function(e) {
    e.preventDefault();
    var x = e.clientX - center.x,
      y = e.clientY - center.y,
      d = R2D * Math.atan2(y, x);
    rotation = d - startAngle;
    return rot.style.webkitTransform = "rotate(" + (angle + rotation) + "deg)";
  };

  stop = function() {
    angle += rotation;
    return active = false;
  };

  init();

}).call(this);

// INTERACTION HOLY HELL!!!!!!

$('.antworten').on('click', () => {

  if($('.clickdummy').hasClass('starting_state')) {
    $('.clickdummy').removeClass('starting_state');
    $('.clickdummy').addClass('contact1_state');
    $('.clickdummy .state1 h3').text("Aktivität Auswählen");
    $('.clickdummy .state1 p').text("Dreh am Rad um Spazieren gehen auszuwählen!");
  }else if($('.clickdummy').hasClass('contact1_state')) {
    $('.clickdummy').removeClass('contact1_state');
    $('.clickdummy').addClass('contact2_state');
    $('.clickdummy .state1 h3').text("Aktivität bestätigen");
    $('.clickdummy .state1 p').text("Drücke den Knopf in der Mitte um deine Entscheidung zu bestätigen");
  } else if ($('.clickdummy').hasClass('contact2_state')) {
    $('.clickdummy').removeClass('contact2_state');
    $('.clickdummy').addClass('contact3_state');
    $('.clickdummy .state1 h3').text("Uhrzeit bestätigen");
    $('.clickdummy .state1 p').text("Drücke den Knopf in der Mitte um deine Entscheidung zu bestätigen");
  } else if($('.clickdummy').hasClass('contact3_state')) {
    $('.clickdummy').removeClass('contact3_state');
    $('.clickdummy').addClass('contact4_state');
    $('.clickdummy .state1 h3').text("YEY");
    $('.clickdummy .state1 p').text("Das treffen steht");
  } else if($('.clickdummy').hasClass('contact4_state')) {
    $('.clickdummy').removeClass('contact4_state');
    $('.clickdummy').addClass('starting_state');
    $('.clickdummy .state1 h3').text("Kontaktanfrage");
    $('.clickdummy .state1 p').text("Paul möchte mit dir in die Pause, geh ran!");
  }
});


$.scrollify({
  section : "section",
  sectionName : "section-name",
  interstitialSection : "",
  easing: "easeOutExpo",
  scrollSpeed: 1100,
  offset : 0,
  scrollbars: true,
  standardScrollElements: "",
  setHeights: true,
  overflowScroll: true,
  updateHash: true,
  touchScroll:true,
  before:function() {},
  after:function() {},
  afterResize:function() {},
  afterRender:function() {}
});








});
