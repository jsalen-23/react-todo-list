import { useState, useEffect } from 'react';

export const useStorageListener = (synchronize) => {
    const [storageChange, setStorageChange] = useState(false);

    useEffect(() => {
      const onChange = (change) => {
        if (change.key === "TODOS_V1") {
          console.log("Hubo cambios en TODOS_V1");
          setStorageChange(true);
        }
      };

      window.addEventListener("storage", onChange);

      return () => {
        window.removeEventListener("storage", onChange);
      };
    }, []);

    const toggleShow = () => {
      synchronize();  
      setStorageChange(!storageChange)
    };

    return [storageChange, toggleShow]
  }