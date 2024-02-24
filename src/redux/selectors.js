import {createSelector} from "@reduxjs/toolkit";

export const selectCar = (state) => state.cars.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilter = (state) => state.filter;

export const selectVisibleCars = createSelector(
  [selectCar, selectFilter],
  (cars, filter) => {
    return cars.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
