const intersect = (first, ...rest) => {
  return rest.reduce((accum, current) => {
    return accum.filter(x => current.includes(x))
  }, first)
}

export default intersect
