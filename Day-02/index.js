import fs from 'fs';

const partOne = (inputFile) => {
  const text = fs.readFileSync(`./${inputFile}`, 'utf-8').trim();
  const lines = text.split('\r\n');

  const MAX = {
    red: 12,
    green: 13,
    blue: 14,
  };

  const result = lines.map((line) => {
    const [game, setsString] = line.split(':');
    const gameId = Number(game.split(' ')[1]);
    const sets = setsString.split(';');
    const legal = sets.every((set) => {
      const colors = set.trim().split(', ');
      return colors.every((color) => {
        const [total, colorName] = color.split(' ');
        return total <= MAX[colorName];
      });
    });

    return legal ? gameId : 0;
  });

  return result.reduce((p, c) => p + c, 0);
};

const partTwo = (inputFile) => {
  const text = fs.readFileSync(`./${inputFile}`, 'utf-8').trim();
  const lines = text.split('\r\n');

  const powers = lines.map((line) => {
    const min = {
      red: -1,
      green: -1,
      blue: -1,
    };
    const sets = line.split(':')[1].trim();
    sets.split('; ').forEach((set) => {
      set.split(', ').forEach((color) => {
        let [quantity, name] = color.split(' ');
        quantity = Number(quantity);

        if (min[name] < quantity) {
          min[name] = quantity;
        }
      });
    });

    return Object.values(min).reduce((p, c) => p * c, 1);
  });

  return powers.reduce((p, c) => p + c, 0);
};

console.log(partOne('input.txt'));
console.log(partTwo('input.txt'));
