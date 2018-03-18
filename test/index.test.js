import $ from '../dev/js/jqlite.extends';
import Lists from '../dev/js/Lists';


describe('Lists method getRandomListItem', () => {
  it('returns value from single list item', () => {
    const list = [{ a: 20 }];
    const result = Lists.getRandomListItem(list).a;

    expect(result).toEqual(20);
  });


  it('returns a random value', () => {
    const list = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }];
    const min = list[0].a;
    const max = list[3].a;
    const result = Lists.getRandomListItem(list).a;

    expect(result).toBeGreaterThan(0);
  });
});


describe('Lists method objectAssign', () => {
  it('expects object to be assigned to each empty object in a list', () => {
    const obj = { 'test': 'hello world' };
    let list = [{}, {}, {}, {}];

    list = Lists.objectAssign(obj, list);

    expect(Lists.getRandomListItem(list)).toEqual(obj);
  });


  it('expects object to be assigned to each full object in a list', () => {
    const obj = { 'test': 'hello world' };
    let list = [{
      egg: 100
    }, {
      cheese: 'yes please!'
    }, {
      mouse: 'loose aboot this hoose'
    }, {
      jungle: () => 'is massive'
    }];

    list = Lists.objectAssign(obj, list);

    expect(Lists.getRandomListItem(list).test).toEqual('hello world');
  });


  it('expects object to be overriden by each object with existing "test" key in a list', () => {
    const obj = { test: 'hello world' };
    let list = [{
      egg: 100,
      test: 'zombie',
    }, {
      cheese: 'yes please!',
      test: 'tennis shoe',
    }, {
      mouse: 'loose aboot this hoose',
      test: 'rabbit',
    }, {
      jungle: () => 'is massive',
      test: 'chicken',
    }];

    list = Lists.objectAssign(obj, list);

    expect(Lists.getRandomListItem(list).test).not.toBe('hello world');
  });


  it('expects object to overwrite each list object with existing "test" key in a list', () => {
    const obj = { test: 'hello world' };
    let list = [{
      egg: 100,
      test: 'zombie',
    }, {
      cheese: 'yes please!',
      test: 'tennis shoe',
    }, {
      mouse: 'loose aboot this hoose',
      test: 'rabbit',
    }, {
      jungle: () => 'is massive',
      test: 'chicken',
    }];

    list = Lists.objectAssign(obj, list, true);

    expect(Lists.getRandomListItem(list).test).toBe('hello world');
  });


  it('overwrite each list object with existing "test" key in a list 2 levels in', () => {
    const obj = {
      ninja: {
        test: 'hello world',
      }
    };

    let list = [{
      egg: 100,
      ninja: {
        test: 'zombie',
      },
    }, {
      cheese: 'yes please!',
      ninja: {
        test: 'tennis shoe',
      },
    }, {
      mouse: 'loose aboot this hoose',
      ninja: {
        test: 'rabbit',
      },
    }, {
      jungle: () => 'is massive',
      ninja: {
        test: 'chicken',
      },
    }];

    list = Lists.objectAssign(obj, list, true);

    expect(Lists.getRandomListItem(list).ninja.test).toBe('hello world');
  });

  it('overwrite list objects with existing "ninja" unachanged value of key "pants" should be the same', () => {
    const obj = {
      ninja: {
        test: 'hello world',
      }
    };

    let list = [{
      egg: 100,
      ninja: {
        pants: 500,
        test: 'zombie',
      },
    }, {
      cheese: 'yes please!',
      ninja: {
        pants: 500,
        test: 'tennis shoe',
      },
    }, {
      mouse: 'loose aboot this hoose',
      ninja: {
        pants: 500,
        test: 'rabbit',
      },
    }, {
      jungle: () => 'is massive',
      ninja: {
        pants: 500,
        test: 'chicken',
      },
    }];

    list = Lists.objectAssign(obj, list, true);

    expect(Lists.getRandomListItem(list).ninja.pants).toEqual(500);
  });
});