/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable strict */
$('.thumbnail').on('click', e => {
  const src = $(e.currentTarget).find('img').attr('src');
  console.log(src);
  const alt = $(e.currentTarget).find('img').attr('alt');
  console.log(alt)
  $('.hero img').attr('src', src);
  $('.hero img').attr('alt',alt);
});

//Active
//$('.hero').carousel();

// //Enable Indicator
// $('a').click(function(){
//   $('.hero img src').remove();
//   $(event.currentTarget).clone().appendTo('.hero')
// });
  