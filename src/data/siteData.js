
module.exports = {

  // navigation: require('./navigation'),
  navigation: [
    {
      page: 'ui-design.html',
      className: 'page-portfolio',
      title: 'UI Design',
      subTitle: 'WEB / CD-ROM',
      shortDescription: 'UI Design Short Description',
      detailedDescription: "I've created UI Designs since the start of my career working on CD-ROMs and Flash sites.  I then moved on to Web Design which initially was straight forward until the levels of complexity with Responsive Design moved in.  I now love the challenges that Responsive Design brings and feel some generic template boundaries needs pushing especially in transitioning between content which is a whole new ball game. All of the following pieces are Website, CD-ROM and Flash designs and mostly fairly bespoke."
    },

    {
      page: 'graphics.html',
      className: 'page-portfolio',
      title: 'Graphics',
      subTitle: 'Logos / Icons / Visuals',
      shortDescription: 'Graphics Short Description',
      detailedDescription: "From Branding, Illustration and Icons I've worked on a lot of graphics. From winning a pitch to make an e-card with Puma in my early days to knocking out logos in a morning and accepted by the client during lunch.  UI and Branding always does better with that little extra Oooomph otherwise it's just colored in wireframes right..? With a huge photo or video filling the screen on the home page right?"
    },
    
    {
      page: 'illustration.html',
      className: 'page-portfolio',
      title: 'Illustration',
      subTitle: 'Digital / Paper',
      shortDescription: 'Blah blah blah in the car',
      detailedDescription: "What's this? A front end design / developer who can draw? And not just with vectors making simple blocked shapes? Yes, I do like drawing, mostly black and white with a little red thrown in as you will see from the gallery.  I do have a penchant for zombies I won't lie to you."
    }
  ],



  gallery: [

  // UI DESIGN
  {
    filePrefix: {
      thumb: 'images/portfolio/ui-design/thumb/',
      detail: 'images/portfolio/ui-design/detail/'
    },

    items: [
      // require('./ui-design/pocketNinjaDesignWeb'),
      // require('./ui-design/blinkboxHackathon'),
      // require('./ui-design/blinkboxMusicWebsite'),
      // require('./ui-design/goFishingMagazine'),
      // require('./ui-design/carMagazine')
    ]
  },



  // Graphics
  {
    filePrefix: {
      thumb: 'images/portfolio/graphics/thumb/',
      detail: 'images/portfolio/graphics/detail/'
    },
    items: [{
      title: 'Ansa',
      type: 'Branding',
      img: {
        thumb: 'ansa-logo-thumb-large.png',
        detail: [
          { src: {
            large: 'ansa-logo-large-branding-detail-large.png',
            medium: 'ansa-logo-large-branding-detail-medium.png',
            small: 'ansa-logo-large-branding-detail-small.png',
          } },
          { src: {
            large: 'ansa-logo-medium-branding-detail-large.png',
            medium: 'ansa-logo-medium-branding-detail-medium.png',
            small: 'ansa-logo-medium-branding-detail-small.png',
          } },
          { src: {
            large: 'ansa-logo-small-branding-detail-large.png',
            medium: 'ansa-logo-small-branding-detail-medium.png',
            small: 'ansa-logo-small-branding-detail-small.png',
          } },
          { 
            bgColor: '#000',
            src: {
              large: 'ansa-logos-all-white-branding-detail-large.png',
              medium: 'ansa-logos-all-white-branding-detail-medium.png',
              small: 'ansa-logos-all-white-branding-detail-small.png',
            }
          }, {
            src: {
              large: 'ansa-logos-all-branding-detail-large.png',
              medium: 'ansa-logos-all-branding-detail-medium.png',
              small: 'ansa-logos-all-branding-detail-small.png',
            }
          }
        ],
      }
    }]
  },



  // Illustration
  {
    filePrefix: {
      thumb: 'images/portfolio/illustration/thumb/',
      detail: 'images/portfolio/illustration/detail/'
    },
    items: [{
      title: 'Blue Zombie Sketches',
      type: 'Digital',
      img: {
        thumb: 'blue-zombies-digital-thumb-large.jpg',
        detail: [{
          bgColor: '#323727',
          src: {
            large: 'blue-zombies-digital-all-3-large.jpg',
            medium: 'blue-zombies-digital-all-3-medium.jpg',
            small: 'blue-zombies-digital-all-3-small.jpg',
          }
        }, {
          bgColor: '#323727',
          src: {
            large: 'blue-zombies-digital-original-sketches-large.jpg',
            medium: 'blue-zombies-digital-original-sketches-medium.jpg',
            small: 'blue-zombies-digital-original-sketches-small.jpg',
          }
        }, {
          bgColor: '#323727',
          src: {
            large: 'blue-zombies-digital-clown-large.jpg',
            medium: 'blue-zombies-digital-clown-medium.jpg',
            small: 'blue-zombies-digital-clown-small.jpg',
          }
        }, {
          bgColor: '#323727',
          src: {
            large: 'blue-zombies-digital-close-up-large.jpg',
            medium: 'blue-zombies-digital-close-up-medium.jpg',
            small: 'blue-zombies-digital-close-up-small.jpg',
          }
        }],
      }
    }, {
      title: 'Voodoo Boy Sketch',
      type: 'Digital',
      img: {
        thumb: 'voodoo-boy-digital-thumb-large.jpg',
        detail: [{
          bgColor: '#2a2008',
          src: {
            large: 'voodoo-boy-digital-large.jpg',
            medium: 'voodoo-boy-digital-medium.jpg',
            small: 'voodoo-boy-digital-small.jpg',
          }
        }]
      }
    }, {
      title: 'Spaceman Sketches',
      type: 'Digital',
      img: {
        thumb: 'spaceman-digital-thumb-large.jpg',
        detail: [{
          bgColor: '#dad0c7',
          src: {
            large: 'spaceman-planet-digital-large.jpg',
            medium: 'spaceman-planet-digital-medium.jpg',
            small: 'spaceman-planet-digital-small.jpg',
          }
        }, {
          bgColor: '#d4b18c',
          src: {
            large: 'spaceman-spaceship-digital-large.jpg',
            medium: 'spaceman-spaceship-digital-medium.jpg',
            small: 'spaceman-spaceship-digital-small.jpg',
          }
        }, {
          bgColor: '#cfbb9f',
          src: {
            large: 'spaceman-desktop-digital-large.jpg',
            medium: 'spaceman-desktop-digital-medium.jpg',
            small: 'spaceman-desktop-digital-small.jpg',
          }
        }]
      }
    }, {
      title: 'Long Lost Twin Characters',
      type: 'Digital',
      img: {
        thumb: 'long-lost-twin-digital-thumb-large.png',
        detail: [{
          bgColor: '#1a72a3',
          src: {
            large: 'long-lost-twin-digital-large.png',
            medium: 'long-lost-twin-digital-medium.png',
            small: 'long-lost-twin-digital-small.png',
          }
        }]
      }
    }]
  },


  ]
};