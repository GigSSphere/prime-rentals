import { pg } from "../Utils/CardsList";
import Cards from "./Cards";

const Pgs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        {pg.map((item) => (
          <Cards
            key={item.id}
            img="https://alexandro.in/image/pune/yourspace-vimannagar/4.jpg"
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

export default Pgs;
