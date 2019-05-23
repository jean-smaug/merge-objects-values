const merger = require("../merge-objects-values");

it("should merge object values when number", () => {
  const obj1 = { age: 22, height: 75 };
  const obj2 = { age: 12, height: 45 };

  expect(merger(null, obj1, obj2)).toEqual({ age: 34, height: 120 });
});

it("should merge object values when there is more than two items", () => {
  const obj1 = { age: 22, height: 75 };
  const obj2 = { age: 12, height: 45 };
  const obj3 = { age: 42, height: 40 };
  const obj4 = { age: 10, height: 10 };

  expect(merger(null, obj1, obj2, obj3, obj4)).toEqual({
    age: 86,
    height: 170
  });
});

it("should merge object values recurssively", () => {
  const obj1 = { numbers: { age: 22, height: 75 } };
  const obj2 = { numbers: { age: 12, height: 45 } };
  const obj3 = { foo: { numbers: { age: 22, height: 75 } } };
  const obj4 = { foo: { numbers: { age: 12, height: 45 } } };

  expect(merger(null, obj1, obj2)).toEqual({
    numbers: {
      age: 34,
      height: 120
    }
  });

  expect(merger(null, obj3, obj4)).toEqual({
    foo: {
      numbers: {
        age: 34,
        height: 120
      }
    }
  });
});

it("should'nt merge object values recurssively if deep = false", () => {
  const obj3 = { foo: { numbers: { age: 22, height: 75 } } };
  const obj4 = { foo: { numbers: { age: 12, height: 45 } } };

  expect(merger({ deep: false }, obj3, obj4)).toEqual({
    foo: {
      numbers: {
        age: 12,
        height: 45
      }
    }
  });
});

it("should merge object values recurssively with many keys", () => {
  const obj5 = {
    luffy: {
      sanji: 1,
      zorro: 1
    },
    zorro: {
      luffy: 0,
      sanji: 1
    }
  };

  const obj6 = {
    luffy: {
      sanji: 1,
      zorro: 0
    },
    zorro: {
      luffy: 1,
      sanji: 1
    }
  };

  expect(merger(null, obj5, obj6)).toEqual({
    luffy: {
      sanji: 2,
      zorro: 1
    },
    zorro: {
      luffy: 1,
      sanji: 2
    }
  });
});

it("should merge object values recurssively with many keys", () => {
  const obj5 = {
    luffy: {
      duels: {
        sanji: 1,
        zorro: 0
      },
      value: "Luffy"
    },
    sanji: {
      duels: {
        luffy: 0,
        zorro: 0
      },
      value: "Sanji"
    },
    zorro: {
      duels: {
        luffy: 1,
        sanji: 1
      },
      value: "Zorro"
    }
  };

  const obj6 = {
    luffy: {
      duels: {
        sanji: 1,
        zorro: 0
      },
      value: "Luffy"
    },
    sanji: {
      duels: {
        luffy: 0,
        zorro: 0
      },
      value: "Sanji"
    },
    zorro: {
      duels: {
        luffy: 1,
        sanji: 1
      },
      value: "Zorro"
    }
  };

  expect(merger(null, obj5, obj6)).toEqual({
    luffy: {
      duels: {
        sanji: 2,
        zorro: 0
      },
      value: "Luffy"
    },
    sanji: {
      duels: {
        luffy: 0,
        zorro: 0
      },
      value: "Sanji"
    },
    zorro: {
      duels: {
        luffy: 2,
        sanji: 2
      },
      value: "Zorro"
    }
  });
});
