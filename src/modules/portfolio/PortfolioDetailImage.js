import BreakPointService from '../../services/BreakPoint.service';

const getImageTemplateDefaultOptions = {
  filePrefix: '',
  imageSrcData: {},
  additionalClassName: '',
  imgClassName: '',
};

export default new class {
  getImageTemplate(newOptions) {
    let options = Object.assign({}, getImageTemplateDefaultOptions, newOptions);
    let prefix = options.filePrefix;
    let img = options.imageSrcData;

    return `<picture class="picture-box ${options.additionalClassName}">
      <source media="(min-width: 1600px)" srcset="${prefix}${img.large}">
      <source media="(min-width: ${BreakPointService.bpMedium}px)" srcset="${prefix}${img.medium}">
      <img src="${prefix}${img.small}" class="${options.imgClassName}">
    </picture>`;
  }
}