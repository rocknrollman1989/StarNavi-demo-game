import snake from 'to-snake-case';

export const createSelectOptionsArray = (data) => {
  if (data) {
    return Object.keys(data).map((key) => ({
      [key]: snake(key).replace('_', ' '),
    }));
  }
  return [];
};

const getRandomInt = (max) => Math.floor(Math.random() * max);

export const findRandomCell = (totalCellNumber, usedCells) => {
  let randomCell = getRandomInt(totalCellNumber);

  if (randomCell === 0) {
    return findRandomCell(totalCellNumber, usedCells);
  }
  if (usedCells.includes(randomCell)) {
    randomCell += 1;
  }
  if (usedCells.includes(randomCell) || randomCell > totalCellNumber) {
    return findRandomCell(totalCellNumber, usedCells);
  }
  return randomCell;
};
