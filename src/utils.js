export const sort = (dominoes, order = "asc") => {
  return [...dominoes].sort((a, b) => {
    const sumA = a[0] + a[1];
    const sumB = b[0] + b[1];

    if (sumA !== sumB) {
      return order === "asc" ? sumA - sumB : sumB - sumA;
    }

    if (a[0] !== b[0]) {
      return order === "asc" ? a[0] - b[0] : b[0] - a[0];
    }

    return order === "asc" ? a[1] - b[1] : b[1] - a[1];
  });
};

export const countDoubleNumber = (dominoes) => {
  return dominoes.filter((card) => card[0] === card[1]).length;
};

export const flip = (dominoes) => {
  return dominoes.map((card) => [card[1], card[0]]);
};

export const removeDuplicate = (dominoes) => {
  const getSum = ([a, b]) => a + b;

  const sumCounts = dominoes.reduce((acc, card) => {
    const sum = getSum(card);
    acc[sum] = (acc[sum] || 0) + 1;
    return acc;
  }, {});

  return dominoes.filter((card) => sumCounts[getSum(card)] === 1);
};

export const removeNumber = (dominoes, number) => {
  return dominoes.filter(([top, bottom]) => top + bottom !== number);
};
