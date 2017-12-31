import $ from 'jQuery';

const DEFAULT_OPTIONS = {
  $carousel: undefined,
  fullRender: false,
  renderContainer: undefined,
  startIndex: 0,
};


class Carousel {
  constructor(newOptions) {
    this.options = $.extend({}, DEFAULT_OPTIONS, newOptions);

    this.$slider;
    this.$leftButton;
    this.$rightButton;

    this.itemCount;
    this.itemWidth;
    this.currentIndex = this.options.startIndex;
  }


  init() {
    let root = this;

    if(this.options.fullRender) {
      this.options.$carousel = this.getCarouselTemplate();
      this.options.renderContainer.append(this.options.$carousel);
    }

    this.$slider = root.options.$carousel.find('[data-slider]');

    this.setCarouselItemStyles();
    this.setButtons();
  }


  moveSlider(num) {
    this.currentIndex += num;
    this.$slider.css('left', -(100 * this.currentIndex) + '%');
  }


  setButtons() {
    let root = this;

    this.$leftButton = this.options.$carousel
      .find('[data-carousel-left-bttn]')
      .on('click', function() {
        if(root.currentIndex > 0) {
          root.moveSlider(-1);
        }
      });

    this.$rightButton = this.options.$carousel
      .find('[data-carousel-right-bttn]')
      .on('click', function() {
        if(root.currentIndex < root.itemCount - 1) {
          root.moveSlider(1);
        }
      });
  }


  setCarouselItemStyles() {
    let root = this;

    this.itemCount = this.$slider.find('li').length || 0;
    this.itemWidth = 100 / this.itemCount;

    this.$slider
    .css('width', 100 * this.itemCount + '%')
    .find('li').each(function(index) {
      $(this).css({
        width: root.itemWidth + '%',
        left: root.itemWidth * index + '%'
      });
    });
  }

  // $contentList - List of jQuery objects
  AddCarouselItem($contentList) {
    for(let i = 0; i < $contentList.length; i++) {
      let $item = this.getCarouselItemTemplate();
      this.$slider.append(
        this.getCarouselItemTemplate($contentList[i])
      );
    }

    this.setCarouselItemStyles();
  }

  getCarouselTemplate() {
    return $(`
      <div class="carousel" data-carousel>
        <div class="carousel-slider-container">
          <ul class="carousel-slider" data-slider>
          </ul>
        </div>
        <div class="carousel-nav">
          <div class="carousel-btn left" data-carousel-left-bttn>left</div>
          <div class="carousel-btn right" data-carousel-right-bttn>right</div>
        </div>
      </div>
    `);
  }

  getCarouselItemTemplate($content) {
    return $(`
      <li class="carousel-item"></li>
    `).append($content);
  }
}

export default Carousel;