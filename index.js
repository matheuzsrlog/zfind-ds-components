const fs = require('fs')
const { designSystemComponents, searchPaths } = require('./inputs')
const { camelToKebab, getPathsDirectory } = require('./utils/index')

const getComponentsTag = () => {
  return designSystemComponents.map(component => `<${camelToKebab(component)}`)
}

const getContainedTagsDirectory = (directory) => {
  try {
    return directory.map((path) => {
      const readFile = fs.readFileSync(path, 'utf8')
      const fileText = readFile.toString()

      const tags = getComponentsTag()
      const tagsContainedFiles = tags.filter(tag => fileText.includes(tag) && !fileText.includes(`${tag}-`))

      return tagsContainedFiles
    })
  } catch (e) {
    console.error('Error:', e.stack)
    console.error('Directory:', directory)
  }
}

const usedDirectories = searchPaths.flatMap((path) => {
  const pathFile = getPathsDirectory(path)
  return getContainedTagsDirectory(pathFile)
})

const getUsedAllComponents = () => {
  return designSystemComponents.filter((ds) => {
    const usedDirectoriesCleared = [...new Set(usedDirectories.flat())]
    const designSystemComponent = camelToKebab(ds)

    return usedDirectoriesCleared.includes(`<${designSystemComponent}`)
  })
}

console.log(getUsedAllComponents())
