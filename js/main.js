$(document).ready(() => {

//https://codepen.io/hienlm/pen/BaojoBj
  $('a').on('click', (event) => {
    if (event.currentTarget.hash !== '') {

      event.preventDefault();
      const { hash } = event.currentTarget;
      $('html, body').animate({
        scrollTop: $(hash).offset().top,
      }, 100, () => {

        window.location.hash = hash;
      });
    }
  });


//https://codepen.io/hienlm/pen/BaojoBj

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
