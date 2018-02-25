const css = require('../styles/primary.scss');

// import $ from 'jQuery';
// import globals from './globals';


// Modules
// import SideNavigation from './modules/nav/SideNavigation';


// Services


// Sections
// import Portfolio from './modules/section/Portfolio';
// import Contact from './modules/section/Contact';
// import Codepen from './modules/section/Codepen';


//
// Index Script
//
// SideNavigation.init();

// this will activate when scrolled on the page later on
// Portfolio.init();
// Codepen.init();
// Contact.init();


// Temp Holding Page
import PageHolding from './pages/Holding';
import PortfolioLanding from './pages/PortfolioLanding';

if ($('body').hasClass('page-holding')) {
  PageHolding.init();
}
else if($('body').hasClass('page-portfolio-landing')) {
  PortfolioLanding.init();
}

// window.onpopstate = function(e) {
//   console.log(JSON.stringify(e.state));
// };