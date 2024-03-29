
const about = new Stage();
about.renderStatic();
document.getElementById('main-nav').classList.remove('d-none');

const render = new Render('./j_data/main.json', './j_data/pic.json', '');
render.renderSolid();
render.renderHistory();



//lightbox
$(document).on('click', '[data-toggle="lightbox"]', function (e) {
  e.preventDefault();
  $(this).ekkoLightbox({
    showArrows: true,
  });
});


$('#year').text(new Date().getFullYear());
