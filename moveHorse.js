let  HorseMove = new Map();

const Square = (x, p) => {
  let xsite = x;
  let psite = p;
  let getDestiny;

  let MOVES = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]]

  let findDestiny = () => getDestiny;
  let predestination = (newPred) => {
    getDestiny = getDestiny || newPred;
  }

  const name = () => `${x}, ${p}`

  let makeHorseMove = () => {
    return MOVES
             .map((offset) => newMove(offset[0], offset[1]))
             .filter((square) => square !== undefined);
  }

  const newMove = (xOffset, yOffset) => {
    const [newX, newY] = [xsite + xOffset, psite + yOffset];
    if (0 <= newX && newX < 8 && 0 <= newY && p < 8) {
      return Square(newX, newY);
    }
  }


  if (HorseMove.has(name())) {
    return HorseMove.get(name());
  } else {
    newSquare = { name, getPredecessor: findDestiny, setPredecessor: predestination, createKnightMoves: makeHorseMove }
    HorseMove.set(name(), newSquare);
    return newSquare;
  }
}


const gameHorse = (start, finish) => {
  HorseMove.clear();

  let origin = Square(...start);
  let target = Square(...finish);

  const queue = [origin];
  while (!queue.includes(target)) {
    const currentSquare = queue.shift();

    const enqueueList = currentSquare.createKnightMoves();
    enqueueList.forEach((square) => square.setPredecessor(currentSquare));
    queue.push(...enqueueList);
  }
  const path = [target]
  while (!path.includes(origin)) {
    const prevSquare = path[0].getPredecessor();
    path.unshift(prevSquare);
  }
  console.log(`Shortest way is ${path.length - 1} moves!`);
  console.log("Made MOves were:");
  path.forEach(square => console.log(square.name()));
}

module.exports = gameHorse;
