export const ItemList = ({
  item: {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  },
}) => {
  return (
    <div>
      <img src={img} alt={make} width={274} />
      <div>
        <p>{make}</p>
        <p>{model}</p>
        <p>{year}</p>
        <p>{rentalPrice}</p>
      </div>
      <span>{address}</span>
      <span>{rentalCompany}</span>
      <span>{type}</span>
      <span>{model}</span>
      <span>{mileage}</span>
      <span>{functionalities[0]}</span>
      <span>{make}</span>
      <button type="button">Learn more</button>
    </div>
  );
};
