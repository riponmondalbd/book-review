const getToLocalStorage = (key) => {
  const storedData = localStorage.getItem(key);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};
const setToLocalStorage = (key, id) => {
  const setData = getToLocalStorage(key);
  const exist = setData.find((dataId) => dataId === id);
  if (!exist) {
    setData.push(id);
    localStorage.setItem(key, JSON.stringify(setData));
  }
};

export { getToLocalStorage, setToLocalStorage };
