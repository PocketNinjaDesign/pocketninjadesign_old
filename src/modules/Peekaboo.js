import $ from 'jQuery';
import {TweenMax, Power2, TimelineLite} from 'gsap';

import Lists from '../Lists';
import Numbers from '../Numbers';

import PnModule from './PnModule';

const TARGET_OPTIONS = {
  element: 'body',
  inner: true,
  sides: ['top', 'right', 'bottom', 'left'],
};

const DEFAULT_OPTIONS = {
  activeTime: [2000],
  animationHideSpeed: 0.7,
  animationShowSpeed: 0.7,
  $element: undefined,
  pauseTime: [1000],
  rotate: true,
  targets: [TARGET_OPTIONS],
  fixedTimes: true,
};

const SIDE_PLACEMENT = new Map([
  ['left', { direction: 'top', side: 'height', angle: 90 }],
  ['right', { direction: 'top', side: 'height', angle: 270 }],
  ['top', { direction: 'left', side: 'width', angle: 180 }],
  ['bottom', { direction: 'left', side: 'width', angle: 0 }],
]);

let counter = 1;

class Peekaboo extends PnModule {
  constructor(options) {
    super();

    // Any peekaboo defaults
    this.opt = Object.assign({}, DEFAULT_OPTIONS, options);

    // iterate targets and merge each with target option defaults
    this.opt.targets = Lists.objectAssign(TARGET_OPTIONS, this.opt.targets);

    this.$peekaboo;
    this.activeTimer;
    this.id = counter;

    // Other properties
    this.currentTarget;
    this.activeSide;
    this.$target;

    counter += 1;
  }

  init() {
    this.$peekaboo = this.getTemplate(this.opt.$element);
    this.startPeekaboo();
  }

  startPeekaboo() {
    this.currentTarget = this.getTarget();
    this.$target = $(this.currentTarget.element);

    this.activeTimer = setTimeout(() => {
      this.$peekaboo.show();
      this.$target.append(this.$peekaboo);

      // set which side to appear from
      this.activeSide = Lists.getRandomListItem(this.currentTarget.sides);

      // Choose position along the side
      this.resetPositions();
      this.setNewPosition();

      // Animate
      let t1 = new TimelineLite();
      let angle = SIDE_PLACEMENT.get(this.activeSide).angle;

      this.$peekaboo.css('transform', `rotate(${angle}deg)`);

      t1
        .to(this.opt.$element, 0, { y: 100 })
        .to(this.opt.$element, this.opt.animationShowSpeed, {
          y: 0,
          onComplete: () => {
            this.waitPeekaboo();
          }
        });
    }, this.getPauseTime());
  }

  waitPeekaboo() {
    // Peekaboo is now showing, so wait for
    // the active time and then hide
    this.activeTime = setTimeout(() => {
      let t1 = new TimelineLite();

      t1.
        to(this.opt.$element, this.opt.animationHideSpeed, {
          y: 100,
          onComplete: () => {
            this.$peekaboo.hide();
            this.startPeekaboo();
          }
        });
    }, this.getActiveTime());
  }



  resetPositions() {
    this.$peekaboo.css({
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      left: 'auto',
    });
  }

  setNewPosition() {
    let newPos = {};
    let direction = SIDE_PLACEMENT.get(this.activeSide).direction;
    let side = SIDE_PLACEMENT.get(this.activeSide).side;

    newPos[direction] = `${this.getRandomPosition(side)}px`;
    newPos[this.activeSide] = 0;

    this.$peekaboo.css(newPos);
  }



  //
  //
  // Getters
  //
  //

  getTarget() {
    return Lists.getRandomListItem(this.opt.targets);
  }

  /**
   * getPauseTime
   * returns an item from the pauseTime list
   */
  getPauseTime() {
    return (this.opt.fixedTimes) ?
      Lists.getRandomListItem(this.opt.pauseTime) :
      Numbers.rndmFlrInt(Lists.getRandomListItem(this.opt.pauseTime));
  }

  /**
   * getActiveTime
   * returns an item from the activeTime list
   */
  getActiveTime() {
    return (this.opt.fixedTimes) ?
      Lists.getRandomListItem(this.opt.activeTime) :
      Numbers.rndmFlrInt(Lists.getRandomListItem(this.opt.activeTime));
  }

  getRandomPosition(side) {
    return (side === 'height')?
      Numbers.rndmFlrInt(
        Math.max(0, this.$target.innerHeight() - this.$peekaboo.innerHeight())
      ) :
      Numbers.rndmFlrInt(
        Math.max(0, this.$target.innerWidth() - this.$peekaboo.innerWidth())
      );
  }

  /**
   * getTemplate
   * returns a template with your content inside
   * @param {$()} - jQuery object with $content added
   */
  getTemplate($content) {
    return $(`
      <div id="peekaboo-${this.id}" class="peekaboo">
        <div class="peekaboo-inner"></div>
      </div>
    `)
    .find('.peekaboo-inner')
      .append($content)
    .end();
  }
}

export default Peekaboo;