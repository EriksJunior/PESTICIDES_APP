export const UseDebounce = (fn, delay = 500) => {
  var timeoutId = null

  const debounceFn = (...params) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn(...params);
    }, delay);
  };

  return debounceFn;
};
