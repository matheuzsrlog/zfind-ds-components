const path = require('path')
const glob = require('glob')
const { currentRepository } = require('../inputs')

const camelToKebab = (string) => {
  return string.replace(/[\w]([A-Z])/g, m => m[0] + '-' + m[1]).toLowerCase()
}

const getPathsDirectory = (directoryPath) => {
  const completePath = `../${currentRepository}${directoryPath}`

  return glob.sync(completePath).map(file => path.resolve(file))
}

module.exports = {
  camelToKebab,
  getPathsDirectory
}
