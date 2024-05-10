import { useState } from "react";

export default (key, defaultValue) => {
  const [value, setSavedValue] = useState(() => {
    try {
      const localStorageValue = window.localStorage.getItem(key);

      if (localStorageValue) {
        return JSON.parse(localStorageValue);
      } else {
        return defaultValue;
      }
    } catch (error) {
      console.error(
        `There was an error trying to read the key |${key}| from localStorage`,
        error
      );
      return defaultValue;
    }
  });

  const setValue = newValue => {
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error(
        `There was an error trying to write the key |${key}| to localStorage`,
        error
      );
    }

    setSavedValue(newValue);
  };

  return [value, setValue];
};
