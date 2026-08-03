// Auto-close the collapsible mobile navbar after a nav link is clicked.
$(function () {
  $('#collapsable-nav a').on('click', function () {
    if ($(window).width() < 768) {
      $('#collapsable-nav').collapse('hide');
    }
  });
});

