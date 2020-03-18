
$('.thumbnail').on('click', e => {
  const src = $(e.currentTarget).find('img').attr('src');
  console.log(src);
  const alt = $(e.currentTarget).find('img').attr('alt');
  console.log(alt)
  $('.hero img').attr('src', src);
  $('.hero img').attr('alt',alt);
});


  