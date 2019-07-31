export const mergeProps = (...sources: object[]) => {
  let acc: any = {};
  for (const source of sources) {
    if (source instanceof Array) {
      if (!(acc instanceof Array)) {
        acc = [];
      }
      acc = [{ ...acc }, ...source];
    } else if (source instanceof Object) {
      for (let [key, value] of Object.entries(source)) {
        if (value instanceof Object && key in acc) {
          value = mergeProps(acc[key], value);
        }
        acc = { ...acc, [key]: value };
      }
    }
  }
  return acc;
};
