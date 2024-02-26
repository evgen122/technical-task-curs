import React, {useEffect, useState} from "react";
// import {useDispatch} from "react-redux";
// import {editProfilShema, toastError} from "components/Helpers";

import {Formik, Form, Field} from "formik";

export const SearchBar = ({
  filters: {brand, price, distanceFrom, distanceTo},
  onChangeFilter,
}) => {
  const handleSubmit = (values, actions) => {
    //   onChangeFilter()
    console.log(values);
    //    dispatch(changeUserInfo(values));
    //    stateСhangeModal();
    //    actions.resetForm({password: ""});
  };

  return (
    <Formik
      initialValues={{
        brand: "",
        price: "",
        mileageFrom: "",
        mileageTo: "",
      }}
      // validationSchema={editProfilShema}
      onSubmit={async (values, actions) => {
        handleSubmit(values, actions);
      }}>
      <Form>
        <label htmlFor="brand">
          Car brand
          <Field
            as="select"
            value={brand}
            onChange={(evt) => {
              onChangeFilter("brand", evt.target.value);
            }}
            name="brand">
            <option value={"all"}>Enter the text</option>
            <option value={"Buick"}>Buick</option>
            <option value={"Volvo"}>Volvo</option>
            <option value={"HUMMER"}>HUMMER</option>
            <option value={"Subaru"}>Subaru</option>
            <option value={"Mitsubishi"}>Mitsubishi</option>
            <option value={"Nissan"}>Nissan</option>
            <option value={"Lincoln"}>Lincoln</option>
            <option value={"GMC"}>GMC</option>
            <option value={"Hyundai"}>Hyundai</option>
            <option value={"MINI"}>MINI</option>
            <option value={"Bentley"}>Bentley</option>
            <option value={"Mercedes-Benz"}>Mercedes-Benz</option>
            <option value={"Aston Martin"}>Aston Martin</option>
            <option value={"Pontiac"}>Pontiac</option>
            <option value={"Lamborghini"}>Lamborghini</option>
            <option value={"Audi"}>Audi</option>
            <option value={"BMW"}>BMW</option>
            <option value={"Chevrolet"}>Chevrolet</option>
            <option value={"Chrysler"}>Chrysler</option>
            <option value={"Kia"}>Kia</option>
            <option value={"Land "}>Land</option>
          </Field>
        </label>

        <label htmlFor="price">
          Price/ 1 hour
          <Field
            as="select"
            value={price}
            onChange={(evt) => {
              onChangeFilter("price", evt.target.value);
            }}
            name="price"
            type="number">
            <option value={"all"}>To $</option>
            <option value={"$10"}>10</option>
            <option value={"$20"}>20</option>
            <option value={"$30"}>30</option>
            <option value={"$40"}>40</option>
            <option value={"$50"}>50</option>
            <option value={"$60"}>60</option>
            <option value={"$70"}>70</option>
            <option value={"$80"}>80</option>
            <option value={"$90"}>90</option>
            <option value={"$100"}>100</option>
          </Field>
        </label>

        <label htmlFor="mileageFrom">
          Сar mileage / km
          <Field
            name="mileageFrom"
            value={distanceFrom}
            onChange={(evt) => {
              onChangeFilter("distanceFrom", evt.target.value);
            }}
            placeholder="From"
            type="number"
          />
        </label>
        <label htmlFor="mileageTo">
          <Field
            name="mileageTo"
            value={distanceTo}
            onChange={(evt) => {
              onChangeFilter("distanceTo", evt.target.value);
            }}
            placeholder="To"
            type="number"
          />
        </label>

        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};
