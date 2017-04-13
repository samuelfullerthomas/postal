module.exports = function contains (value, bstInit) {
  let doesContain = false
  function recurse (bst) {
    if (bst === undefined) return
    let isMatch = value >= bst.value.value[0] && value <= bst.value.value[1]
    if (isMatch) {
      doesContain = bst.value
    } else if (bst.value.value !== undefined && value < bst.value.value[0]) {
      recurse(bst.left)
    } else if (bst.value.value !== undefined && value > bst.value.value[1]) {
      recurse(bst.right)
    }
  }
  recurse(bstInit)
  return doesContain
}
