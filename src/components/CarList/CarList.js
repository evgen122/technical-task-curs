// import {ItemContact} from "components/ItemContact/ItemContact";
// import {ItemList} from "./ContactList.styled";
import {useSelector} from "react-redux";
import {selectCar} from "../../redux/selectors";
import {fetchCar} from "../../redux/operations";
import {ItemList} from "../ItemList/ItemList";

export const CarList = ({items}) => {
  // const cars = useSelector(selectCar);
  //   const filters = cars;
  // const list = fetchCar();
  console.log(items);
  // const arrayCar = carsList;
  return (
    <div>
      <h2>CarList</h2>

      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {/* {i.make} */}
            <ItemList item={i} />
          </li>
        ))}
      </ul>
    </div>
  );
};
