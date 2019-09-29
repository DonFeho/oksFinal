class Stage {
  constructor() {
    this.stage = document.getElementById('stage');
    this.defaultStage = `
      <header id="menu">
      </header>
      <div id="page-content" class="">
      </div>
      <section id="map-section" class="">
      </section>
      <footer id="main-footer" class="">
      </footer>
    `;
    this.map = `
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 p-0">
            <div id="map-super" style="width: 100%; height: 600px" class="p-0"></div>
          </div>
        </div>
      </div>
    `;
    this.footer = `
      <div class="container-fluid bg-oks">
        <div class="container py-5 text-center text-white">
          <div class="row">
            <div class="col-md-4">
              <div class="card bg-transparent border-0 text-md-left">
                <h4 class="text-gold display-5 mt-3 ">Львівська Кахлярня</h4>
                <span>
                  <i class="fas fa-home"></i> 79011, м. Львів, вул. Стуса, 25, 27
                </span>
                <span >
                  <a class="text-white" href="mailto:lk.oks1872@gmail.com">
                    <i class="fas fa-envelope"></i> lk.oks1872@gmail.com
                  </a>
                </span>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card bg-transparent border-0">
                <div class="card-dody mt-4">
                  <p className="prime">телефонуйте: </p>
                  <ul class="list-group list-unstyled">
                    <li class="list-item">
                      <a class="text-white primary" href="tel:+30679897937">
                        <span>
                          <i class="fas fa-phone pr-2"></i> (067) 989 79 37
                        </span>
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="text-white primary" href="tel:+30980900510">
                        <span >
                          <i class="fas fa-phone pr-2"></i> (097) 223 74 83
                        </span>
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="text-white primary" href="tel:+30980900510">
                        <span >
                          <i class="fas fa-phone pr-2"></i> (067) 27 66 853
                        </span>
                      </a>
                    </li>
                    <li class="list-item">
                      <a class="text-white primary" href="tel:+30980900510">
                        <span >
                          <i class="fas fa-phone pr-2"></i> (032) 276 05 08
                        </span>
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4 pt-4">
              <h6 class="mb-3 text-md-right">Зворотній Зв'язок</h6>
              <form action="https://formspree.io/lk.oks1872@gmail.com" method="POST" >
                <div class="form-group">
                  <input name="name" type="text" class="mb-2 form-control text-center text-md-right" placeholder="Імя" >
                  <input  name="phone" type="phone" class="mb-2 form-control text-center text-md-right" placeholder="Телефон">
                  <textarea name="message" class="form-control text-center text-md-right" placeholder="Повідомлення"></textarea>
                  <input type="submit" value="Надіслати" class="btn btn-oks mt-3 float-md-right"></input>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid text-center text-light py-3">
        <p class="text-muted">
          <strong>
            ТОВ "ОКС" &copy; <span id="year" />
          </strong>
        </p>
      </div>
    `;
    this.nav = `
      <nav class="navbar navbar-expand-md fixed-top bg-oks" id="main-nav">
        <div class="container">
          <a href="index.html" class="navbar-brand pb-3">
            <img class="" src="img/logo.png" width="130" height="40" alt="Львівська Кахлярня">
          </a>
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon">
              <i class="fas fa-bars"></i>
            </span>
          </button>
          <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul id="navbar-nav" class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="index.html" class="nav-link">Головна</a>
              </li>
              <li class="nav-item">
                <a href="about.html" class="nav-link">Про нас</a>
              </li>
              <li class="nav-item">
                <a href="portfolio.html" class="nav-link"> Портфоліо </a>
              </li>
              <li class="nav-item dropdown">
                <a href="#!" class="dropdown-toggle" class="nav-link" data-toggle="dropdown">
                  Виставки
                </a>
                <div class="dropdown-menu">
                  <a href="ti.html" class="nav-link">Вічність Трипілля</a>
                  <a href="mt.html" class="nav-link">Моє Трипілля</a>
                </div>
              </li>
            
              <li class="nav-item ">
                <a href="contacts.html" class="nav-link">Контакти</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }

  renderDefaultStage() {
    this.stage.innerHTML = this.defaultStage;
  }

  renderMap() {
    document.getElementById('map-section').innerHTML = this.map;
  }
  renderStatic() {

    document.getElementById('main-footer').innerHTML = this.footer;

  }


}

class Render {
  constructor(data, pics, all) {
    this.pics = pics;
    this.data = data;
    this.all = all;
    this.sliderInit = () => {
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
        speed: 720,
        autoplay: true,
        useTransform: true

      });
      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        useTransform: true
      });
    }
    this.historyInit = () => {


      $('.h-scroll').slick({
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
      });
    }
  }



  async fetchAndRender() {
    const response = await fetch(this.data);
    return await response.json();
  }

  renderBullets() {
    const bull = document.getElementById('bull');
    this.fetchAndRender().then(data => {
      let output = '';
      data.bullets.forEach(bull => {
        output += `
          <div class="col-md-6 col-lg-3">
            <div class="bullet-card">
              <div class="card-title">
                <i class="${bull.icon} fa-2x"></i>
                <h5 class="h-prime mt-2">${bull.name}</h5>
              </div>
              <div class="card-body px-2">
                <p class="primary"> ${bull.info}</p>
              </div>
            </div>
          </div>

        `;
      });
      bull.innerHTML = output;
    });
  }

  renderUnits() {
    this.fetchAndRender().then(data => {
      let output = '';
      data.portfolio.forEach(unit => {
        output += `
          <div class="col-sm-6 col-lg-3 col-md-6 mb-2 mx-auto">
            <div id="top-kamin-1" class="card">
              <div class="card-body card-portfolio ${unit.id} p-0 ">

              </div>
              <div class="card-title-up">
                <p class="lead">${unit.name}</p>
              </div>
            </div>
          </div>
        `;
      });
      document.getElementById('portfolio').innerHTML = output;
    });
  }

  async fetchAndRenderPics() {
    const response = await fetch(this.pics);
    return await response.json();
  }

  loadPics() {
    this.fetchAndRenderPics().then(pics => {
      let output = '';
      pics.forEach(pic => {
        output += `
          <a href="${pic.link}" data-toggle="lightbox" data-gallery="ti-gallery" data-type="image" class="col-sm-6 col-md-4 col-lg-4">
            <img src="${pic.prev}" class="img-fluid hover-gray">
          </input>


        `;
      });
      document.getElementById('pics-output').innerHTML = output;
    });
  }

  async fetchAndRenderPort() {
    const response = await fetch(this.all);
    return await response.json();
  }

  renderPortfolio() {
    this.fetchAndRenderPort().then(all => {
      const kamini = all.kamini;
      const pe4i = all.pe4i;
      const total = [...kamini, ...pe4i];

      let output = '';
      let outputSmall = '';

      total.forEach(one => {

        output += `
        <div class="portfolio ${one.id} ">

          <div class="d-flex align-items-start flex-column flex-inner">            
            <div class="mt-auto mx-auto port-info">              
              <p class="prime text-antic m-0 text-uppercase">${one.title} ${one.art}</p>
              <h5 class="h-prime text-antic">${one.name} </h5>
              <a href="#!" class="btn btn-oks mb-2 mx-auto" data-toggle="modal" data-target="#modalTop">
                Замовити 
                <i class="fas fa-shopping-cart"></i>
                </a>
              </a>
            </div>
          </div>
        </div>
      `;
        outputSmall += `
        <div class="portfolio-nav ${one.id}"></div>
      `;

      });
      document.getElementById('sliderFor').innerHTML = output;
      document.getElementById('sliderNav').innerHTML = outputSmall;
      this.sliderInit();
    });
  }


  renderSolid() {
    const links = ['z', 'z3', 'z2'];
    let output = '';
    links.forEach(link => {
      output += `
        <div class="col-md-4">
          <div class="py-1">
            <a href="img/${link.toString()}.jpg" data-toggle="lightbox">
              <img src="img/${link.toString()}.jpg" alt="" class="img-filter img-fluid w-75">
            </a>
          </div>
        </div>
      `;
      document.getElementById('solid-render').innerHTML = output;
    });
  }


  renderHistory() {
    this.fetchAndRender().then(data => {
      let his = data.history;
      let output = '';
      his.forEach(date => {
        output += `
          <div class="h-item mb-3">         
            <div class="card-history text-center">         
              <div class="h-title">
                <h5 class="h-prime text-gold pt-3">
                  ${date.year} 
                </h5>
                <h6 class="h-prime text-antic mb-3">
                  ${date.name}
                </h6>              
              </div>
              <div class="h-content px-3">
                <p class="primary text-light">
                  ${date.content}
                </p>         
              </div>           
            </div>
          </div>          
          
        `;
      });

      document.getElementById('row-history').innerHTML = output;
      this.historyInit();
    });
  }

}








