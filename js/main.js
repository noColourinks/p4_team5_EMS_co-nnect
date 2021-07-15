$(document).ready(() => {

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

// HOLY INTERACTION HELL!!!!!!

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









});
