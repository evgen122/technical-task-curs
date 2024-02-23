import {Routes, Route} from "react-router-dom";
import {PageHome} from "../page/PageHome";
import {PageCatalog} from "../page/PageCatalog";
import {PageFavorite} from "../page/PageFavorite";
import {UnknownPage} from "../page/UnknownPage";
import {Header} from "./Header/Header";
import {CardCarModal} from "../modals/CardCarModal";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Header />}> */}
      <Route index path="/" element={<PageHome />} />

      <Route path="/catalog" element={<PageCatalog />} />
      <Route path="/catalog/ :carId" element={<CardCarModal />} />
      <Route path="/favorites" element={<PageFavorite />} />
      <Route path="*" element={<UnknownPage />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
