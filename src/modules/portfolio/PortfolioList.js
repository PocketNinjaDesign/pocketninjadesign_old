import $ from '../../jqlite.extends';
import PortfolioDetail from './PortfolioDetail';

const DEFAULT_OPTIONS = {
  category: '',
  galleryList: new Map(),
  target: '.portfolio-list',
  filePrefix: {},
};

class PortfolioList {
  constructor(newOptions) {
    this.options = Object.assign({}, DEFAULT_OPTIONS, newOptions);
  }

  init() {
    const root = this;

    $(this.options.target).find('.portfolio-list-item').each((index, element) => {
      $(element).on('click', function() {
        let $this = $(this);
        let projectTitle = $this.attr('data-project-title');
        let portfolioContent = root.options.galleryList.get(projectTitle);

        PortfolioDetail.init({
          type: portfolioContent.type,
          title: portfolioContent.title,
          filePrefix: root.options.filePrefix,
          images: portfolioContent.img.detail,
          externalLink: portfolioContent.externalLink,
        });
        PortfolioDetail.show();
      });
    });
  }
}

export default PortfolioList;