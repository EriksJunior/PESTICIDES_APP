export const UseDebounce = (fn, delay = 300) => {
  var timeoutId = null

  const debounceFn = (...params) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn(...params);
    }, delay);
  };

  return debounceFn;
};
