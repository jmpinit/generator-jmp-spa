const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(),
      undefined,
      undefined,
      { globOptions: { dot: true } }
    );
  }
};