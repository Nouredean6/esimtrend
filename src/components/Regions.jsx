import SingleRegion from "./SingleRegion";
import { nanoid } from "nanoid";

const Regions = ({ regions, activeId, toggleRegion }) => {
  // console.log('BABAABABABABABABABA', regions);
  return (
    <div className="min-h-min mb-16	 w-full bg-white border-solid flex justify-center items-start	">
      <div className="min-h-min	w-full border-solid flex flex-col items-center  ">
        <div className=" max-h-fit	 w-full	grid lg:grid-cols-3 sm:grid-cols-2	gap-10 lg:p-28 grid-flow-row-dense ">
          {regions && regions.regions.map((r, index) => {
            if (r.region_name === "Australia") {
              return null; 
            }
            return (
              <SingleRegion
                id={index}
                key={index}
                {...r}
                activeId={activeId}
                toggleRegion={toggleRegion}
              ></SingleRegion>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default Regions;
