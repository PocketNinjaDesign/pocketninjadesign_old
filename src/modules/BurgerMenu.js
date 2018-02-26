import $ from '../jqlite.extends';

export default function(id, callBack, light = false, active = false) {
  let additionalClassNames = '';

  additionalClassNames = (light) ? `${additionalClassNames} ${'light'}` : additionalClassNames;
  additionalClassNames = (active) ? `${additionalClassNames} ${'active'}` : additionalClassNames;

  let template = $(
    `<div id="${id}" class="burger-menu${additionalClassNames}">
      <div class="burger-bar-1"></div>
      <div class="burger-bar-2"></div>
      <div class="burger-bar-3"></div>
    </div>`
  );

  template.on('click', callBack);

  return template;
}