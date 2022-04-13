export const mockData = [
  {
    width: 1080,
    height: 2208,
  },
  {
    width: 200,
    height: 300,
  },
  {
    width: 1080,
    height: 2072,
  },
  {
    width: 700,
    height: 1000,
  },
  {
    width: 333,
    height: 444,
  },
  {
    width: 100,
    height: 500,
  },
];

export const maxValues = (arr) => {
  const maxWidth = Math.max.apply(
    Math,
    arr.map(function (o) {
      return o.width;
    })
  );

  const maxHeight = Math.max.apply(
    Math,
    arr.map((e) => {
      return e.height;
    })
  );
  return { maxHeight, maxWidth };
};
