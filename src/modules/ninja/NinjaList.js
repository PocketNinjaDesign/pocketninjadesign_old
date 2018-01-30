import $ from 'jqlite';
import Lists from '../../Lists';
import Peekaboo from '../Peekaboo';
import Ninja from './Ninja';

const DEFAULT_TARGETS = [{ element: 'body' }];

class NinjaList {
  constructor(targetList = DEFAULT_TARGETS) {
    this.ninjaList = new Map();
    this.targetList = Lists.objectAssign(DEFAULT_TARGETS, targetList);
  }

  generateNinjas(total) {
    for(let i = 0; i < total; i++) {
      let ninja = new Ninja();

      this.addNinjaToList(new Peekaboo({
        $element: ninja.getNinjaTemplate(),
        targets: this.targetList,
        fixedTimes: false,
      }), ninja);
    }
  }

  addNinjaToList(peekabooNinja, ninja) {
    this.ninjaList.set(peekabooNinja.getElementId, {
      peekaboo: peekabooNinja,
      ninja: ninja,
    });
    peekabooNinja.init();
  }
}

export default NinjaList;