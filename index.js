const createBST = require('./bst/bst.js')
const config = require('config')
const dataToConvert = config.get('data')
const type = config.get('type')

function makeTree (initArr) {
  let midPoint = Math.floor(initArr.length / 2)
  let left = initArr.slice(0, midPoint)
  let right = initArr.slice(midPoint + 1)

  let currentNode = createBST({value: initArr[midPoint].slice(0, 2), days: initArr[midPoint][2]})
  if (initArr.length !== 1) {
    currentNode.left = makeTree(left)
    currentNode.right = makeTree(right)
  }
  return currentNode
}
const postalBST = makeTree(dataToConvert)
var fs = require('fs')
fs.writeFileSync(`postal-tree-${type}.json`, JSON.stringify(postalBST))
