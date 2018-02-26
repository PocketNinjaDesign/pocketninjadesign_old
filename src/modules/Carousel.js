import $ from '../jqlite.extends';
// import $ from 'jQuery';

const DEFAULT_OPTIONS = {
  $carousel: undefined,
  fullRender: false,
  renderContainer: undefined,
  startIndex: 0,
};


class Carousel {
  constructor(newOptions) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, newOptions);

    this.$slider;
    this.$leftButton;
    this.$rightButton;

    this.itemCount;
    this.itemWidth;
    this.currentIndex = this.options.startIndex;
  }


  init() {
    if(this.options.fullRender) {
      this.options.$carousel = this.getCarouselTemplate();
      this.options.$carousel.appendTo(this.options.renderContainer);
    }

    this.$slider = this.options.$carousel.find('[data-slider]');

    this.setCarouselItemStyles();
    this.setButtons();
  }


  moveSlider(num) {
    this.currentIndex += num;
    this.$slider.css('left', -(100 * this.currentIndex) + '%');
  }


  setButtons() {
    this.$leftButton = this.options.$carousel
      .find('[data-carousel-left-bttn]')
      .on('click', () => {
        if(this.currentIndex > 0) {
          this.moveSlider(-1);
        }
      });

    this.$rightButton = this.options.$carousel
      .find('[data-carousel-right-bttn]')
      .on('click', () => {
        if(this.currentIndex < this.itemCount - 1) {
          this.moveSlider(1);
        }
      });
  }


  setCarouselItemStyles() {
    let root = this;

    this.itemCount = this.$slider.find('.carousel-item').length || 0;
    this.itemWidth = 100 / this.itemCount;

    this.$slider
      .css('width', 100 * this.itemCount + '%')
      .find('.carousel-item').each(function(index) {
        $(this).css({
          width: root.itemWidth + '%',
          left: root.itemWidth * index + '%'
        });
      });
  }


  // $contentList - List of jQuery objects
  AddCarouselItem($contentList) {
    for(let i = 0; i < $contentList.length; i++) {
      this.$slider.append(
        this.getCarouselItemTemplate($contentList[i])
      );
    }

    this.setCarouselItemStyles();
  }


  getCarouselTemplate() {
    return $(
      `<div class="carousel" data-carousel>
        <div class="carousel-slider-container">
          <ul class="carousel-slider" data-slider>
          </ul>
        </div>
        <div class="carousel-nav">
          <div class="carousel-btn left" data-carousel-left-bttn>
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path class="arrow" d="M82.3 22.9L63.4 4 35.8 31.6 16.9 50.5l18.9 18.9L63.4 97l18.9-18.9-27.6-27.6z"/>
            </svg>
          </div>
          <div class="carousel-btn right" data-carousel-right-bttn>
            <svg class="arrow-icon right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path class="arrow" d="M82.3 22.9L63.4 4 35.8 31.6 16.9 50.5l18.9 18.9L63.4 97l18.9-18.9-27.6-27.6z"/>
            </svg>
          </div>
        </div>
      </div>`
    );
  }


  getCarouselItemTemplate($content) {
    return $(`<li class="carousel-item"></li>`).append($content);
  }
}

export default Carousel;