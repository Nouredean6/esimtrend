import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { longList, longList1 } from "../data";

const Carousel = ({ isAndroid, toggleOperatingSystem }) => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  useEffect(() => {
    if (toggleOperatingSystem) {
      setPeople(longList1);
      setCurrentPerson(0);
    } else {
      setPeople(longList);
      setCurrentPerson(0);
    }
  }, [toggleOperatingSystem]); // Run the effect when toggleOperatingSystem changes

  const prevSlide = () => {
    setCurrentPerson(
      (oldPerson) => (oldPerson - 1 + people.length) % people.length
    );
  };

  const nextSlide = () => {
    setCurrentPerson((oldPerson) => (oldPerson + 1) % people.length);
  };

  return (
    <section className="mx-auto  bg-l-blue-questions w-full max-w-800 relative h-full  flex items-center justify-center overflow-hidden  rounded-3xl">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            key={id}
            className="absolute lg:w-3/4 w-full h-full "
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
            }}
          >
            <div className="flex lg:flex-row flex-col lg:justify-center justify-start lg:gap-12 gap-5 items-center  h-full">
              <div className=" lg:h-full   flex items-center">
                <img
                  src={image}
                  alt={name}
                  className="object-contain  w-[258px] h-[513px]"
                />
              </div>
              <div className="lg:w-2/4 w-full lg:h-3/4 min-h-min flex flex-col px-6 lg:px-0  ">
                <h1 className="lg:text-4xl text-2xl	 text-custom-text-color-1 text-left font-bold leading-normal mb-8">
                  {isAndroid}
                </h1>
                <div className="flex justify-between items-center mb-10 lg:mb-0">
                  <p className="text-custom-text-color-1 lg:text-2xl text-base font-semibold shadow-lg  bg-white rounded-xl lg:p-5 p-2 mb-4">
                    {"Step" + " " + (personIndex + 1)}
                  </p>
                  <div>
                    <button
                      disabled={personIndex === 0}
                      type="button"
                      className=" border-solid  border-2 border-black text-black rounded-full cursor-pointer mr-2"
                      onClick={prevSlide}
                    >
                      <FiChevronLeft size={36} />
                    </button>
                    <button
                      disabled={personIndex === 17}
                      type="button"
                      className=" border-solid   border-2 border-black text-black rounded-full cursor-pointer"
                      onClick={nextSlide}
                    >
                      <FiChevronRight size={36} />
                    </button>
                  </div>
                </div>
                {/* <p className='text-xl text-blue-950'>{title}</p> */}
                <p className="lg:text-2xl text-base text-blue-950">{quote}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Carousel;
