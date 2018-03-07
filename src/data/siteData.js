
module.exports = {

  navigation: require('./navigation'),

  gallery: [

  // UI DESIGN
  {
    filePrefix: {
      thumb: 'images/portfolio/ui-design/thumb/',
      detail: 'images/portfolio/ui-design/detail/'
    },

    items: [
      require('./ui-design/pocketNinjaDesignWeb'),
      require('./ui-design/blinkboxHackathon'),
      require('./ui-design/blinkboxMusicWebsite'),
      require('./ui-design/blinkboxMusicInternational'),
      require('./ui-design/goFishingMagazine'),
      require('./ui-design/carMagazine'),
      require('./ui-design/createAndCraftClub'),
    ]
  },

  // Graphics
  {
    filePrefix: {
      thumb: 'images/portfolio/graphics/thumb/',
      detail: 'images/portfolio/graphics/detail/'
    },
    items: [
      require('./graphics/ansaBranding'),
      require('./graphics/goldcrestHealthcareLogo'),
      require('./graphics/idealworld3dtv'),
    ]
  },

  // Illustration
  {
    filePrefix: {
      thumb: 'images/portfolio/illustration/thumb/',
      detail: 'images/portfolio/illustration/detail/'
    },
    items: [
      require('./illustration/blueZombieSketches'),
      require('./illustration/voodooBoySketch'),
      require('./illustration/spacemanSketch'),
      require('./illustration/longLostTwinCharacters'),
    ]
  },


  ]
};