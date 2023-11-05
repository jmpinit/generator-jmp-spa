const path = require('path');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.env.options.nodePackageManager = 'yarn';

    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(),
      undefined,
      undefined,
      { globOptions: { dot: true } }
    );

    const pkgJson = {
      name: path.basename(process.cwd()),
    };

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }
};
