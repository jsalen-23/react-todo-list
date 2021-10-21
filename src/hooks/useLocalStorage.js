import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [loading, setLoading] = useState(false);
  const [sync, setSync] = useState(true);
  const [error, setError] = useState(false);
  const [storedValue, setStoredValue] = useState([]);

  const setValue = (value) => {
    setLoading(true);
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  const fetchStoredValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      setLoading(false);
      setSync(true)
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      setError(error);
      return initialValue;
    }
  };

  const synchronize = () => {
    setLoading(true);
    setSync(false);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const value = fetchStoredValue();
      setStoredValue(value);
    }, 2000);
  }, [sync]);

  return { storedValue, setValue, loading, error, synchronize };
}
