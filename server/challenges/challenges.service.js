module.exports = {
  rotateArrayNTimes: async (req, res) => {
    const t = req.params.times,
      a = [1, 2, 3, 4, 5];
    for (i = 0; i < t; i++) {
      b = a.shift();
      a.push(b);
    }
    res.json({ message: `Rotating array ${t} times : ${a}` });
  },

  countInstances: async (req, res) => {
    const arr = [
      "apple",
      "banana",
      "mango",
      "peach",
      "apple",
      "mango",
      "apple",
      "banana",
      "strawberry",
      "peach",
      "mango",
      "mango",
    ];
    const r = arr.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
    res.json({ arr: arr, r: r });
  },

  groupByCity: async (req, res) => {
    const u = [
      { n: "saim", c: "lahore" },
      { n: "pepsi", c: "islamabad" },
      { n: "david", c: "karachi" },
      { n: "adil", c: "lahore" },
    ];

    const r = u.reduce((acc, curr) => {
      const { c } = curr;
      acc[c] = acc[c] ?? [];
      acc[c].push(curr.n);
      return acc;
    }, {});

    res.json({ u: u, r: r });
  },
};
