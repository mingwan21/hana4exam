Array.prototype.sortBy = function (sortProp = '') {
  const sortProps = sortProp.split(',');
  for (const prop of sortProps) {
    const [key, direction = 'asc'] = prop?.split(':');
    const dir = direction.toLowerCase() === 'desc' ? -1 : 1;
    this.sort((a, b) => (a[key] > b[key] ? dir : -dir));
  }

  return this;
};
