export const FILTERS = {
  all: () => true,
  active: (todo) => !todo.done,
  done: (todo) => todo.done,
};

export const FILTER_KEYS = Object.keys(FILTERS);
