export default {
  getRandomListItem(list) {
    let length = list.length;

    return (length === 1)?
      list[0] :
      list[Math.floor(Math.random() * length)];
  }
};