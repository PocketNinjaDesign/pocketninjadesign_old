
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
    items: [{
      title: 'Go Fishing Magazine',
      type: 'Web',
      img: {
        small: 'images/portfolio/ui-design/small/go-fishing-magazine-website.jpg',
        large: [{
          bgColor: '#000',
          src: 'images/portfolio/ui-design/large/go-fishing-magazine-homepage.jpg'
        }, {
          bgColor: '#000',
          src: 'images/portfolio/ui-design/large/go-fishing-magazine-category.jpg'
        }, {
          bgColor: '#000',
          src: 'images/portfolio/ui-design/large/go-fishing-magazine-product.jpg'
        }],
      }
    }, {
      title: 'Car Magazine',
      type: 'Web',
      img: {
        small: 'images/portfolio/ui-design/small/car-magazine-website.jpg',
        large: [{
          bgColor: '#0d0d0d',
          src: 'images/portfolio/ui-design/large/car-magazine-homepage.jpg'
        }, {
          bgColor: '#0d0d0d',
          src: 'images/portfolio/ui-design/large/car-magazine-category.jpg'
        }, {
          bgColor: '#0d0d0d',
          src: 'images/portfolio/ui-design/large/car-magazine-detail.jpg'
        }],
      }
    }]
  },



  // Graphics
  {
    items: [{
      title: 'Ansa',
      type: 'Branding',
      // externalLink: 'http://www.pocketninja.design',
      img: {
        small: 'images/portfolio/graphics/small/ansa-logo.png',
        large: [
          { src: 'images/portfolio/graphics/large/ansa-logo-full.png' },
          { src: 'images/portfolio/graphics/large/ansa-logo-medium.png' },
          { src: 'images/portfolio/graphics/large/ansa-logo-mini.png' },
          { src: 'images/portfolio/graphics/large/ansa-logo-all-black.png' },
          {
            bgColor: '#000',
            src: 'images/portfolio/graphics/large/ansa-logo-all-white.png'
          },
          { src: 'images/portfolio/graphics/large/ansa-logo-all-color.png' }
        ],
      }
    }]
  },



  // Illustration
  {
    items: [{
      title: 'Blue Zombie Sketches MAIN',
      type: 'Digital',
      img: {
        small: 'images/portfolio/illustration/small/blue-zombies-digital.png',
        large: [{
          bgColor: '#323727',
          src: 'images/portfolio/illustration/large/blue-zombies-digital-all-3.jpg'
        }, {
          bgColor: '#323727',
          src: 'images/portfolio/illustration/large/blue-zombies-digital-original-sketches.jpg'
        }, {
          bgColor: '#323727',
          src: 'images/portfolio/illustration/large/blue-zombies-digital-clown.jpg'
        }, {
          bgColor: '#323727',
          src: 'images/portfolio/illustration/large/blue-zombies-digital-closeup.jpg'
        }],
      }
    }, {
      title: 'Voodoo Boy Sketch',
      type: 'Digital',
      img: {
        small: 'images/portfolio/illustration/small/voodoo-boy-digital.jpg',
        large: [{
          bgColor: '#2a2008',
          src: 'images/portfolio/illustration/large/voodoo-boy-digital.jpg'
        }]
      }
    }, {
      title: 'Spaceman Sketches',
      type: 'Digital',
      img: {
        small: 'images/portfolio/illustration/small/spaceman-digital.jpg',
        large: [{
          bgColor: '#dad0c7',
          src: 'images/portfolio/illustration/large/spaceman-planet-digital.jpg'
        }, {
          bgColor: '#d4b18c',
          src: 'images/portfolio/illustration/large/spaceman-ship-digital.jpg'
        }, {
          bgColor: '#cfbb9f',
          src: 'images/portfolio/illustration/large/spaceman-desktop-digital.jpg'
        }]
      }
    }, {
      title: 'Long Lost Twin Characters',
      type: 'Digital',
      img: {
        small: 'images/portfolio/illustration/small/long-lost-twin-digital.png',
        large: [{
          bgColor: '#1a72a3',
          src: 'images/portfolio/illustration/large/long-lost-twin-digital.png'
        }]
      }
    }]
  },


  ]
};