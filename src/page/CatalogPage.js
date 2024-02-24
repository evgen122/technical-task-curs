import {Component} from "react";
import {CarList} from "../components/CarList/CarList";
import initialCarList from "../components/Data/data.json";
import {SearchBar} from "../components/SearchBar/SearchBar";

class CatalogPage extends Component {
  state = {
    carsList: initialCarList,
    filters: {
      brand: "all",
      price: "all",
      distanceFrom: "",
      distanceTo: "",
    },
  };

  changeFilter = (key, value) => {
    this.setState((prevState) => ({
      filters: {...prevState.filters, [key]: value},
    }));
  };

  render() {
    console.log(this.state);

    const {carsList, filters} = this.state;

    const visibleItems = carsList.filter(
      (item) =>
        (item.make === filters.brand || filters.brand === "all") &&
        (item.rentalPrice === filters.price || filters.price === "all") &&
        item.mileage >= filters.distanceFrom &&
        (item.mileage <= filters.distanceTo || filters.distanceTo === "")
    );
    return (
      <div>
        <h2>Catalog Page</h2>
        <SearchBar filters={filters} onChangeFilter={this.changeFilter} />
        <CarList items={visibleItems} />
      </div>
    );
  }
}
export default CatalogPage;
