import $ from 'jQuery';
import Lists from '../Lists';
import Numbers from '../Numbers';

import PnModule from './PnModule';

const TARGET_OPTIONS = {
  activeTime: [2000],
  animationHideSpeed: 200,
  animationShowSpeed: 200,
  element: 'body',
  inner: true,
  pauseTime: [1000],
  sides: ['top', 'right', 'bottom', 'left'],
};

const DEFAULT_OPTIONS = {
  $element: undefined,
  rotate: true,
  targets: [TARGET_OPTIONS],
};

const SIDE_PLACEMENT = new Map([
  ['left', { direction: 'top', angle: 'height'}],
  ['right', { direction: 'top', angle: 'height'}],
  ['top', { direction: 'left', angle: 'width'}],
  ['bottom', { direction: 'left', angle: 'width'}],
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
      this.$target.append(this.$peekaboo);

      // set which side to appear from
      this.activeSide = Lists.getRandomListItem(this.currentTarget.sides);

      // Choose position along the side
      this.resetPositions();
      this.setNewPosition();

      //console.log('Start Peekaboo!!!', `Active side: ${this.activeSide}`);
      // Show Peekaboo
      // Wait for a Period of time
      this.waitPeekaboo();
    }, this.getPauseTime());
  }

  waitPeekaboo() {
    this.activeTime = setTimeout(() => {
      // Hide Peekaboo
      // Return Promise of hiding Peekaboo
      // then

      this.startPeekaboo();
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
    let angle = SIDE_PLACEMENT.get(this.activeSide).angle;

    newPos[direction] = `${this.getRandomPosition(angle)}px`;
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
    return Lists.getRandomListItem(this.currentTarget.pauseTime);
  }

  /**
   * getActiveTime
   * returns an item from the activeTime list
   */
  getActiveTime() {
    return Lists.getRandomListItem(this.currentTarget.activeTime);
  }

  getRandomPosition(angle) {
    return (angle === 'height')?
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