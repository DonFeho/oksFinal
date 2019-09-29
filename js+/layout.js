class Layout {
  constructor(type) {
    this.type = type;
    this.output = document.getElementById('page-content');

    this.home = `
      <section id="slider" class="d-none d-md-block"></section>
      <section id="main-info" class="bg-white py-5"></section>
      <section id="bullets" class="text-center text-white py-5"></section>

      <section id="portfolio" class="py-5 text-center bg-white">
        <div class="container">
          <p class="primary-lead mt-5">Портфоліо</p>
          <h2 class="mb-5">Наші Печі та Каміни</h2>
          <div id="output-portfolio" class="row">
          </div>
          <div class="col-lg-12 text-center py-3">
            <hr>
            <a href="portfolio.html" class="btn btn-oks"> Більше наших робіт</a>
          </div>
        </div>
      </section>
      <section id="cta" class="text-center text-white">
        <div class="container py-4">
          <div id="row-cta" class="row">
          </div>
        </div>
      </section>
      
    `;

    this.about = `
      
      <section id="top-about" class="bg-white mt-5 pt-5"></section>
      <section id="bullets" class="text-center text-white py-5"></section>
      <section id="history" class="bg-white"></section>
      <section id="solid" class="bg-oks py-5 text-center text-white"></section>
      
    `;

    this.ti = `
      <section id="top-ti">
        <div class="container py-5 text-center">
          <div class="row pt-5 mx-auto">
            <div class="col-md-12">
              <p class="primary-lead">Виставка</p>
              <h2 class="my dysplay-1 mb-3">Вічність Трипілля</h2>
              <p class="lead">12-29 вересня 2018 року у київській галереї «Митець» пройшла виставка кераміки заслуженої художниці України Оксани Чепурної. Неймовірно талановита мисткиня привезла зі Львова до Києва роботи, в які вона вкладає не тільки свій талант і душу, а й нагадує українцям про витоки нашої культури.</p>
            </div>          
          </div>                      
            
          <div class="row mt-3">
            <div class="col-sm-6 col-md-12">                        
              <iframe class="stupid-frame" src="https://www.youtube.com/embed/bBp_ClYtLy4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> 
          </div>

          <div class="row pt-5 mx-auto">
            <div class="col-md-12">                        
              <p class=" lead"> Зацікавленням Оксани Чепурної за останні 20 років стала трипільська культура. Художниця досліджує її та використовує у своїх роботах давні символи. На виставці представлено близько сотні керамічних виробів. Мисткиня в своїх роботах (а це - тарелі, панно, вази та декоративні композиції) використовує трипільську символіку в техніці ангобного розпису. </p>
              <p class="lead">На відкритті були присутні колеги-митці, художники зі Львова та Києва, журналісти, мистецтвознавці, науковці, члени родини. Також виставку відвідали Микола Григорович Маломуж, який є великим шанувальником таланту і творчості Оксани Чепурної, славетний художник Іван Марчук, також інші митці. Прикрасив відкриття виставки дитячий ансамбль «Зернятко» під керівництвом Лариса Закрецької, а несподіваним сюрпризом для мисткині був виступ колективу «Хорея козацька».</p>
            </div>
          </div>
          <div class="row pt-5">
            <div id="output" class="row no-gutters">        </div>
          </div>
        </div>
      </section>
    `;
    this.portfolio = `
      <section id="" class="text-center bg-white py-5 mt-5">
        <div class="container">
          <p class="primary-lead">Портфоліо</p>
          <h2 class="mb-5">Наші Печі та Каміни</h2>  
          <div id="output-portfolio" class="row">   
          </div>  
        </div>  
      </section>    
      <section id="cta" class="text-center text-white">
        <div class="container py-4">
          <div id="row-cta" class="row">
          </div>
        </div>
      </section>
    `;

    this.cS = '';

    this.layTypes = [
      {
        name: 'home',
        data: this.home
      },
      {
        name: 'about',
        data: this.about
      },
      {
        name: 'ti',
        data: this.ti
      },
      {
        name: 'pPechi',
        data: this.portfolio
      },
      {
        name: 'pKamini',
        data: this.portfolio
      },
      {
        name: 'cS',
        data: this.clear
      }
    ];
  }
  clear = () => (this.output.innerHTML = '');

  setLayout() {
    if (this.output.innerHTML !== '') {
      this.clear();
      const checkType = this.layTypes;

      let layout = '';
      checkType.forEach(lay => {
        if (this.type == lay.name) {
          layout = lay.data;
        } else {
          return console.log('Layouts updated!');
        }
      });
      this.output.innerHTML = layout;
    }
  }
}
