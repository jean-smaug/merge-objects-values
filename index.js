const mergeObjectsValues = (configP, ...objects) => {
  const config = configP ? configP : { deep: true };

  return objects.reduce((acc, object, index) => {
    if (index === 0) {
      return object;
    }

    return Object.keys(object).reduce((secondAcc, key) => {
      if (acc.hasOwnProperty(key)) {
        if (typeof object[key] === "object" && config.deep === true) {
          return {
            ...secondAcc,
            [key]: mergeObjectsValues(null, secondAcc[key], object[key])
          };
        }

        if (typeof object[key] === "number") {
          if (config.number) {
            return {
              ...secondAcc,
              [key]: config.number(secondAcc[key], object[key])
            };
          }
          return { ...secondAcc, [key]: object[key] + secondAcc[key] };
        }

        if (typeof object[key] === "string" && config.string) {
          return {
            ...secondAcc,
            [key]: config.string(secondAcc[key], object[key])
          };
        }
      }

      return { ...secondAcc, [key]: object[key] };
    }, acc);
  }, {});
};

module.exports = mergeObjectsValues;
