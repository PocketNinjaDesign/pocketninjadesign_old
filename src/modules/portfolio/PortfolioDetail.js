import $ from '../../jqlite.extends';

import Carousel from '../Carousel';
import SocialMediaLinks from '../../templates/socialMediaLinks';

const DEFAULT_OPTIONS = {
  type: 'ProjectType',
  title: 'Project Name',
  images: [],
};

export default new class PortfolioDetail {
  constructor() {
    this.options;
    this.carousel;
    this.$portfolioDetail;
    this.$portfolioDetailContent;
    this.$portfolioDetailMobileImages;
  }

  init(newOptions) {
    // Alter the root data
    this.options = Object.assign({}, DEFAULT_OPTIONS, newOptions);

    this.$portfolioDetail = this.getPortfolioDetailTemplate({
      type: this.options.type,
      title: this.options.title,
    });
    this.$portfolioDetail.find('#portfolioDetailCloseButton').on('click', () => {
      this.hide();
    });
    this.$portfolioDetailContent = this.$portfolioDetail.find('#portfolioDetailContent');
    this.$portfolioDetailMobileImages = this.$portfolioDetail.find('#portfolioDetailMobileImages');

    this.popuplate();
  }

  popuplate() {
    const listLength = this.options.images.length;

    if (listLength === 1) {
      // 1 image: just display inside of container no carousel
      this.$portfolioDetailContent.append(this.getSingleImageTemplate());
    }
    else if (listLength > 1) {
      // 1+ images: generate Carousel with images & images block for thin pages
      this.carousel = new Carousel({
        renderContainer: this.$portfolioDetailContent,
        fullRender: true,
      });
      this.carousel.init();
      this.$portfolioDetailContent.append(this.getAllImageTemplate());
    }
  }

  show() {
    this.$portfolioDetail.appendTo('body');
    $('html').addClass('full-overlay-mode');
  }

  hide() {
    this.$portfolioDetail.hide();
    $('html').removeClass('full-overlay-mode');
  }

  getPortfolioDetailTemplate(data) {
    return $(
      `<div id="portfolioDetail" class="portfolio-detail">
        <header class="portfolio-detail-header">
          <div id="portfolioDetailCloseButton" class="burger-menu active">
            <div class="burger-bar-1"></div>
            <div class="burger-bar-2"></div>
            <div class="burger-bar-3"></div>
          </div>
          <h1>${data.type}: ${data.title}</h1>
        </header>
        <div id="portfolioDetailContent" class="portfolio-detail-content">
          <div id="portfolioDetailMobileImages" class="portfolio-detail-mobile-images"></div>
        </div>
        <footer class="portfolio-detail-footer">
          ${SocialMediaLinks.getFullTemplate('portfolioDetailSocial')}
        </footer>
      </div>`
    );
  }

  getSingleImageTemplate() {
    this.$portfolioDetailMobileImages.append($(`<img class="portfolio-image-mobile" src="${this.options.images[0].src}">`));

    return $(
      `<div class="portfolio-image"></div>`
    ).css({
      'backgroundImage': `url(/${this.options.images[0].src})`,
      'background-color': this.options.images[0].bgColor || 'transparent',
    });
  }

  getAllImageTemplate() {
    const imagesList = this.options.images;
    let newImageList = [];

    for(let i = 0; i < imagesList.length; i++) {
      let template = $(`<div class="portfolio-image"></div>`)
      .css({
        'backgroundImage': `url(/${imagesList[i].src})`,
        'background-color': imagesList[i].bgColor || 'transparent',
      });
      newImageList.push(template);
      this.$portfolioDetailMobileImages.append($(`<img class="portfolio-image-mobile" src="${imagesList[i].src}">`));
    }

    this.carousel.AddCarouselItem(newImageList);
  }
};