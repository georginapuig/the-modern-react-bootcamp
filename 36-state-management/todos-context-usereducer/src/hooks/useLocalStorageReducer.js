import { useEffect, useReducer } from 'react';

function useLocalStorageReducer(key, defaultVal, reducer) {
  // const [state, dispatch] = useReducer(reducer, initialArg, init?);
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
    } catch (e) {
      value = defaultVal;
    }
    console.log('USING', value);
    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, dispatch];
}
export { useLocalStorageReducer };
