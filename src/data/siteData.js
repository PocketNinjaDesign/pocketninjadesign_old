
module.exports = {

  navigation: [{
    page: 'ui-design.html',
    className: 'page-portfolio',
    title: 'UI Design',
    subTitle: 'WEB / CD-ROM',
    shortDescription: 'UI Design Short Description',
    detailedDescription: "I've created UI Designs since the start of my career working on CD-ROMs and Flash sites.  I then moved on to Web Design which initially was straight forward until the levels of complexity with Responsive Design moved in.  I now love the challenges that Responsive Design brings and feel some generic template boundaries needs pushing especially in transitioning between content which is a whole new ball game. All of the following pieces are Website, CD-ROM and Flash designs and mostly fairly bespoke.",
  }, {
    page: 'graphics.html',
    className: 'page-portfolio',
    title: 'Graphics',
    subTitle: 'Logos / Icons / Visuals',
    shortDescription: 'Graphics Short Description',
    detailedDescription: "From Branding, Illustration and Icons I've worked on a lot of graphics. From winning a pitch to make an e-card with Puma in my early days to knocking out logos in a morning and accepted by the client during lunch.  UI and Branding always does better with that little extra Oooomph otherwise it's just colored in wireframes right..? With a huge photo or video filling the screen on the home page right?",
  }, {
    page: 'illustration.html',
    className: 'page-portfolio',
    title: 'Illustration',
    subTitle: 'Digital / Paper',
    shortDescription: 'Blah blah blah in the car',
    detailedDescription: "What's this? A front end design / developer who can draw? And not just with vectors making simple blocked shapes? Yes, I do like drawing, mostly black and white with a little red thrown in as you will see from the gallery.  I do have a penchant for zombies I won't lie to you.",
  }],



  gallery: [

  // UI DESIGN
  {
    filePrefix: {
      thumb: 'images/portfolio/ui-design/thumb/',
      detail: 'images/portfolio/ui-design/detail/'
    },
    items: [{
      title: 'Personal Portfolio Site',
      type: 'Web',
      externalLink: {
        url: 'https://xd.adobe.com/view/99c2179f-c05c-4afc-b97b-3ea51207c508?fullscreen',
        text: 'View Prototype',
      },
      img: {
        thumb: 'pocketninjadesign-adobe-xd-thumb-large.png',
        detail: [{
          bgColor: '#e4e4e4',
          src: {
            large: 'pocketninjadesign-adobe-xd-all-ui-large.png',
            medium: 'pocketninjadesign-adobe-xd-all-ui-medium.png',
            small: 'pocketninjadesign-adobe-xd-all-ui-small.png',
          }
        }, {
          bgColor: '#e4e4e4',
          src: {
            large: 'pocketninjadesign-adobe-xd-desktop-large.png',
            medium: 'pocketninjadesign-adobe-xd-desktop-medium.png',
            small: 'pocketninjadesign-adobe-xd-desktop-small.png',
          }
        }, {
          bgColor: '#e4e4e4',
          src: {
            large: 'pocketninjadesign-adobe-xd-mobile-large.png',
            medium: 'pocketninjadesign-adobe-xd-mobile-medium.png',
            small: 'pocketninjadesign-adobe-xd-mobile-small.png',
          }
        }],
      }
    }, {
      title: 'Go Fishing Magazine',
      type: 'Web',
      img: {
        thumb: 'go-fishing-magazine-website.jpg',
        detail: [{
          bgColor: '#000',
          src: {
            large: 'go-fishing-magazine-homepage.jpg',
            medium: 'go-fishing-magazine-homepage.jpg',
            small: 'go-fishing-magazine-homepage.jpg',
          }
        }, {
          bgColor: '#000',
          src: {
            large: 'go-fishing-magazine-category.jpg',
            medium: 'go-fishing-magazine-category.jpg',
            small: 'go-fishing-magazine-category.jpg',
          }
        }, {
          bgColor: '#000',
          src: {
            large: 'go-fishing-magazine-product.jpg',
            medium: 'go-fishing-magazine-product.jpg',
            small: 'go-fishing-magazine-product.jpg',
          }
        }],
      }
    }, {
      title: 'Car Magazine',
      type: 'Web',
      img: {
        thumb: 'car-magazine-website.jpg',
        detail: [{
          bgColor: '#0d0d0d',
          src: {
            large: 'car-magazine-homepage.jpg',
            medium: 'car-magazine-homepage.jpg',
            small: 'car-magazine-homepage.jpg',
          }
        }, {
          bgColor: '#0d0d0d',
          src: {
            large: 'car-magazine-category.jpg',
            medium: 'car-magazine-category.jpg',
            small: 'car-magazine-category.jpg',
          }
        }, {
          bgColor: '#0d0d0d',
          src: {
            large: 'car-magazine-detail.jpg',
            medium: 'car-magazine-detail.jpg',
            small: 'car-magazine-detail.jpg',
          }
        }],
      }
    }]
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
      // externalLink: 'http://www.pocketninja.design',
      img: {
        thumb: 'ansa-logo.png',
        detail: [
          { src: {
            large: 'ansa-logo-full.png',
            medium: 'ansa-logo-full.png',
            small: 'ansa-logo-full.png',
          } },
          { src: {
            large: 'ansa-logo-medium.png',
            medium: 'ansa-logo-medium.png',
            small: 'ansa-logo-medium.png',
          } },
          { src: {
            large: 'ansa-logo-mini.png',
            medium: 'ansa-logo-mini.png',
            small: 'ansa-logo-mini.png',
          } },
          { src: {
            large: 'ansa-logo-all-black.png',
            medium: 'ansa-logo-all-black.png',
            small: 'ansa-logo-all-black.png',
          } },
          {
            bgColor: '#000',
            src: {
              large: 'ansa-logo-all-white.png',
              medium: 'ansa-logo-all-white.png',
              small: 'ansa-logo-all-white.png',
            }
          },
          { src: {
            large: 'ansa-logo-all-color.png',
            medium: 'ansa-logo-all-color.png',
            small: 'ansa-logo-all-color.png',
          } }
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
      title: 'Blue Zombie Sketches MAIN',
      type: 'Digital',
      img: {
        thumb: 'blue-zombies-digital.png',
        detail: [{
          bgColor: '#323727',
          src: {
            large: 'blue-zombies-digital-all-3.jpg',
            medium: 'blue-zombies-digital-all-3.jpg',
            small: 'blue-zombies-digital-all-3.jpg',
          }
        }, {
          bgColor: '#323727',
          src: {
            large: 'blue-zombies-digital-original-sketches.jpg',
            medium: 'blue-zombies-digital-original-sketches.jpg',
            small: 'blue-zombies-digital-original-sketches.jpg',
          }
        }, {
          bgColor: '#323727',
          src: {
            large: 'blue-zombies-digital-clown.jpg',
            medium: 'blue-zombies-digital-clown.jpg',
            small: 'blue-zombies-digital-clown.jpg',
          }
        }, {
          bgColor: '#323727',
          src: {
            large: 'blue-zombies-digital-closeup.jpg',
            medium: 'blue-zombies-digital-closeup.jpg',
            small: 'blue-zombies-digital-closeup.jpg',
          }
        }],
      }
    }, {
      title: 'Voodoo Boy Sketch',
      type: 'Digital',
      img: {
        thumb: 'voodoo-boy-digital.jpg',
        detail: [{
          bgColor: '#2a2008',
          src: {
            large: 'voodoo-boy-digital.jpg',
            medium: 'voodoo-boy-digital.jpg',
            small: 'voodoo-boy-digital.jpg',
          }
        }]
      }
    }, {
      title: 'Spaceman Sketches',
      type: 'Digital',
      img: {
        thumb: 'spaceman-digital.jpg',
        detail: [{
          bgColor: '#dad0c7',
          src: {
            large: 'spaceman-planet-digital.jpg',
            medium: 'spaceman-planet-digital.jpg',
            small: 'spaceman-planet-digital.jpg',
          }
        }, {
          bgColor: '#d4b18c',
          src: {
            large: 'spaceman-ship-digital.jpg',
            medium: 'spaceman-ship-digital.jpg',
            small: 'spaceman-ship-digital.jpg',
          }
        }, {
          bgColor: '#cfbb9f',
          src: {
            large: 'spaceman-desktop-digital.jpg',
            medium: 'spaceman-desktop-digital.jpg',
            small: 'spaceman-desktop-digital.jpg',
          }
        }]
      }
    }, {
      title: 'Long Lost Twin Characters',
      type: 'Digital',
      img: {
        thumb: 'long-lost-twin-digital.png',
        detail: [{
          bgColor: '#1a72a3',
          src: {
            large: 'long-lost-twin-digital.png',
            medium: 'long-lost-twin-digital.png',
            small: 'long-lost-twin-digital.png',
          }
        }]
      }
    }]
  },


  ]
};