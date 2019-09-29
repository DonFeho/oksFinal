class Render {
  constructor(renderId) {
    this.renderId = renderId;
  }

  renderHome() {
    var mainPage = new Page('./j_data/main.json', 'output-portfolio');
    mainPage.renderSlider();
    mainPage.renderMainAbout();
    mainPage.renderBullets();
    mainPage.renderUnits();
    mainPage.renderCta();
  }

  renderAbout() {
    const aboutPage = new Page('./j_data/history.json', 'output-portfolio');
    aboutPage.renderTopAbout();
    aboutPage.renderBullets();
    aboutPage.renderHistory();
    aboutPage.renderSolid();
  }

  renderTi() {
    const tiPage = new Page('./j_data/pic.json', '');
    tiPage.loadPic();
  }

  renderKamini() {
    const kaminiPage = new Page('./j_data/kamini.json', 'output-portfolio');
    kaminiPage.renderCta();
    kaminiPage.renderUnits();
  }
  renderPechi() {
    const pechiPage = new Page('./j_data/pechi.json', 'output-portfolio');
    pechiPage.renderCta();
    pechiPage.renderUnits();
  }

  mapCheck() {
    document.getElementById('map-section').classList.contains('d-none') &&
      document.getElementById('map-section').classList.remove('d-none');
  }

  hideMap = () =>
    document.getElementById('map-section').classList.add('d-none');

  renderContent() {
    if (this.renderId === 'home') {
      this.renderHome();
      this.mapCheck();
    } else {
      if (this.renderId === 'about') {
        this.renderAbout();
      } else {
        if (this.renderId === 'ti') {
          this.renderTi();
          this.hideMap();
        } else {
          if (this.renderId === 'pKamini') {
            this.renderKamini();
            this.hideMap();
          } else {
            if (this.renderId === 'pPechi') {
              this.renderPechi();
              this.hideMap();
            } else {
              if (this.renderId === 'cS') {
                this.mapCheck();
              } else {
                console.log('render error... ');
              }
            }
          }
        }
      }
    }
  }
}
