import fs from 'fs';

const text = fs.readFileSync('./input.txt', 'utf-8').trim();

const lines = text.split('\r\n');
let total = 0;

lines.forEach((line) => {
  let digits = line;

  // Definetly not the best aproach for cases like eighthree, where it should be 83
  // But I was running out of time
  const replacements = {
    one: 'o1e',
    two: 't2o',
    three: 't3e',
    four: 'f4r',
    five: 'f5e',
    six: 's6x',
    seven: 's7n',
    eight: 'e8t',
    nine: 'n9e',
  };
  [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ].forEach((number) => {
    digits = digits.replaceAll(number, replacements[number]);
  });

  digits = digits.replace(/[a-z]/g, '');
  total += Number(`${digits[0]}${digits[digits.length - 1]}`);
});

console.log(total);
