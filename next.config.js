const withTS = require("@zeit/next-typescript");

const withCSS = require('@zeit/next-css')
module.exports = withTS(withCSS({
  cssModules: true
}));
