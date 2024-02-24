import {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import HomePage from "../page/HomePage";
import CatalogPage from "../page/CatalogPage";
import FavoritePage from "../page/FavoritePage";
import {UnknownPage} from "../page/UnknownPage";
// import {Header} from "./Header/Header";
import {CardCarModal} from "../modals/CardCarModal";
import {fetchCar} from "../redux/operations";

// import dataCarList from "./Data/data.json";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCar());
  // }, [dispatch]);

  return (
    <Routes>
      {/* <Route path="/" element={<Header />}> */}
      <Route index path="/" element={<HomePage />} />

      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/ :carId" element={<CardCarModal />} />
      <Route path="/favorites" element={<FavoritePage />} />
      <Route path="*" element={<UnknownPage />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
