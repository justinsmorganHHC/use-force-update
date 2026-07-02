import { useCallback, useReducer } from 'react';

const INITIAL_COUNT = 0;
const INCREMENT = 1;

const increment = (count: number): number => count + INCREMENT;

export default function useForceUpdate(): VoidFunction {
  const [, dispatch] = useReducer(increment, INITIAL_COUNT);

  return useCallback((): void => {
    dispatch();
  }, []);
}
