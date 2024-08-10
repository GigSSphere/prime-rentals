import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[250px] w-[100%] md:h-[500px]">
      <Image
        src="https://w.wallhaven.cc/full/ne/wallhaven-ne8og8.jpg"
        fill={true}
        alt="Picture of the author"
        className="object-contain w-full md:object-fill"
      />
    </div>
  );
};

export default Banner;
