// Closure keeps the counter private; ids are unique even within the same millisecond.
const makeIdGenerator = () => {
  let counter = 0;
  return () => `todo-${Date.now().toString(36)}-${++counter}`;
};

export const createId = makeIdGenerator();
