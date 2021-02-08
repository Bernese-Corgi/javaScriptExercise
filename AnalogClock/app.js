const $hour = document.querySelector('.hour');
const $minute = document.querySelector('.minute');
const $second = document.querySelector('.second');

const hour = () => {
  let num = +($hour.style.getPropertyValue('--deg'));
  num += 0.5;
  $hour.style.setProperty('--deg', num);
};
setInterval(hour, 60000);


const minute = () => {
  let num = +($minute.style.getPropertyValue('--deg'));
  num += 0.1;
  $minute.style.setProperty('--deg', num);
};

setInterval(minute, 1000);

const second = () => {
  let num = +($second.style.getPropertyValue('--deg'));
  num += 6;
  $second.style.setProperty('--deg', num);
};
setInterval(second, 1000);