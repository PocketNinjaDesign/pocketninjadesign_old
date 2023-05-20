
// import $ from './jqlite.extends';
import PageHolding from './pages/Holding';
import PortfolioLanding from './pages/PortfolioLanding';

// require('../styles/primary.scss');

if ( document.body.classList.contains('page-holding') ) {
  PageHolding.init();
} else if ( document.body.classList.contains('page-portfolio-landing') ) {
  PortfolioLanding.init();
}
