import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  <T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>];
  <T>(key: string, defaultValue?: T): [
    T | undefined,
    Dispatch<SetStateAction<T | undefined>>
  ];
}

const useSyncToLocalStorage: Props = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useSyncToLocalStorage;
