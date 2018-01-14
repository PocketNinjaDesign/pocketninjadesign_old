import $ from 'jQuery';
import Lists from '../Lists';
import Numbers from '../Numbers';

import PnModule from './PnModule';

const DEFAULT_OPTIONS = {
  $element: undefined,
  sides: ['top', 'right', 'bottom', 'left'],
  inner: true,
  targets: ['body'],
  pauseTime: [1000],
  activeTime: [2000],
  animationShowSpeed: 200,
  animationHideSpeed: 200,
  rotate: true,
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
    this.$peekaboo;
    this.activeTimer;
    this.id = counter;

    // Other properties
    this.activeSide;

    counter += 1;
  }

  init() {
    this.$peekaboo = this.getTemplate(this.opt.$element);
    this.startPeekaboo();
  }

  startPeekaboo() {
    this.activeTimer = setTimeout(() => {
      this.$currentTarget = $(this.getTarget());
      this.$currentTarget.append(this.$peekaboo);

      // set which side to appear from
      this.activeSide = Lists.getRandomListItem(this.opt.sides);

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
    }, 1000);
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
    return Lists.getRandomListItem(this.opt.pauseTime);
  }

  /**
   * getActiveTime
   * returns an item from the activeTime list
   */
  getActiveTime() {
    return Lists.getRandomListItem(this.opt.activeTime);
  }

  getRandomPosition(angle) {
    return (angle === 'height')?
      Numbers.rndmFlrInt(
        Math.max(0, this.$currentTarget.innerHeight() - this.$peekaboo.innerHeight())
      ) :
      Numbers.rndmFlrInt(
        Math.max(0, this.$currentTarget.innerWidth() - this.$peekaboo.innerWidth())
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