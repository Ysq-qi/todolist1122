export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todolistState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Failed to load state from localStorage:", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todolistState", serializedState);
  } catch (err) {
    console.error("Failed to save state to localStorage:", err);
  }
};
