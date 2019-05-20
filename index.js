const mergeObjectsValues = (...objects) => {
  return objects.reduce((acc, object, index) => {
    if (index === 0) {
      return object;
    }

    return Object.keys(object).reduce((secondAcc, key) => {
      if (acc.hasOwnProperty(key)) {
        if (typeof object[key] === "object") {
          return {
            ...secondAcc,
            [key]: mergeObjectsValues(secondAcc[key], object[key])
          };
        }

        if (typeof object[key] === "number") {
          return { ...secondAcc, [key]: object[key] + secondAcc[key] };
        }
      }

      return { ...secondAcc, [key]: object[key] };
    }, acc);
  }, {});
};

module.exports = mergeObjectsValues;
