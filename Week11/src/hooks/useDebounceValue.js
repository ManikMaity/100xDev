import React from 'react'

function useDebounceValue(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = React.useState(null);
  React.useEffect(() => {
      const handler = setTimeout(() => {
          setDebouncedValue(value);
      }, delay);

      return () => {
          clearTimeout(handler);
      };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounceValue
