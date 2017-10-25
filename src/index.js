import $ from 'jQuery';
import EggTimer from './experiment';

const css = require('../styles/primary.scss');

const hello = "hello";

let arse = new EggTimer();
arse.hello();

$(() => {
  console.log('Hello World!!!!');
  $('#tits').html('A great big pair of tits');
});