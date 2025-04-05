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

  userAnalytics: async (req, res) => {
    const u = [
      { id: 1, name: "Saim", age: 22, city: "Karachi", active: true },
      { id: 2, name: "Ali", age: 17, city: "Lahore", active: false },
      { id: 3, name: "Zara", age: 30, city: "Karachi", active: true },
      { id: 4, name: "Fahad", age: 25, city: "Islamabad", active: false },
      { id: 5, name: "Ayesha", age: 28, city: "Lahore", active: true },
    ];

    const total = u.length;

    const averageAge = (
      u.reduce((acc, curr) => (acc = acc + curr.age), 0) / u.length
    ).toFixed(1);

    const active = u.filter((u) => u.active).map((u) => u.name);

    const countByCity = u.reduce((acc, curr) => {
      acc[curr.city] = (acc[curr.city] || 0) + 1;
      return acc;
    }, {});

    const topOldest = u
      .sort((a, b) => b.age - a.age)
      .slice(0, 3)
      .map((u) => u.name);

    res.json({
      results: { total, averageAge, active, countByCity, topOldest },
    });
  },

  paginate: (req, res) => {
    const u = require("../data/challenges/userData");
    const { s, p, t } = req.query;
    let pu = u.slice(s * p, u.length);
    pu = pu.length < t ? pu : pu.slice(0, t);
    res.json({ s: s, p: p, t: t, u: pu });
  },
};
