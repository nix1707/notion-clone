import { useRef, useEffect } from "react";

export function useDebounce(
  callback: (value: string) => void,
  delay: number
) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debounce = (value: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callback(value);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return debounce;
}
