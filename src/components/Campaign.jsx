import Img from "./mintbg.jpeg";

function Campaign({title, Coordinate1, Coordinate2, Coordinate3, Coordinate4, image}) {
  // const publishedProjsAddress = usePublishedProjs(projectNumber);
  // const projTitle = useProjTitle(publishedProjsAddress || "");
  // const projDescription = useProjDescription(publishedProjsAddress || "");
  // const goalAmount = useGoalAmount(publishedProjsAddress || "");
  // const raisedAmount = useRaisedAmount(publishedProjsAddress || "");

  // custom hook we made in hooks.ts for writing functions
  // const { writeAsync, isError } = useCrowdfundingProjectFunctionWriter({
  //   contractAddress: publishedProjsAddress || "",
  //   functionName: "makeDonation",
  // });

  // if (
  //   !publishedProjsAddress ||
  //   !projTitle ||
  //   !projDescription ||
  //   !goalAmount ||
  //   !raisedAmount
  // ) {
  //   return null;
  // }
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image} />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div style={{width: "4.5rem", position: "absolute"}}>

</div>
      <div className="px-7  pt-4 pb-2">
        <div className="flex">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 inline-block.">
          Coordinate 1 : 
          <span style={{color: "#4CA89D"}}> {Coordinate1} </span>
          
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 inline-block">
        Coordinate 2 :
        <span style={{color: "#4CA89D"}}>  {Coordinate2} </span>
        </span> 
        </div>
        <div className="flex">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 inline-block.">
          Coordinate 3 : 
          <span style={{color: "#4CA89D"}}>  {Coordinate3} </span>
          
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 inline-block">
        Coordinate 4 :
        <span style={{color: "#4CA89D"}}>  {Coordinate4} </span>
        </span> 
        </div>

        <div className="flex justify-around items-center py-2">
        <a href="Untitled-1.pdf" download="xyz">
          <button
            className="flex-shrink-0  text-lg text-white py-1 px-12 rounded-3xl"
            type="button"
            // onClick={handleDonate}
            style={{background: "#4CA89D"}}
          >
           &nbsp; &nbsp; &nbsp; Download Proof &nbsp; &nbsp; &nbsp;
          </button>
          </a>
          
        </div>

        {/* if error occures display text to try again */}
        {/* {isError && (
          <p className="text-red-500 text-xs italic">
            Error occured! Please try again!.
          </p>
        )} */}
      </div>
    </div>
  );
}

export default Campaign;
