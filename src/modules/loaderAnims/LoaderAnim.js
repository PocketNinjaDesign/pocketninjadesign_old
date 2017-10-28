import LoaderBase from './LoaderBase';

class LoaderAnim extends LoaderBase {
  getAnimTemplate(positionType = 'absolute') {
    return `
      <div class="anim-wrapper anim-wrapper-${positionType}">
        <div class="anim-default"></div>
      </div>
    `;
  }
}

export default LoaderAnim;