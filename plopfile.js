const viewGenerator = require('./plop/view/prompt.js')
const viewRestGenerator = require('./plop/rest/prompt.js')
const componentGenerator = require('./plop/component/prompt.js')

module.exports = function (plop) {
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('rest', viewRestGenerator)
  plop.setGenerator('component', componentGenerator)
}
