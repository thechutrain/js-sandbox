import * as fs from 'fs';
import { solution } from './solution';

const INPUT_FILE = `${process.cwd()}/input.txt`;
fs.readFile(INPUT_FILE, 'utf8', (err, content) => {
  if (err) {
    console.log(`There was an error reading the file ${INPUT_FILE}`);
    return;
  }
  const numHouses = solution(content);
  console.log(`Delivered pizza to: ${numHouses} house(s)`);
});
