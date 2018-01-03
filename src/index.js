const css = require('../styles/primary.scss');

import $ from 'jQuery';
import globals from './globals';


// Modules
import SideNavigation from './modules/nav/SideNavigation';
// import Overlay from './modules/Overlay';

// Services


// Sections
import Portfolio from './modules/section/Portfolio';
import Contact from './modules/section/Contact';

//
// Index Script
//
SideNavigation.init();
// let newOverlay = new Overlay();
// newOverlay.init();
// newOverlay.show();