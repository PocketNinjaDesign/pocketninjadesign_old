const css = require('../styles/primary.scss');

import PageHolding from './pages/Holding';
import PortfolioLanding from './pages/PortfolioLanding';

if ($('body').hasClass('page-holding')) {
  PageHolding.init();
}
else if($('body').hasClass('page-portfolio-landing')) {
  PortfolioLanding.init();
}