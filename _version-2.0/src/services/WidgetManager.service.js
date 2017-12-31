import $ from 'jQuery';

// Widget manager
// Can be used to store any widgets used on the site.
// YOU CAN
//  See if they are in use
//  Apply them to a group name for group control: ie: run remove() to all group name widgets, or addPoint() or whatever.
//  Overwrite a previous widget with the new one or run only once

const WidgetManager = {
  counter: function() {
    let count = 0;

    return () => {
      return count++;
    }
  }(),

  widgets: [
    // Example entry to widgets
    // {
    //   id: 1,
    //   group: 'default' || 'given-group-name',
    //   e: $(),
    //   widgetObj: new WidgetName(),
    // }
  ],

  addEntry(groupName, widgetName, $element, WidgetObject) {
    // Check if element has been written to already and if it allows overwite
    // Add, Overwrite or do nothing
    //    Add the entry to widgets if Add
    //    Remove last id from widgets if Overwrite
    //    Do nothing if no Overwrite
    // Store in dom element data(state(Boolean), id(Int), overwrite(boolean))

    console.log(`Counter: ${this.counter()}`);
    console.log(`Counter: ${this.counter()}`);
    console.log(`Counter: ${this.counter()}`);
    console.log(`Counter: ${this.counter()}`);
    console.log(`Counter: ${this.counter()}`);
  },
};

export default WidgetManager;