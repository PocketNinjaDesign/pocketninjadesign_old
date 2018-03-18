
import $ from './jqlite.extends';
import PageHolding from './pages/Holding';
import PortfolioLanding from './pages/PortfolioLanding';

require('../styles/primary.scss');

if ($('body').hasClass('page-holding')) {
  PageHolding.init();
} else if ($('body').hasClass('page-portfolio-landing')) {
  PortfolioLanding.init();
}
