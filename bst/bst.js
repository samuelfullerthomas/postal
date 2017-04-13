module.exports = function createBinarySearchTree (val) {
  const instance = {}
  instance.value = {
    value: val.value,
    days: val.days
  }
  instance.right = undefined
  instance.left = undefined
  instance.insert = function (value) {
    let node = createBinarySearchTree(value)
    function recurse (bst) {
      if (bst.value.value > value.value && bst.left === undefined) {
        bst.left = node
      } else if (bst.value.value > value.value) {
        recurse(bst.left)
      } else if (bst.value.value < value.value && bst.right === undefined) {
        bst.right = node
      } else if (bst.value.value < value.value) {
        recurse(bst.right)
      }
    }
    recurse(this)
  }
  return instance
}
