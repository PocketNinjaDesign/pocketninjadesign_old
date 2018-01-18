// import $ from 'jQuery';
import $ from 'jqlite';
import Lists from '../../Lists';
import Peekaboo from '../Peekaboo';

const DEFAULT_TARGETS = [{ element: 'body' }];

class NinjaList {
  constructor(targetList = DEFAULT_TARGETS) {
    this.ninjaList = new Map();
    this.ninjaColorList = ['red', 'grey', 'green', 'blue'];
    this.targetList = Lists.objectAssign(DEFAULT_TARGETS, targetList);
  }

  generateNinjas(total) {
    for(let i = 0; i < total; i++) {
      this.addNinjaToList(new Peekaboo({
        $element: this.getNinjaImage(),
        targets: this.targetList,
        fixedTimes: false,
      }));
    }
  }

  addNinjaToList(newNinja) {
    this.ninjaList.set(newNinja.getElementId, newNinja);
    newNinja.init();
  }

  getNinjaImage() {
    return $(`<img src="/images/ninja-${Lists.getRandomListItem(this.ninjaColorList)}-medium.png">`);
  }
}

export default NinjaList;