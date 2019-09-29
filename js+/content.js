class Page {
  constructor(data, outPath) {
    this.outPath = outPath;
    this.data = data;
  }

  async fetchAndRender() {
    const response = await fetch(this.data);
    return await response.json();
  }

  renderUnits() {
    const out = this.outPath;
    this.fetchAndRender().then(data => {
      let output = '';
      data.portfolio.forEach(unit => {
        output += ` 
          <div class="col-lg-3 col-md-6 mb-2">
            <div id="top-kamin-1" class="card card-kamin">            
              <div class="card-body p-0">
                <img src=${unit.link} alt="" class="img-fluid">
              </div>
              <div class="card-title-up">
                <span class="lead">${unit.name}</span>
              </div>
              
              <div class="card-footer">
                <a href="#" class="btn btn-oks-sell mb-2" data-toggle="modal" data-target="#modalTop${
          unit.id
          }">
                  <i class="fas fa-cart"></i>Замовити                
                </a> 
              </div>  
            </div>
          </div>                         
        `;
      });
      document.getElementById(out).innerHTML = output;
    });
  }

  renderHistory() {
    this.fetchAndRender().then(content => {
      let output = '';
      content.forEach(card => {
        output += `
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-8 mx-auto">
                <div class="card card-history text-center mb-3">
                  <div class="card-title bg-dark text-white">
                    <h4 class="font-weight-bold pt-3">
                      ${card.year}
                    </h4>
                  </div>
                  <div class="card-body">
                    <h5 class="primary-lead font-weight-bold mb-3">
                      ${card.name}
                    </h5>
                    <p class="">
                      ${card.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        `;
      });
      document.getElementById('history').innerHTML = `
        <div class="container-fluid text-center bg-light py-5">
          <h3 class="mb-5 mt-3">
            Наша історія
          </h3>
          <div id="row" class="row">
            <div class="col-md-6 mx-auto">
              <div id="row-history" class="row">
              </div>
            </div>
          </div>
        </div>
            
      `;
      document.getElementById('row-history').innerHTML = output;
    });
  }

  renderSlider() {
    document.getElementById('slider').innerHTML = `
      <div class="container-fluid m-0 p-0">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">

          <div class="carousel-inner" style="height: 100vh;">
            <div class="carousel-item w-100 carousel-image-1 active">
            </div>
            <div class="carousel-item w-100 carousel-image-2">
            </div>
            <div class="carousel-item w-100 carousel-image-3">
            </div>
            <div class="carousel-item w-100 carousel-image-4">
            </div>
            <div class="carousel-item w-100 carousel-image-5">
            </div>
          </div>
          <a href="#myCarousel" data-slide="prev" class="carousel-control-prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a href="#myCarousel" data-slide="next" class="carousel-control-next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    `;
  }
  renderMainAbout() {
    document.getElementById('main-info').innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <p class="primary-lead">Львівська Кахлярня</p>
            <h2 class="display-5 font-weight-bold mb-5">Ми творимо чудові речі для прекрасних людей</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <p class="">У Кахлярні, що в минулому столітті була збудована на околицях Львова, виробництво кахелю досі
              триває, а в камінах і печах людей, надалі горить яскравий вогонь! Наш колектив в надзвичайно важких умовах
              успішно розвиває та підтримує давню фабрику-кахлярню.</p>
            <p class="">Ми відновили та вдосконалили давні австрійсько-українські технології випікання кахелю. Вперше в
              Україні ввели власний метод повійного лиття.</p>
            <a href="about.html" class="btn btn-oks mb-3 d-none d-lg-inline"> Детальніше</a>
          </div>
          <div class="col-md-6 text-center">
            <div class="mb-2">
              <iframe width="350" height="200" src="https://www.youtube.com/embed/qwIK0Dr17u4" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <br>
            <a href="about.html" class="btn btn-oks mb-3 d-lg-none d-sm-inline">Детальніше</a>
          </div>
        </div>
      </div>
    `;
  }
  renderBullets() {
    document.getElementById('bullets').innerHTML = `
      <div class="container">
        <p class="primary-lead mt-5">Пропонуємо</p>
        <h2 class="mb-5">Наші Послуги</h2>
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="card card-oks px-1">
              <div class="card-body p-1">
                <i class="fas fa-pencil-alt fa-2x"></i>
                <h6 class="mt-2">Дизайн</h6>
                <p class="p-bullets text-muted">Проектуємо та робимо дизайн печі або каміну як на основі типових моделей
                  так і індивідуально.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="card card-oks px-1">
              <div class="card-body p-1">
                <i class="fas fa-building fa-2x"></i>
                <h6 class="mt-2">Виробництво</h6>
                <p class="p-bullets text-muted">Випікаємо увесь необхідний кахель та інші деталі у відповідності до
                  проекту. Упаковуємо. </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="card card-oks px-1">
              <div class="card-body p-1">
                <i class="fas fa-globe fa-2x"></i>
                <h6 class="mt-2">Монтаж</h6>
                <p class="p-bullets text-muted">Здійснюємо монтаж та підключення до комунікацій безпосередньо за місцем
                  знаходження</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="card card-oks px-1">
              <div class="card-body p-1">
                <i class="fas fa-industry fa-2x"></i>
                <h6 class="mt-2">Обслуговування</h6>
                <p class="p-bullets text-muted">Пропонуємо додаткові аксесуари. Можемо провести реставрацію пошкоджених
                  елементів.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderCta() {
    document.getElementById('row-cta').innerHTML = `
      <div class="col-lg-12 pb-5">
        <p class="primary-lead mt-5">Вірний вибір</p>
        <h2 class="mb-4">Індивідуальне замовлення</h2>
        <p class="lead">Якщо ви бажаєте, що б ми спроектували піч або камін під Ваші індивідуальні потреби, залиште заявку і наш спеціаліст зателефонує Вам протягом робочого дня.</p>
        <a href="#" class="btn btn-oks mb-2 mx-auto" data-toggle="modal" data-target="#modalTop4">
            <i class="fas fa-cart"></i>Зателефонуйте мені                 
        </a>
      </div>

    `;
  }
  renderTopAbout() {
    document.getElementById('top-about').innerHTML = `
      <section id="about" class="py-5 text-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mb-4">
              <p class="primary-lead">Про Нас</p>
              <h2 class="my dysplay-1 mb-3">Львівська Кахлярня</h2>
              <p class="px-5"> З-поміж колись чисельних цегелень та кахлярень Львова, до наших днів збереглася лише фабрика Берла Нойвонера та Філіпа Вальдмана. На початку ХХ століття фабрика стала фаворитом у продукції серед інших подібних підприємств і мала назву “Крайова фабрика кахлевих печей”, а зараз тут розміщена Львівська Кахлярня.</p>
            </div>   
          </div>          
          <div class="row">
            <div class="col-lg-3 col-md-6 text-md-right">              
              <p class="primary-lead mt-2">Директор</p>
              <h4>Оксана Чепурна</h4>                   
              <p class="text-sm text-muted">Художник за освітою та покликанням, підприємець, продовження австрійських традицій, проектування камінів і печей, створення інтер’єрів, впровадження у виробництво методу «подвійного лиття», ручний художній розпис.</p>       
            </div>
            <div class="col-lg-3 col-md-6">  
              <img src="img/pep/oc1.jpg" alt="" class="img-fluid mb-1">
            </div>
            <div class="col-lg-3 col-md-6">  
              <img src="img/pep/oc2.jpg" alt="" class="img-fluid mb-1">
            </div>
            <div class="col-lg-3 col-md-6 text-md-left">               
              <p class="primary-lead mt-2">Заступник Директора</p>
              <h4 class="">Тарас Чепурний</h4>                  
              <p class="text-sm text-muted">Фаховість юриста, відданість справі, забезпечення безперебійного виробництва та сумлінне виконання обов’язків, ефективний менеджмент, прогресивність у плануванні діяльності та прагматизм у прийманні відповідальних рішень.</p>     
            </div>
            <div class="row">
              <div class="col lg-12 py-3 px-5">
                <div class="w-75 mx-auto">
                  <p class="lead">
                    <strong class="color-lead"> Оксана Чепурна </strong> 
                    - заслужений художник України зібрала унікальну команду спеціалістів кахельної справи .
                  </p>
                </div>
              </div>
            </div>             
            </div>
          </div>
        </div>
      </section>   

    `;
  }
  renderSolid() {
    document.getElementById('solid').innerHTML = `
      <div class="container">
        <div class="row">
          <h3 class="dysplay-3 text-center mx-auto mb-5">Наші Досягнення</h3>
        </div> 
        <div class="row" id="solid-render">
          
        </div> 
      </div>
    `;
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

  loadPic() {
    this.fetchAndRender().then(pics => {
      let output = '';
      pics.forEach(pic => {
        output += `
          <a href="${
          pic.link
          }" data-toggle="lightbox" data-gallery="ti-gallery" data-type="image" class="col-sm-6 col-md-4">
            <img src="${pic.link}" class="img-fluid">
          </a>

          
        `;
      });
      document.getElementById('output').innerHTML = output;
    });
  }
}
