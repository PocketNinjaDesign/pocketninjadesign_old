import Lists from '../dev/js/Lists';


describe('Lists method: getRandomListItem', () => {
  it('Should returns value from single list item', () => {
    const list = [{ a: 20 }];
    const result = Lists.getRandomListItem(list).a;

    expect(result).toEqual(20);
  });


  it('Should return a random value', () => {
    const list = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }];
    const result = Lists.getRandomListItem(list).a;

    expect(result).toBeGreaterThan(0);
  });
});


describe('Lists method: objectAssign', () => {
  it('Should merge object with each empty list object', () => {
    const obj = { 'test': 'hello world' };
    const list = Lists.objectAssign(obj, [{}, {}, {}, {}]);

    expect(Lists.getRandomListItem(list)).toEqual(obj);
  });


  it('Should merge object to each list object', () => {
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


  it('Should merge object to each list object overwriting key "test"', () => {
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


  it('Expects object to overwrite each list object with existing key "test"', () => {
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


  it('Should overwrite each list object with existing "test" key in a list 2 levels in', () => {
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

  it('Should overwrite list objects & value of key "pants" should be the same', () => {
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