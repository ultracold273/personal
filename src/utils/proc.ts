
const countBy = (l: string[]) => {
  let c: {[index: string]: number} = {};
  for (let e of l) {
    c[e] = c[e] ? c[e] + 1 : 1;
  }
  return c;
}

export const countByTag = (ltags: string[][]) => {
  let tag: string[] = [];
  for (let t of ltags) {
    tag = [...tag, ...t];
  }
  return Object.entries(countBy(tag));
}
