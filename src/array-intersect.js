const intersect = (first, ...rest) => {
  return rest.reduce((accum, current) => {
    return accum.filter(x => current.indexOf(x) !== -1)
  }, first)
}

export default intersect
