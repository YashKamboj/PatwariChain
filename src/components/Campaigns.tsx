import { DEBUG } from "../constants";
import { useTotalPublishedProjs } from "../read";
import Campaign from "./Campaign";


function Campaigns() {
  const totalPublishedProjs = useTotalPublishedProjs();
  DEBUG &&
    console.log("totalPublishedProjs: ", totalPublishedProjs?.toString());

  // if totalPublishedProjs not present return nothing
  if (!totalPublishedProjs) {
    return <div className="font-bold text-xl mb-2">No Projects yet!</div>;
  }


  return (
    <>
      <div className="text-center font-bold text-xl mb-2">
        Your NFTs
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {Array.from(Array(totalPublishedProjs).keys()).map(
          (projectNumber: number, i) => {
            return (
              <div key={i}>
                <Campaign projectNumber={projectNumber} />
              </div>
            );
          }
        )}
      </div>
      
    </>
  );
}

export default Campaigns;