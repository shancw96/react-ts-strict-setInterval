import { useEffect, useState } from 'react';
export function useIntervalHook() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fn = setInterval(() => {
      setCount((count) => count + 1);
      console.log('1');
    }, 1000);
    // return () => {
    //   clearInterval(fn);
    // };
  }, []);

  return count;
}
