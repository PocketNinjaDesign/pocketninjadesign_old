import navigation from './navigation';


// UI Design
import pocketNinjaDesignWeb from './ui-design/pocketNinjaDesignWeb';
import blinkboxHackathon from './ui-design/blinkboxHackathon';
import blinkboxMusicWebsite from './ui-design/blinkboxMusicWebsite';
import blinkboxMusicInternational from './ui-design/blinkboxMusicInternational';
import goFishingMagazine from './ui-design/goFishingMagazine';
import carMagazine from './ui-design/carMagazine';
import createAndCraftClub from './ui-design/createAndCraftClub';


// Graphics
import ansaBranding from './graphics/ansaBranding';
import goldcrestHealthcareLogo from './graphics/goldcrestHealthcareLogo';
import idealworld3dtv from './graphics/idealworld3dtv';


// Illustration
import blueZombieSketches from './illustration/blueZombieSketches';
import voodooBoySketch from './illustration/voodooBoySketch';
import spacemanSketch from './illustration/spacemanSketch';
import longLostTwinCharacters from './illustration/longLostTwinCharacters';


module.exports = {
  navigation,
  gallery: [

  // UI DESIGN
    {
      filePrefix: {
        thumb: 'images/portfolio/ui-design/thumb/',
        detail: 'images/portfolio/ui-design/detail/',
      },

      items: [
        pocketNinjaDesignWeb,
        blinkboxHackathon,
        blinkboxMusicWebsite,
        blinkboxMusicInternational,
        goFishingMagazine,
        carMagazine,
        createAndCraftClub,
      ],
    },


    // Graphics
    {
      filePrefix: {
        thumb: 'images/portfolio/graphics/thumb/',
        detail: 'images/portfolio/graphics/detail/',
      },
      items: [
        ansaBranding,
        goldcrestHealthcareLogo,
        idealworld3dtv,
      ],
    },


    // Illustration
    {
      filePrefix: {
        thumb: 'images/portfolio/illustration/thumb/',
        detail: 'images/portfolio/illustration/detail/',
      },
      items: [
        blueZombieSketches,
        voodooBoySketch,
        spacemanSketch,
        longLostTwinCharacters,
      ],
    },
  ],
};
