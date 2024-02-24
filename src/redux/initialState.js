export const filterInitialState = () => {
  const savedFilter = localStorage.getItem("filter");
  if (savedFilter !== null) {
    return JSON.parse(savedFilter);
  }
  return "";
};

export const carsInitialState = {
  CarList: [],
  isLoading: false,
  error: null,
};
