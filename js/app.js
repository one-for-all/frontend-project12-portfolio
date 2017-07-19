$('li[class^="nav__li"]').click((evt) => {
  evt.preventDefault();
  $('li[class^="nav__li"]').attr("class", "nav__li");
  $(evt.target).attr("class", "nav__li--current");
  const linkText = $(evt.target).text();
  const linkDivMap = {
    "Home": ".home",
    "Writings": ".writings",
    "Contact": ".contact",
  };
  $.each(linkDivMap, (key, val) => {
    if (key == linkText) {
      $(val).removeClass('hidden');
    } else {
      $(val).addClass('hidden');
    }
  });
});
