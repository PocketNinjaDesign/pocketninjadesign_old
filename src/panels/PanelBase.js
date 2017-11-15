/*
 * All Panel scripts loaded and singletons generated in an object
 * ready to be initialised at any time
 *
 */
import PanelLandingPage from './PanelLanding';
import PanelAboutPage from './PanelAbout';
import PanelHomePage from './PanelHome';
import PanelPortfolioPage from './PanelPortfolio';
import PanelStyleguidePage from './PanelStyleguide';
import PanelContactPage from './PanelContact';
import PanelExperimentPage from './PanelExperiments';

let PanelBase = {
  landing: new PanelLandingPage(),
  about: new PanelAboutPage(),
  home: new PanelHomePage(),
  portfolio: new PanelPortfolioPage(),
  styleguide: new PanelStyleguidePage(),
  contact: new PanelContactPage(),
  experiments: new PanelExperimentPage()
};

export default PanelBase;