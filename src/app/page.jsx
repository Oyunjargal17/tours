"use client";
import { useState } from "react";
export default function Home() {
  const [hasTours, setHasTours] = useState(true);
  return (
    <div className=" bg-gray-100 h-screens flex flex-col gap-6 justify-center items-center">
      {hasTours && (
        <h1 className="text-4xl pb-4 text-center border-b-4 w-50 border-b-green-500">
          Our Tours
        </h1>
      )}

      <TourList setHasTours={setHasTours} />
    </div>
  );
}
const tour = [
  {
    id: 1,
    image: "/paris.png",
    price: "$2000",
    title: "Best Of Paris In 7 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
  {
    id: 2,
    image: "/ireland.png",
    price: "$1800",
    title: "Best of Ireland in 14 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
  {
    id: 3,
    image: "/vienna.png",
    price: "$2200",
    title: "Best of Salzburg & Vienna in 8 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
  {
    id: 4,
    image: "/rome.png",
    price: "$1900",
    title: "Best of Rome in 7 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
  {
    id: 5,
    image: "/poland.png",
    price: "$1700",
    title: "Best of Poland in 10 Days Tour",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi illum sequi illo sed nam impedit blanditiis maiores, repudiandae alias deleniti. A eius incidunt veritatis repellendus aut? Dolor exercitationem a tempora!",
  },
];

const TourList = ({ setHasTours }) => {
  const [tourList, setTourList] = useState(tour);
  const notInterested = (id) => {
    const newList = tourList.filter((item) => item.id !== id);
    setTourList(newList);
    if (newList.length === 0) {
      setHasTours(false);
    }
  };
  const reset = () => {
    setTourList(tour);
    setHasTours(true);
  };
  return (
    <div className="flex justify-center h-screen">
      <div>
        {tourList.length === 0 && (
          <div>
            <h1 className="text-4xl pb-4 text-center  w-50">no tours left</h1>
            <button
              onClick={reset}
              className=" justify-self-center border-2 border-solid border-[#0bb980] rounded-sm w-50 h-7.5 mb-4 text-green-700 hover:bg-green-700 hover:text-white"
            >
              reset
            </button>
          </div>
        )}
        <div className="grid grid-cols-3 gap-3">
          {tourList.map(({ id, image, price, title, text }) => (
            <TourListItem
              key={id}
              id={id}
              image={image}
              price={price}
              title={title}
              text={text}
              notInterested={notInterested}
              reset={reset}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TourListItem = ({ id, image, price, title, text, notInterested }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  let newText = !isReadMore ? text.slice(0, 100) : text;
  const readMore = () => {
    setIsReadMore(true);
  };
  const showLess = () => {
    setIsReadMore(false);
  };
  return (
    <div>
      <div className="w-90 bg-white flex flex-col rounded-2xl relative">
        <div>
          <img className="w-90 h-80 rounded-2xl" src={image} />{" "}
          <p className="bg-green-700 rounded-tr-2xl text-white w-20 text-center absolute top-0 right-0">
            {price}
          </p>
        </div>
        <div>
          <h3 className="pt-6 p-2.5 flex justify-center text-2xl font-bold">
            {title}
          </h3>
          <p className="ml-2 p-2 flex justify-center w-80">{newText}</p>
          {isReadMore ? (
            <p className="text-green-700 ml-2 p-2 font-bold" onClick={showLess}>
              Show less
            </p>
          ) : (
            <p className="text-green-700 ml-2 p-2 font-bold" onClick={readMore}>
              Read More
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => notInterested(id)}
            className="border-2 border-solid border-[#0bb980] rounded-sm w-50 h-7.5 mb-4 text-green-700 hover:bg-green-700 hover:text-white"
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};
