const tiPage = new Stage();
tiPage.renderStatic();
const tiRender = new Render('', './j_data/pic2.json', '');
tiRender.loadPics();

//lightbox
$(document).on('click', '[data-toggle="lightbox"]', function (e) {
  e.preventDefault();
  $(this).ekkoLightbox({
    showArrows: true,
  });
});



$('#year').text(new Date().getFullYear());
