const intersect = (start, ...rest) => {
  return rest.reduce((accum, current) => {
    return accum.filter(x => current.includes(x))
  }, start)
}

export default intersect
