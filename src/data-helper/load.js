const data = Array.from({length: 365 * 5}).map((_, i) => [
  Date.now() - i * 86400 * 1000,
  Math.random() * 20 + 10,
  Math.random() * 2 + 3,
  Math.random() * 100 + 200,
]);

const ItemKeys = {
  Yield: 1,
  Spread: 2,
  Price: 3,
};

export const load = (period, value) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.9) {
        resolve(
          data.slice(0, period).map(item => [
            item[0],
            item[ItemKeys[value]],
          ]).reverse()
        );
      } else {
        reject();
      }
    }, Math.random() * 300);
  });
};