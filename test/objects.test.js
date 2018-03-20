import Objects from '../dev/js/Objects';


/*
  Objects.isTypeOf
*/
describe('Objects method: isTypeOf', () => {
  it('Should return true for Object {}', () => {
    expect(Objects.isTypeOf('Object', {})).toBeTruthy();
  });

  it('Should return true for Array []', () => {
    expect(Objects.isTypeOf('Array', [])).toBeTruthy();
  });

  it('Should return true for String "hello"', () => {
    expect(Objects.isTypeOf('String', "hello")).toBeTruthy();
  });

  it('Should return true for Number 100', () => {
    expect(Objects.isTypeOf('Number', 100)).toBeTruthy();
  });
});


/*
  Objects.isArray
*/
describe('Objects method: isArray', () => {
  it('Should return true for Array []', () => {
    expect(Objects.isArray([])).toBeTruthy();
  });

  it('Should return true for new Array()', () => {
    expect(Objects.isArray(new Array())).toBeTruthy();
  });
});


/*
  Objects.isNumber
*/
describe('Objects method: isNumber', () => {
  it('Should return true for Number 100', () => {
    expect(Objects.isNumber(100)).toBeTruthy();
  });

  it('Should return true for new Number(100)', () => {
    expect(Objects.isNumber(new Number(100))).toBeTruthy();
  });
});


/*
  Objects.isString
*/
describe('Objects method: isString', () => {
  it('Should return true for String "hello"', () => {
    expect(Objects.isString('hello')).toBeTruthy();
  });

  it('Should return true for new String("hello")', () => {
    expect(Objects.isString(new String("hello"))).toBeTruthy();
  });
});



/*
  Objects.extend
*/
describe('Objects method: extend', () => {
  it('Should merge with empty object', () => {
    const obj = { 'test': 'hello world' };

    expect(Objects.extend({}, obj)).toEqual(obj);
  });

  it('Should deep merge objects', () => {
    const obj = {
      ninja: {
        death: {
          chainsaw: {
            test: 'hello world',
          }
        }
      }
    };

    let mainObj = {
      jungle: () => 'is massive',
      ninja: {
        pants: 500,
        death: 'chicken',
      },
    };

    expect(Objects.extend(mainObj, obj).ninja.death.chainsaw.test).toEqual('hello world');
  });

  it('Should merge from many objects', () => {
    let mainObj = {
      jungle: () => 'is massive',
      ninja: {
        pants: 500,
        death: 'chicken',
        test: 'pony',
      },
    };

    expect(Objects.extend(mainObj,
      { ninja: { test: "is" } },
      { ninja: { test: "this" } },
      { ninja: { test: "going" } },
      { ninja: { test: "to" } },
      { ninja: { test: "work?" } },
      { ninja: { test: "hello world" } }
    ).ninja.test).toEqual('hello world');
  });

  it('Should create immutable arrays inside objects', () => {
    let list = [1,2,3,4,5];
    let mainObj = {
      list: list.slice(0)
    };

    const obj2 = Objects.extend(mainObj, { test: 100 });
    const obj3 = Objects.extend(mainObj, { test: 200 });

    obj3.list.push(6);

    expect(obj2.list.length).toEqual(5);
  });
});
