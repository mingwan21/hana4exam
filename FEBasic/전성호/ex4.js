function isObject(obj) {
  return obj && typeof obj === 'object';
}

function deepCopy(obj) {
  if (!isObject(obj)) return obj;

  const newer = {};
  for (const k of Reflect.ownKeys(obj)) {
    newer[k] = deepCopy(obj[k]);
  }

  return newer;
}

module.exports = { deepCopy };
