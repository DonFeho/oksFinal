const mainPage = new Stage();
mainPage.renderStatic();
mainPage.renderMap();

const nav = document.getElementById("main-nav");
document.getElementById('main-nav').classList.add('d-none');

const render = new Render('./j_data/main.json', './j_data/pic.json');
render.renderBullets();
render.renderUnits();

window.onscroll = function () { myFunction() };

function myFunction() {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    nav.classList.remove('d-none');
  } else {
    nav.classList.add('d-none');
  }
}


$('.s-slider').slick({
  dots: false,
  infinite: true,
  speed: 2400,
  fade: true,
  cssEase: 'ease-in-out',
  arrows: true,
  autoplay: true
});


$('#year').text(new Date().getFullYear());
