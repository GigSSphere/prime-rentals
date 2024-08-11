import { flat } from "../Utils/CardsList";
import Cards from "./Cards";

const Flats = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        {flat.map((item) => (
          <Cards
            key={item.id}
            img={
              "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
            }
            title={item.title}
            price={item.price}
            address={item.address}
            size={item.size}
            number={item.phoneNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default Flats;
