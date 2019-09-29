
const portPage = new Stage();
portPage.renderStatic();

const nav = document.getElementById("main-nav");
document.getElementById('main-nav').classList.add('d-none');

let portfolio = new Render('', '', './j_data/portfolio.json');
portfolio.renderPortfolio();

window.onscroll = function () { myFunction() };

function myFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

    nav.classList.remove('d-none');
  } else {
    nav.classList.add('d-none');

  }
}


$('#year').text(new Date().getFullYear());


