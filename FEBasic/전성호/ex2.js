function pointLength(f) {
  // return f.toString().split('.')[1]?.length ?? 0;
  return f.toString().length - Math.trunc(f).toString().length - 1;
}
function addPoints(a, b) {
  // const alen = a.toString().length - Math.trunc(a).toString().length - 1;
  // const blen = b.toString().length - Math.trunc(b).toString().length - 1;
  const alen = pointLength(a);
  const blen = pointLength(b);
  // console.log('🚀  alen:', alen, blen);
  // const ret = (a + b).toFixed(alen > blen ? alen : blen);
  const ret = +(a + b).toFixed(Math.max(alen, blen, 0));
  // console.log(a, b, '🚀  ret:', ret);
  return +ret;
}

const range = (start, end, step = start > end ? -1 : 1) => {
  if (step === 0 || start === end) return [start];

  if ((start - end) * step > 0) return [];

  let tmp = start;
  end = end ?? (start > 0 ? ((start = 1), tmp) : start < 0 ? -1 : 0);

  const results = [];
  for (
    let i = start;
    start > end ? i >= end : i <= end;
    i = addPoints(i, step)
  ) {
    results.push(i);
  }

  return results;
};

module.exports = { range };
