import { createId } from "../utils/createId";

const DELAY_MS = 1000;
const FAILURE_RATE = 1 / 3;

const SEED = [
  { id: createId(), title: "Read about closures", done: false },
  { id: createId(), title: "Build the id generator", done: false },
  { id: createId(), title: "Set up the project", done: true },
];

export const fetchTodos = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < FAILURE_RATE) reject(new Error("Server error"));
      else resolve(SEED.map((todo) => ({ ...todo })));
    }, DELAY_MS);
  });
